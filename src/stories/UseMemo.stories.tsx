import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountingExample1 = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1


//внутрь передаем ф-цию, кот. будет делать сложное вычисление
// вторым параметром передаем deps (зависимости),
//на кот. UseMemo будет обращать внимание, чтобы перезапускать эту ф-цию
//или не презапускать
//если оставим зависимости пустыми - это значит,
//что UseMemo запомнится один раз
//и всегда будет возвращаться одно и то же значение

//но у нас подсчет значения resultA зависит от a, поэтому
//мы говорим, что у тебя в зависимости [a] - если а в инпуте не поменялось
//не нужно перезапускать колбэк


    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            // resultA *= i
            tempResultA = tempResultA * i

        }
        return tempResultA
    }, [a])
//эта запись значит: useMemo, произведи эти вычисления и запомни их,
//до тех пор, пока а не поменяется, если а меняется, перезапусти
//эти вычисления еще раз, в противном случае возвращай нам то,
//что ты запомнил и не делай пересчет


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        {/*Мы делаем приведение типов (+) или Number(), потому что в input всегда строка, а у нас в стейте число*/}
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr></hr>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const SecretUsers = (props: { users: string[] }) => {
    console.log('users secret')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(SecretUsers)

export const HelpsToReactMemo = () => {

    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem', 'Katya'])


    const newArr = useMemo(() => {
        return users.filter(el => el.toLowerCase().indexOf('a') > -1)

    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={()=>addUser()}>add user</button>
        {counter}
        <Users users={newArr}/>
    </>
}
