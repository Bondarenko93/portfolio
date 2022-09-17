import { useRef, useState, useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { ArrowButton } from "./button/arrow"
import {
    increaseSnake, scoreUpdates,
    INCREMENT_SCORE, stopGame,
    makeMove, MOVE_DOWN,
    MOVE_LEFT, MOVE_RIGHT, MOVE_UP
} from "../game/store/action";
import { GlobalState } from '../game/store/reducers';
import { Stage, Layer, Group, Rect } from 'react-konva';
import { GenerateRandomPosition } from "./canvas/config";
import { HasSnakeCollided } from "./util";
import { ScoreCard } from "./ScoreCard";
const Game = ({ height = 384, width = 240 }) => {
    const dispatch = useDispatch();
    const [gameEnded, setGameEnded] = useState(false);
    const canvasRef = useRef(null);
    const size = 8;
    const snake1 = useSelector((state = GlobalState) => state.snake);
    const disallowedDirection = useSelector(
        (state = GlobalState) => state.disallowedDirection
    );
    const [isConsumed, setIsConsumed] = useState(false);
    const [startGame, setStartGame] = useState(false);
    const [pos, setPost] = useState(GenerateRandomPosition(width - size, height - size));




    const moveSnake = useCallback(
        (dx = 0, dy = 0, ds: string) => {
            if (dx > 0 && dy === 0 && ds !== "RIGHT") {
                dispatch(makeMove(dx, dy, MOVE_RIGHT));
            }

            if (dx < 0 && dy === 0 && ds !== "LEFT") {
                dispatch(makeMove(dx, dy, MOVE_LEFT));
            }

            if (dx === 0 && dy < 0 && ds !== "UP") {
                dispatch(makeMove(dx, dy, MOVE_UP));
            }

            if (dx === 0 && dy > 0 && ds !== "DOWN") {
                dispatch(makeMove(dx, dy, MOVE_DOWN));
            }
        },
        [dispatch]
    );




    const handleKeyEvents = useCallback(
        (event: { code: string; preventDefault: () => void; }) => {
            if (disallowedDirection) {
                switch (event.code) {
                    case "KeyW":
                        moveSnake(0, -size, disallowedDirection);
                        break;
                    case "KeyS":
                        moveSnake(0, size, disallowedDirection);
                        break;
                    case "KeyA":
                        moveSnake(-size, 0, disallowedDirection);
                        break;
                    case "KeyD":
                        event.preventDefault();
                        moveSnake(size, 0, disallowedDirection);
                        break;
                }
            } else {
                if (
                    disallowedDirection !== "LEFT" &&
                    disallowedDirection !== "UP" &&
                    disallowedDirection !== "DOWN" &&
                    event.code === "Space"
                )
                    setStartGame(true);
                moveSnake(0, -size, disallowedDirection); //Move RIGHT at start
            }
        },
        [disallowedDirection, moveSnake]
    );

    useEffect(() => {
        window.addEventListener("keypress", handleKeyEvents);

        return () => {
            window.removeEventListener("keypress", handleKeyEvents);
        };
    }, [disallowedDirection, handleKeyEvents]);

    useEffect(() => {
        if (snake1[1].x === pos.x && snake1[1].y === pos.y) {
            setIsConsumed(true);
            if (isConsumed) {
                dispatch(scoreUpdates(INCREMENT_SCORE));
            }
        }

        if (
            HasSnakeCollided(snake1, snake1[0])
        ) {
            setGameEnded(true);
            dispatch(stopGame());
            window.removeEventListener("keypress", handleKeyEvents);

        } else {
            snake1.forEach((element: { x: number; y: number; }, index: string | number) => {
                if (element.x > width) {
                    snake1[index].x = 0;
                }
                if (element.y > height) {
                    snake1[index].y = 0;
                }
                if (element.y < 0) {
                    snake1[index].y = height;
                }
                if (element.x < 0) {
                    snake1[index].x = width;
                }
            })
            setGameEnded(false);
        }
    }, [pos, snake1, height, width, dispatch, handleKeyEvents, isConsumed]);

    const buttonStart = () => {
        setStartGame(true);
        moveSnake(0, -size, disallowedDirection);
    }

    useEffect(() => {
        //Generate new object
        if (isConsumed) {
            const pos1 = GenerateRandomPosition(width - size, height - size)
            setPost(pos1);
            setIsConsumed(false);

            dispatch(increaseSnake());

        }
    }, [isConsumed, pos, dispatch, width, height]);


    const renderSnake = () => {
        console.log(snake1);
        return snake1.map((snake: { x: number | undefined; y: number | undefined; }, index: number) => {
            let color = 'rgba(67, 217, 173, 1)';
            let radius = [0, 0, 0, 0];
            if (index === 0) {
                radius = [20, 20, 0, 0];
                if (disallowedDirection === 'LEFT') {
                    radius = [0, 20, 20, 0];
                }
                if (disallowedDirection === 'RIGHT') {
                    radius = [20, 0, 0, 20];
                }
                if (disallowedDirection === 'UP') {
                    radius = [0, 0, 20, 20];
                }
                if (disallowedDirection === 'DOWN') {
                    radius = [20, 20, 0, 0];
                }
            }
            return (
                <Rect
                    shadowEnabled={true}
                    shadowColor="rgba(67, 217, 173, 1)"
                    shadowBlur={1}
                    key={`snake-${index}`}
                    cornerRadius={radius}
                    x={snake.x} y={snake.y} width={8} height={8}
                    fill={color}
                />

            );
        });
    }

    const statusGame = () => {
        if (!startGame) {
            return (
                <button onClick={buttonStart} className="bottom-[10%] absolute left-1/2 -translate-x-2/4 -translate-y-2/4 px-3 py-3 text-base bg-[#FEA55F] rounded-lg">start-game</button>
            )
        }
        if (gameEnded) {
            return (
                <div className="bottom-[10%] text-center absolute left-1/2 -translate-x-2/4 -translate-y-2/4 px-3 py-3 text-base bg-[#011627] text-[#43D9AD] shadow-[inset_1px_5px_11px_#02121bb5] w-full rounded-lg">GAME OVER!</div>
            )
        }
    }


    return (
        <div className="hidden lg:flex game p-3  max-w-[5sizepx] max-h-[406px] h-full">
            <div className="bg-[#011627d6] shadow-[inset_1px_5px_11px_#02121bb5] w-60 rounded-lg relative">
                <Stage width={width} height={height}>
                    <Layer listening={false} ref={canvasRef}>
                        <Group>
                            {renderSnake()}
                        </Group>
                        <Rect
                            shadowEnabled={true}
                            shadowColor="rgba(67, 217, 173, 0.5)"
                            shadowBlur={10}
                            key={'food-2'}
                            cornerRadius={8}
                            x={pos.x} y={pos.y} width={8} height={8}
                            fill={'rgba(67, 217, 173, 1)'}
                            stroke={'rgba(67, 217, 173, 0.2)'}
                            strokeWidth={8}

                        />

                    </Layer>
                </Stage>
                {statusGame()}
            </div>
            <div className="ml-3">
                <div className="lg:flex flex-col items-center bg-[#01142330] p-3 rounded-lg max-h-[160px]">
                    <p className="text-white text-left">{'//'} use keyboard (WASD)</p>
                    <p className="text-white mb-4 text-left">{'//'} arrows to play</p>
                    <div className="flex  pb-1 w-full justify-center">
                        <ArrowButton direction={'top'} />
                    </div>
                    <div className="flex  w-full justify-center">
                        <ArrowButton direction={'left'} />
                        <ArrowButton marign="mx-1" direction={'down'} />
                        <ArrowButton direction={'right'} />
                    </div>
                </div>
                <div className="pt-4">
                    <p className="text-white ml-2">{'//'} food left</p>
                    <div className="flex max-w-[160px] w-full flex-wrap">
                        <ScoreCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Game;