import React from "react";
import ReactDOM from "react-dom";
// import { Timer } from "./components/timer";
const WishList = [

    {
        details: "DETAILS",
        deadline: "DEADLINE",
        importance: "IMPORTANCE",
        done: "DONE??"
    },
    {
        details: "wash dishes",
        deadline: "tonight",
        importance: "important",
        done: "no"
    },
    {
        details: "read c++",
        deadline: "Tuesday",
        importance: "urgent",
        done: "a little"
    },
    {
        details: "shopping",
        deadline: "next year",
        importance: "extremly important",
        done: "I wish"
    },
    {
        details: "go to sleep",
        deadline: "RIGHT NOW",
        importance: "needed",
        done: "not at all"
    },
    {
        details: "Buy Boots",
        deadline: "THIS SECOND, I'M SOAKING",
        importance: "SOS",
        done: "not close"
    },
    {
        details: "eat",
        deadline: "when hungry",
        importance: "a little",
        done: "chalomot balaila"
    }
 
 
];

  const OutputScreenRow = (props) => { 
    return ( 
        
      <div className="screen-row" style={{display:'inline'}}> 
        <input type="text" readOnly value={props.value} style={{color: 'red'}} /> 
      </div> 
    ) 
  }   

const Line=(props)=>{
    return(
        <div >< OutputScreenRow value={props.line.details}/>< OutputScreenRow value={props.line.deadline}/>< OutputScreenRow value={props.line.
            importance}/>< OutputScreenRow value={props.line.done}/> </div>
    )
}

const App = () => {
    return (
        <div  style={{color:"Green"}}>
        <h2 style={{backgroundColor: "lightblue"}}>My Wish list</h2>
         { WishList.map((line,i)=> <Line line={WishList[i]} key={i}/> )}</div>
    );
};
ReactDOM.render(<App />, document.getElementById("root"));
