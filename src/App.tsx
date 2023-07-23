import { useState } from 'react';
import './App.css'
import About from "./about"

const data: string[] = ["a","b","c"];

function App() {
  //const [count, setCount] = useState(0)
  const[state,setState] = useState<string>("test");
  
  return (
    <div className="main">
      <h1>hello react</h1>
      <About func={setState} data={data} />
      <h1>{state}</h1>
      <input onChange = {(e) => setState(state + e.target.value)} />
      {/* <button onClick={() => setState("state set!")}>Click meeeee</button> */}
      {/* {data.map((item, idx) =>(
        <h4 key={idx}>{item}</h4>
      ))} */}
      {/* {data.map((item, idx) =>{
        if(item ==="a")return<h1 key={idx}>AAA</h1>;
        else return <h4 key={idx}>{item}</h4>;
      })} */}
    </div>

  );
}

export default App

// <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>