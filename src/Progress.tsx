import { useEffect, useState } from "react";

const Progress = () => {
  const [count, setCount] = useState<number>(0);
  const strokeWidth = 10;
  const radius = 50 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const progressValue = circumference - (count / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < 100) {
        setCount((prev) => prev + 1);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  return (
    <div>
      <progress
        value={count}
        max="100"
        className="absolute left-[-9999px] w-1 h-1 overflow-hidden"
      />
      <svg>
        <circle
          className="stroke-current text-blue-500"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressValue}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={50}
          cy={50}
        />
      </svg>
    </div>
  );
};

export default Progress;
