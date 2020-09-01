import constants from './contactsConstants';
import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';


const addContact = createAction(constants.ADD_CONTACT, (contact) => {
    return {
        payload: {
            ...contact,
            id: uuidv4()
        }
    }
});

const removeContact = createAction(constants.REMOVE_CONTACT)
const getFilterValue = createAction(constants.FILTER_CONTACT)
const existContact = createAction(constants.EXIST_CONTACT)



// const addContact = (contact) => {
//     return {
//         type: constants.ADD_CONTACT,
//         payload: {
//             ...contact,
//             id: uuidv4()
//         }
//     }
// };

// const removeContact = (id) => {
//     return {
//         type: constants.REMOVE_CONTACT,
//         payload: id
//     }
// };

// const getFilterValue = (filter) => {
//     return {
//         type: constants.FILTER_CONTACT,
//         payload: filter,
//     }
// }

// const existContact = () => {
//     return {
//         type: constants.EXIST_CONTACT,
//     }
// }

export default { addContact, removeContact, getFilterValue, existContact };