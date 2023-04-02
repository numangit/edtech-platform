import Assignments from "../../component/admin/assignment/Assignments";

const Assignment = () => {
    return (
        <section className="py-6 bg-primary">
            <div className="mx-auto max-w-full px-5 lg:px-20">
                <div className="px-3 py-20 bg-opacity-10">
                    <div className="w-full flex">
                        <button className="btn ml-auto">Add Assignment</button>
                    </div>
                    <Assignments />
                </div>
            </div>
        </section>
    );
};

export default Assignment;