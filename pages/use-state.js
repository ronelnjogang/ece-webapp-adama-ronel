import { useState } from "react";

export default function State() {
  const [count, setCount] = useState(1);

  const handleclick = () => {
    setCount(count + 1);
  };

  return (
    <div>
  
      <h1> {count} </h1>
      <button onClick={handleclick}>Increment</button>
    </div>
  );
}
