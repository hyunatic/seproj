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
export const deleteDonationOrder = (postData) => dispatch => {
    fetch('https://ntuseproj.herokuapp.com/api/delete_Order', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'DELETE_USER_ORDER',
            payload: data
        })
        );
}

export const viewApproval = (postData) => dispatch => {
    fetch('https://ntuseproj.herokuapp.com/api/view_Order2approve', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'VIEW_APPROVAL',
            payload: data
        })
        );
}

export const ApproveOrder = (postData) => dispatch => {
    fetch('https://ntuseproj.herokuapp.com/api/Order_decision', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'APPROVE_ORDER',
            payload: data
        })
        );
}
export const getAddress = (lat, lng) => dispatch => {
    fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&result_type=street_address&key=AIzaSyC7GMn4hAF901P06wEIVJuFs2Zdefq0TCY')
        .then(res => res.json())
        .then(data => dispatch({
            type: 'REVERSE_GEOLOCATION',
            payload: data.results[0].formatted_address
        })
        );
}