const Handler = require("./Handler");
const fetch = require("node-fetch");

//

/*

*/

class FetchMp3DataHandler extends Handler{

    async handle(videoId){
        try {
            const response = await fetch(
                `https://youtube-mp36.p.rapidapi.com/dl?id=${videoId}`,
                {
                    method: "GET",
                    headers: {
                        "x-rapidapi-key": process.env.API_KEY,
                        "x-rapid-host": process.env.API_HOST,
                    },
                }
            );

            const data = await response.json();
            console.log(`API response:`, data)

            if (data.status === "ok") {
                console.log("fetching mp3 download link");

                return super.handle({
                    title: data.title,
                    link: data.link,
                })
            }else if(data.msg === "in queue") {
                console.warn("video is in queue try again later")
            } else  {
                console.error(`Error ${data.msg}`)
            }
        } catch (error) {
            console.log("error fetching api data")
        }
    }
}

module.exports = { FetchMp3DataHandler };