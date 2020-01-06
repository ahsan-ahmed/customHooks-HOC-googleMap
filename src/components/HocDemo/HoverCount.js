import React from "react";
import withCounter from "./withCounter";

function HoverCount({ count, handleCountUp }) {
  return (
    <div>
      <h1 onMouseOver={handleCountUp}>Hover Count {count} times</h1>
    </div>
  );
}

export default withCounter(HoverCount,5);
