import { action } from '@storybook/addon-actions'
import {Accordion} from './Accordion';
import React, {useState} from "react";


export default {
    title: 'Accordion',
    component: Accordion
};



const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')
export const MenuCollapsedMode = () => <Accordion onClick={onClickCallback} items={[]} titleValue={'Menu'} collapsed={true} onChange={callback}/>
export const UsersUnCollapsedMode = () => <Accordion onClick={onClickCallback} items={[{title: 'Dima', value: 1}, {title: 'Valera', value: 2}, {title: 'Viktor', value: 3}, {title: 'Igor', value: 4}]} titleValue={'Users'} collapsed={false} onChange={callback}/>
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion
        onClick={onClickCallback}
        items={[
            {title: 'Dima', value: 1},
            {title: 'Valera', value: 2},
            {title: 'Viktor', value: 3},
            {title: 'Igor', value: 4}
        ]}
        titleValue={"Users"}
        collapsed={value}
        onChange={() => setValue(!value)}/>
}








//---------------------------------------------------------------------------------------------------------------

// import type {Meta, StoryObj} from '@storybook/react';
// import { action } from '@storybook/addon-actions'
//
// import {Accordion} from './Accordion';
// import React, {useState} from "react";
//
// export default {
//     component: Accordion,
// };
//
// // export default meta;
// // type Story = StoryObj<typeof Accordion>;
//
//
// //это способ писать истории, но больше для сторибук
// //
// // export const FirstStory: Story = {
// //     args: {
// //         titleValue: 'Hello',
// //         collapsed: true
// //     }
// // }
//
//
// const onChangeHandler = action('onChange')
//
// //это способ писать истории, но больше для понимания реакта
// export const CollapsedAccordion = () => {
//     return <Accordion
//         titleValue={"Collapsed Accordion"}
//         collapsed={true}
//         onChange={onChangeHandler}/>
// }
//
//
// export const OpenedAccordion = () => {
//     return <Accordion
//         titleValue={"Opened Accordion"}
//         collapsed={false}
//         onChange={() => {}}/>
// }
//
// export const AccordionDemo = () => {
//     const [collapsed, setCollapsed] = useState(false)
//     return <Accordion
//         titleValue={"Accordion"}
//         collapsed={collapsed}
//         onChange={() => {
//             setCollapsed(!collapsed)
//         }}/>
// }