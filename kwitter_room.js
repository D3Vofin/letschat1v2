var firebaseConfig = {
      apiKey: "AIzaSyDWLtetcgIdu8qn4QLXOOd4iFgXpAKOf1Q",
      authDomain: "kwitter-1b219.firebaseapp.com",
      databaseURL: "https://kwitter-1b219-default-rtdb.firebaseio.com",
      projectId: "kwitter-1b219",
      storageBucket: "kwitter-1b219.appspot.com",
      messagingSenderId: "335600216450",
      appId: "1:335600216450:web:37c678df33e8961aa3c79b"
    };


    

    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
