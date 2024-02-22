import { useState } from "react"
import './cronometro.css'

export default function Cronometo() {
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);
    const [saveInterval, setSaveInterval] = useState();

    if (second === 60) {
        setSecond(0)
        setMinute((minute) => ++minute)
    }

    if (minute === 60) {
        setMinute(0)
        setHour((hour) => ++hour)
    }

    function start() {
        const interval = setInterval(() => {
            setSecond((second) => ++second)
        }, 1000);

        setSaveInterval(interval)
    }

    function pause() {
        clearInterval(saveInterval)
    }

    function stop() {
        setSecond(0);
        setMinute(0);
        setHour(0);
        setTimeout(clearInterval(saveInterval))
    }

    return (
        <div className="container">
            <h1>
                {`${hour >= 10 ? hour : `0${hour}`}:${minute >= 10 ? minute : `0${minute}`}:${second >= 10 ? second : `0${second}`}`}
            </h1>

            <div className="buttons">
                <button onClick={start} className="start">Start</button>
                <button onClick={pause} className="pause">Pause</button>
                <button onClick={stop} className="stop">Stop</button>
            </div>
        </div>
    )
}
