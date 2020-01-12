import axios from 'axios';
import { BASE_URL_DEV } from  '../constants/constants';

//GET CONTACTS
export const getContacts = contacts => ({
    type: 'GET_CONTACTS',
    contacts
});

export const startGetContacts = () => {
    return dispatch => {
        axios.get(`${BASE_URL_DEV}/contacts`, {
            headers: {
                "Content-Type": "application/json"
            }}).then((response) => {
            dispatch(getContacts(response.data.data));
        }).catch((err) => {
            console.error(err);
            dispatch(getContacts(err));
        })
    }
}
