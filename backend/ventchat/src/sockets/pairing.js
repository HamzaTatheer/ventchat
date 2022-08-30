const {userInLine,validateUserJoiningLine} = require("../models/userInLine");
const notifyAdmin = require('../utils/notifyAdmin');

module.exports = function (io,socket){


    socket.on("join",async (data)=>{

        //data = JSON.parse(data);

        const { error } = validateUserJoiningLine(data);
        if (error) { console.log("Error validating data while joining"); return };

        try {
            await userInLine.create({intent:data.intent,socket_id:socket.id});
            
        }
        catch {
            console.log("User could not be added to db line."); 
            return;
        }

        let lobbyName = 'lobby'+data.intent;
        let lineSize = io.sockets.adapter.rooms.get(lobbyName) ? io.sockets.adapter.rooms.get(lobbyName).size : 0;
        
        socket.emit('inLine',lineSize);
        socket.join(lobbyName);

        //get id of oldest date with intent 0
        let socketid1 = null;
        await userInLine.find({ intent : 0 }).sort({ "date" : -1 }).limit(1).then((doc)=>{      
            console.log(doc);
            socketid1 = doc[0] ? doc[0].socket_id : null
            console.log(socketid1);
        }
        )

        //get id of oldest date with intent 1
        let socketid2 = null;
        await userInLine.find({ intent : 1 }).sort({ "date" : -1 }).limit(1).then((doc)=>
            socketid2 = doc[0] ? doc[0].socket_id : null
        )

        //convert ids to sockets
        let socket1 = io.sockets.sockets.get(socketid1);
        let socket2 = io.sockets.sockets.get(socketid2);


        //check if both active
        if (!socket1)
            return;
        
        //if listener is not available then email admin about it so he can be online
        if(!socket2){
            notifyAdmin('A venter has no available listeners');
            return;
        }

        console.log('pairing users');

        //if both active, remove from db
        userInLine.deleteMany({socket_id:socket1.id}).catch(()=> {
            console.log("User could not be removed from db line."); 
            return;
        });

        userInLine.deleteMany({socket_id:socket2.id}).catch(()=> {
            console.log("User could not be removed from db line."); 
            return;
        });

        //remove sockets from the room with intent 0 and intent 1
        socket1.leave('lobby0');
        socket2.leave('lobby1');

        //emit event to both sockets that they can leave queue along with the room number
        let roomName = socket1.id+'-'+socket2.id;
        socket1.emit('pairFound',{room:roomName});
        socket2.emit('pairFound',{room:roomName});

        //emit event to remaining sockets of room that they can can move ahead in line (line = line - 1)
        io.to('lobby0').emit('moveAheadInLine');
        io.to('lobby1').emit('moveAheadInLine');

    });


    //socket event on disconnection
    //if socket present in mongodb, remove from db if possible
    socket.on('disconnect', function() {

        userInLine.deleteMany({socket_id:socket.id}).catch(()=> {
            console.log("User could not be deleted from db line."); 
            return;
        });

    });

}