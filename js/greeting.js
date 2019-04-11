(function(){
		
    var firebase = app_firebase;
    
    var banner = document.getElementById("banner");
    var userName = " ";


    //If the current user is authenticated then
  
    firebase.auth().onAuthStateChanged(function(user){
    	if (user){
          	var userName = user.displayName;			  // grab name of user
			banner.innerText = "Hello " + userName;    // update with Personalized Hello

    	} 
        
    });
})();