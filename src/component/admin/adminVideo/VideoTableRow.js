import { useDeleteVideoMutation } from '../../../features/videos/videoApi';
import DeleteButton from '../../common/DeleteButton';

const VideoTableRow = ({ video }) => {

    //getting delete mutation
    const [deleteVideo] = useDeleteVideoMutation();

    //destructuring video info
    const { id, title, description } = video || {};

    return (
        <tr>
            <td className="table-td">{title}</td>
            <td className="table-td">{description.substring(0, 50)}...</td>
            <td className="table-td flex gap-x-2">
                <DeleteButton id={id} mutation={deleteVideo} />
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                    className="w-6 h-6 hover:text-blue-500 cursor-pointer transition-all">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>

            </td>
        </tr>
    );
};

export default VideoTableRow;