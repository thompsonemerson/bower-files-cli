#! /usr/bin/env node
'use strict'

const pkg = require('../package.json')
const fs = require('fs')
const argv = require('minimist')(process.argv.slice(2))
const lib = require('bower-files')()
const concat = require('concat')
const jsmin = require('uglify-js')
const cssmin = require('cssmin')

let scripts = lib.ext('js').files
let styles = lib.ext('css').files

let opts = {
	'js': (argv.js) ? argv.js : false,
	'css': (argv.css) ? argv.css : false,
	'jsname': (argv.jsname && argv.jsname !== true) ? argv.jsname : 'vendor',
	'cssname': (argv.cssname && argv.cssname !== true) ? argv.cssname : 'vendor'
}

if (argv.v || argv.version) {
	console.log(pkg.version)
	process.exit(0)
}

if (argv.h || argv.help) {
	console.log(`
  Usage:
    $ bower-files-cli [<options>]

  Options:
    --js               Define output js file (default dist/js)
    --css              Define output css file (default dist/css)
    --jsname           Define output js name file (default vendor.min.js)
    --jscss            Define output css name file (default vendor.min.css)
    -h, --help         Display help information
    -v, --version      Output version

  Examples:
    $ bower-files-cli --js --css
      # dist/js/vendor.min.js
      # dist/css/vendor.min.css

    $ banner-cli --js www/scripts --jsname scripts
      # www/scripts/scripts.min.js
	`)
	process.exit(0)
}

if (opts.js && scripts.length > 0) {
	let libsJS = jsmin.minify(scripts)
	opts.js = (opts.js !== true) ? opts.js : 'dist/js'

	fs.writeFile(`${opts.js}/${opts.jsname}.min.js`, libsJS.code, (err) => {
		if (err) return console.log(err)
	})
}

if (opts.css && styles.length > 0) {
	opts.css = (opts.css !== true) ? opts.css : 'dist/css'

	concat(styles).then((code) => {
		let libsCSS = cssmin(code)

		fs.writeFile(`${opts.css}/${opts.cssname}.min.css`, libsCSS, (err) => {
			if (err) return console.log(err)
		})
	})
}
