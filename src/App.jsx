import Player from "./components/Player.jsx";
import Container from "./components/Container.jsx";
import Challenge from "./components/Challenge.jsx";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [enteredValue, setEnteredValue] = useState({
    namePlayer: "",
    timeTarget: "",
  });
  const [timerChallenges, setTimerChallenges] = useState([]);

  let lastPlayerName = "";
  if (timerChallenges.length > 0) {
    lastPlayerName = timerChallenges[timerChallenges.length - 1].namePlayer;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimerChallenges((prevTimerChallenges) => {
      return [...prevTimerChallenges, { ...enteredValue, id: uuidv4() }];
    });
    setEnteredValue({
      namePlayer: "",
      timeTarget: "",
    });
  };

  const handleChangeValue = (e) => {
    const { name, value } = e.target;

    const newValue = name === "timeTarget" ? parseInt(value) : value;
    setEnteredValue((prevValue) => {
      return {
        ...prevValue,
        [name]: newValue,
      };
    });
  };

  const handleDeleteChallenge = (id) => {
    setTimerChallenges((prevValue) => {
      return prevValue.filter((challenge) => challenge.id !== id);
    });
  };

  console.log(timerChallenges);
  return (
    <>
      <Container>
        <Player
          onSubmit={handleSubmit}
          enteredValue={enteredValue}
          onChange={handleChangeValue}
          setNamePlayer={lastPlayerName}
        ></Player>
        <div className="max-w-full m-8 flex flex-wrap gap-12 md:gap-x-10 md:gap-y-20 items-center justify-center">
          {timerChallenges.map((challenge) => (
            <Challenge
              key={challenge.id}
              title={challenge.namePlayer}
              targetTime={challenge.timeTarget}
              onClose={() => handleDeleteChallenge(challenge.id)}
            ></Challenge>
          ))}
        </div>
      </Container>
    </>
  );
}

export default App;
