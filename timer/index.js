import React, { useState ,useRef} from 'react';
import ReactDOM from 'react-dom';




const App = (props) => {

    const [s_counter, setCounter_s] = useState(0)
    const [m_counter, setCounter_m] = useState(0)
    const [h_counter, setCounter_h] = useState(0)
    const timeout=useRef(null)
    console.log(timeout)
    console.log(s_counter)
    console.log(m_counter)
    console.log(h_counter)
     const restart = () => {
    clearTimeout(timeout.current)
     setCounter_h(0)
     setCounter_m(0)
     setCounter_s(0)
     }

     timeout.current=setTimeout(() => {

        if (s_counter==59)
        {
            setCounter_s(0)
            setCounter_m(m_counter + 1)         
            if(m_counter==59)
            {
                setCounter_m(0)
                setCounter_h(h_counter + 1) 
            }
        }
        else setCounter_s(s_counter + 1) //counter++
    }, 1000)
    
    // for(let i=0; i<10; i++) {
    //     console.log(props.counter)
    // }
    return (
        <div style={{ margin: '10%' }}>
            <h1> timer</h1>
            <h2>{h_counter}:{m_counter}:{s_counter} </h2>
            <br />
            <button onClick={restart}>restart</button>
        </div>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
