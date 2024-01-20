
import React from "react";
import {action} from '@storybook/addon-actions';
import {UncontrolledOnnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnnOff',
    component: UncontrolledOnnOff
}

const callback = action('clicked ON or OFF')
export const OnMode = () => <UncontrolledOnnOff defaultOn={true} onChange={callback}/>
export const OffMode = () => <UncontrolledOnnOff defaultOn={false} onChange={callback}/>
const BugMode = () => <div>Unsync when change defaultValue when already rendered</div>
// export const DefaultInputValue = () => <input defaultValue={'yo'}/>