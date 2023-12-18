import PropTypes from 'prop-types';
import { PrettyChatWindow } from "react-chat-engine-pretty"

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId="6ac4dba8-56cc-4624-968b-ee14b6726cf1"
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    )
}

ChatsPage.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        secret: PropTypes.string.isRequired,
    }).isRequired,
};

export default ChatsPage;
