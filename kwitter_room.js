
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
    
    userName=localStorage.getItem("userName");
document.getElementById("userName").innerHTML="Welcome "+ userName+" !";

function addRoom(){
 var roomName=document.getElementById("roomName").value;
firebase.database().ref("/").child(roomName).update({
purpose: "adding room Name"
});
localStorage.setItem("roomName",roomName);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     var roomNames = childKey;
      console.log("Room Name - "+ roomNames);
     row="<div class='room_name' id="+ roomNames +" onclick='redirectToRoomName(this.id)'> #" + roomNames +"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });
});
}
getData();

function redirectToRoomName(room){
console.log(room);
localStorage.setItem("roomName",room);
window.location="kwitter_page.html";
}

function logOut(){
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
      window.location="index.html";
}


