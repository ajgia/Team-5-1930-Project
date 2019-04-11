(function(){

    // For the current user, writes user data to database

    firebase.auth().onAuthStateChanged(function(user){
        firebase.database().ref("user/"+user.uid).update(
            {
        "name":user.displayName,
        "email":user.email
            });
    });
})();
