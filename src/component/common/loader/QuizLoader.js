import Lottie from 'lottie-react';
import loader from '../../../assets/75347-green-dots-loader.json';

const QuizLoader = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className='w-1/5'>
                <Lottie animationData={loader} loop={true} />
            </div>
        </div>
    );
};

export default QuizLoader;