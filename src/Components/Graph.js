import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title } from 'chart.js';
import { useRef } from 'react';
ChartJS.register(LineElement, PointElement, LinearScale, Title);

export default function Graph(){
    const chartRef = useRef(null);

    const state = {
        datasets: [
            {
                data: [{x:0, y: 0}, {x:2, y:5}, {x:5, y:7}],
                showLine: true
            }
        ]
        
    }

    return (
        <div className="ChartContainer">
            <Scatter
                ref={chartRef}
                className="Chart"
                data={state}
                id="scatterPlot"
            />
           <script type="module" src="./Components/Graph.js"></script> 
        </div>
    );
}




