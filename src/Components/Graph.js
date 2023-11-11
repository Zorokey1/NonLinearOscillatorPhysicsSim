import { Scatter } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title } from 'chart.js';
ChartJS.register(LineElement, PointElement, LinearScale, Title);

export default function Graph({points}){
    const chartRef = useRef(null);
    const [scatterOptions, setScatterOptions] = useState({
        datasets: [
            {
                data: points,
                showLine: true
            }
        ]
        
    });

    
    useEffect(()=> {
        const myChartRef = chartRef.current;
        console.log(points);
        setScatterOptions({
            datasets: [
                {
                    data: points,
                    showLine: true
                }
            ]
        })
        myChartRef.update();
    }, [points]);
    

    return (
        <div className="ChartContainer">
            <Scatter
                className="Chart"
                data={scatterOptions}
                ref={chartRef}
                id="scatterPlot"
            />
           <script type="module" src="./Components/Graph.js"></script> 
        </div>
    );
}




