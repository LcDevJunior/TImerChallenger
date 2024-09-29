import InputField from "./Input.jsx";

const Player = ({ onSubmit, enteredValue, onChange, setNamePlayer }) => {
  return (
    <>
      <h1 className="text-[2.2rem] md:text-6xl font-handjet text-[#c1e2dd] font-semibold uppercase p-0">
        The <em className="text-blueEye not-italic">Almost</em> Final Countdown
      </h1>
      <p className="text-[#c6f4f2] text-[.780rem] md:text-[1.3rem]">
        Stop the timer once you estimate that time is (almost) up
      </p>

      <h2 className="text-[#54a399] my-2 font-semibold text-lg md:text-2xl">
        Welcome To the Challenge {setNamePlayer}
      </h2>
      <form
        onSubmit={onSubmit}
        className="max-w-md h-52 border-2 flex items-center justify-center flex-col  border-[#54a399] rounded-md py-5 px-4 my-3 mx-0 relative"
      >
        <InputField
          label="Set Name"
          value={enteredValue.namePlayer}
          onChange={onChange}
          name="namePlayer"
          type="text"
          required
          placeholder="Enter your name"
        />
        <InputField
          label="Set Time"
          value={enteredValue.timeTarget}
          onChange={onChange}
          name="timeTarget"
          type="number"
          required
          placeholder="Enter time in seconds"
        />
        <button
          type="submit"
          className="inline-block  font-semibold px-3 py-2 bg-[#54a399] hover:bg-[#3c8379] transition-all duration-300 rounded-md absolute -bottom-5 right-4 mt-6"
        >
          Add Challenge
        </button>
      </form>
    </>
  );
};

export default Player;
