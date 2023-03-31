import { useGetVideosQuery } from '../../../features/videos/videoApi';
import Video from './Video';

const Videos = () => {

    //hooks
    const { data: videos, isLoading, isError, error } = useGetVideosQuery() || {};

    //what to render
    let content = null;

    if (isLoading) {
        content = <div className="text-center">Loading...</div>;
    } else if (!isLoading && isError) {
        content = <div className="text-center"> {error?.data}</div>;
    } else if (!isLoading && !isError && videos?.length === 0) {
        content = <div className="text-center">No videos found!</div>;
    } else if (!isLoading && !isError && videos?.length > 0) {
        content = videos.map(video => <Video key={video.id} video={video} />)
    }

    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto bg-secondary p-4 rounded-md border border-slate-50/10 divide-y divide-slate-600/30">
            {content}
        </div>
    );
};

export default Videos;