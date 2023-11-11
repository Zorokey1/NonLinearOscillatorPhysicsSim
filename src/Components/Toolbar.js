import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function Toolbar({ points, setPoints}) {
    const handleStart = (event) => {
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

    console.log(Number(alpha) + Number(beta));
    fetch("http://127.0.0.1:5000/odeSolver/", options)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        //console.log(handleOdeSolve);
        points = points.concat(json);
        console.log(points);
        console.log("Toolbar");
        setPoints(points);
          
      });
  };

  const handleStop = (event) => {
    console.log("Stop");
  };

  const typing = (event) => {
    if (isNaN(event.key) && event.key.length === 1 && event.key !== ".") {
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
  );
  
}
