import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: ()=>void
}
export const Accordion = (props: AccordionPropsType) => {

    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onChange={props.onChange}
            />
            {!props.collapsed && <AccordionBody/>}
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

export const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}