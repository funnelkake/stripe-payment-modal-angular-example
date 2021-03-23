const { writeFile } = require('fs');
const { argv } = require('yargs');
// read environment variables from .env file
require('dotenv').config();

const targetPath = `./src/environments/environment.ts`;
// we have access to our environment variables
// in the process.env object thanks to dotenv

const environmentFileContent = `
export const environment = {
   production: ${process.env.PRODUCTION},
   ANGULAR_APP_PAYMENT_MODAL_SITE_ID: "${process.env.ANGULAR_APP_PAYMENT_MODAL_SITE_ID}",
   ANGULAR_APP_PAYMENT_MODAL_API_HOST_URL: "${process.env.ANGULAR_APP_PAYMENT_MODAL_API_HOST_URL}"
};
`;

// write the content to the respective file
writeFile(targetPath, environmentFileContent, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Wrote variables to ${targetPath}`);
});
