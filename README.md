## Summary

* Plugin name: `gjs-plugin-actions`


## Options

|Option|Description|Default|
|-|-|-
|`textCleanCanvas`|Confirm text to clean the canvas|`Are you sure you want to clean the canvas?`|
|`cleanBtnTitle`|The button's title|`Clean the canvas`|


## Download

* NPM
  * `npm i grapesjs-plugin-actions`
* GIT
  * `git clone https://github.com/omarmd1986/grapesjs-plugin-actions.git`


## Usage

```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-plugin-actions.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      ...
      plugins: ['gjs-plugin-actions'],
      pluginsOpts: {
        'gjs-plugin-actions': {
          // options
        }
      }
  });
</script>
```



## Development

Clone the repository

```sh
$ git clone https://github.com/omarmd1986/grapesjs-plugin-actions.git
$ cd grapesjs-plugin-actions
```

Install dependencies

```sh
$ npm i
```

The plugin relies on GrapesJS via `peerDependencies` so you have to install it manually (without adding it to package.json)

```sh
$ npm i grapesjs --no-save
```

Start the dev server

```sh
$ npm start
```


## License

BSD 3-Clause
