import React from 'react';
import Header from './Components/Header';
import DateSection from './Components/DateSection';
import EventCard from './Components/EventsCard';
import Prompt from './Components/Prompts';
import ToDoSection from './Components/ToDoSection.tsx';
import NavBar from './Components/Navbar';

function App() {
  const events = [
    {
      title: 'McDonalds',
      location: 'La Trobe Street, VIC 3000',
      time: '16:30 - 20:30',
      type: 'work',
      details: 'Work Shift',
    },
    {
      title: 'Usability Engineering',
      location: 'RMIT Building 80',
      time: '10:30 - 12:30',
      type: 'lecture',
      details: 'Lecture',
    },
    {
      title: 'GUI Application - Java',
      location: 'Submit by 21st Sept.',
      time: '22:00 - 23:30',
      type: 'assignment',
      details: 'Assignment',
    },
  ];

  return (
    <div className="App bg-gradient-to-b from-blue-50 to-blue-200 min-h-screen relative">
      {/* Header */}
      <Header />

      {/* Date Section with the first event beside it */}
      <div className="flex justify-between items-start mt-4 mx-4 space-x-4">
        <DateSection />
        <div className="w-1/2">
          <EventCard {...events[0]} /> {/* First event (McDonalds) */}
        </div>
      </div>

      {/* Grid layout for remaining Event Cards (Usability Engineering and GUI Application) */}
      <div className="grid grid-cols-2 gap-4 mt-4 mx-4">
        {events.slice(1).map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>

      {/* Motivational Section */}
      <div className="mt-8 mx-4 text-center space-y-2">
        <Prompt />
      </div>

      {/* To-Do Section */}
      <ToDoSection />

      {/* Floating Navigation */}
      <NavBar />
    </div>
  );
}

export default App;
