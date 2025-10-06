import React, {useState, useEffect, useRef} from "react";
import './stoper.css'
const Stoper = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10)
        }
        else {
      clearInterval(intervalIdRef.current);
    }

    return () => clearInterval(intervalIdRef.current);
  }, [isRunning]);

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }
    function end(){
        setIsRunning(false);


    }
    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }
    function formatTime(){
        
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
        let seconds = Math.floor(elapsedTime / (1000) % 60)
        let miliseconds = Math.floor((elapsedTime % 1000) / 10)
        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        miliseconds = String(miliseconds).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}:${miliseconds}`;
    }
    return (
        <><div className="center">
            <div className="Stoper">
                <div className="display">{formatTime()}</div>
                <div className="Buttons">
                    <button className="button" onClick={start}>Start</button>
                    <button className="button" onClick={reset}>Reset</button>
                    <button className="button" onClick={end}>Stop</button>
                </div>
            </div>
        </div>
        </>
    )
}  

export default Stoper;