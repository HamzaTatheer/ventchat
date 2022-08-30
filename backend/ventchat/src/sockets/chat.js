const nameGenerator = require('../utils/nameGenerator'); 



module.exports = function (io,socket){

    socket.on("startChat",(data)=>{
        let room = data.room;

        let userInfo = {username:nameGenerator.getRandomName()}
        socket.emit('userDetails',userInfo);
        socket.broadcast.to(room).emit('joined',userInfo);
        socket.join(room);

        socket.on('tellMyName',(data)=>{
            socket.broadcast.to(room).emit('partnerName',data);
        })

        socket.on('message', function(data){
            socket.broadcast.to(room).emit('message', data);		
        });

        socket.on('typing_start', function(data){
            socket.broadcast.to(room).emit('typing_start');		
        });

        socket.on('typing_stop', function(data){						
            socket.broadcast.to(room).emit('typing_stop');		
        });

        socket.on('disconnect',(data)=>{
            console.log("User disconnected");
            io.sockets.in(room).emit("endChat");
        });

    });


}