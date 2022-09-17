import { useSelector } from "react-redux";
import { GlobalState } from "../game/store/reducers";
import { SvgFood } from "../game/Food";

export function ScoreCard() {
    const score1 = useSelector((state = GlobalState) => state.score);
    const score = [...Array(10).keys()];
    let opacity = 0.3;
    return score.map(function (key) {
        if (key < score1) {
            opacity = 1;
        } else {
            opacity = 0.3;
        }
        return <SvgFood opacity={opacity} key={key} />;
    });
}