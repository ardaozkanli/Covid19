import { useState } from "react"

function App() {
  const [currentNumber,setCurrentNumber] = useState(0);
  function handleIncrement (){
    setCurrentNumber((prev) => prev + 1);
  }
  function handleDecrement (){
     setCurrentNumber((prev) => prev -1 );
  }
  return (
    <div>
      <h1>{currentNumber}</h1>
      <button onClick={handleIncrement}>Değeri Arttır</button>
      <button onClick={handleDecrement}>Değeri Azalt</button>
    </div>
  );
}

export default App
