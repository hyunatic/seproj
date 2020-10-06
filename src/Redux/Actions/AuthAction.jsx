export const checkLogin = (postData) => dispatch => {
    fetch('https://ntuseproj.herokuapp.com/api/login/', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
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
