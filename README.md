# egg-passport-google-mulit
google passport plugin for egg. only support OAuth 2.0.

## Install

```bash
$ npm i egg-passport-google-mulit --save
```

## Usage

```js
// config/plugin.js
exports.passportGoogleMulti: {
  enable: true,
  package: 'egg-passport-google-multi'
};
```

## Configuration

```js
// config/config.default.js
config.passportGoogleMulti = {
  web1:{
    key: 'your oauth key1',
    secret: 'your oauth secret1'
  },
  web1:{
    key: 'your oauth key2',
    secret: 'your oauth secret2'
  }
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/xbears/egg-passport-google-multi/issues).

## License

[MIT](LICENSE.txt)
