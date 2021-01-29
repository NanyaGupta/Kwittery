//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDTblzVs2lKgtqXZNizyrPwbP1AVE08PHg",
      authDomain: "testing-kwitter-web-app.firebaseapp.com",
      databaseURL: "https://testing-kwitter-web-app-default-rtdb.firebaseio.com",
      projectId: "testing-kwitter-web-app",
      storageBucket: "testing-kwitter-web-app.appspot.com",
      messagingSenderId: "1029988723550",
      appId: "1:1029988723550:web:5010936e55a46c9c3bbdcf"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    var msg;
    userName=localStorage.getItem("userName");
    roomName=localStorage.getItem("roomName");

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(roomName).push({
       name:userName,
       message:msg,
       like:0
      });
      document.getElementById("msg").value="";
}


function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
nameWithTag="<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>";
messageWithTag="<h4 class='message_h4'>"+ message +"</h4>";
likeButton="<button class='btn btn-warning' id="+firebase_message_id +"value="+ like + "onclick='updateLike(this.id)'>";
spanWithTag="<span class='glyphicon glyphicon-thumbs-up'> Like : "+ like + "</span> </button> <hr>";
row=nameWithTag + messageWithTag + likeButton + spanWithTag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function updateLike(messageId){
console.log("Clicked on like button - "+ messageId);
buttonId=messageId;
gettingLikes=document.getElementById(buttonId).value;
updateLikes=Number(gettingLikes) + 1;
console.log(updateLikes);
firebase.database().ref(roomName).child(messageId).update({
      like: updateLikes
});
}

function logOut(){
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
      window.location="index.html";
}
