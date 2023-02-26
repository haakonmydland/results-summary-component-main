import Reaction from "../assets/images/icon-Reaction.svg";
import Memory from "../assets/images/icon-Memory.svg";
import Verbal from "../assets/images/icon-Verbal.svg";
import Visual from "../assets/images/icon-Visual.svg";
import { summaryInterface } from "../types";

const icons: any = {
  Reaction: Reaction,
  Memory: Memory,
  Verbal: Verbal,
  Visual: Visual,
};

export const Summary = ({ data }: summaryInterface) => {
  return (
    <div className="summary">
      <h2>Summary</h2>
      <div className="summaryObjects">
        {data.map((summaryObj, index) => (
          <div
            key={`summaryObj${index}`}
            className={`summaryObj ${summaryObj.category}`}
          >
            <div>
              <img src={icons[summaryObj.category]} className="icon"></img>
              <span className="summaryObjName">{summaryObj.category}</span>
            </div>
            <div>
              <span className="summaryObjScore">{summaryObj.score}</span>
              <span className="summaryObjMax"> / 100</span>
            </div>
          </div>
        ))}
      </div>
      <button>Continue</button>
    </div>
  );
};
