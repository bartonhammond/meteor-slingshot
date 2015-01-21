meteor-slingshot sample
=======================
## Steps

1. Add packages
        a. accounts-password
        b. accounts-ui
        c. edgee:slingshot

2. Create AWS S3 bucket
        a. Update bucket Permissions for Everyone for List
        b. Use Security Details and save KeyID and AccessKey.
      
3. Update config.json with KeyID and AccessKey

4. Update slingshot.js, value 'bucket' with name from AWS S3

5. Run meteor using ./runMeteorSettings.sh 