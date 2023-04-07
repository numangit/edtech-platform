const Quiz = ({ quiz, index, setAnswers, answers }) => {

    //destructuring quiz
    const { id, question, options } = quiz || {};

    //function to get and store answers
    const getAnswers = (option, id) => {

        //check if data match
        const quizAnswers = answers?.find((answer) => answer?.quizId === id);
        const quizOptions = quizAnswers?.options?.find((answer) => answer?.id === option?.id);

        //conditions to select or unselect answers
        if (!quizAnswers) {

            const newQuizAnswers = { quizId: id, options: [{ ...option }] }
            setAnswers([...answers, newQuizAnswers]);

        } else if (quizAnswers && !quizOptions) {
            const newQuizAnswers = answers?.map((answer) => {
                if (answer?.quizId === id) {
                    return { ...quizAnswers, options: [...quizAnswers.options, { ...option }] }
                };
                return answer;
            });
            setAnswers(newQuizAnswers);

        } else if (quizAnswers && quizOptions) {
            const newQuizAnswers = answers?.map((answer) => {
                if (answer?.quizId === id) {
                    const newOptions = answer?.options?.filter((submittedOption) => submittedOption?.id !== option?.id)
                    return {
                        ...answer,
                        options: newOptions
                    }
                };
                return answer;
            });

            setAnswers(newQuizAnswers);
        };
    };

    return (
        <div key={id} className="quiz my-8">
            <h4 className="question">Quiz {index + 1} - {question}</h4>
            <form className="quizOptions">
                {
                    options?.map(option => <label
                        key={option?.id}
                        htmlFor={`option${option?.id}_q${id}`}>
                        <input
                            type="checkbox"
                            id={`option${option?.id}_q${id}`}
                            onClick={() => getAnswers(option, id)}
                        />
                        {option?.option}
                    </label>)
                }
            </form>
        </div>
    );
};

export default Quiz;