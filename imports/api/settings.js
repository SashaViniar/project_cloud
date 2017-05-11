import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Settings = new Mongo.Collection('settings');
Ground.Collection(Settings);

if(Meteor.isServer){
  Meteor.methods({
    'settings.user.get'() {
      // console.log("settings.user.get got called");
      const settings = Settings.findOne({owner: this.userId, type: 'user'});
      if(settings) return settings.settings;
      else return {
        requestDelta: 10000,
        cpuThreshold: 0.7
      };
    },
    'settings.server.get'() {
      // console.log("settings.server.get got called");
      const settings = Settings.findOne({type: 'server'});
      if(settings) return settings.settings;
      else return {
        bigDataCount: 2,
        expiryDelta: 300000
      };
    },
    'settings.user.set'(newSettings) {
      // console.log("settings.user.set got called");
      const settings = Settings.findOne({owner: this.userId, type: 'user'});
      if(settings) {
        Settings.update(
          {
            _id: settings._id
          },
          {
            $set: {
              settings: newSettings
            }
          }
        );
      } else {
        Settings.insert({
          owner: this.userId,
          type: 'user',
          settings: newSettings
        });
      }
    },
    'settings.server.set'(newSettings) {
      // console.log("settings.server.set got called");
      if(!Roles.userIsInRole(this.userId,['admin'])) throw new Meteor.Error('not-authorized');
      const settings = Settings.findOne({type: 'server'});
      if(settings) {
        Settings.update(
          {
            _id: settings._id
          },
          {
            $set: {
              settings: newSettings
            }
          }
        );
      } else {
        Settings.insert({
          owner: this.userId,
          type: 'server',
          settings: newSettings
        });
      }
    }
  });
}