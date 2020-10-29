export const createDonationPost = (postData) => dispatch => {
    fetch('https://ntuseproj.herokuapp.com/api/post_Item', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'CREATE_DONATION',
            payload: data
        })
        );
}
export const retrieveDonationPost = () => dispatch => {
    fetch('https://ntuseproj.herokuapp.com/api/view_Item', {
        method: 'GET',
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'RETRIEVE_DONATION',
            payload: data
        })
        );
}

export const retrieveUserDonationPost = (postData) => dispatch => {
    fetch('https://ntuseproj.herokuapp.com/api/view_User_Item', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'RETRIEVE_USER_DONATION',
            payload: data
        })
        );
}

export const deleteDonationPost = (postData) => dispatch => {
    fetch('https://ntuseproj.herokuapp.com/api/delete_Item', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'DELETE_USER_DONATION',
            payload: data
        })
        );
}