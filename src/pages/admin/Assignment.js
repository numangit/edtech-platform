import AddButton from "../../component/admin/assignment/AddButton";
import Assignments from "../../component/admin/assignment/Assignments";

const Assignment = () => {
    return (
        <section className="py-6 bg-primary">
            <div className="mx-auto max-w-full px-5 lg:px-20">
                <div className="px-3 py-20 bg-opacity-10">
                    <div className="w-full flex">
                        <AddButton />
                    </div>
                    <div className="overflow-x-auto mt-4">
                        <Assignments />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Assignment;