import { cardInterface } from "../types";

export const Card = ({ titleMsg, msg, data }: cardInterface) => {
  let score = 0;
  data.forEach((element) => {
    score += element.score / data.length;
  });

  return (
    <div className="card">
      <h2 className="titleMsg">Your Result</h2>
      <div className="scoreWrapper">
        <span>{Math.floor(score)}</span>
        <span> of 100</span>
      </div>
      <h3>{titleMsg}</h3>
      <p>{msg}</p>
    </div>
  );
};
