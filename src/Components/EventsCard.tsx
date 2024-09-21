import React from 'react';

interface EventCardProps {
    title: string;
    location: string;
    time: string;
    type: string;
    details: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, location, time, type, details }) => {
    // Define background color based on event type
    const bgColor =
        type === 'work'
            ? 'bg-yellow-100'
            : type === 'lecture'
                ? 'bg-blue-100'
                : type === 'assignment'
                    ? 'bg-gray-100'
                    : 'bg-white';

    return (
        <div className={`shadow-md rounded-lg p-3 mb-4 text-xs sm:text-sm text-gray-700 ${bgColor}`}>
            <h2 className="text-sm sm:text-base font-semibold">{title}</h2>
            <p>{location}</p>
            <p>{time}</p>
            <p>{details}</p>
        </div>
    );
};

export default EventCard;
