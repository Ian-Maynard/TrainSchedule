$(document).ready(function(){

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

    // Initialize Values

    var namE = "";
    var desT = "";
    var timE = 0;
    var freQ = 0;
    var nArr = 0; 
    var mAwa = 0; 
    
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

      newRow(namE,desT,timE,freQ); // Create New ROw 

    });

    // On click write to firebase

    database.ref().on("value", function(snapshot) {   // Firebase listener 
      newRow(snapshot.val().namE,snapshot.val().desT,snapshot.val().timE,snapshot.val().freQ);
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });



function timCalc(){

} // Calculate time

function newRow(w,x,y,z){
  var lnamE = "<tr><td>" + w + "</td>";
  var ldesT = "<td>"+x+"</td>";
  var ltimE = "<td>"+y+"</td>";
  var lfreQ = "<td>"+z+"</td>";
  var pHld1 = "<td>"+" "+"</td>";
  var pHld2 = "<td>"+" "+"</td></tr>";
  var nRow  = lnamE+ldesT+ltimE+lfreQ; // Build the row. 

  // Here call timCalc to calculate next arrival and Minutes away. 
  
  $("#trnTab").append(nRow); // Append the row to the table. 

} // Add to table 

});