import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { shuffleArray } from '../../../Helpers/functions'
import styles from './wordsList.module.css'
import Check from '@mui/icons-material/Check'
import { setCorrectAnswers, setCorrectWord, undoCorrectWord } from '../../../store/actionCreators'
import { useEffect, useMemo, useRef, useState } from 'react'

function WordsList(){

    const dispatch = useDispatch()
    const shuffledList = useSelector(state => shuffleArray(state.wordsLeft));
    const currentTurn = useSelector(state => state.turn)
    const list = useMemo(() => shuffledList, [])
    const [page, setPage] = useState(0)
    const [correctWords,setCorrectWords] = useState([])
    const correctWordsRef = useRef(correctWords)

    const toggleWord = (e) => {
        const { name } = e.target
        if(correctWords.includes(name)) {
            setCorrectWord(prev => prev.filter(word => word !== name))
            return;
        }
        setCorrectWords(prev => ([...prev, name]))
    }
    
    useEffect(() => {
        if(correctWords.length === 5) {
            setPage(prev => prev + 1)
        }
    }, [correctWords])



    useEffect(() => {
        const action = setCorrectAnswers(correctWords)
        dispatch(action)
    }, [currentTurn, ])

    return(
        <div className={styles.list}>
           { 
            list.slice(page * 5, page * 5 + 5).map(word => {
                return(
                <Button key={word}
                variant="contained"
                endIcon={correctWords.includes(word) ? <Check/> : null}
                color={correctWords.includes(word) ? 'success' : 'info'}
                name={word}
                onClick={toggleWord}>
                    {word}
                </Button>)
            })
           }                   
        </div>
    )
}

export default WordsList