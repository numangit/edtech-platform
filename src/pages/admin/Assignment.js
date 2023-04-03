import AddAssignment from "../../component/admin/assignment/AddAssignment";
import AssignmentTable from "../../component/admin/assignment/AssignmentTable";

const Assignment = () => {
    return (
        <section className="py-6 bg-primary">
            <div className="mx-auto max-w-full px-5 lg:px-20">
                <div className="px-3 py-20 bg-opacity-10">
                    <AddAssignment />
                    <AssignmentTable />
                </div>
            </div>
        </section>
    );
};

export default Assignment;