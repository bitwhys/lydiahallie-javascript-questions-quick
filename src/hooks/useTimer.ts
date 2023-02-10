import {useState,useEffect} from "react";

export const useTimer = (timeOut: number, cb: () => void) => {
  const [timer,setTimer] = useState(timeOut);
  const endTimer = () => {
    setTimer(0)
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(v => v - 1)
    },1000);
    if(timer === 0) {
      clearInterval(interval)
      cb()
    }
    return () => clearInterval(interval)
  },[timer])
  return ({timer,endTimer})
}
