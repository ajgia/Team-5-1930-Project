(function(){
	
	var firebase = app_firebase;
	
	// for the current user
	// create this user node in the database
	
	firebase.auth().onAuthStateChanged(function(user){
		firebase.database().ref("user/"+user.uid).update(
			{
		"name":user.displayName,
		"email":user.email
			});
	});
})()