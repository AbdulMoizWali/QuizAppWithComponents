import { useState } from "react"
import Option from "./Components/Option";
import { questions, TotalMarks } from "./QuizQuestions"
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2


export default function QuizApp(){
    
    const [question, setQuestion] = useState(questions);
    const [questionNum, setQuestionNum] = useState(0);
    // let quizInfo = {
    //     quizName: 'Quiz#1',
    //     quizMarks: TotalMarks,
    //     currentQuestion: questionNum + 1,
    //     totalQuestion: question.length
    // }

    const [quizInfo, setQuizInfo] = useState({
        quizName: 'Quiz#1',
        quizMarks: TotalMarks(),
        currentQuestion: 0,
        totalQuestion: question.length
    })

    const [mark, setMark] = useState(0);

    const [result, setResult] = useState(false);

    let OptionSelected = (selectedOpt) => {
        console.log(selectedOpt);
        if (question[questionNum].answer == selectedOpt) {
            setMark((prevMark)=> prevMark + 1);
        }
        (questionNum == question.length - 1) ? setResult(true) : setQuestionNum((prevQuesNum) => prevQuesNum + 1);
        quizInfo.currentQuestion = questionNum + 1;
        setQuizInfo({...quizInfo});
    }

    return(
        <div>
            <div>
                <h1>{quizInfo.quizName}</h1>
                <p>{quizInfo.quizMarks} Quiz Marks</p>
                <p>{quizInfo.currentQuestion} / {quizInfo.totalQuestion}</p>
            </div>
            <div>
                <h1>{question[questionNum].numb + ") " +  question[questionNum].question}</h1>
                <p>{question[questionNum].marks} Marks</p>
                {
                    question[questionNum].options.map((opt, i)=>{
                        return (
                            <Option key={i} label={opt} onSelect={(selectedOpt)=> OptionSelected(selectedOpt)} />
                        )
                    })
                }
            </div>
        </div>
    );
}