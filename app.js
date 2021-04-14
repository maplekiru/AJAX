console.log("Let's get this party started!");
const KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
async function getGIF() {
    console.log("getGIF ran")
    let searchValue = $("#search").val();

    let response = await axios.get("http://api.giphy.com/v1/gifs/search",
    {params: {q: searchValue, api_key: KEY}});

    let gifUrl = response.data.data[0].images.original.url;
    // let gif = response.data.data[0].url;

    console.log(gifUrl);
    return gifUrl;
}


 function appendGif(gif){
    let $container = $('#container');
    $container.append($(`<img src="${gif}">`));
}

$("#form").on("submit", async function(e){
    e.preventDefault();
    let gifUrl = await getGIF();
    appendGif(gifUrl);
});