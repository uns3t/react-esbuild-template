import fs from 'fs';
import { options } from '../server.js';

export const getFilePath = request => {
	const { root } = options;

	if (request.url == '/') return `${root}/index.html`;

	if (!request.url.includes('.')) {
		const testFilepath = `${root}/${request.url}.html`;

		if (fs.existsSync(testFilepath)) return testFilepath;
	}

	return root + request.url;
};
