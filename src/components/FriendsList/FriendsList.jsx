import PropTypes from 'prop-types';
import css from './FriendsList.module.css';
import FriendsListItem from './FriendsListItem';

export default function FriendsList({ friends }) {
    return (
        <ul className={css['friend-list']}>
            {friends.map(friend => (
                <FriendsListItem
                    key={friend.id}
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                    name={friend.name}
                />
            ))}
        </ul>
    );
}

FriendsList.propTypes = {
    friends: PropTypes.array.isRequired,
}