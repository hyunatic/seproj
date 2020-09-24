export const fetchPosts = () => dispatch => {
    fetch('http://192.168.1.131/seproj/public/index.php/api/ntusg')
        .then(res => res.json())
        .then(data => dispatch({
            type: 'FETCH_POST',
            payload: data
        })
        );
}
