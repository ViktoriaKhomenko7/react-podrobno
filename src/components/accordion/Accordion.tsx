import React from 'react';

type ItemType ={
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: ()=>void
    items: ItemType[]
    onClick: (value: any)=>void

}
export const Accordion = (props: AccordionPropsType) => {

    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onChange={props.onChange}
            />
            {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string
    onChange: ()=>void
}

export const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={(e) => props.onChange()}>--{props.title}--</h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any)=>void
}

export const AccordionBody = (props: AccordionBodyPropsType) => {
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li> )}
        </ul>
    )
}

//index Нельзя использовать в качесвтве ключа, если массив может меняться ил есть кнопки удаения, добавления и тд
//можно только когда массив будет оставаться неизменным
