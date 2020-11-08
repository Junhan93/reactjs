import React, { useState } from "react";
import Tweet from './Tweet';

// create a component
function App(){

  const [users, setUsers] = useState([
    {name: 'Junhan', message:"Hello there", likes:"3.2k"},
    {name: "Cheryl", message:"Hi!", likes:"3.2k"},
    {name: "John", message:"I am awesome!", likes:"898"}
  ]);
  //based on our state, our HTML is gonna change
  // const [isRed, setRed] = useState(false);
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  //   setRed(true);
  // };
  
  return(
    <div className="app">
        {users.map(user =>(
          <Tweet name={user.name} message={user.message} likes={user.likes}/>
        ))}
    </div>
  );
}

// export the component
export default App;

// <Tweet name="Junhan" message="This is a first tweet" likes="3.2K"/>
//       <Tweet name="Cheryl" message="This is a second tweet" likes="6.4K"/>
//       <Tweet name="Jane" message="This is a third tweet" likes="7.9K"/>
//       <Tweet name="John" message="This is a fourth tweet" likes="868"/>


// <h1 className= { isRed ? "red" : "" }>Change my color!</h1>
//       <button onClick={ increment }>Increment</button>
//       <h1>{count}</h1>    {/* project the count here */}