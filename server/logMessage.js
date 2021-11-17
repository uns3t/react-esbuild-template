import { log, error, getIp } from './utils/index.js';
import { options } from './server.js';

const logMessage = currentPort => {
	const { port } = options;

	log('\nServing 🍛\n');
	log(`Local → http://localhost:${currentPort}\n`);
	log(`Network → http://${getIp()}:${currentPort}\n`);
	if (currentPort != port) error(`Port ${port} was in use.\n`);
};

export default logMessage;
