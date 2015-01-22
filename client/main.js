var uploader = new Slingshot.Upload("myFileUploads");


function dataURItoBlob(dataURI) {
  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  var binary = atob(dataURI.split(',')[1]);
  var array = [];
  for(var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }
  return new Blob([new Uint8Array(array)], {type: mimeString});
}
Template.slingshotForm.events({
  'submit form': function(e) {
    e.preventDefault();
    var file =  document.getElementById('fileToUpload').files[0];

    processImage(file, 300, 300, function(dataURI) {
      var blob = dataURItoBlob(dataURI);
      uploader.send(blob, function (error, downloadUrl) {
        Meteor.users.update(Meteor.userId(), {$push: {"profile.files": {'name': file.name, 'url': downloadUrl}}});
      });

    });

  }
});


Template.uploadedPictures.helpers ({
  pictures: function() {
    var user = Meteor.users.findOne(Meteor.userId());
    if (user && user.profile && user.profile.files) {
      return user.profile.files;
    } else {
      return [];
    }
  }
})
