import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

const Video = ({ video }) => {

    //destructuring video info
    const { id, title, description } = video || {};

    return (
        <tr>
            <td className="table-td">{title}</td>
            <td className="table-td">
                {
                    description.length > 60
                        ? description.substring(0, 60) + '..'
                        : description
                }
            </td>
            <td className="flex gap-x-2 justify-center text-gray-500">
                <DeleteButton id={id} />
                <EditButton id={id} />
            </td>
        </tr>
    );
};

export default Video;