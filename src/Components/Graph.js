import { Scatter } from "react-chartjs-2";
import { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    Title,
} from "chart.js";
ChartJS.register(LineElement, PointElement, LinearScale, Title);

export default function Graph({ points }) {
    const [scatterData, setScatterData] = useState({
        datasets: [
            {
                data: points,
                showLine: true,
                pointStyle: false,
                borderColor: '#89CFF0',
                
            },
        ],
    });

    const options = {
        animation: {
            duration: 0
        },
        scales: {
            x: {
                text: "Time (s)"
            }, 
            y: {
                text: "Position (m)"
            }
        }
    }

    useEffect(() => {
        console.log(points);
        setScatterData({
            datasets: [
                {
                    data: points,
                    showLine: true,
                    pointStyle: false,
                    backgroundColor: '#89CFF0'
                },
            ],
        });
    }, [points]);

    return (
        <div className="ChartContainer">
            <Scatter className="Chart" data={scatterData} options = {options} id="scatterPlot"/>
            <script type="module" src="./Components/Graph.js"></script>
        </div>
    );
}
