import React, { useState } from "react";
import "./calculator.css";


    const Calculator = () => {
        const [input , setInput] = useState("");

        const handleInput =(value) => {
            setInput(input + value);
        };

        const calculateResult = () => {
            try {
                setInput(eval(input).toString());

            } catch {
                setInput("error")
            }
        };

        const clearInput = () => {
            setInput("");
        };

        const Sign = () => {
            if (input && !isNaN(input)) {
              setInput((prev) => (parseFloat(prev) * -1).toString());
            }
          };

        return(
            <div className="Calculator">
                <div className="display">
                    {input || "0"}
                </div>
               
              <div className="buttons">
                <button className="btn_opr" onClick={clearInput}>AC</button>
                <button id="calcbtn" onClick={() => Sign()}>±</button>
                <button id="calcbtn" onClick={() => handleInput("%")}>%</button>
                <button id="btn_equ"  onClick={() => handleInput("/")} className="btn_opr">÷</button>
                <button id="calcbtn" onClick={() => handleInput("7")}>7</button>
                <button id="calcbtn" onClick={() => handleInput("8")}>8</button>
                <button id="calcbtn" onClick={() => handleInput("9")}>9</button>
                <button id="btn_equ" onClick={() => handleInput("*")} className="btn_opr">×</button>
                <button id="calcbtn" onClick={() => handleInput("4")}>4</button>
                <button id="calcbtn" onClick={() => handleInput("5")}>5</button>
                <button id="calcbtn" onClick={() => handleInput("6")}>6</button>
                <button id="btn_equ" onClick={() => handleInput("-")} className="btn_opr">-</button>
                <button id="calcbtn" onClick={() => handleInput("1")}>1</button>
                <button id="calcbtn" onClick={() => handleInput("2")}>2</button>
                <button id="calcbtn" onClick={() => handleInput("3")}>3</button>
                <button id="btn_equ" onClick={() => handleInput("+")} className="btn_opr">+</button>
                <button  onClick={() => handleInput("0")} className="btn_zero">0</button>
                <button id="calcbtn" onClick={() => handleInput(",")}>.</button>
                <button className="btn_opr" id="btn_equ" onClick={calculateResult}>=</button>
                </div>
            </div>
        );

    }






export default Calculator;