import { useRef, useState } from "react"
import getChatMessages from "../API/getChatMessages"
import ChatMessage from "../Components/ChatMessage"
import "./Chat.css"
import DateObject from "react-date-object"

function Chat() {
    const [chatMessages, setChatMessages] = useState(getChatMessages())
    const [newUsernameInput, setNewUsernameInput] = useState('')
    const [newMessageInput, setNewMessageInput] = useState('')
    const chatMessageArea = useRef()

    const deleteMessage = (index) => {
        chatMessages.splice(index, 1)
        setChatMessages([...chatMessages])
    }

    let date = new DateObject()

    const addNewMessage = () => {
        const newMessage = {
            username: newUsernameInput,
            timeSubmitted: date.format("dddd DD MMMM YYYY, hh:mm:ss A"),
            submittedMessage: newMessageInput,
        }
        setChatMessages([...chatMessages, newMessage])
        setNewMessageInput('')
    }  

    const chatMessageList = chatMessages.map((chatMessage, index) => {
        
        const deleteBtn = <button type="button" className="btn btn-sm" onClick={() => deleteMessage(index)}> <i class="bi bi-trash3"></i> </button>
        
        return <div className="row d-flex m-2" key={index}>
            <div className="col-11">
                <ChatMessage username={chatMessage.username}
                    message={chatMessage.submittedMessage}
                    timeSubmitted={chatMessage.timeSubmitted}
                />
            </div>
            <div className="col-1">
                {deleteBtn}
            </div>
        </div>
    })

    return (
        <div className="my-3">
            <div>
                <h4>Chat with a Consultant</h4>
            </div>
            <div className="chat-box">
                <div className="submitted-message-area"  >
                    {chatMessageList}
                </div>
                <div className="user-input-area">
                    <div className="m-2">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                            <label for="exampleFormControlInput1" className="form-label">Username:</label>
                            <input type="text" value={newUsernameInput} onChange={(event) => setNewUsernameInput(event.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Type your username" />
                        </div>
                    </div>
                    <div className="row d-flex p-2">
                        <label for="exampleFormControlTextarea1" className="form-label">Message:</label>
                        <div className="col-xl-10 col-lg-10 col-md-9 col-sm-8 col-xs-9 ">
                            <textarea ref={chatMessageArea} className="form-control" value={newMessageInput} onChange={(event) => setNewMessageInput(event.target.value)} id="exampleFormControlTextarea1" placeholder="Type your message" rows="2"></textarea>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-3 d-flex align-items-center">
                            <button type="button" class="btn btn-sm mt-1" onClick={addNewMessage}>Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat