import React,{useRef,useEffect,useState} from "react";
import Input from "../../subcomponents/Input";
import useSound from 'use-sound';
import messageSound from "../../../assets/sounds/sendMessage.mp3";
import { useHistory } from 'react-router-dom';


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



function ChatSystem(props){
  
    let {socket,myId,roomName} = props;
    

    let routeHistory = useHistory();

    let [history,setHistory] = useState([]);
    let [text,setText] = useState("");
    let [shouldSendUserName,setShouldSendUserName] = useState(false);
    let [userName1,setUserName1] = useState(null);
    let [userName2,setUserName2] = useState(null);
    let [isTyping,setIsTyping] = useState(false);
    let [error,setError] = useState("");

    const [playSound] = useSound(messageSound);

    useEffect(()=>{
      socket.emit("startChat",{room:roomName});
      
      socket.on("userDetails",({username})=>{
        setUserName1(username);
      });

      socket.on("joined",({username})=>{
         setUserName2(username);
         setShouldSendUserName(true);
      });

      socket.on("partnerName",(username)=>{
         setUserName2(username);
      })

      socket.on("typing_start",()=>{
        setIsTyping(true);
      })

      socket.on("typing_stop",()=>{
        setIsTyping(false);
      })

      socket.on("message",(message)=>{
        setHistory(hist=>[...hist,{id:'otherid',message:message}]);
        playSound();
      })

      socket.on("endChat",()=>{
        setError("User has disconnected.. Refresh to connect again");
      });

      return ()=>{
      }

    },[socket,roomName,setIsTyping,setUserName1,setUserName2,setShouldSendUserName])


    useEffect(()=>{
      if(shouldSendUserName === true && userName1 !== null)
        socket.emit("tellMyName",userName1);
    },[socket,shouldSendUserName,userName1])
    

    let clearText = ()=>{
      socket.emit('typing_stop');
      setText("");
    }

    let sendMessage = ()=>{
        playSound();
        setHistory(hist=>[...hist,{id:myId,message:text}]);
        socket.emit("message",text);
        clearText();
    }

    let handleTextChange = (val)=>{

      if(text.length == 0 && val.length > 0){
        socket.emit('typing_start');
        setText(val);
        return;
      }

      if(val.length == 0){
        clearText();
        return;
      }

      setText(val);

    }

    return (
    <div className="row align-items-center justify-content-center no-gutters">
        <div className="col-sm-0 col-md-3"/>
        <div className="col-sm-12 col-md-6">
                <div style={{height:"80vh",paddingTop:"10%",width:"100%"}}>
                    <div style={{width:"100%",height:"90%",background:"#fdf9f9"}}>
                        <div style={{height:"10%",width:"100%",background:"black",textAlign:"initial",paddingLeft:"10px",paddingRight:"10px",paddingTop:"5px"}}>
                          {error ? <span style={{color:"white"}} className="description">{error} </span> :                          <span style={{color:"white"}} className="description">{userName2 ? `Chatting With ${userName2}` : "Connecting.." } </span> }
                        </div>
                        
                        <div style={{height:"90%"}}>
                          <Messages myid={myId} messages={history}/>
                        </div>

                    </div>
                    <div className="d-flex align-items-center justify-content-center" style={{height:"9%",marginTop:"1%",width:"100%"}}>
                        {isTyping ? "typing..." : ""}
                        <Input ChatInput placeholder="Say something" value={text} onChange={handleTextChange} onSubmit={()=>sendMessage()}/>
                    </div>
                </div>
        </div>
        <div className="col-sm-0 col-md-3"/>
    </div>
    )

}


export default ChatSystem;