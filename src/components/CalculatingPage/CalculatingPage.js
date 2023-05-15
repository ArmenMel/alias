import { Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { STAGES } from "../../Helpers/constants/pages"
import { setStage } from "../../store/actionCreators"
import styles from './CalculatingPage.module.css'

export const CalculatingPage = () => {
    
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const HandleNextRoundClick = () => {
        const action = setStage(STAGES.game)
        dispatch(action)
    }
    
    return(
        <div className={styles.transitionPage}>
            <p><b>{state.team1.name}</b>: {state.team1.correctWords.length} Points</p>
            <p><b>{state.team2.name}</b>: {state.team2.correctWords.length} Points</p>
            <p>Next turn: <b>{state.turn}</b></p>
            <Button
                variant="contained"
                onClick={HandleNextRoundClick}
            >Play</Button>
        </div>
    )
}