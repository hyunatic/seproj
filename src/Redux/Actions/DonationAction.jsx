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