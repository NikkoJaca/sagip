var config = {
    apiKey: "AIzaSyAsREyRj2u1GDG1sKF1gyAE476u5pp2PxQ",
    authDomain: "flaremob-b55d8.firebaseapp.com",
    databaseURL: "https://flaremob-b55d8.firebaseio.com",
    projectId: "flaremob-b55d8",
    storageBucket: "flaremob-b55d8.appspot.com",
    messagingSenderId: "27793888698"
};

firebase.initializeApp(config);

function logout(){
    firebase.auth().signOut().then(function() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {

            }
            else{
                window.location = "../flaremob-sagip-webapp/login.html";
            }
        });
    }, function(error) {
        console.error('Sign Out Error', error);
    });

}

