import Stack from "@mui/material/Stack";
import duffingEquation from "../Statics/duffingEquation.webp";

export default function Description() {
    return (
        <Stack direction="row" spacing={1} id="testStack">
            <img src={duffingEquation} id="DuffingEquation"></img>
            <div>
                <h3>
                    <b>
                        <u>Description</u>
                    </b>
                </h3>
                <p id="Explainer">
                    The Duffing Equation represents an oscillator with an added
                    non-linearity term. This term comes from a more complex
                    potential energy formula. This model could represent a
                    spring in which its stiffness isn't constant.
                </p>
            </div>
        </Stack>
    );
}
