import axios from 'axios';
import jQuery from 'jquery';

const getCookie = name => {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }


const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {"x-csrftoken": getCookie('csrftoken')}

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
    login(username, password) {
        debugger;
        return instance.post('login/', {username, password}).then(response => {
            debugger;
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
