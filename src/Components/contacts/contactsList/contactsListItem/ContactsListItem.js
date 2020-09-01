import React from 'react';
import { connect } from 'react-redux'
import contactsActions from '../../../../redux/contacts/contactsActions';
import { getItemsSelector } from '../../../../redux/selectors/contactsSelectors';

const ContactsListItem = ({ contact: { name, number, id }, onRemoveContact }) => {
    return (
        <li>
            <span>{name}</span>
            <span>{number}</span>
            <hr />
            <button type="button" onClick={() => { onRemoveContact(id) }}>Delete</button>
        </li>
    );
}

const mapStateToProps = (state, { id }) => {
    return {
        contact: getItemsSelector(state, id)
    }
}

const mapDispatchToProps = {
    onRemoveContact: contactsActions.removeContact,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsListItem);