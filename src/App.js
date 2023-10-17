import Graph from './Components/Graph';
import Toolbar from './Components/Toolbar';
import './App.css'

export default function App(){
    return (
        <div className ="App">
            <p className="BadTitle">Non-Linear Oscillator Simulation</p>
            <Graph/>
            <Toolbar/>
        </div>
    );
}