meteor-slingshot sample with clientside-image-manipulation
===========================================
## Steps

1. Add packages
    * accounts-password
    * accounts-ui
    * edgee:slingshot
    * ccorcos:clientside-image-manipulation

2. Create AWS S3 bucket
    * Update bucket Permissions for Everyone for List
    * Use Security Details and save KeyID and AccessKey.
      
3. Create a config.json with KeyID and AccessKey

```
{
  "AWSAccessKeyId": "PUT YOUR ACCESS KEY ID HERE",
  "AWSSecretAccessKey": "PUT YOUR SECRET ACCESS KEY HERE"
}
```

4. Update slingshot.js, value 'bucket' with name from AWS S3

5. Run meteor using ./runMeteorSettings.sh