import axios from 'axios';
import jQuery from 'jquery';
import Cookies from "universal-cookie";

const getCSRFToken = name => {
        let csrfToken = null;
        if (document.cookie && document.cookie !== '') {
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    csrfToken = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return csrfToken;
    }

const getAuthToken = name => {
    const cookies = new Cookies();
    let rememberMe = cookies.get('rememberMe');
    return Boolean(rememberMe) && cookies.get(name)
}


const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        "X-Csrftoken": getCSRFToken('csrftoken'),
        common: {...(getAuthToken('authToken') && {'Authorization': `Token ${getAuthToken('authToken')}`})}
    }

})

export const usersAPI = {
    getUsers(pageSize=10, currentPage=1) {
        let offset = pageSize * (currentPage-1);
        return instance.get(`users/?limit=${pageSize}&offset=${offset}`).then(response => {
            return response.data;
        })
    },
    addFriend(userId) {
        return instance.post(`follow/${userId}/`).then(response => {
            return response.data;
        })
    },
    deleteFriend(userId) {
        return instance.delete(`follow/${userId}/`).then(response => {
            return response.data;
        })
    },
    getPosts(userId) {
        return instance.get(`posts/?user=${userId}`).then(response => {
            return response.data;
        })
    },
    addPost(userId, text) {
        return instance.post(`posts/`, {user: userId, text: text}).then(response => {
            return response.data;
        })
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}/`).then(response => {
            return response.data;
        })
    },
    // Не используется, статус берется из профиля
    getStatus(userId) {
        return instance.get(`profile/${userId}/get_status/`).then(response => {
            return response.data;
        })
    },
    saveStatus(newStatus) {
        return instance.patch(`profile/edit_status/`, {status: newStatus}).then(response => {
            return response.data;
        })
    }
}

export const authAPI = {
    getAuthData() {
        return instance.get('auth/me/').then(response => {
            return response.data;
        })
    },
    login(username, password, rememberMe) {
        return instance.post('auth/login/', {username, password}).then(response2 => {
            return response2.data;
        })
    },
    getAuthToken(username, password, rememberMe) {
        return instance.post('api-token-auth/', {username, password}).then(response => {
            const cookies = new Cookies();
            let token = response.data.token;
            cookies.set('authToken', token);
            rememberMe && cookies.set('rememberMe', true);
            instance.defaults.headers.common['Authorization'] = `Token ${response.data.token}`;
        })
    },
    logout() {
        return instance.delete('auth/login/').then(response => {
            instance.defaults.headers.common['Authorization'] = '';
            const cookies = new Cookies();
            cookies.remove('authToken');
            cookies.remove('rememberMe');
            return response.data;
        })
    }
}

export const dialogsAPI = {
    getDialogs(userId) {
        return instance.get(`dialogs/?user=${userId}`).then(response => {
            return response.data;
        })
    }
}

export const messagesAPI = {
    addMessage(dialogId, sender, recipient, text) {
        return instance.post(`message/${dialogId}/`, {sender: sender, recipient: recipient, text: text}).then(response => {
            return response.data;
        })
    }
}
