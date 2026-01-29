import React from 'react'
import { useState } from 'react'

const App = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result,setResult] = useState("");

  const calculateBMI = () => {

    if(height <= 0 || weight <= 0){
      setResult("Please enter valid values");
      return;
    }
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters).toFixed(1);
    

    {/*Set Category of bmi */}
    let category = "";
    if(bmi < 18.5) category = "Underweight";
    else if(bmi >= 18.5 && bmi < 25) category = "Normal";
    else if(bmi >= 25 && bmi < 30) category = "Overweight";
    else category = "Obese";

    setResult(`Your BMI is: ${bmi} and you are (${category})`);
  }

  return (
    <div className="container">
        <h1>BMI Calculator (React)</h1>
        <h3>By Abdusalaam</h3>

        {/*Height */}
        <label className="mylabel" htmlFor="height">Height (cm)</label>
        <input 
        type="number" 
        id="height" 
        placeholder='e.g 179'
        value={height}
        onChange={(e) => setHeight(e.target.value)} />

        {/*Weight */}
        <label className="mylabel" htmlFor="weight">Weight (kg)</label>
        <input 
        type="number" 
        id="weight" 
        placeholder='e.g 75'
        value={weight}
        onChange={(e) => setWeight(e.target.value)} />

        <button 
        onClick={calculateBMI} id="confirm">Calculate BMI</button>

        <div className="results">
            <span 
            id="result"
            className={result ? "show" : "Your result Shows here"}>{result}</span>
        </div>

    </div>
  )
}

export default App
