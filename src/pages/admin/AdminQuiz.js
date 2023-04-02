import QuizTable from "../../component/admin/quiz/QuizTable";

const AdminQuiz = () => {
    return (
        <section className="py-6 bg-primary">
            <div className="mx-auto max-w-full px-5 lg:px-20">
                <div className="px-3 py-20 bg-opacity-10">
                    <div className="w-full flex">
                        <button className="btn ml-auto">Add Quiz</button>
                    </div>
                    <QuizTable />
                </div>
            </div>
        </section>
    );
};

export default AdminQuiz;