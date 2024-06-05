const Button = ({
  counter,
  setCounter,
}: {
  counter: boolean;
  setCounter: Function;
}) => {
  return (
    <div>
      <button
        className={counter ? "pressed" : ""}
        onClick={() => {
          counter ? null : setCounter(!counter);
        }}
      >
        ON
      </button>
      <button
        className={counter ? "" : "pressed"}
        onClick={() => {
          counter ? setCounter(!counter) : null;
        }}
      >
        OFF
      </button>
    </div>
  );
};

export default Button;
