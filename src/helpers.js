export const shuffleAnswers=(question)=>{
    const unshuffleAnswers=[
        question.correctAnswer,
        ...question.incorrectAnswers
    ]

    return unshuffleAnswers.map((unshuffledAnswer)=>({
     sort:Math.random(),
     value:unshuffledAnswer,
    })).sort((a,b)=>a.sort-b.sort).map((a)=>a.value);
}