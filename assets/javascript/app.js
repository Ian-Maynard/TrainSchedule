// Init firebase 
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
    $("#addTrain").on("click",function(event) {
      event.preventDefault();

      namE = $("#iName").val().trim();
      desT = $("#iDest").val().trim();
      timE = $("#iTime").val().trim();
      freQ = $("#iFreq").val().trim();

      database.ref().push({
        name: namE,
        destination : desT, 
        time : timE,
        frequency : freQ,
      });

      nuRow(namE,desT,timE,freQ); // Create New ROw 

    });

    // On click write to firebase

    database.ref().on("value", function(snapshot) {   // Firebase listener 
      nuRow(snapshot.val().namE,snapshot.val().desT,snapshot.val().timE,snapshot.val().freQ);
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });



function timCalc(){

}// Calculate time


function newRow(w,x,y,z){
  var lnamE = w;
  var ldesT = x;
  var ltimE = y;
  var lfreQ = z;
  var nuRow=  $("<tr>");
  var nuTd= $("<td");

  // Here call timCalc to calculate next arrival and Minutes away. 
  nuRow = nuRow+nuTd+lnamE+nuTd+ldesT+nuTd+ltimE+nuTd+lfreQ+nuTd; // Build the row.
  $("#trnTab").append(nuRow); // Append the row to the stable. 

} // Add to table 

