import { STAGES } from "../Helpers/constants/pages";

const initialState = {
    team1: {
        id: 'team1',
        name: '',
        correctWords: []
    },
    team2: {
        id: 'team2',
        name: '',
        correctWords: []
    },
    turn: '',
    stage: STAGES.calculating
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {


        default:
            return state;
    }
}