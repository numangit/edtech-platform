import Rank from './Rank';
import useRanksData from '../../../hooks/useRanksData';

const Ranks = () => {

    //getting rank data
    const ranksData = useRanksData() || [];

    // descending sorting
    ranksData?.sort((a, b) => {
        return b.total - a.total;
    });

    //calculate rank
    let rank = 1;
    ranksData?.forEach((data, i) => {
        if (i > 0 && ranksData[i].total < ranksData[i - 1].total) {
            rank++;
        }
        data.rank = rank;
    });

    return (
        <div className="my-8">
            <h3 className="text-lg font-bold">Top 20 Result</h3>
            <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
                <thead>
                    <tr className="border-b border-slate-600/50">
                        <th className="table-th !text-center">Rank</th>
                        <th className="table-th !text-center">Name</th>
                        <th className="table-th !text-center">Quiz Mark</th>
                        <th className="table-th !text-center">Assignment Mark</th>
                        <th className="table-th !text-center">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ranksData?.map((rankData, i) => {
                            return <Rank key={i} rankData={rankData} />
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};
export default Ranks;