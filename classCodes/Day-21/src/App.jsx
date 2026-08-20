import { useState } from "react"
import DemoCompo from "./components/DemoCompo"

function App() {

    const [data, setData] = useState(1);

    const handleIncrease = () => {
        setData(data + 1);
    }

    return (
        <div>
            <h1 className="text-center text-2xl">Hello React</h1>

            <div className="flex flex-col items-center justify-center">
                <DemoCompo p1="sumaya" p2="alvi" />
                <DemoCompo p1="Raja" p2="Vadu" />
            </div>

            <button onClick={handleIncrease} className="cursor-pointer p-1">Increase value</button>
            <span className="p-4 mx-2 border">{data}</span>
            <button onClick={() => { setData(data - 1) }} className="cursor-pointer p-1">Decrease Value</button>
        </div>
    )
}

export default App
