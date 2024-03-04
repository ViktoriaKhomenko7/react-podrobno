import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    console.log('SimpleExample')

    // const [counter, setCounter] = useState(1)
    // const [fake, setFake] = useState(1)

    // useEffect( ()=>{
    //     console.log('useEffect')
    //     document.title = counter.toString()
    //
    //     //сторонние эффекты sideEffects
    //     //api.getUsers().then('')
    //     //setInterval
    //     //IndexedDB
    //     //document.getElementById
    //     //document.title = 'User '
    // }, [counter] )

    // useEffect( ()=>{
    //     console.log('useEffect every render')
    // })
    //
    // useEffect( ()=>{
    //     console.log('useEffect first')
    // }, [] )
    //
    // useEffect( ()=>{
    //     console.log('useEffect every when counter change')
    // }, [counter] )
    //
    // return <>
    //     Hello, {counter}
    //     <button onClick={() => setFake(fake + 1)}>+</button>
    // </>
}

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {

        // setTimeout(()=>{
        //     console.log('SetTimeout')
        //     document.title = counter.toString()
        // }, 1000)

        // setInterval(()=>{
        //     console.log("tick" + counter)
        //     setCounter((state)=> state + 1)
        // }, 1000)

    }, [])


    return <>
        counter: {counter} - fake: {fake}
        {/*<button onClick={() => setFake(fake + 1)}>fake</button>*/}
        {/*<button onClick={() => setCounter(counter + 1)}>counter</button>*/}
    </>
}



//все компоненты обернуть в react.memo