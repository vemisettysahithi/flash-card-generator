import React, { useState } from 'react';
    import './App.css';

    function App() {
      const [text, setText] = useState('');
      const [flashcards, setFlashcards] = useState([]);
      const [showAnswer, setShowAnswer] = useState(false);

      const handleTextChange = (e) => {
        setText(e.target.value);
      };

      const summarizeText = () => {
        if (text.trim()) {
          const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim());
          const newFlashcards = sentences.map(sentence => ({
            question: sentence.trim(),
            answer: "Answer for: " + sentence.trim()
          }));
          setFlashcards(newFlashcards);
        }
      };

      const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
      };

      return (
        <div className="app-container">
          <h1>Flashcard Generator</h1>
          <div className="input-area">
            <textarea
              placeholder="Enter text to summarize"
              value={text}
              onChange={handleTextChange}
              rows="5"
              cols="50"
            />
            <button onClick={summarizeText}>Generate Flashcards</button>
          </div>
          <div className="flashcard-container">
            {flashcards.map((card, index) => (
              <div key={index} className="flashcard">
                <div className="flashcard-content">
                  {showAnswer ? card.answer : card.question}
                </div>
                <button onClick={toggleAnswer}>
                  {showAnswer ? 'Show Question' : 'Show Answer'}
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default App;
