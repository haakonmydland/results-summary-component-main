import { Card } from "./components/Card";
import { Summary } from "./components/Summary";
import data from "./assets/data.json";

function App() {
  return (
    <div className="app">
      <Card
        data={data}
        titleMsg="Great"
        msg="You scored higher than 65% of the people who have taken these tests."
      />
      <Summary data={data} />
    </div>
  );
}

export default App;
