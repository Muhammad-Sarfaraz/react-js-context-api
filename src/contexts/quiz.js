import { createContext,useReducer} from "react";
import questions from '../data'
import { shuffleAnswers } from "../helpers";

const initialState={
    currentQuestionIndex:0,
    questions,
    showResults:false,
    answers:shuffleAnswers(questions[0]),
    currentAnswer:'',
    correctAnswerCount:0,
}

const reducer=(state,action)=>{

    console.log(state,action); 

    switch(action.type){
case "SELECT_ANSWER":{
    const correctAnswersCount=
    action.payload===state.questions[state.currentQuestionIndex].correctAnswer 
    ? state.correctAnswerCount+1
    : state.correctAnswerCount;
return {
    ...state,
    currentAnswer:action.payload,
    correctAnswersCount,
}
}
    
case "NEXT_QUESTION":{
    const showResults=state.currentQuestionIndex===state.questions.length-1;
    const currentQuestionIndex=showResults ? state.currentQuestionIndex:state.currentQuestionIndex+1;
    const answers=showResults ? [] : shuffleAnswers(state.questions[currentQuestionIndex])
      console.log("Current State",showResults);
         return {
             ...state,
             //currentQuestionIndex:state.currentQuestionIndex+1,
             currentQuestionIndex,
             showResults,
             answers,
             currentAnswer:"",
         }
}
case "RESTART":{
    return initialState;
}
default:{
    return state;
}
    }

    // if(action.type==='NEXT_QUESTION'){
    // //     const showResults=state.currentQuestionIndex===state.questions.length-1;
    // //    const currentQuestionIndex=showResults ? state.currentQuestionIndex:state.currentQuestionIndex+1;
    // //    const answers=showResults ? [] : shuffleAnswers(state.questions[currentQuestionIndex])
    // //      console.log("Current State",showResults);
    // //         return {
    // //             ...state,
    // //             //currentQuestionIndex:state.currentQuestionIndex+1,
    // //             currentQuestionIndex,
    // //             showResults,
    // //             answers,
    // //         }
        
    // }

    // if(action.type==="RESTART"){
    //     return initialState;
    // }
   
   // return state;
}


export const QuizContext=createContext();

export const QuizProvider=({children})=>{
    const value =useReducer(reducer,initialState)
    console.log("state",value);
    return <QuizContext.Provider value={value} >{children}</QuizContext.Provider>;
}