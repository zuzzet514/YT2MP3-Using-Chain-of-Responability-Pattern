const readline = require("readline");
require("dotenv").config();
const { ValidateVideoIDHandler } = require("./ValidateVideoIdHandler");
const { FetchMp3DataHandler } = require("./FetchMp3DataHandler");
const { ParseYoutubeLinkHandler } = require("./ParseYoutubeLinkHandler");
const { DownloadMp3Handler } = require("./DownloadMp3Handler");

const parseLinkHandler = new ParseYoutubeLinkHandler();
const validateVideoIDHandler = new ValidateVideoIDHandler();
const fetchHandler = new FetchMp3DataHandler();
const downloadHandler = new DownloadMp3Handler();

