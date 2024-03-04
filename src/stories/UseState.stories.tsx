import React, {useMemo, useState} from "react";

export default {
    title: 'useState demo'
}

const generateData = () => {
    console.log("generateData")
    return 1
}

export const Example1 = () => {
    console.log('Example1')

    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => state + 1

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}

