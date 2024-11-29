const Handler = require("./Handler");

class ValidateVideoIDHandler extends Handler{

    async handle(videoId) {
        if (videoId.length !== 11) {
            console.error("Error: Invalid Video ID. Please try again.");
            return;
        }

        console.log(`ID validation passed`);
        return super.handle(videoId);
    }
}

module.exports = { ValidateVideoIDHandler };