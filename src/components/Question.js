import { useContext } from 'react';
import { QuizContext } from '../contexts/quiz';
import Answer from './Answer'

const Question = ({questions}) =>{

    const [quizState,dispatch]=useContext(QuizContext)

    console.log("component",quizState);

    const currentQuestion=quizState.questions[quizState.currentQuestionIndex];

    console.log( currentQuestion.question);

  //  console.log(questions);

    return (
        <div>
                <div className="question">{currentQuestion.question}</div>
                <div className="answers">
                
                {quizState.answers.map((answer,index)=>(
                    <Answer answerText={answer} 
                    currentAnswer={quizState.currentAnswer}
                    correctAnswer={currentQuestion.correctAnswer}
                     index={index} key={index} onSelectAnswer={(answerText)=>dispatch({type:"SELECT_ANSWER",payload:answerText})} />
                ))}


                </div>
        </div>

    )
}

export default Question;