function handleChat() {
    const input = document.getElementById('input').value.toLowerCase().trim();
    const output = document.getElementById('output');

    const responses = {
        "hi": "Hi there! How can I help you today?",
        "hello": "Hello! What can I assist you with?",
        "bye": "Goodbye! Have a fantastic day!",
        "name": "I am Joice, a second-year CSE student at MIT, Chennai.",
        "who are you": "I am Joice, currently studying Computer Science.",
        "skills": "I am skilled in Java and C++, with a strong foundation in data structures and algorithms.",
        "programming": "I have expertise in Java and C++, focusing on efficient algorithms and data structures.",
        "interests": "I am passionate about AI and Machine Learning and enjoy creating projects like CodeQuest.",
        "passion": "I am deeply interested in AI and Machine Learning.",
        "education": "2020 - 2021: Completed 10th std with high scores.\n2022 - 2023: Completed 12th std, securing second place with a cutoff of 199/200.\n2023 - 2027: Pursuing B.E. CSE at MIT, Chennai.",
        "soft skills": "My soft skills include leadership, problem-solving, and effective communication.",
        "contact": "Feel free to reach out through my contact section!"
    };

    let response = "I'm sorry, I don't understand your question.";
    
    for (const key in responses) {
        if (input.includes(key)) {
            response = responses[key];
            break;
        }
    }

    const newMessage = `<p><strong>Your Question:</strong> ${input}</p><p><strong>Answer:</strong> ${response}</p>`;
    output.innerHTML += newMessage;

    document.getElementById('input').value = "";
    document.getElementById('chat-window').scrollTop = document.getElementById('chat-window').scrollHeight;
}
