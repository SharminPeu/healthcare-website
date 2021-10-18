import { useEffect, useState } from "react"

import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged ,signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initAuth from "../Firebase/firebase.init";
import swal from 'sweetalert';



initAuth();
const useFirebase=()=>{

    const googleProvider=new GoogleAuthProvider();
    const auth=getAuth();
    
const[text,setText]=useState('');
    const [name, setName] = useState('');
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [useremail, setuserEmail] = useState("");
    const [userpassword, setuserPassword] = useState("");


    const getName = e =>{
        setName(e.target.value);
    }

    const getEmail = e =>{
        setEmail(e.target.value);
    }

    const getPassword = e =>{
        setPassword(e.target.value);
    }

    const userEmail = e => {
        setuserEmail(e.target.value)
    }

    const userPassword = e => {
        setuserPassword(e.target.value)
    }

    const setUserInfo = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
          }).then(() => {
            
          }).catch((error) => {
            setError(error.message)
          });
        }

          const userRegistration = e => {
            e.preventDefault();
            console.log(email, password);
            if(email.length === 0){
                setError("Please enter your email")
                return;
            }
            if(password.length === 0){
                setError("Please enter a password");
                return;
            }
            if(password.length < 6){
                setError("Password should be at least 6 charecters");
                return;
            }
            createUserWithEmailAndPassword(auth, email, password,text)
            .then(result => {
                setUserInfo();
                const user = result.user;
                // console.log(user);
                setText('');
                setError("");
            
                swal("Good job!", "Account has been created!", "success");
                
            })
            .catch((error) => {
                setError(error.message);
            })
        }
        
        const signInWithEmail = e => {
            e.preventDefault();
            if(useremail.length === 0){
                setError("Please give your email")
                return;
            }
            if(userpassword.length === 0){
                setError("Please give your password")
                return;
            }
            signInWithEmailAndPassword(auth, useremail, userpassword)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(result.user)
                setError('');
                    swal("Sign in Successful!", "Welcome back !", "info")
                    
            })
            
            .catch((error) => {
                setError(error.message);
            })
        }

   const googleSignIn=()=>{
signInWithPopup(auth,googleProvider)
.then(result=>{
    console.log(result.user);
    setUser(result.user)
})
.catch(error=>{
    setError(error.message);
    })
}
const logOut=()=>{
signOut(auth)
.then(()=>{
    setUser({});
})
.catch((error)=> {
    setError(error.message)
})
}
useEffect(()=>{
    onAuthStateChanged(auth,user=>{
        if(user){
setUser(user);
        }
    })
},[]);

    return{
        user,
        googleSignIn,
        error,
        logOut,
        userRegistration,
         getName, getEmail, getPassword, userEmail, userPassword, signInWithEmail,text

    }
}

export default useFirebase;



  