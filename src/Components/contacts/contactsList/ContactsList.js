import React from 'react';
import ContactsListItem from './contactsListItem/ContactsListItem';

import { connect } from 'react-redux'
import { getFilterSelector } from '../../../redux/selectors/contactsSelectors';

const ContactsList = ({ items = [] }) => {
    return (
        <ul>
            {items.map(contact => <ContactsListItem key={contact.id} id={contact.id} />)}
        </ul>

    );
}

const mapStateToProps = (state) => {
    console.log('state', state)
    return {
        items: getFilterSelector(state)
    }
}

export default connect(mapStateToProps)(ContactsList);