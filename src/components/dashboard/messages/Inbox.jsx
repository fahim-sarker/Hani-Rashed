import { CiSearch } from "react-icons/ci";
import 'react-chat-elements/dist/main.css'
import { ChatList } from 'react-chat-elements'

const Inbox = () => {
    return (
        <div>
            <h3 className="mb-3 text-[#252C32] font-semibold text-2xl 2xl:text-3xl">Inbox</h3>
            <div className="relative mb-5 2xl:mb-10">
                <input type="text" className="border outline-none ps-12 pe-2 bg-[#F5F5F5] py-2 rounded-full w-full" placeholder="Search mail...." />
                <button className="absolute left-4 top-2"><CiSearch className="text-2xl text-gray-500" /></button>
            </div>

            <ChatList
                className='chat-list'
                dataSource={[
                    {
                        avatar: 'https://i.ibb.co.com/5Wc9R7SH/chatOne.png',
                        alt: 'one',
                        title: 'BMT',
                        subtitle: 'If the super sale starts',
                        date: new Date(),
                        unread: 5,
                    },
                    {
                        avatar: 'https://i.ibb.co.com/6RxnpWMK/chatTwo.png',
                        alt: 'two',
                        title: 'Netflix',
                        subtitle: 'If the super sale starts',
                        date: new Date(),
                        unread: 0,
                    },
                    {
                        avatar: 'https://i.ibb.co.com/5Wc9R7SH/chatOne.png',
                        alt: 'one',
                        title: 'BMT',
                        subtitle: 'If the super sale starts',
                        date: new Date(),
                        unread: 3,
                    },
                    {
                        avatar: 'https://i.ibb.co.com/6RxnpWMK/chatTwo.png',
                        alt: 'two',
                        title: 'Netflix',
                        subtitle: 'If the super sale starts',
                        date: new Date(),
                        unread: 0,
                    },
                    {
                        avatar: 'https://i.ibb.co.com/5Wc9R7SH/chatOne.png',
                        alt: 'one',
                        title: 'BMT',
                        subtitle: 'If the super sale starts',
                        date: new Date(),
                        unread: 2,
                    },
                ]} />
        </div>
    );
};

export default Inbox;