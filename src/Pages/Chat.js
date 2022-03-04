import { useState } from "react"
import getChatMessages from "../API/getChatMessages"
import ChatMessage from "../Components/ChatMessage"
import "./Chat.css"

function Chat() {
    const [chatMessages, setChatMessages] = useState(getChatMessages())
        
    const changeMessageState = (messageIndex) => {
        
    }

    const chatMessageList = chatMessages.map((chatMessage, index) => {
        return <div className="m-2">
            <ChatMessage username={chatMessage.username}
                message={chatMessage.submittedMessage}
                timeSubmitted={chatMessage.timeSubmitted}
            />
        </div>
    })

    return (
        <div className="my-3">
            <div>
                <h4>Chat with a Consultant</h4>
            </div>
            <div className="chat-box">
                <div className="submitted-message-area">
                    {chatMessageList}
                </div>
                <div className="user-input-area">
                    <div className="m-2">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                            <label for="exampleFormControlInput1" className="form-label">Username:</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Type your username" />
                        </div>
                    </div>
                    <div className="row d-flex p-2">
                    <label for="exampleFormControlTextarea1" className="form-label">Message:</label>
                        <div className="col-xl-11 col-lg-10 col-md-9 col-sm-8 col-xs-9 ">
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Type your message" rows="2"></textarea>
                        </div>
                        <div className="col-xl-1 col-lg-2 col-md-3 col-sm-4 col-xs-3 d-flex align-items-center">
                            <button type="button" class="btn btn-sm mt-1">Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat