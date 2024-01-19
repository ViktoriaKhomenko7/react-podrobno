import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions'

import {Accordion} from './Accordion';
import React, {useState} from "react";
import {OnOff} from "../onOff/OnOff";

export default {
    title: 'Accordion',
    component: Accordion
};

const callback = action('accordion mode change event fired')
export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback}/>
export const UsersUncollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} onChange={callback}/>
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)}/>
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