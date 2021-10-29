const passport = require("passport");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../configure/keys");
const { User } = require("../../db/models");

module.exports = (app) => {
  // CONECTANDO PASSPORT
  app.use(cookieParser());
  app.use(
    sessions({
      secret: "TheCrew",
      resave: true,
      saveUninitialized: true,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  // CONECTAR PASSPORT CON LAS SESSIONS CONFIGURADAS EN EXRESS
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) =>
    User.findById(id)
      .then((user) => done(null, user)) // req.user = user
      .catch(done)
  );

  // ESTRATEGIAS DE AUTENTICACIÓN
  //LOCAL
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      (email, password, done) => {
        User.findOne({ email })
          .then((user) => {
            if (!user) return done(null, false, { message: "Incorrect email" });

            user.comparePassword(password, function (err, isMatch) {
              if (err) throw err;
              if (!isMatch)
                return done(null, false, { message: "Incorrect password" });
              return done(null, user, { message: "User logged in" });
            });
          })
          .catch(done);
      }
    )
  );
  //google
  // Google Strategy

  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: "/api/auth/google/redirect",
      },
      (accessToken, refreshToken, profile, done) => {
        console.log("profile", profile._json.name);
        // passport callback function
        //check if user already exists in our db with the given profile ID
        User.findOne({ email: profile._json.email }).then((currentUser) => {
          if (currentUser) {
            //if we already have a record with the given profile ID
            console.log("currentUser", currentUser);
            done(null, currentUser);
          } else {
            //if not, create a new user
            new User({
              email: profile._json.email,
              name: profile._json.name,
            })
              .save()
              .then((newUser) => {
                done(null, newUser);
              });
          }
        });
      }
    )
  );
};
