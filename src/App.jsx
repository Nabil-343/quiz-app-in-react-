import React, {useState} from "react";
import questions from "./questions.json" 
import "@fontsource/dosis"; // Defaults to weight 400


export default function App(){
    let [currentQIndex, setCurrentQIndex] = useState(0);
    let [selectedOptionIndex, setselectedOptionIndex] = useState(null);



    const onOptionSelected = (selectedOptionIndex) => {
        setselectedOptionIndex (selectedOptionIndex);
    //     if(selectedOptionIndex === questions[currentQIndex].correctOptionIndex)
    //     alert("true");  
    // else
    // alert("wrong");
    };                                 

    const nextQuestion = () => {
        setselectedOptionIndex (null)
         setCurrentQIndex(currentQIndex+1); 
    }
    const restart =() =>  {
        setCurrentQIndex (0);
    }
    if (currentQIndex === questions.length)
    return(
        <div className="container my-5">
            <h1>Online Quiz</h1>
            <h3>Finished !</h3>
            <div className="d-grid gap-2 col-6 mx-auto">
                <button type="button" onClick={restart} className="btn btn-outline-secondary">Restart</button>
                </div>
        </div>
)

    return(
        <div className="container-md mx-auto mt-5" >
            <h1>Online Quiz about JavaScript</h1>
            
                <div className="card mb-5" key={questions[currentQIndex]?.id}>
                    <div className="card-header">{questions[currentQIndex]?.statement}</div>
                    <ul className="list-group list-group-flush">
                     
                    {questions[currentQIndex].options.map((option,index) => (
                                <li className={selectedOptionIndex === index? "list-group-item active" : "list-group-item"}
                                    key={index}
                                    onClick={() => onOptionSelected(index)}>
                                    {option}
                                </li>
                            ))}
                        
                    </ul>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                <button type="button" onClick={nextQuestion} className="btn btn-outline-secondary">Next Question</button>
                </div>
                
                
            </div>
                    
    );
}



// import React from "react";
// import questions from "./questions.json" 
// import "@fontsource/dosis"; // Defaults to weight 400
// {questions.map((q) => (

// export default function App(){

//     return(
//     <div class="container-md mx-auto mt-5" >
//         <h1>Online Quiz about JavaScript</h1>
        
//         {questions.map((q) => (
//         <div className="card mb-5" key={q.id}>
//             <div className="card-header">{q.statement}</div>
//         <ul className="list-group list-group-flush">
//         }
//             {
//                 q.options.map((option,index) => (
//                  <li className={index === q.correctOpionIndex ? "list-group-item active" :"list-group-item"}
//                  key=index={}
//                  onClick={( =>onOptionSelected(q,index)}
//                  {option}
//                  </li>
//                 ))
//             }
//         </ul>
//         </div>

//     )
// }
