const fs = require("fs");
const path = require("path");

const pageAll = fs.readdirSync(
	path.join(__dirname, "../src/page")
);

function fileExists(pageName) {
	return pageAll.indexOf(pageName) >= 0;
}

module.exports = fileExists;
