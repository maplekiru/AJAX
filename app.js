console.log("Let's get this party started!");

async function getGIF() {
    console.log("getGIF ran")
    let searchValue = $("#search").val();

    let key = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

    let response = await axios.get("http://api.giphy.com/v1/gifs/search",
    {params: {q: searchValue, api_key: key}});

    let gif = response.data.data[0].embed_url;

    console.log(gif);
}

$("#submit").on("submit", getGIF);