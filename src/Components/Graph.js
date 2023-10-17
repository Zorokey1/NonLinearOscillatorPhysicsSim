import {Scatter} from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title } from 'chart.js';
ChartJS.register(LineElement, PointElement, LinearScale, Title);

export default function Graph(){
    const state = {
        datasets: [
            {
                data: [{x:0, y: 0}, {x:5, y:5}]
            }
        ]
    }

    return (
        <div className="ChartContainer">
            <Scatter
                className="Chart"
                data={state}
            />
           <script type="module" src="./Components/Graph.js"></script> 
        </div>
    );
}




