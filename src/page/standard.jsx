import { useState, useEffect,useRef } from "react";
import Header from "../components/header";
import './standard.css'

const Standard = () => {

    const [result, setResult] = useState("");
    
    
    const handleClick = (value) => {
        setResult((prev) => prev + value);
    };

    const allClear = () => {
        setResult("")
    }

    const removeOne = () => {
        setResult((prev) => prev.slice(0,-1)) 
    }

    const calculation = () => {
        const isValidExpression = /^-?\d+(\.\d+)?([+\-*/%]-?\d+(\.\d+)?)*$/;
        
        if (isValidExpression.test(result)) {
            try {
                // Evaluate the valid expression
                setResult((prev) => eval(prev).toString());
            } catch (error) {
                setResult("Error");
            }
        } else {
            setResult("Error"); // Handle invalid expressions
        }
    }

        

     
    

    return(
        <div className="main-container">
            <Header/>

            <div className="standard-container" >

                <div className="display">
                    
                    <input type="text" id="result" disabled value={result}  />
                </div>

                <div className="buttons">

                    <button onClick={() =>allClear()}>AC</button>
                    <button onClick={() =>removeOne()}>DEL</button>
                    <button onClick={() => handleClick('%')}>%</button>
                    <button onClick={() => handleClick('/')}>/</button>

                    <button className="num" onClick={() => handleClick('7')} >7</button>
                    <button className="num" onClick={() => handleClick('8')} >8</button>
                    <button className="num" onClick={() => handleClick('9')}>9</button>
                    <button onClick={() => handleClick('*')}>*</button>

                    <button className="num" onClick={() => handleClick('4')}>4</button>
                    <button className="num" onClick={() => handleClick('5')}>5</button>
                    <button className="num" onClick={() => handleClick('6')}>6</button>
                    <button onClick={() => handleClick('-')}>-</button>

                    <button className="num" onClick={() => handleClick('1')}>1</button>
                    <button className="num" onClick={() => handleClick('2')}>2</button>
                    <button className="num" onClick={() => handleClick('3')}>3</button>
                    <button onClick={() => handleClick('+')}>+</button>

                    <button className="num" onClick={() => handleClick('00')}>00</button>
                    <button className="num" onClick={() => handleClick('0')}>0</button>
                    <button className="num" onClick={() => handleClick('.')}>.</button>
                    <button className="equal" onClick={() =>calculation()} >=</button>

                </div>

            </div>
            
        </div>
    )
}; export default Standard