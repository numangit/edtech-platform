import Lottie from 'lottie-react';
import loader from '../../../assets/98287-skeleton-card.json';

const VideoLoad = () => {
    return (
        <div className=''>
            <Lottie animationData={loader} loop={true} />
        </div>
    );
};

export default VideoLoad;