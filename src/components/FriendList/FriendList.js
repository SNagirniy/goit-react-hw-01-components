import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';


function FriendList({items}) {
  return (
      <ul className={s.friendList}>
          {items.map(item => (
              <li key={item.id}>
              <FriendListItem
                  avatar={item.avatar}
                  name={item.name}
                  isOnline={item.isOnline}
              />
            </li>
          )) }
    </ul>)
    
};



FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;