//function to check and mark quiz answers
export const checkAnswers = (answers, quizzes) => {

    let mark = 0;
    let totalWrong = 0;
    let totalCorrect = 0;

    answers?.forEach((quizAnswer) => {
        quizzes?.forEach((quiz) => {

            //check if both quiz matches
            if (quiz?.id === quizAnswer?.quizId) {

                //check answer
                const correctOptions = quiz?.options?.filter(({ isCorrect }) => isCorrect);
                const submittedOptions = quizAnswer?.options;
                const sameLength = correctOptions?.length === submittedOptions.length;
                const isAllCorrect = submittedOptions?.filter(({ isCorrect }) => isCorrect).length;

                if (sameLength && isAllCorrect) {
                    mark += 5;
                    totalCorrect = totalCorrect + 1;
                } else {
                    totalWrong = totalWrong + 1;
                };
            };
        });
    });

    return { mark, totalWrong, totalCorrect };
};