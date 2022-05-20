import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World</h2>
      {/* if the button is not clicked then we will see this p tag */}
      {!changedText && <Output>It's good to see you!</Output>}
      {/* if the button is clicked then we see changed! */}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
