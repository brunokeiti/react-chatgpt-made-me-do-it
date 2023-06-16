# "ChatGPT made me do it" React Challenge

Made ChatGPT write some challenges for me to practice React. I must say, sometimes it messes up a thing or two, but I'm quite impressed.
Use `yarn dev` to run this app.
This project uses [Vite](https://vitejs.dev/)

TO DO: need to add some navigation

## 1 - Countdown

Create a React component that displays a countdown starting from a specified number.

Requirements:

- Use React and TypeScript.
- The component should accept an integer as a prop called "countdownStart" to set the initial value of the countdown.
- The countdown should be displayed in a <span> element.
- Every second, the countdown value should be decremented by 1.
- When the countdown reaches 0, display a message "Time's up!" instead of the countdown value.
- You can start with the following code as a starting point:

```javascript
import React, { useEffect, useState } from "react";

interface CountdownProps {
  countdownStart: number;
}

const Countdown: React.FC<CountdownProps> = ({ countdownStart }) => {
  const [countdown, setCountdown] = useState(countdownStart);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      // Logic to display the message "Time's up!"
    }
  }, [countdown]);

  return <span>{countdown}</span>;
};

export default Countdown;
```

To use the Countdown component in your React application, simply import it and include it in your component tree, passing the initial countdown number through the "countdownStart" prop.

### Solution:

Navigate to `/countdown`. I modified the original Countdown component to have just one `useEffect`, since I also wanted to stop `setInterval` when the countdown reaches 0.

## 2 - Todo List

Create a simple todo list component where users can add, mark as completed, and delete tasks. The component should be implemented using React and Typescript.

Requirements:

- The component should have an input text box and an "Add" button to allow users to enter new tasks.
- When the "Add" button is clicked, the task entered by the user should be added to the displayed task list below the text box.
- Each task in the list should be displayed with a checkbox and a "Delete" button.
- When the checkbox of a task is checked, it should be marked as completed and displayed differently in the list (e.g., strikethrough or a different background color).
- When the "Delete" button of a task is clicked, it should be removed from the task list.
- The component should be implemented using functional components and React hooks.
- The code should be written in TypeScript and follow good typing and code structuring practices.

Tips:

- Create a state to store the task list using the useState hook.
- Use the map hook to iterate over the task list and render the tasks in the component.
- To handle adding a new task, create an event handler for the "Add" button click and update the task list state.
- Use the useEffect hook to update the state of completed tasks when the checkbox is checked or unchecked.
- To remove a task from the list, create an event handler for the "Delete" button click and update the task list state.

### Solution:

Navigate to `/tasklist`
