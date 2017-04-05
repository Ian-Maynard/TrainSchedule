// Init firebase 
// Change the HTML to reflect

  var config = {
    apiKey: "AIzaSyBD0FinT2IqcnBdGiOlJWDJZ0cxINq-xlQ",
    authDomain: "trainschedule-88339.firebaseapp.com",
    databaseURL: "https://trainschedule-88339.firebaseio.com",
    projectId: "trainschedule-88339",
    storageBucket: "trainschedule-88339.appspot.com",
    messagingSenderId: "609386761441"
  };
  
  firebase.initializeApp(config);
  var database = firebase.database();

    // Initial Values
    var namE = "";
    var desT = "";
    var freQ = 0;
    
    // Capture Button Click
    $("#add-user").on("click", function() {
      // Don't refresh the page!
      event.preventDefault();

      // YOUR TASK!!!
      // Code in the logic for storing and retrieving the most recent user.
      // Don't forget to provide initial data to your Firebase database.
      namE = $("#namE-input").val().trim();
      desT = $("#desT-input").val().trim();
      freQ = $("#freQ-input").val().trim();

      database.ref().set({
        name: namE,
        destination : desT,
        frequency : freQ,
      });

    });

    // Firebase watcher + initial loader HINT: .on("value")

    database.ref().on("value", function(snapshot) {

      // Log everything that's coming out of snapshot
      console.log(snapshot.val());
      console.log(snapshot.val().name);
      console.log(snapshot.val().email);
      console.log(snapshot.val().age);
      console.log(snapshot.val().comment);

      // Change the HTML to reflect
      $("#namE-display").html(snapshot.val().name);
      $("#desT-display").html(snapshot.val().email);
      $("#freQ-display").html(snapshot.val().age);

      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
  </script>