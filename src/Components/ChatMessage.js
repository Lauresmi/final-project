import "./ChatMessage.css"

function ChatMessage(props) {
    const { username, timeSubmitted, message } = props

    return (
        <div className="card">
            <div className="row card-body d-flex justify-content-between">

                <div className="col-xl-11 col-lg-10 col-md-9 col-sm-7 col-xs-9 d-flex flex-column">
                    <div className="col d-flex">
                        <div className="col-xl-1 col-lg-1 col-md-3 col-sm-4 col-xs-5">
                            <h5 className="card-title">{username}</h5>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-5">
                            <p className="card-text"><small className="text-muted">{timeSubmitted}</small></p>
                        </div>
                    </div>
                    <div className="col">
                        <p className="card-text">{message}</p>
                    </div>
                </div>

                <div className="col-xl-1 col-lg-2 col-md-3 col-sm-4 col-xs-3 d-flex align-items-center">
                    <button type="button" className="btn btn-sm">Delete message</button>
                </div>
            </div>
        </div>
    )
}

export default ChatMessage