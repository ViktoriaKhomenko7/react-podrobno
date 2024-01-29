import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/rating/Rating";
import {UncontrolledOnnOff} from "./components/onOff/UncontrolledOnOff";
import {Accordion} from "./components/accordion/Accordion";
import {UnControlledRating} from "./components/selfcontrolledRating/UncontrolledRating";
import {Select} from "./components/select/Select";

function App() {

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  let [switchOn, setSwitchOn] = useState<boolean>(false)

  return (
      <div className={"App"}>

        {/*<OnnOff on={switchOn} onChange={setSwitchOn}/>*/}
        {/*<onOff on={true} onChange={(on:boolean)=>{alert(on)}}/>*/}

        <UncontrolledOnnOff onChange={setSwitchOn}/> {switchOn.toString()}

        {/*//     <UncontrolledOnnOff on={false}/>*/}
        {/*//     <UncontrolledOnnOff on={true}/>*/}

        {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
        {/*<UncontrolledAccordion titleValue={"Users"}/>*/}
        {/*<UnControlledRating />*/}

        <Rating value={ratingValue}
                onClick={setRatingValue}/>

        {/*<Accordion*/}
        {/*    items={items}*/}
        {/*    onClick={value}*/}
        {/*    titleValue={"Menu"}*/}
        {/*    collapsed={accordionCollapsed}*/}
        {/*    onChange={() => {*/}
        {/*      setAccordionCollapsed(!accordionCollapsed)*/}
        {/*    }}/>*/}
        {/*<Select value={value} onChange={()=>{}} items={items}/>*/}

      </div>

      // <div>
      //     <UnControlledRating value={1}/>
      //     <UnControlledRating value={2}/>
      //     <UnControlledRating value={3}/>
      //     <UnControlledRating value={4}/>
      //     <UnControlledRating value={5}/>
      // </div>
  );
}

// type PageTitlePropsType = {
//     title: string
// }
//
// const PageTitle = (props: PageTitleProposType) => {
//     return (
//         <h1>--{props.title}--</h1>
//     )
// }

export default App;
