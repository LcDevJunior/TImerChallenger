import { useState, useRef } from "react";
import Modal from "./Modal.jsx";

const Challenge = ({ title, targetTime, onClose }) => {
  let timer = useRef(null);
  let targetModal = useRef(null);

  const [remainingTime, setTimeRemaining] = useState(targetTime * 1000);

  const timerActive = remainingTime > 0 && remainingTime < targetTime * 1000;

  if (remainingTime <= 0) {
    clearInterval(timer.current);
    targetModal.current.openModal();
  }

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  };

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
  };

  const handleStop = () => {
    clearInterval(timer.current);
    targetModal.current.openModal();
  };

  return (
    <>
      <Modal
        ref={targetModal}
        targetTime={targetTime}
        timeRemaining={remainingTime}
        onReset={handleReset}
        timerActive={timerActive}
      />
      <div className="w-72 md:w-[21rem] rounded-md flex flex-col items-center justify-center bg-gradient-to-r from-[#4df8df] to-[#4df0f8] p-4 md:p-8 relative">
        <button
          onClick={onClose}
          className="absolute  -top-3 -right-3 w-8 h-8 text-3xl border-2 border-slate-100  flex items-center justify-center rounded-full bg-[#0c0a09] text-white hover:bg-[#1f1f1f] transition-all duration-300"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="uppercase text-xl text-[#061e1a] font-semibold tracking-wider">
          {title}
        </h2>
        <h2 className="text-sm border border-[#46cebe] p-[.299rem] m-1 text-[#061e1a] rounded-md">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </h2>
        <button
          onClick={timerActive ? handleStop : handleStart}
          className="block py-1 px-5 my-5 text-[0.975rem] text-white rounded-md bg-[#061e1a] hover:bg-gradient-to-r hover:from-[#3c8379] hover:to-[#2c6460] transition-all duration-300 ease-in-out"
        >
          {timerActive ? "Stop Timer" : "Start Timer"}
        </button>

        <p
          className={`text-[#061e1a] text-[1rem] mb-1 ${
            timerActive ? "animate-flash" : ""
          }`}
        >
          {timerActive ? "Timer Active..." : "Timer Inactive"}
        </p>
      </div>
    </>
  );
};

export default Challenge;
