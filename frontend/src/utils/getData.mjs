const API_URL = `https://api-myflipmart.onrender.com/api/cat/`;

async function getData(cat, cat_id, pg = 1) {
    try {
        let Cat_url = API_URL + `?id=${cat_id}`
        const response = await fetch(Cat_url)
        const data = await response.json();
        return data


    }
    catch (err) {
        console.error('error : ', err);
    }

}

export default getData