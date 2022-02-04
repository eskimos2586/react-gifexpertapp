export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=1w2ckpwbb4T0M45QrPqPdvmiqBcsnHWm`
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    return data.map( ({id, title, images}) => {
        return ({
            id: id,
            title: title,
            url: images.downsized_medium.url
        });
    });
}