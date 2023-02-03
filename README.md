# egg-passport-google-mulit

google passport plugin for eggjs. only support OAuth 2.0, support multiple accounts.

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
  web1: {
    key: "your oauth key1",
    secret: "your oauth secret1",
  },
  web2: {
    key: "your oauth key2",
    secret: "your oauth secret2",
  },
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Router

```js
app.passport.mount("google_web1", {
  scope: ["email", "openid"],
  prompt: "select_account",
});

app.passport.mount("google_web2", {
  scope: ["email", "openid"],
  prompt: "select_account",
});
```

## Questions & Suggestions

Please open an issue [here](https://github.com/xbears/egg-passport-google-multi/issues).

## License

[MIT](LICENSE.txt)
