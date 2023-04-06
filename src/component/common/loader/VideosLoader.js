import Lottie from 'lottie-react';
import loader from '../../../assets/94510-list-items-loading-skeleton.json';

const VideoLoader = () => {
    return (
        <div className=''>
            <Lottie animationData={loader} loop={true} />
        </div>
    );
};

export default VideoLoader;