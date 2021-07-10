module.exports = function (io,socket){

    socket.on("startChat",(data)=>{
        let room = data.room;

        socket.broadcast.to(room).emit('joined');
        socket.join(room);

        socket.on('message', function(data){						
            socket.broadcast.to(room).emit('message', data);		
        });

        socket.on('typing_start', function(data){						
            socket.broadcast.to(room).emit('typing_start');		
        });

        socket.on('typing_stop', function(data){						
            socket.broadcast.to(room).emit('typing_stop');		
        });

    });

    socket.on('endChat',(data)=>{
        socket.leave(data.room);
    })


}