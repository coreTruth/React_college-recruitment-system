import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBuM_MHEuswoK_b_RzzqieP_yAKaDhuJ44",
    authDomain: "campus-recruitment-syste-4081b.firebaseapp.com",
    databaseURL: "https://campus-recruitment-syste-4081b.firebaseio.com",
    projectId: "campus-recruitment-syste-4081b",
    storageBucket: "campus-recruitment-syste-4081b.appspot.com",
    messagingSenderId: "391159743567"
  };
  firebase.initializeApp(config);

  export const ref = firebase.database().ref()
  export const firebaseAuth = firebase.auth
  export const userRef = firebase.database().ref('users');
  export const jobsRef = firebase.database().ref('jobpost');
  export const applicantRef = firebase.database().ref('applicants');
  export const applicantR = firebase.database().ref('jobpost/applicants');
  export const cv = firebase.database().ref('cv');