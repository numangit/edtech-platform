import AddButton from '../../component/admin/adminVideo/AddButton';
import Videos from '../../component/admin/adminVideo/Videos';

const AdminVideos = () => {
    return (
        <section className="py-6 bg-primary">
            <div className="mx-auto max-w-full px-5 lg:px-20">
                <div className="px-3 py-20 bg-opacity-10">
                    <div className="w-full flex">
                        <AddButton />
                    </div>
                    <Videos />
                </div>
            </div>
        </section>
    );
};

export default AdminVideos;