import React from 'react';

// Helper function to get day, date, and month dynamically
const getFormattedDate = () => {
    const date = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    const day = days[date.getDay()];
    const dayNumber = date.getDate();
    const month = months[date.getMonth()];

    return { day, dayNumber, month };
};

const DateSection = () => {
    const { day, dayNumber, month } = getFormattedDate();

    return (
        <section className="text-left p-4">
            <p className="text-lg font-bold">{day}</p>
            <h1 className="text-6xl font-extrabold text-blue-600">{dayNumber}</h1>
            <p className="text-xl">{month}.</p>
        </section>
    );
};



export default DateSection;
