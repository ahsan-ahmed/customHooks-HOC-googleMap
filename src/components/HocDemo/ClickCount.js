import React from "react";
import withCounter from "./withCounter";

function ClickCount({ count, handleCountUp, name }) {
  return (
    <div>
      <h1>ClickCount</h1>
      <button onClick={handleCountUp}>
        {name} Click to increase count {count}
      </button>
    </div>
  );
}

export default withCounter(ClickCount, 10);
