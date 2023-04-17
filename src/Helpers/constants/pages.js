import { CalculatingPage } from "../../components/CalculatingPage/CalculatingPage"
import GamePage from "../../components/GamePage/GamePage"
import { ResultsPage } from "../../components/ResultsPage/ResultsPage"
import { StartPage } from "../../components/StartPage/StartPage"

export const STAGES = {
    start: 'start',
    game: 'game',
    calculating: 'calculating',
    results: 'results',
}
export const PAGE_BY_STAGE = {
    [STAGES.start]: StartPage,
    [STAGES.game]: GamePage,
    [STAGES.calculating]: CalculatingPage,
    [STAGES.results]: ResultsPage,
}

