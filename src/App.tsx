import React, {useState} from 'react';

function App() {
  let [likes, setLikes] = useState(0)

  const incrementHandler = () => {
    setLikes(prevState=> prevState + 1)
  }
  const decrementHandler = () => {
    setLikes(prevState=> prevState - 1)

  }
  return (
    <div className="App">
  <h1>{likes}</h1>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
    </div>
  );
}

export default App;
