import { useDeleteVideoMutation } from '../../../features/videos/videoApi';
import DeleteButton from '../../common/DeleteButton';
import EditVideo from './EditVideo';

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
                <EditVideo />

            </td>
        </tr>
    );
};

export default VideoTableRow;