import AddButton from "../../component/admin/quiz/AddButton";
import Quizzes from "../../component/admin/quiz/Quizzes";

const AdminQuiz = () => {
    return (
        <section className="py-6 bg-primary">
            <div className="mx-auto max-w-full px-5 lg:px-20">
                <div className="px-3 py-20 bg-opacity-10">
                    <div className="w-full flex">
                        <AddButton />
                    </div>
                    <div className="overflow-x-auto mt-4">
                        <Quizzes />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminQuiz;