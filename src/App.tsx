import './App.css'
import Loop2 from './Loop2';
import Loop3 from './Loop3';
import Loops from './Loops'
import { useState } from 'react'

function App() {

  const [activeComponent, setActiveComponent] = useState<"A" | "B" | "C">("A");

  const handleButtonClick = (component: "A" | "B" | "C") => {
    setActiveComponent(component);
  };

  return (
    <>
      <div style={{display : 'flex', flexDirection : 'row', gap : '10px', justifyContent : 'center', alignItems : 'start'}}>
      <button onClick={() => handleButtonClick("A")}>Tugas 1</button>
      <button onClick={() => handleButtonClick("B")}>Tugas 2</button>
      <button onClick={() => handleButtonClick("C")}>Tugas 3</button>
      </div>

      <div style={{height : '100vh'}}>
        {activeComponent === "A" && <Loops />}
        {activeComponent === "B" && <Loop2 />}
        {activeComponent === "C" && <Loop3 />}
      </div>

    </>
  )
}

export default App
