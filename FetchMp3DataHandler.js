const Handler = require("./Handler");
const fetch = require("node-fetch");

// https://youtube-mp36.p.rapidapi.com/dl?id=${videoId}

/*
"x-rapidapi-key": process.env.API_KEY,
"x-rapid-host": process.env.API_HOST,
*/

class FetchMp3DataHandler extends Handler{

}

module.exports = { FetchMp3DataHandler };