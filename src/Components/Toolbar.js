import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'; 
import Stack from '@mui/material/Stack';


export default function Toolbar(){
    return (
        <Stack className="Toolbar" direction="row" spacing={2}>
            <TextField className="InputArea" id="alpha" label="alpha" variant="standard" onKeyDown={typing}/>
            <TextField className="InputArea" id="beta" label="beta" variant="standard" onKeyDown={typing}/>
            <TextField className="InputArea" id="delta" label="delta" variant="standard" onKeyDown={typing}/>
            <TextField className="InputArea" id="gamma" label="gamma" variant="standard" onKeyDown={typing}/>
            <TextField className="InputArea" id="omega" label="omega" variant="standard" onKeyDown={typing}/>
            <Button className ="StartButton" label="Start" variant="contained" onClick={handleStart}>Start</Button>
            <Button className ="StopButton" label="Stop" variant="contained" onClick={handleStop}>Stop</Button>
        </Stack>
    )
}

const handleStart = (event) => {
    event.preventDefault();
    var alpha = document.getElementById("alpha").value;
    var beta = document.getElementById("beta").value;
    var delta = document.getElementById("delta").value;
    var gamma = document.getElementById("gamma").value;
    var omega = document.getElementById("omega").value;

    console.log(Number(alpha) + Number(beta));
    
    console.log(5);

}

const handleStop = (event) => {
    console.log("Stop")
}

const typing = (event) => {
    if(isNaN(event.key) && event.key.length === 1 && event.key !== "."){
        event.preventDefault();

    }
}