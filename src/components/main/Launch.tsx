import { useState } from "react";
import Button from "./launch/Button";
import Message from "./launch/Message";

const Launch = () => {
  const [counter1, setCounter1] = useState(false);
  const [counter2, setCounter2] = useState(false);
  const [counter3, setCounter3] = useState(false);
  return (
    <section className="launch">
      <div>
        <Button counter={counter1} setCounter={setCounter1} />
        <Button counter={counter2} setCounter={setCounter2} />
        <Button counter={counter3} setCounter={setCounter3} />
      </div>
      <Message counter1={counter1} counter2={counter2} counter3={counter3} />
    </section>
  );
};

export default Launch;
