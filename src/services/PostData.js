

const PostData = () => {

    const postData = async (url, data) => {
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });
    };

    return {
        postData,
    }
}

export default PostData;