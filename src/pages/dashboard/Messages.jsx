import Chat from "@/components/dashboard/messages/Chat";
import ContactDetails from "@/components/dashboard/messages/ContactDetails";
import Inbox from "@/components/dashboard/messages/Inbox";

const Messages = () => {
    return (
        <>
            <div className="grid md:grid-cols-12 gap-5">
                {/* Inbox */}
                <div className="md:col-span-6 2xl:col-span-3 bg-white p-3 2xl:p-5 rounded shadow-lg">
                    <Inbox />
                </div>
                {/* Chats */}
                <div className="md:col-span-6 bg-white p-3 2xl:p-5 rounded shadow-lg">
                    <Chat />
                </div>
                {/* Contact Details */}
                <div className="2xl:col-span-3 hidden 2xl:block w-full bg-white p-3 2xl:p-5 rounded shadow-lg">
                    <ContactDetails />
                </div>
            </div>

            {/* Contact Details */}
            <div className="2xl:hidden mt-5 w-full bg-white p-3 2xl:p-5 rounded shadow-lg">
                <ContactDetails />
            </div>
        </>
    );
};

export default Messages;