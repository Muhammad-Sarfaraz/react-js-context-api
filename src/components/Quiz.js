
import {useReducer,useContext} from "react"
import { QuizContext } from "../contexts/quiz";
import Question from './Question'



const Quiz=()=>{

   // const [currentQuestionIndex,setcurrentQuestionIndex]=useState(0);

   // console.log(currentQuestionIndex);



//    const [state,dispatch]=useReducer(reducer,initialState)
    const [quizState,dispatch]=useContext(QuizContext);
  
    return (
        <div className="quize">
            {quizState.showResults&&(
                <div className="results">
                    <div className="congratulations">Congratulations</div>
                    <div className="results-info">
                        <div>
                            You have completed the quiz.
                        </div>
                        <div>
                            You have got {quizState.correctAnswersCount} of {quizState.questions.length} 
                        </div>
                    </div>
                    <div className="next-button" onClick={()=>dispatch({type:"RESTART"})}>
                Restart
                    </div>
                </div>
            )}
        {!quizState.showResults &&(
             
<div>
       
        <div className="score">
            Question {quizState.currentQuestionIndex+1}/{quizState.questions.length}
        </div>
        <Question />
        <div className="next-button" onClick=
        {()=>dispatch ({type:"NEXT_QUESTION"})}>Next
        </div>
  
        </div>
     )}


        </div>

        )
}

export default Quiz;