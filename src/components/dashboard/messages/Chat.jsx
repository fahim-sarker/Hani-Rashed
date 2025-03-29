import { useState } from "react";
import { Input, MessageList } from "react-chat-elements";
import "react-chat-elements/dist/main.css";

const Chat = () => {
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState([
        {
            position: "left",
            type: "text",
            title: "BMW",
            text: "Hello Rashed, Please give me some time to thoroughly check the item you are referring to. I need a few minutes to review it carefully. I'll get back to you shortly with more information. Thank you for your patience.",
        },
        {
            position: "right",
            type: "text",
            title: "Walton",
            text: "Thanks, I'll wait for your update.",
        },
    ]);

    const handleSend = () => {
        if (newMessage.trim() === "") return;

        const newMsg = {
            position: "right",
            type: "text",
            title: "You",
            text: newMessage,
        };

        setMessages([...messages, newMsg]);
        setNewMessage("");
    };
    return (
        <div>
            <h3 className="text-xl font-semibold mb-10">Fatima Islam</h3>
            <MessageList className='message-list' lockable={true} toBottomHeight={'100%'} dataSource={messages} />

            <div className="flex items-center mt-10">
                <div className="w-[calc(100%-70px)]">
                    <Input
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    />
                </div>
                <button onClick={handleSend} className=" bg-primaryGreen w-[70px] text-white px-4 py-2 rounded-lg">Send</button>
            </div>

        </div>
    );
};

export default Chat;