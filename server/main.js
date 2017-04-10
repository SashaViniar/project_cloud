import { Meteor } from 'meteor/meteor';
import '../imports/api/tasks.js';
import { Accounts } from 'meteor/accounts-base';

const register = type => {
  switch(type){
    case "password":
      return Accounts.createUser;
  }
};

Meteor.methods({
  register(args) {
    const {type, username, email, password} = args;
    // check(type, String);
    // check(username, String);
    // check(email, String);
    // check(password, String);
    const res = register(type)({username, email, password});

    if (!res) {
      throw new Meteor.Error('pants-not-found', "Can't find my pants");
    }

    return true;
  },
  passwordRecover(args) {
    const emailOrLogin = args.input;
    //TODO: code
    return true;
  }
});

Meteor.startup(() => {
  // code to run on server at startup
});
