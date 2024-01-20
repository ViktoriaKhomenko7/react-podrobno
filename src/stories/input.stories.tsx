import React, {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Input',
    //component: input
}

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue)
    }

    return (
        <>
            <input onChange={onChange}/> - {value}
        </>
    )
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
//ссылки ref лучше избегать, но бывает, что не обходимо к ним обратиться
    return (
        <>
            <input ref={inputRef}/>
            <button onClick={save}>save</button>
            - actual value: {value}
        </>
    )
}


export const ControlledInput = () => {
    const [parentValue, setParenValue] = useState('')
    //в инпут закидываем пустую строку (потому что значение ParentValue в локальном стейте по умолчанию ''.
    //в инпуте срабатывает нажатие (н-р: буква а), срабатывает подписчик (onChange), мы достаем value,
    //в котором сидит буква а, и сетаем ее в локальный стейт, стейт меняется, в нем уже сидит буква а,
    //реакт перерисовывает компоненту, в parentValue сидит уже буква а и эта буква попадает в инпут
    //и инпут ее принудительно печатает

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParenValue(e.currentTarget.value)
    }

    return <input
        value={parentValue}
        onChange={onChange}/>

}

export const ControlledCheckbox = () => {
    const [parentValue, setParenValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParenValue(e.currentTarget.checked)
    }

    return <input
        type={'Checkbox'}
        checked={parentValue}
        onChange={onChange}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParenValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParenValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
    </select>
}


export const ControlledInputWithFixedValue = () => <input value={'it-incubator.by'}/>


//Что значит неконтролируемый инпут? - если мы можем вводить любое значение в инпут,
// + в нем значение меняется само по себе, нам его передавать внутрь не надо
//Контролируемый - это как будто там есть какой-то стейт (как <input value={'it-incubator.by'}/>)