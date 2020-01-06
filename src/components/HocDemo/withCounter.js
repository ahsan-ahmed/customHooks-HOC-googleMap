import React, { useState } from "react";

//UpdateCounter(OriginalComponent)
function withCounter(WrappedComponent, incrementCount) {
  function WithCounter(props) {
    //function NewComponent
    const [count, setCount] = useState(0);
    const handleCountUp = () => {
      setCount(count + incrementCount);
    };
    return (
      <WrappedComponent
        count={count}
        handleCountUp={handleCountUp}
        {...props}
      />
    );
  }
  return WithCounter;
}

export default withCounter;
