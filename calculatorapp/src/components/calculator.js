import React, { useState } from 'react';
import CalculatorTitle from './calculatorTitle.js';
import OutputScreen from './outputScreen.js';
import Button from './button.js';

function Calculator() {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const handleClick = (event) => {
        // get the value from the target element (button)
        const value = event.target.value;

        switch (value) {
            case '=': {
                // if it's an equal sign, use the eval module
                // to evaluate the question ,convert the answer
                // (in number) to String
                if (question !== '') {
                    let ans = '';
                    try {
                        ans = eval(question);
                    }
                    catch (err) {
                        setAnswer("Math Error");
                    }
                    if (ans === undefined)
                        setAnswer("Math Error");
                    else {
                        setAnswer(ans);
                        setQuestion("");
                    }

                    break;
                }
            }
            case 'Clear': {
                // if it's the Clears sign, just clean our 
                // question and answer in the state
                setAnswer("");
                setQuestion("");
                break;
            }

            case 'Delete': {
                var str = question;
                str = str.substr(0, str.length - 1);
                setQuestion(str);
                break;
            }

            default: {
                // for every other command, update the answer in the state
                setQuestion(question + value);
                break;
            }
        }
    }

    return (
        <div className="frame">
            <CalculatorTitle value="Calculator" />
            <div className="mainCalc">
                <OutputScreen question={question} answer={answer} />
                <div className="button-row">
                    <Button label={'Clear'} handleClick={handleClick} />
                    <Button label={'Delete'} handleClick={handleClick} />
                    <Button label={'.'} handleClick={handleClick} />
                    <Button label={'/'} handleClick={handleClick} />
                </div>
                <div className="button-row">
                    <Button label={'7'} handleClick={handleClick} />
                    <Button label={'8'} handleClick={handleClick} />
                    <Button label={'9'} handleClick={handleClick} />
                    <Button label={'*'} handleClick={handleClick} />
                </div>
                <div className="button-row">
                    <Button label={'4'} handleClick={handleClick} />
                    <Button label={'5'} handleClick={handleClick} />
                    <Button label={'6'} handleClick={handleClick} />
                    <Button label={'-'} handleClick={handleClick} />
                </div>
                <div className="button-row">
                    <Button label={'1'} handleClick={handleClick} />
                    <Button label={'2'} handleClick={handleClick} />
                    <Button label={'3'} handleClick={handleClick} />
                    <Button label={'+'} handleClick={handleClick} />
                </div>
                <div className="button-row">
                    <Button label={'0'} handleClick={handleClick} />
                    <Button label={'='} handleClick={handleClick} />
                </div>
            </div>
        </div>
    );
}

// Export Calculator Component.
export default Calculator;