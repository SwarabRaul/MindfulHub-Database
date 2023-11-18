import React, { useState } from 'react';
// import './ScheduleChat.css';

const ScheduleChat = () => {
    const [user, setUser] = useState('');
    const [expert, setExpert] = useState('');
    const [scheduledDateTime, setScheduledDateTime] = useState('');
    const [message, setMessage] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);

    const handleScheduleChat = async (e) => {
        e.preventDefault();

        const chatData = {
            user,
            expert,
            scheduledDateTime,
            message,
            isAnonymous,
        };

        setUser('');
        setExpert('');
        setScheduledDateTime('');
        setMessage('');
        setIsAnonymous(false);
    };

    return (
    
        <div className="schedulechat">
            <div className="schedulechat_container">
           
                <div class="box">
                 
                <div className="schedulechat_left">
            
                    <h1>Schedule a Chat</h1>
                    <h4>
                        Schedule a chat with a psychology expert to get help, help someone, or ask questions.
                    </h4>
                </div>
                <div className="schedulechat_right">
                    <form onSubmit={handleScheduleChat}>
                         <input
                            type="text"
                            placeholder="User"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                        /> 
                        <input
                            type="text"
                            placeholder="Expert"
                            value={expert}
                            onChange={(e) => setExpert(e.target.value)}
                        />
                        <input
                            type="datetime-local"
                            placeholder="Date"
                            value={scheduledDateTime}
                            onChange={(e) => setScheduledDateTime(e.target.value)}
                        />
                        
                        <textarea
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button class="submit" type="submit">Submit</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
       
    );
};

export default ScheduleChat;
