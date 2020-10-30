export const createDonationOrder = (postData) => dispatch => {
    fetch('https://ntuseproj.herokuapp.com/api/make_Order', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
                type: 'CREATE_ORDER',
                payload: data
            })
        );
}

export const viewDonationOrder = (postData) => dispatch => {
    fetch('https://ntuseproj.herokuapp.com/api/view_Order', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
                type: 'VIEW_USER_ORDER',
                payload: data
            })
        );
}