import React,{useRef,useEffect,useState} from "react";
import Input from "../../subcomponents/Input";


const Message = ({message,rightSide})=>{
    return (
    <div className={rightSide=== true ? "message-right":"message-left"}>{message}</div>
    )
}


const Messages = ({myid, messages }) => {

    const messagesEndRef = useRef(null)
  
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  
    useEffect(() => {
      scrollToBottom()
    }, [messages]);
  
    return (
      <div className="chat-container">
        {messages.map((message,key) => <Message rightSide={(message.id === myid ? true:false)} key={key} {...message} />)}
        <div ref={messagesEndRef} />
      </div>
    )
}



function ChatSystem({socket,myId,partnerId,userType}){
    




    function getRoomName(mid,pid){
      const channel = [mid, pid].sort();
      let room = channel[0] + "-" + channel[1];
      return room;
    }


    let [history,setHistory] = useState([{id:1,message:"Hey"},{id:2,message:"ello"}]);
    let [text,setText] = useState("");

    useEffect(()=>{
      socket.emit("startAnonymousChat",{to:partnerId});
      socket.on("message",({message})=>{
        setHistory(hist=>[...hist,{id:partnerId,message:message}]);
      })
    },[socket,partnerId])
    
    let sendMessage = ()=>{
        setHistory(hist=>[...hist,{id:myId,message:text}]);
        socket.emit("message",{to:partnerId,message:text});
        setText("");
    }


    return (
    <div className="row align-items-center justify-content-center no-gutters">
        <div className="col-sm-0 col-md-3"/>
        <div className="col-sm-12 col-md-6">
                <div style={{height:"80vh",paddingTop:"10%",width:"100%"}}>
                    <div style={{width:"100%",height:"90%",background:"#fdf9f9"}}>
                        <div style={{height:"10%",width:"100%",background:"black",textAlign:"initial",paddingLeft:"10px",paddingTop:"5px"}}>
                          <span style={{color:"white"}} className="description">Chatting With </span>
                        </div>
                        
                        <div style={{height:"90%"}}>
                          <Messages myid={myId} messages={history}/>
                        </div>

                    </div>
                    <div className="d-flex align-items-center justify-content-center" style={{height:"9%",marginTop:"1%",width:"100%"}}>
                        <Input ChatInput placeholder="Say something" value={text} onChange={(val)=>setText(val)} onSubmit={()=>sendMessage()}/>
                    </div>
                </div>
        </div>
        <div className="col-sm-0 col-md-3"/>
    </div>
    )

}


export default ChatSystem;