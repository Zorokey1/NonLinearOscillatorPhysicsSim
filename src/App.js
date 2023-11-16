import Graph from "./Components/Graph";
import Toolbar from "./Components/Toolbar";
import "./App.css";
import { useState } from "react";

export default function App() {
    const [points, setPoints] = useState([]);
    const [finalCondition, setFinalCondition] = useState({});
    const [intervalID, setIntervalID] = useState(null);
    const [dataLoopID, setDataLoopID] = useState(null);

    return (
        <div className="App">
            <p className="BadTitle">Non-Linear Oscillator Simulation</p>
            <Graph points={points} />
            <Toolbar
                points={points}
                setPoints={setPoints}
                finalCondition={finalCondition}
                setFinalCondition={setFinalCondition}
                intervalID = {intervalID}
                setIntervalID = {setIntervalID}
                dataLoopID = {dataLoopID}
                setDataLoopID = {setDataLoopID}
            />
        </div>
    );
}
