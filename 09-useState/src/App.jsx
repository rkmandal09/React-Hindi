import Counter from "./Component/Counter";
import Like from "./Component/Like";

import { useState } from "react";


const App = () => {
  let [sum, setSum] = useState(0);
  let [newCount, setNewCount] = useState(0);
  let [age, setAge] = useState(18);
  let [likeCount, setLikeCount] = useState(0);
  let [Count, setCount] = useState(0);
  let [array, setArray] = useState({user:"rahul", age:22});
  const [num, setNum] = useState(0);



  
  const arr = () => {
    setArray(prev => ({...prev, user:"Munna",age:30}))
    setArray(prev => ({...prev, }))
  }


  const buttonClicked = () => {
    setNum(prev => (prev + 1));
    setNum(prev => (prev + 1));
    setNum(prev => (prev + 1));
    setNum(prev => (prev + 1));
    setNum(prev => (prev+ 1)); 
  }
 

  return (
    <div className="pairent">

     <h1>{num}</h1>
     <button onClick={buttonClicked}>Batch Update</button>

        <h3>{array.user}, {array.age}</h3>
      <button onClick={arr}>clikck me!</button>


       <div className="likeButton">


        {likeCount >= 10 && <h2 className= "popular">🔥popular</h2>}
        {likeCount <= 0 && <h2 className="unpopular"> 😭 Unpopular</h2>}


        <span className="countLike">❤️{likeCount}</span>
        <button
          onClick={() => {
            setLikeCount(likeCount + 1);
          }}
          className="likeBtn"
        >
          👍
        </button>
        <button
          onClick={() => {
            if (likeCount > 0) {
              setLikeCount(likeCount - 1);
            }
          }}
          className="disLikeBtn"
        >
          👎
        </button>
      </div>

      <div>
        <h1>This is a sum</h1>
        <div className="sumStyle">{sum}</div>
        <br />
        <button
          onClick={() => {
            setSum(sum+2);
          }}
        >
          Change Sum
        </button>
      </div>
      <div className="countM">
          <h1>Counting Machine</h1>
          <h2 className="sumStyle">{Count}</h2>
          <div className="btnInc">
            <button
              onClick={() => {
                setCount(Count + 1);
              }}
            >
              Increase
            </button>

            <button
              className="btn"
              onClick={() => {
                setCount(Count - 1);
              }}
            >
              Decrease
            </button>
          </div>
          <button
            className="reset"
            onClick={() => {
              setCount(0);
            }}
          >
            Reset
          </button>
      </div>
      <div className="newCount">
        <h1
          className="countDis"
          style={{
            backgroundColor: newCount >= 10 ? "green" : newCount < 0 ? "red" : "blue"
          }}
        >
          {newCount}
        </h1>
        <button
          className="btn1"
          onClick={() => {
            setNewCount(newCount + 1);
          }}
        >
          +1
        </button>
        <button
          className="btn2"
          onClick={() => {
            setNewCount(newCount - 1);
          }}
        >
          -1
        </button>
        <div>
          <button
            className="btn3"
            onClick={() => {
              setNewCount(newCount + 5);
            }}
          >
            +5
          </button>
          <button
            className="btn4"
            onClick={() => {
              setNewCount(newCount - 5);
            }}
          >
            -5
          </button>
        </div>
        <button
          className="btn5"
          onClick={() => {
            setNewCount(0);
          }}
        >
          Reset
        </button>
      </div>

      {/* <Counter />
      <Like /> */}
    </div>
  );
};

export default App;








     