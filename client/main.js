var uploader = new Slingshot.Upload("myFileUploads");

Template.slingshotForm.events({
  'submit form': function(e) {
    e.preventDefault();
    var file =  document.getElementById('fileToUpload').files[0];
    uploader.send(file, function (error, downloadUrl) {
      Meteor.users.update(Meteor.userId(), {$push: {"profile.files": {'name': file.name, 'url': downloadUrl}}});
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
