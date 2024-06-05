const Message = ({
  counter1,
  counter2,
  counter3,
}: {
  counter1: boolean;
  counter2: boolean;
  counter3: boolean;
}) => {
  return <p>{counter1 && counter2 && counter3 ? "GO !" : "No way !"}</p>;
};

export default Message;
