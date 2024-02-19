import { useState } from "react";

function App() {
  let [cnt, setCnt] = useState(0);
  const incsCnt = () => {
    console.log("+1");
    setCnt(cnt + 1);
  }
  const decsCnt = () => {
    console.log("-1");
    setCnt(cnt - 1);
  }
  return (
    <>
    <div>
      <h1>{cnt}</h1>
      <button onClick={incsCnt}>+1</button>
      <button onClick={decsCnt}>-1</button>
    </div>
    </>
  );
}

export default App;
 