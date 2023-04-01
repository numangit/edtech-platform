import React from 'react';
import VideoTable from '../../component/admin/adminVideo/VideoTable';

const AdminVideos = () => {
    return (
        <section className="py-6 bg-primary">
            <div className="mx-auto max-w-full px-5 lg:px-20">
                <div className="px-3 py-20 bg-opacity-10">
                    <div className="w-full flex">
                        <button className="btn ml-auto">Add Video</button>
                    </div>
                    <div className="overflow-x-auto mt-4">
                        <VideoTable />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminVideos;