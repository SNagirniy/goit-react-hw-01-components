import PropTypes from 'prop-types';
import s from './FriendList.module.css'

function FriendListItem({ avatar, name, isOnline, id }) {
    return(
      <div className={s.container}>
            <span
            style={{
            background: isOnline ? 'green' : 'red',
            }}
            className={s.status}></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
        </div>
)};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;