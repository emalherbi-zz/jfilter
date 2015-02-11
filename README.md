# [JFilter](http://emalherbi.github.io/jfilter/)

[![Bower](https://img.shields.io/bower/v/bootstrap.svg)](https://github.com/emalherbi/jfilter/)
[![BuildStatus](https://travis-ci.org/emalherbi/jfilter.svg?branch=master)](https://travis-ci.org/emalherbi/jfilter)

A simple and powerful JQuery plugin thats adds search, sort, filters and flexibility to plain HTML lists, tables, or anything.

<img align="right" height="150" src="http://bower.io/img/bower-logo.png">

## Bower.io

This package is available on Bower.

#### Installing

```sh
# install a package and add it to bower.json

$ bower install jfilter --save
```

#### Install Bower.io

```sh
$ npm install -g bower
```

Bower depends on [Node.js](http://nodejs.org/) and [npm](http://npmjs.org/). Also make sure that [git](http://git-scm.com/) is installed as some bower
packages require it to be fetched and installed.

## Usage

#### Table

Add class "searchable" on the "tbody" html

```html
<table id="table" name="table" >
  <thead>
    ...
  </thead>
  <tbody class="searchable" >
    ...
  </tbody>
<table>  
```

in javascript

```javascript
$('#table').jfilter();
```

#### List

Add class "searchable" on the "ul" html

```html
<ul id="list" name="list" class="searchable" >
  ...
</ul>
```

in javascript

```javascript
$('#list').jfilter();
```

## Options

```
@param addon : change input group addon
@param placeholder : change the placeholder input
@param class : change class searchable using in <tbody>
```

## Required

[jQuery](http://jquery.com/) | [Bootstrap](http://getbootstrap.com/).

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Test your changes to the best of your ability.
4. Update the documentation to reflect your changes if they add or changes current functionality.
5. Commit your changes (`git commit -am 'Added some feature'`)
6. Push to the branch (`git push origin my-new-feature`)
7. Create new Pull Request

## Creator

Created and maintained by [Eduardo Malherbi](https://github.com/emalherbi).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
