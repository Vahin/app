import { useState } from "react";
import cls from "./Counter.module.scss";

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button className={cls.btn} onClick={inc}>
        increment
      </button>
    </>
  );
};
