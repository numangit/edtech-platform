import React from 'react';
import VideoTable from '../../component/admin/adminVideo/VideoTable';
import AddVideo from '../../component/admin/adminVideo/AddVideo';

const AdminVideos = () => {
    return (
        <section className="py-6 bg-primary">
            <div className="mx-auto max-w-full px-5 lg:px-20">
                <div className="px-3 py-20 bg-opacity-10">
                    <AddVideo />
                    <div className="overflow-x-auto mt-4">
                        <VideoTable />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminVideos;