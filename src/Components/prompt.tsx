import React, { useEffect, useState } from 'react';
import manImage from '../Assets/man.png'; // Ensure the path is correct

const prompts = [
  "You're doing great! Just like a procrastinator on a deadline!",
  "Remember, every masterpiece was once a work in progress… just like your assignment!",
  "You’re not just behind; you’re ahead of the curve! Keep it up so you are not cooked!",
  "Keep going! The sooner you finish, the sooner you can binge-watch your favorite show!",
  "If at first you don't succeed, redefine success. You're a legend!",
  "Your assignment won't complete itself. Spoiler: it’s not going to!",
  "You’ve got this! Just pretend it’s a very long text message.",
];

const Prompt: React.FC = () => {
  const [currentPrompt, setCurrentPrompt] = useState('');

  useEffect(() => {
    const getRandomPrompt = () => {
      const randomIndex = Math.floor(Math.random() * prompts.length);
      setCurrentPrompt(prompts[randomIndex]);
    };

    getRandomPrompt();
    const intervalId = setInterval(getRandomPrompt, 50000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg flex-grow mr-4 relative z-10">
        <h2 className="text-xl font-semibold text-left">{currentPrompt}</h2>
      </div>
      <div className="relative z-0">
        <img src={manImage} alt="Man" className="w-28 h-48" /> {/* Increased size */}
      </div>
    </div>
  );
};

export default Prompt;
