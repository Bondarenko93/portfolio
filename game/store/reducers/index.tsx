
import {
    DOWN,
    INCREASE_SNAKE,
    INCREMENT_SCORE,
    LEFT,
    RESET,
    RESET_SCORE,
    RIGHT,
    STOP_GAME,
    SET_DIS_DIRECTION,
    UP,
} from "../action";


export const GlobalState = {
    snake: [
        { x: 136, y: 152 },
        { x: 136, y: 160 },
        { x: 136, y: 168 },
        { x: 136, y: 176 },
        { x: 136, y: 184 },

    ],
    lastSnake: [],
    disallowedDirection: "",
    score: 0,
};


export const gameReducer = (state = GlobalState, action: { type: any; payload: number[]; }) => {
    switch (action.type) {
        case RIGHT:
        case LEFT:
        case UP:
        case DOWN: {
            let newSnake = [...state.snake];
            newSnake = [
                {
                    x: state.snake[0].x + action.payload[0],
                    y: state.snake[0].y + action.payload[1],
                }, ...newSnake
            ];
            let newlastSnake = newSnake.pop();
            if (state.lastSnake.length > 1) {
                state.lastSnake.pop();
            }
            return {
                ...state,
                snake: newSnake,
                lastSnake: [newlastSnake, ...state.lastSnake]
            };
        }

        case SET_DIS_DIRECTION:
            return { ...state, disallowedDirection: action.payload };
        case STOP_GAME:
            return {
                snake: state.snake,
            };

        case RESET:
            return {
                ...state,
                snake: [
                    { x: 180, y: 60 },
                    { x: 160, y: 60 },
                    { x: 140, y: 60 },
                    { x: 120, y: 60 },
                    { x: 100, y: 60 },
                ],
                disallowedDirection: ""
            };

        case INCREASE_SNAKE:
            const snakeLen = state.snake.length;
            return {
                ...state,
                snake: [
                    ...state.snake,
                    {
                        x: state.snake[snakeLen - 1].x,
                        y: state.snake[snakeLen - 1].y,
                    },
                ],
            };

        case RESET_SCORE:
            return { ...state, score: 0 };

        case INCREMENT_SCORE:
            return {
                ...state,
                score: state.score + 1,
            };
        default:
            return state;
    }
};
export default gameReducer;