# The ultimate cloud computing app

Install prerequisites: **meteor npm install**

Run: **meteor**

Build for android, etc: **meteor build ../project_cloud_build --server 127.0.0.1:3000**

Test: **meteor test --driver-package practicalmeteor:mocha**

Run on Android: **meteor run android-device**

Start Meteor shell: **meteor shell**

Add user to admin role (in shell): **Roles.addUsersToRoles(userId,'admin', Roles.GLOBAL_GROUP);**
