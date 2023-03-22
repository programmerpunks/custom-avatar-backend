# custom-avatar-backend

### Description:
This is the backend code for [Custom Avatar Repository](https://github.com/programmerpunks/custom-avatar-frontend)

### Technologies used:
- Nodejs Version: 16.17.1
- axios: 1.3.2
- cloudinary: 1.33.0
- cors: 2.8.5
- express: 4.18.2

### Developer Setup:
Following are the steps to run this Node server on your system.
- Prerequisite: Node js
- Cloudinary api

Once done, then
- Clone the respected git repository
```
$ git clone https://github.com/programmerpunks/custom-avatar-backend.git
```

- Install all the dependencies by changing directry to root of the project and then run the cammand:
```
$ npm install
```
or
```
$ npm i
```

- create a .env file in root directory and add these lines to the file
```
CLOUD_NAME="[Cloud-Name]"
API_KEY="[API-Key]"
API_SECRET="[API-Secret]"
```
change these variable values according to your cloud name, key, and secret.

- Good to go, Now run your application by running the commad:
```
$ npm start
```
