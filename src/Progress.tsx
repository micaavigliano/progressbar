import { useEffect, useState } from "react";

const Progress = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < 100) {
        setCount((prev) => prev + 1);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  return (
    <div>
      <progress
        value={count}
        max={100}
        aria-valuemin={0}
        title={"Progress bar with native html tag"}
        className="[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-violet-400 [&::-moz-progress-bar]:bg-violet-400 [&::-webkit-progress-inner-element]:rounded-lg"
      />
      <div role="status" aria-atomic="true">
        <p>{count}%</p>
      </div>
    </div>
  );
};

export default Progress;
