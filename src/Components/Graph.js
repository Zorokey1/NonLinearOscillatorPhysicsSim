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
    const [scatterOptions, setScatterOptions] = useState({
        datasets: [
            {
                data: points,
                showLine: true,
                pointStyle: false,
                backgroundColor: '#89CFF0'
            },
        ],
    });

    const options = {
        animation: false
    }

    useEffect(() => {
        console.log(points);
        setScatterOptions({
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
            <Scatter className="Chart" data={scatterOptions} options = {options}id="scatterPlot" />
            <script type="module" src="./Components/Graph.js"></script>
        </div>
    );
}
