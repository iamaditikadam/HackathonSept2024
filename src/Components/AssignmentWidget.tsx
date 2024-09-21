import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const AssignmentWidget = () => {
  const assignments = [
    {
      name: "GUI Application",
      subject: "Further Programming",
      dueDate: "Due 21st September 11:59PM",
      tasks: [
        { name: "Transform your program object oriented", completed: true, weight: 0.5 },
        { name: "Develop the GUI on Java FX", completed: true, weight: 0.5 },
        { name: "Develop an interactive GUI", completed: false, weight: 1 },
        { name: "Record a video Demo of your program", completed: false, weight: 1 },
      ],
    },
    {
      name: "Web Development Project",
      subject: "Web Technologies",
      dueDate: "Due 25th September at 11:59PM",
      tasks: [
        { name: "Design", completed: false, weight: 1 },
        { name: "Development", completed: false, weight: 1 },
        { name: "Testing", completed: false, weight: 1 },
        { name: "Deployment", completed: false, weight: 1 },
        { name: "Feedback", completed: false, weight: 1 },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction) => {
    if (direction === 'left' && currentIndex < assignments.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else if (direction === 'right' && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
    trackMouse: true,
  });

  const currentAssignment = assignments[currentIndex];

  // Calculate total and completed weight
  const totalWeight = currentAssignment.tasks.reduce((sum, task) => sum + task.weight, 0);
  const completedWeight = currentAssignment.tasks
    .filter(task => task.completed)
    .reduce((sum, task) => sum + task.weight, 0);

  // Calculate filled segments based on weightage
  const filledSegments = Math.round((completedWeight / totalWeight) * 5); // Now 5 segments
  const completionPercentage = Math.round((completedWeight / totalWeight) * 100);

  return (
    <div className="relative overflow-hidden">
      <div
        {...handlers}
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {assignments.map((assignment, index) => (
          <div key={index} className="flex-shrink-0 w-full p-4">
            <div className="bg-gray-100 border border-gray-300 rounded-lg shadow-md p-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{assignment.name}</h3>
                  <h4 className="text-lg text-gray-700">{assignment.subject}</h4>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">{assignment.dueDate}</p>
                </div>
              </div>

              <div className="flex mt-2">
                {[...Array(5)].map((_, segmentIndex) => (
                  <div
                    key={segmentIndex}
                    className={`flex-1 h-4 mx-1 ${segmentIndex < filledSegments ? 'bg-[#295F98]' : 'bg-gray-200'} rounded-full`}
                  />
                ))}
              </div>

              <p className="mt-4 text-gray-600">{completionPercentage}% Completed</p>

              <h5 className="mt-2 mb-1 text-2xl font-bold">Tasks:</h5>
              <ul className="mt-2 list-none">
                {assignment.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.name}
                  </li>
                ))}
              </ul>

              <button className="mt-4 bg-[#295F98] text-white py-1 px-2 rounded hover:bg-[#1A3D66]">
                Remind Me!
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-2">
        {assignments.map((_, index) => (
          <div key={index} className={`h-2 w-2 mx-1 rounded-full ${currentIndex === index ? 'bg-[#295F98]' : 'bg-gray-300'}`} />
        ))}
      </div>
    </div>
  );
};

export default AssignmentWidget;