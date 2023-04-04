import React from 'react';
import VideoTableRow from './VideoTableRow';
import { useGetVideosQuery } from '../../../features/videos/videoApi';
import Error from '../../common/Error';

const VideoTable = () => {

    //getting the videos
    const { data: videos, isLoading, isError, error } = useGetVideosQuery() || {};

    //what to render
    let content = null;

    if (isLoading) {
        content = <tr><td className="text-center">Loading...</td></tr>;
    } else if (!isLoading && isError) {
        content = <tr><td> <Error message={error?.error} /></td></tr>;
    } else if (!isLoading && !isError && videos?.length === 0) {
        content = <tr><td className="text-center">No videos found!</td></tr>;
    } else if (!isLoading && !isError && videos?.length > 0) {
        content = videos.map(video => <VideoTableRow key={video.id} video={video} />)
    };

    return (
        <table className="divide-y-1 text-base divide-gray-600 w-full">
            <thead>
                <tr>
                    <th className="table-th">Video Title</th>
                    <th className="table-th">Description</th>
                    <th className="table-th">Action</th>
                </tr>
            </thead>

            <tbody className="divide-y divide-slate-600/50">
                {content}
            </tbody>
        </table>
    );
};

export default VideoTable;