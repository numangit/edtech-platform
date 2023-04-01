import React from 'react';

const Quiz = ({ quiz, index }) => {

    //destructuring quiz
    const { id, question, options } = quiz || {};

    return (
        <div className="quiz">
            <h4 className="question">Quiz {index + 1} - {question}</h4>
            <form className="quizOptions">
                {
                    options?.map(option => <label
                        key={option?.id}
                        htmlFor={`option${option?.id}_q${id}`}>
                        <input type="checkbox" id={`option${option?.id}_q${id}`} />
                        {option?.option}
                    </label>)
                }
            </form>
        </div>
    );
};

export default Quiz;