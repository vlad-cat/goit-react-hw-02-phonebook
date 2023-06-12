import PropTypes from 'prop-types';
import contactListItemStyles from './ContactListItem.module.css';

const ContactListItem = ({ name, number, id, deleteContact }) => {
  return (
    <>
      <li key={id}>
        {name}: {number}
        <button
          value={id}
          onClick={deleteContact}
          className={contactListItemStyles.btn}
        >
          Delete
        </button>
      </li>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
