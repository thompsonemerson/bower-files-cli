# Bower files CLI
> Generate a vendor with all dependencies bower using CLI, and for this we use the [bower-files](https://github.com/ksmithut/bower-files) as dependency

### Installation
```bash
# npm
npm i -D bower-files-cli

# or yarn
yard add -D bower-files-cli
```

### Usage
```bash
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

    $ bower-files-cli --js www/scripts --jsname scripts
      # www/scripts/scripts.min.js

    $ bower-files-cli --css www/styles --cssname styles
      # www/styles/styles.min.js
```

### License
[MIT License](http://thompsonemerson.mit-license.org/) © Emerson Thompson
