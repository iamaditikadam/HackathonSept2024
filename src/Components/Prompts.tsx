import React, { useEffect, useState } from 'react';
import manImage from '../Assets/man.png';

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
        <div className="bg-white shadow-lg rounded-lg flex justify-between items-center p-4">
            {/* Motivational prompt text */}
            <div className="text-left">
                <h2 className="text-base font-semibold mb-1">Wow, look at you,</h2>
                <p className="text-xs">
                    one step closer to world domination...<br />
                    <em>or at least getting something done. 😊</em>
                </p>
            </div>

            {/* Man image on the right */}
            <div className="w-20 h-32">
                <img src={manImage} alt="Motivational Man" className="object-contain" />
            </div>
        </div>
    );
};

export default Prompt;
