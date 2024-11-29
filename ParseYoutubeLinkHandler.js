const Handler = require("./Handler");

class ParseYoutubeLinkHandler {
    async handle(input) {

        const videoIdMatch = input.match(/(?:\?v=|&v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s]+)/);
        const videoId = videoIdMatch ? videoIdMatch[1] : input.trim();

        if (!videoId || videoId === "") {
            console.error("Error: Invalid input. Please enter a valid YT link or video ID")
            return;
        }

        console.log(`Extracted video ID ${videoId}`);
        return super.handle(videoId);
    }
}

module.exports = { ParseYoutubeLinkHandler };