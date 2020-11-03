export const checkLogin = (postData) => dispatch => {
    fetch('https://ntuseproj.herokuapp.com/api/login/', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'LOGIN_CHECK',
            payload: data
        })
        );
}
export const registerUser = (postData) => dispatch => {
   
    fetch('https://ntuseproj.herokuapp.com/api/create_User', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'REGISTER_USER',
            payload: data
        })
        );
}

export const updateProfile = (postData) => dispatch => {
   
    fetch('https://ntuseproj.herokuapp.com/api/update_User', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
            type: 'UPDATE_PROFILE',
            payload: data
        })}
        );
}