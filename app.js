'use strict';

const debug = require('debug')('egg-passport-google-multi');
const assert = require('assert');
const Strategy = require('passport-google-oauth20').Strategy;

module.exports = app => {
  const configs = app.config.passportGoogleMulti;
  assert(
    configs,
    '[egg-passport-google-multi] config.passportGoogleMulti required'
  );
  for (const [ account, config ] of Object.entries(configs)) {
    config.passReqToCallback = true;
    assert(
      config.key,
      '[egg-passport-google-multi] config.passportGoogleMulti.key required'
    );
    assert(
      config.secret,
      '[egg-passport-google-multi] config.passportGoogleMulti.secret required'
    );
    config.clientID = config.key;
    config.clientSecret = config.secret;

    // must require `req` params
    app.passport.use(
      `google_${account}`,
      new Strategy(
        config,
        (req, accessToken, refreshToken, params, profile, done) => {
          const email =
            profile.emails && profile.emails[0] && profile.emails[0].value;
          const photo =
            profile.photos && profile.photos[0] && profile.photos[0].value;

          // format user
          const user = {
            provider: 'google',
            id: profile.id,
            email,
            givenName: profile.name && profile.name.givenName,
            familyName: profile.name && profile.name.familyName,
            displayName: profile.displayName,
            photo,
            accessToken,
            refreshToken,
            params,
            profile,
          };
          debug('%s %s get user: %j', req.method, req.url, user);

          // let passport do verify and call verify hook
          app.passport.doVerify(req, user, done);
        }
      )
    );
  }
};
