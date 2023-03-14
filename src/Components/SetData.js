import React, { useState } from "react";

export default function SetData() {
  const [num, setNum] = useState(0);
  return (
    <div>
      <h2>{num}</h2>
      <button onClick={() => setNum(num + 1)}>Increment</button>
    </div>
  );
}
