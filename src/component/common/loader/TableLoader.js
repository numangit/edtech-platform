import Lottie from 'lottie-react';
import loader from '../../../assets/105166-table-greeking-2.json';

const TableLoader = () => {
    return (
        <div className=''>
            <Lottie animationData={loader} loop={true} />
        </div>
    );
};

export default TableLoader;