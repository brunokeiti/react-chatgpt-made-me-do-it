import React, { useEffect, useState } from "react";

interface CountdownProps {
  countdownStart?: number;
}

const Countdown: React.FC<CountdownProps> = ({ countdownStart = 10 }) => {
  const [countdown, setCountdown] = useState(countdownStart);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 0) {
          clearInterval(timer);
          return prevCountdown;
        } else {
          return prevCountdown - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <span>{countdown <= 0 ? `Time's up!` : countdown}</span>;
};

export default Countdown;
