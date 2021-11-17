import esbuild from 'esbuild';
import { lessLoader } from 'esbuild-plugin-less';
import { htmlPlugin } from '@craftamap/esbuild-plugin-html';
import esbuildServe from './server/index.js';


const htmlPluginOptions = {
    files: [
        {
            entryPoints: [
                'src/app.tsx',
            ],
            filename: 'index.html',
            htmlTemplate: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>React-esbuild-template</title>
                </head>
                <body>
                    <div id="root">
                    </div>
                </body>
                </html>
            `,
        },
    ]
}

const options = {
    entryPoints: ['src/app.tsx'],
    bundle: true,
    metafile: true, // needs to be set
    outdir: 'dist/', // needs to be set
    plugins: [
        htmlPlugin(htmlPluginOptions),
        lessLoader()
    ],
    loader: {
        '.ts': 'ts',
    }
}

esbuildServe(
    options,
    {
        port: 7000,
        root: './dist',
        live: true
    }
)