const esbuild = require('esbuild');
const { lessLoader } = require('esbuild-plugin-less');
const { htmlPlugin } = require('@craftamap/esbuild-plugin-html');

const htmlPluginOptions = {
    files: [
        {
            entryPoints: [
                'src/app.jsx',
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

console.log(lessLoader);

const options = {
    entryPoints: ['src/app.jsx'],
    bundle: true,
    metafile: true, // needs to be set
    outdir: 'dist/', // needs to be set
    plugins: [
        htmlPlugin(htmlPluginOptions),
        lessLoader()
    ],
    loader: {
        '.ts': 'ts',
    },
}

esbuild.build(options).catch(() => process.exit(1))