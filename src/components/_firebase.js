import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signOut, signInWithRedirect, signInWithPopup ,onAuthStateChanged} from "firebase/auth";
import { getFirestore,getDocs,collection,addDoc,deleteDoc ,doc,updateDoc} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDbUluFwoJWUYGUysFeUy4Vr0zHYDSNFU0",
  authDomain: "good-sleep-a2c34.firebaseapp.com",
  projectId: "good-sleep-a2c34",
  storageBucket: "good-sleep-a2c34.appspot.com",
  messagingSenderId: "955570029105",
  appId: "1:955570029105:web:a1ed5ab2685746c74e0b10",
  measurementId: "G-6RBM2RW3BN"
};

initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
export const db = getFirestore();

export const FB_AUTH = {
  signOut: () => {
    signOut(auth)
  },
  signInWithGoogle: (isPop = false) => {
    isPop ? signInWithPopup(auth, provider) : signInWithRedirect(auth, provider);
  },
  authChange:(callbackFun)=>{
    onAuthStateChanged(auth, typeof callbackFun === 'function' ? callbackFun:null);
  }
}

export const FB_DB = {
  get: async (name)=>{
    let res = [];
    const data = await getDocs(collection(db, name));
    data.forEach(v=>res.push({id:v.id,...v.data()}))
    return res;
  },
  add:(name,obj,callback)=>{
    addDoc(collection(db,name),obj).then((res)=>{
      if(typeof callback === 'function')
      callback(res.id);
    });
  },
  delete:(name,id)=>{
    deleteDoc(doc(db,name,id));
  },
  update:(name,id,data,callback)=>{
    updateDoc(doc(db, name, id),data).then(()=>{
      alert('수정이 완료되었습니다.')
      if(typeof callback === 'function')
      callback();
    });
  }
}