import MarkTable from "../../component/admin/assignmentMark/MarkTable";
import Status from "../../component/admin/assignmentMark/Status";

const AssignmentMark = () => {
    return (
        <section className="py-6 bg-primary">
            <div className="mx-auto max-w-full px-5 lg:px-20">
                <div className="px-3 py-20 bg-opacity-10">
                    <Status />
                    <div className="overflow-x-auto mt-4">
                        <MarkTable />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AssignmentMark;