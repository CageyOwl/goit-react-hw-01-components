import PropTypes from 'prop-types';
import css from './FriendsList.module.css';

export default function FriendsListItem({ isOnline, avatar, name }) {
  return (
    <li className={css.item}>
      <span
        className={
          css.status +
          ' ' +
          (isOnline ? css['status--online'] : css['status--offline'])
        }
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};
