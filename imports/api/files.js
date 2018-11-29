import { Meteor } from 'meteor/meteor';
import { FilesCollection } from 'meteor/ostrio:files';

export const UserFiles = new FilesCollection({collectionName: 'userfiles'});

if (Meteor.isClient) {
  Meteor.subscribe('userfiles.images.all');
}

if (Meteor.isServer) {
  Meteor.publish('userfiles.images.all', function () {
    return UserFiles.find().cursor;
  });
}
