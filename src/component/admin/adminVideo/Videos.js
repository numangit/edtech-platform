import { useGetVideosQuery } from '../../../features/videos/videoApi';
import Error from '../../common/Error';
import TableLoader from '../../common/loader/TableLoader';
import Video from './Video';

const Videos = () => {

    //getting the videos
    const { data: videos, isLoading, isError, error } = useGetVideosQuery() || {};

    return (
        <>
            {
                (isLoading) && <TableLoader />
            }
            {
                (!isLoading && isError) && <Error message={error?.error} />
            }
            {
                (!isLoading && !isError && videos?.length === 0)
                && <tr><td className="text-center">No videos found!</td></tr>
            }
            {
                (!isLoading && !isError && videos?.length > 0)
                && <table className="divide-y-1 text-base divide-gray-600 w-full">
                    <thead>
                        <tr>
                            <th className="table-th">Video Title</th>
                            <th className="table-th">Description</th>
                            <th className="table-th">Action</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-600/50">
                        {
                            videos?.map(video => <Video key={video.id} video={video} />)
                        }
                    </tbody>
                </table>
            }

        </>
    );
};

export default Videos;