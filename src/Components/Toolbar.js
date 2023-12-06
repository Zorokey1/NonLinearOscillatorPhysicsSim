import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function Toolbar({
    points,
    setPoints,
    finalCondition,
    setFinalCondition,
    intervalID,
    setIntervalID,
    dataLoopID,
    setDataLoopID,
    currentTabIndex
}) {
    const handleStart = async (event) => {
        event.preventDefault();
        const alpha = document.getElementById("alpha").value;
        const beta = document.getElementById("beta").value;
        const delta = document.getElementById("delta").value;
        const gamma = document.getElementById("gamma").value;
        const omega = document.getElementById("omega").value;
        const Xo = document.getElementById("initialX").value;
        const Vo = document.getElementById("initialV").value;

        const options = {
            method: "GET",
            headers: {
                alpha: alpha,
                beta: beta,
                delta: delta,
                gamma: gamma,
                omega: omega,
                Xo: Xo,
                Vo: Vo,
                to: 0,
                tf: 10,
            },
        };

        const url = ((currentTabIndex === 0) ? "http://127.0.0.1:5000/odeSolver/": "http://127.0.0.1:5000/phaseSolver/");
        console.log(currentTabIndex);
        const response = await fetch(
            url,
            options
        );
        const graphData = await response.json();
        finalCondition = graphData.finalCondition;
        setFinalCondition(finalCondition);
        let i = 0;
        setDataLoopID(
            setInterval(() => {
                if (i >= graphData.data.length) {
                    clearInterval(dataLoopID);
                    return;
                }
                points = points.concat(graphData.data[i]);
                setPoints(points);
                i++;
            }, 100)
        );
        console.log("Toolbar");
        options.headers.to += 10;
        options.headers.tf += 10;
        options.headers.Xo = finalCondition.x;
        options.headers.Vo = finalCondition.y;

        async function updateGraph() {
            const response = await fetch(
                url,
                options
            );
            const graphData = await response.json();
            finalCondition = graphData.finalCondition;
            setFinalCondition(finalCondition);
            let i = 0;
            setDataLoopID(
                setInterval(() => {
                    if (i >= graphData.data.length) {
                        clearInterval(dataLoopID);
                        return;
                    }
                    points = points.concat(graphData.data[i]);
                    setPoints(points);
                    i++;
                }, 100)
            );
            console.log("Toolbar");
            options.headers.to += 10;
            options.headers.tf += 10;
            options.headers.Xo = finalCondition.x;
            options.headers.Vo = finalCondition.y;
        }

        setIntervalID(setInterval(updateGraph, 10000));
    };

    const handleStop = async (event) => {
        points = [];
        setPoints(points);
        clearInterval(intervalID);
        clearInterval(dataLoopID);
    };

    const typing = (event) => {
        if (
            isNaN(event.key) &&
            event.key.length === 1 &&
            event.key !== "." &&
            event.key !== "-"
        ) {
            event.preventDefault();
        }
    };

    return (
        <Stack className="Toolbar" direction="row" spacing={2}>
            <TextField
                className="InputArea"
                id="alpha"
                label="alpha"
                variant="standard"
                onKeyDown={typing}
            />
            <TextField
                className="InputArea"
                id="beta"
                label="beta"
                variant="standard"
                onKeyDown={typing}
            />
            <TextField
                className="InputArea"
                id="delta"
                label="delta"
                variant="standard"
                onKeyDown={typing}
            />
            <TextField
                className="InputArea"
                id="gamma"
                label="gamma"
                variant="standard"
                onKeyDown={typing}
            />
            <TextField
                className="InputArea"
                id="omega"
                label="omega"
                variant="standard"
                onKeyDown={typing}
            />
            <TextField
                className="InputArea"
                id="initialX"
                label="Xo"
                variant="standard"
                onKeyDown={typing}
            />
            <TextField
                className="InputArea"
                id="initialV"
                label="Vo"
                variant="standard"
                onKeyDown={typing}
            />
            <Stack spacing={1} direction="column">
                <Button
                    className="StartButton"
                    label="Start"
                    variant="contained"
                    onClick={handleStart}
                >
                    Start
                </Button>
                <Button
                    className="StopButton"
                    label="Stop"
                    variant="contained"
                    onClick={handleStop}
                >
                    Stop
                </Button>
            </Stack>
        </Stack>
    );
}
