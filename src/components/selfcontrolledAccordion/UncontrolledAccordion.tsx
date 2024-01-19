import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}
export const UncontrolledAccordion = (props: AccordionPropsType) => {

    let [collapsed, setCollapsed] = useState(true)

    // if(props.collapsed) {
    //     return (
    //         <div>
    //             <AccordionTitle title={props.titleValue}/>
    //         </div>
    //     );
    // } else {


    //1 способ:
    // const toggleAcc = () => {
    //     setCollapsed(!collapsed)
    //     // setCollapsed((prev) => !prev) так лучше
    // в onClick={toggleAcc}

    //2 способ: в onClick колбэк с функцией из useState и в параметре
    // противоположное значение (в useState true - значит тут не true = false = !collapsed)

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {
                setCollapsed(!collapsed)
            }}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

export const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>--{props.title}--</h3>
    )
}

export const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

// вместо кнопки кликаем по h3, вызывая здесь колбэк, который
// пришел извне