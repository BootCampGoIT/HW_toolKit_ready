
import { combineReducers } from 'redux';
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from './contactsActions';
// import constants from './contactsConstants';

// ------------
const addContact = (state, action) => {
    return [...state, action.payload];
}
const removeContact = (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
}

const contactsReducer = createReducer([], {
    [contactsActions.addContact]: addContact,
    [contactsActions.removeContact]: removeContact
});
// ---------------

const filterReducer = createReducer("", {
    [contactsActions.getFilterValue]: (_, action) => action.payload

})

const alertReducer = createReducer(false, {
    [contactsActions.existContact]: (state) => !state
})


// const alertReducer = (state = false, action) => {
//     switch (action.type) {
//         case constants.EXIST_CONTACT:
//             return !state;

//         default:
//             return state;
//     }
// }

// const contactsReducer = (state = [], action) => {
//     switch (action.type) {
//         case constants.ADD_CONTACT:
//             return [...state, action.payload];

//         case constants.REMOVE_CONTACT:
//             return state.filter(contact => contact.id !== action.payload);

//         default:
//             return state;
//     }
// }

// const filterReducer = (state = '', action) => {
//     switch (action.type) {
//         case constants.FILTER_CONTACT:
//             return action.payload;

//         default:
//             return state;
//     }
// }

export default combineReducers({ items: contactsReducer, filter: filterReducer, alert: alertReducer });