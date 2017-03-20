# Bower files CLI
> Getting all main bower files using CLI

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
    --jsname           Define output js name file (default libs.min.js)
    --jscss            Define output css name file (default libs.min.css)
    -h, --help         Display help information
    -v, --version      Output version

  Examples:
    $ bower-files-cli --js --css
      # dist/js/libs.min.js
      # dist/css/libs.min.css

    $ bower-files-cli --js www/scripts --jsname scripts
      # www/scripts/scripts.min.js
    
    $ bower-files-cli --css www/styles --jsname styles
      # www/styles/styles.min.js
```

### License
[MIT License](http://thompsonemerson.mit-license.org/) © Emerson Thompson
