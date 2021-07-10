const {userInLine,validateUserJoiningLine} = require("../models/userInLine");


module.exports = function (socket){

    socket.on("join",async (data)=>{

        data = JSON.parse(data);

        const { error } = validateUserJoiningLine(data);
        if (error) { console.log("Error validating data while joining"); return };

        try {
            await userInLine.create({intent:data.intent,socket_id:socket.id});
        }
        catch {
            console.log("User could not be added to db line."); 
            return;
        }

        //get id of oldest date with intent 1
        //get id of oldest date with intent 2

        //check if both active

        //if both active, remove from db

        //convert ids to sockets

        //remove sockets from the room with intent 0 and intent 1

        //emit event to both sockets that they can leave queue along with the room number

        //emit event to remaining sockets of room that they can can move ahead in line (line = line - 1)
    });


    //socket event on disconnection
    //if socket present in mongodb, remove from db if possible
    socket.on('disconnect', function() {

        userInLine.deleteMany({socket_id:socket.id}).catch(()=> {
            console.log("User could not be added to db line."); 
            return;
        });

    });

}