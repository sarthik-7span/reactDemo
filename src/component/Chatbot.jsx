import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

function Chatbot() {
    const [userInput, setUserInput] = useState('');
    const [messages, setMessages] = useState([]);

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    };

    const handleSendMessage = async () => {
        const newMessages = [...messages, { text: userInput, user: 'user' }];
        setMessages(newMessages);
        setUserInput('');

        try {
            // Make a GET request to your question-answer API
            const response = await axios.get(`YOUR_QUESTION_ANSWER_API_URL?question=${userInput}`);

            // Extract the answer from the API response
            const botResponse = response.data.answer;

            // Add the bot's response to the chat
            const updatedMessages = [...newMessages, { text: botResponse, user: 'bot' }];
            setMessages(updatedMessages);
        } catch (error) {
            // Handle API errors or missing answers
            const errorMessage = 'I couldn\'t find an answer to your question.';
            const updatedMessages = [...newMessages, { text: errorMessage, user: 'bot' }];
            setMessages(updatedMessages);
        }
    };

    return (
        <div className="chatbot">
            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div key={index} className={`message message-${message.user}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={userInput}
                onChange={handleUserInput}
                placeholder="Type your question..."
            />
            <button onClick={handleSendMessage}>Ask</button>
        </div>
    );
}

export default Chatbot;
