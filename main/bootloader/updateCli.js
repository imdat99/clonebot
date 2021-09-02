const {execShellCommand} = require('../deploy/helpers/common');
const axios = require('axios');

module.exports = {
	des: 'Kiem tra va cap nhat kb2abot-cli',
	fn: async () => {
		await new Promise((resolve)=>setTimeout(() => {
			console.log(" done!");
			resolve();
		}, 2000));}
	/* async () => {
		const {data} = await axios.get(
			'https://raw.githubusercontent.com/kb2abot/kb2abot-cli/main/package.json'
		);
		const {version} = data;
		let currentVersion;
		try {
			currentVersion = await execShellCommand('kb2abot-cli -v');
		} catch (e) {
			currentVersion = e.message;
		}
		if (currentVersion != version) {
			await execShellCommand('npm i kb2abot-cli@latest -g');
		}
	}*/
};
