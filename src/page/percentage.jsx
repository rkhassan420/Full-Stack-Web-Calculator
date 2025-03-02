import { useState } from "react";
import Header from "../components/header";
import axios from 'axios'
import "./percentage.css"

const Percentage = () => {

    const [totalMarks, setTotalMarks] = useState("");
    const [percentage, setPercentage] = useState("");
    const [obtainedMarks, setObtainedMarks] = useState("");
    const [completeMarks, setCompleteMarks] = useState("");
    const [result, setResult] = useState("");
    const [newResult, setNewResult] = useState("");
    const [error, setError] = useState("");
    const API_URL =" https://prolific-unity-production.up.railway.app/api/percentage";


    const calculatePercentage = async () => {

        try {           
            const response = await axios.post(`${API_URL}/calculate`, {

               totalMarks: parseFloat(totalMarks),
               percentage: parseFloat(percentage),               
              
            });        
      
            setResult(parseFloat(response.data).toFixed(3));
            setError("");

          } catch (error) {
            console.error("Error calculating percentage", error);
          }
    };


    const calculateMarksObtained = async () => {
        try {
          const response = await axios.post(`${API_URL}/obtained`, {

            obtainedMarks: parseFloat(obtainedMarks),
            completeMarks: parseFloat(completeMarks),

          });
          
          setNewResult(parseFloat(response.data).toFixed(3));

        } catch (error) {

          console.error("Error calculating obtained marks", error);
        }
      };

    

    return(
        <div>
            <Header/>

            <div className="per-main-container">

                <h1>Percentage Calculator</h1>

                <div className="per-box">

                <p>What is</p>

                <input               
                    type="number"                    
                    value={totalMarks}  
                    onChange={(e) => setTotalMarks(e.target.value)}                       
               
                />

                <p>% of</p>

               <input               
                    type="number"                    
                    value={percentage}
                    onChange={(e) => setPercentage(e.target.value)}            
               
                />

                <p>?</p>

                <button onClick={calculatePercentage} >Calculate  </button>

                { (

                    <p className="answer">{result}</p>
                    

                )}

                </div>

                <div className="per-box">






<input               
    type="number"    
    value={obtainedMarks}  
    onChange={(e) => setObtainedMarks(e.target.value)}                       

/>

<p>is what % of</p>

<input               
    type="number"    
    value={completeMarks}
    onChange={(e) => setCompleteMarks(e.target.value)}            

/>

<p>?</p>

<button onClick={calculateMarksObtained} >Calculate</button>

{ (

    <p id="myText" className="answer">{newResult}</p>
    

)}

</div>



              

            </div>

            
                    
                                           

               

            
           


        </div>
    )
}; export default Percentage