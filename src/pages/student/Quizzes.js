import QuizForm from '../../component/student/quizzes/QuizForm';
import QuizHeader from '../../component/student/quizzes/QuizHeader';

const Quizzes = () => {
    return (
        <section className="py-6 bg-primary">
            <div className="mx-auto max-w-7xl px-5 lg:px-0">
                <QuizHeader />

                <div className="space-y-8 ">
                    <QuizForm />
                </div>
            </div>
        </section>
    );
};

export default Quizzes;