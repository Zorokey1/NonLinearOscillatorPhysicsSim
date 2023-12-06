import Graph from "./Components/Graph";
import Toolbar from "./Components/Toolbar";
import Description from "./Components/Description";
import "./App.css";
import { useState } from "react";
import { Tab, Tabs } from "@mui/material";

export default function App() {
    const [points, setPoints] = useState([]);
    const [finalCondition, setFinalCondition] = useState({});
    const [intervalID, setIntervalID] = useState(null);
    const [dataLoopID, setDataLoopID] = useState(null);

    const [currentTabIndex, setTabIndex] = useState(0);

    const handleTabChange = (e, tabIndex) => {
        setTabIndex(tabIndex);
        setPoints([]);
        clearInterval(intervalID);
        clearInterval(dataLoopID);
        console.log(tabIndex);
    };

    return (
        <div className="App">
            <p className="BadTitle">Non-Linear Oscillator Simulation</p>
            <Tabs className='GraphTabs' value={currentTabIndex} onChange={handleTabChange}>
                <Tab label="Position Graph" />
                <Tab label="Phase Portrait" />
            </Tabs>

            {currentTabIndex === 0 && (<Graph points={points} xAxis ={"Time (s)"} yAxis={"Position (m)"}/>)}
            {currentTabIndex === 1 && (<Graph points={points} xAxis={"Position (m)"} yAxis={"Velocity (m/s)"}/>)}

            <Toolbar
                points={points}
                setPoints={setPoints}
                finalCondition={finalCondition}
                setFinalCondition={setFinalCondition}
                intervalID={intervalID}
                setIntervalID={setIntervalID}
                dataLoopID={dataLoopID}
                setDataLoopID={setDataLoopID}
                currentTabIndex={currentTabIndex}
            />
            <Description />
        </div>
    );
}
