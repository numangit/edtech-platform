import React from 'react';

const Quiz = ({ quiz, index }) => {

    //destructuring quiz
    const { id, question, options } = quiz || {};

    return (
        <div className="quiz my-8">
            <h4 className="question">Quiz {index + 1} - {question}</h4>
            <div className="quizOptions">
                {
                    options?.map(option => <label
                        key={option?.id}
                        htmlFor={`option${option?.id}_q${id}`}>
                        <input type="checkbox" id={`option${option?.id}_q${id}`} />
                        {option?.option}
                    </label>)
                }
            </div>
        </div>
    );
};

export default Quiz;