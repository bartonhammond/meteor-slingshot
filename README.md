meteor-slingshot sample
=======================
## Steps

0. Add packages
   a. accounts-password
   b. accounts-ui
   c. edgee:slingshot

1. Create AWS S3 bucket
   a. Update bucket Permissions for Everyone for List
   b. Use Security Details and save KeyID and AccessKey.
      
2. Update config.json with values from 1.b

3. Update slingshot.js, value 'bucket' with name from AWS S3

4. Run meteor using ./runMeteorSettings.sh 