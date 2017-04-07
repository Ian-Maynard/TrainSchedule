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
    var timE = 0;
    var freQ = 0;
    
    // Capture Button Click
    $("#add-user").on("click", function() {
      event.preventDefault();

      namE = $("#namE-input").val().trim();
      desT = $("#desT-input").val().trim();
      timE = $("#timE-input").val().trim();
      freQ = $("#freQ-input").val().trim();

      database.ref().set({
        name: namE,
        destination : desT,
        time : timE;
        frequency : freQ,
      });

    });

    // On click write to dataabse 

    database.ref().on("value", function(snapshot) {
      console.log(snapshot.val());
      console.log(snapshot.val().namE);
      console.log(snapshot.val().desT);
      console.log(snapshot.val().timE);
      console.log(snapshot.val().freQ);

      // Change the HTML to reflect
      $("#namE-display").html(snapshot.val().namE);
      $("#desT-display").html(snapshot.val().desT);
      $("#timE-display").html(snapshot.val().timE);
      $("#freQ-display").html(snapshot.val().freQ);

      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
  </script>