const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || 'SEON-MD=CA40BILL#QMX6r3GcQ9ugieP0PelWLgGxFoiUWsEnzVbL_OU5T-4', //Put Session-id Here
GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Sanjuwa22', //Put Your Gitub Username
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN || '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', //Put Your Github Auth Token
REPO_NAME: process.env.REPO_NAME || 'SEON-MD-DATABASE' //Bot Database Repo Name
};
