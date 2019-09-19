import firebase from "firebase"

const Config = {
  apiKey: "AIzaSyDTh7wvqvLAdT8uAVoG_CgyUTMQLz4gN8M",
  authDomain: "chat-page-da0db.firebaseapp.com",
  databaseURL: "https://chat-page-da0db.firebaseio.com",
  projectId: "chat-page-da0db",
  storageBucket: "",
  messagingSenderId: "54112207500",
  appId: "1:54112207500:web:a589ed141d2f3ec90331a9"
};

const fire=firebase.initializeApp(Config);


export default fire;