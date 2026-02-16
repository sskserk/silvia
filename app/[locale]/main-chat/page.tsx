
import './mark.css'
import ChatPage from '../chat/page'

export default function ChatWindow() {


    return (

        <>
            <header>
                header
            </header>
            <main>

                <div className="top-container">
                    <div className="left-column">
                        <div>
                            <h1>Hello world</h1>
                        </div>
                        <div>
                            I'm your AI agent
                        </div>
                        <div>
                            <input type="text" placeholder="Ask me anything..." />
                        </div>
                        <div>
                            <button>Submit question</button>
                        </div>
                    </div>
                    <div className="right-column">
                        <ChatPage />
                    </div>
                </div>
            </main>
            <footer>
                footer
            </footer>
        </>

    )
}