import esbuild from 'esbuild';
import serve, { error, log } from './server.js';

export const isWatch = process.argv.includes('-w');


const esbuildServe = async (options = {}, serveOptions = {}) => {
	esbuild
		.build({
			...options,
			watch: isWatch && {
				onRebuild(err) {
					console.log('test');
					serve.update();
					err ? error('× Failed') : log('✓ Updated');
				}
			}
		})
		.catch(() => process.exit(1));

	if (isWatch) {
		serve.start(serveOptions);
	}
};

export default esbuildServe;
