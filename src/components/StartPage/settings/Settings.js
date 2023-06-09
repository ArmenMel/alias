import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "../../../store/actionCreators";
import styles from './settings.module.css'


function Settings(){
    
    const dispatch = useDispatch()

    const handleStartGameClick = () => {
        const action = setUserData(userNames)
        dispatch(action)
    }

    const [userNames, setUserNames] = useState({
        team1: '',
        team2: '',
    })

    const handleUserNameChange = (e) => {
        const {name,value} = e.target
        setUserNames(prev => {
            return{
                ...prev,
               [name]: value 
            }
        })

        
    }

    return(
        <div className={styles.settings}>
            <TextField
                 label="Team 1 Name"
                 name='team1'
                 variant="standard" 
                value={userNames.team1}
                onChange={handleUserNameChange}
            />
            <TextField 
                label="Team 2 Name"
                name='team2'    
                variant="standard" 
                value={userNames.team2}
                onChange={handleUserNameChange}
            />
            <Button
                variant="contained"
                onClick={handleStartGameClick}
            >Lets Play</Button>
        </div>

    )
}

export default Settings