import React, {useEffect, useState} from "react";

type PropsType = {}

//util functions
const get2digitsString = (num: number) => num < 10 ? "0" + num : num

export const Clock: React.FC<PropsType> = () => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("tick")
            setDate(new Date())
        }, 1000)

        return ()=> {
            clearInterval(interval)
        }

    }, [])

    return <div>
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>
    </div>

}


//-------------------------//-------------------------//
//export const Clock: React.FC<PropsType> = () => {
//
//     const [time, setTime] = useState(new Date())
//
//     useEffect(()=>{
//         const int = setInterval(()=>{
//             setTime(new Date())
//         }, 1000)
//
//         return () => clearInterval(int)
//     }, [])
//
//     const hours = time.getHours()
//     const minutes = time.getMinutes()
//     const seconds = time.getSeconds()
//
//     const timeString = `${hours}:${minutes}:${seconds}`
//
//     return <>
//         {timeString}
//     </>
//
// }

//отображать часы в разном формате со стреками часовая/минутная/секундная
//аналоговый мод
//диджитал мод
//пропсами указывать в каком режиме должны показываться