import {
     useEffect, 
     useState } from "react"
// let url = "https://dummyjson.com/users";


const UseEffect = () => {

    const [count, setCount] = useState(0)

    // const sayHello = () => {
    //     console.log('Hello from the SayHello function.');
    // }
    // sayHello()

    // useEffect(() => {
    //   console.log('Hello from the use Effect hook - initial render');
    // }, [])

    // useEffect(() => {
    //   console.log('Hello from the use Effect hook - runs with every state updation');
    // }, [count])

    //Cleanup Function
    
  return (
    <div className="container">
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default UseEffect