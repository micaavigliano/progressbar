import { useState, useEffect } from "react";
import "./progress.module.css"; // Import your CSS file for styling

const CircleProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 1);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [progress]);

  const strokeWidth = 10;
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <>
      <label htmlFor="id-progress">Progressbar with aria</label>
      <div
        className="progress-circle"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
        id="id-progress"
      >
        <svg className="svg" width={radius * 2} height={radius * 2}>
          <circle
            className="progress"
            cx={radius}
            cy={radius}
            r={radius - strokeWidth / 2}
            stroke="lightgray"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            fill="transparent"
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            role="status"
            aria-atomic="true"
          >
            {progress}%
          </text>
        </svg>
      </div>
      <div role="status" aria-live="assertive">
        {progress}
      </div>
    </>
  );
};

export default CircleProgressBar;
