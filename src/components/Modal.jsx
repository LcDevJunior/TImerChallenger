import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(
  ({ targetTime, timeRemaining, onReset, timerActive }, ref) => {
    const modal = useRef(null);

    const userLost = timeRemaining <= 0;
    const formattedTime = (timeRemaining / 1000).toFixed(2);
    const score = Math.floor((1 - timeRemaining / (targetTime * 1000)) * 10);

    useImperativeHandle(ref, () => ({
      openModal() {
        modal.current.classList.remove("hidden");
        modal.current.classList.add("flex");
      },

      closeModal() {
        modal.current.classList.remove("flex");
        modal.current.classList.add("hidden");
      },
    }));
    const handleClose = (e) => {
      e.preventDefault();
      ref.current.closeModal();
      onReset();
    };
    return createPortal(
      <div
        ref={modal}
        className="hidden w-screen h-screen z-50 bg-[rgba(0,0,0,0.9)] fixed top-0 left-0 items-center justify-center animate-slideInFromTop "
      >
        <div className="w-[22rem] md:w-[25rem] h-auto rounded-lg bg-[#d7fcf8] text-left p-6">
          <h1 className="font-handjet uppercase text-4xl text-[#061e1a] font-bold">
            {userLost && "You Lost"}
          </h1>
          <h1 className="font-handjet uppercase text-4xl text-[#061e1a] font-bold">
            Your Score : {timerActive ? score : 0}
          </h1>
          <p className="text-[#061e1a] text-[1rem] my-1">
            The target time was&nbsp;
            <strong className="text-[#10655b]">{targetTime}</strong>
          </p>
          <p className="text-[#061e1a] text-[1rem] my-1">
            You stopped the timer with&nbsp;
            <strong className="text-[#10655b]">
              {formattedTime} seconds left
            </strong>
          </p>
          <form onSubmit={handleClose} className="w-full mt-5 text-right">
            <button className="inline-block py-1 px-5 text-[0.975rem] text-white rounded-md bg-[#061e1a] hover:bg-[#051715] transition-all duration-200 ease-in-out">
              Close
            </button>
          </form>
        </div>
      </div>,
      document.getElementById("modal")
    );
  }
);

export default Modal;
