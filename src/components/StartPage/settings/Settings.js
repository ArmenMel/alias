import { Button, TextField } from "@mui/material";
import styles from './settings.module.css'


function Settings(){
    return(
        <div className={styles.settings}>
            <TextField label="Team 1 Name" variant="standard" />
            <TextField label="Team 2 Name" variant="standard" />
            <Button variant="contained">Lets Play</Button>
        </div>

    )
}

export default Settings