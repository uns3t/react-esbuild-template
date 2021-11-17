import { encoding } from '../server.js';

export const showFile = (response, content, contentType) => {
	response.writeHead(200, { 'Content-Type': contentType });
	response.end(content, encoding);
};
