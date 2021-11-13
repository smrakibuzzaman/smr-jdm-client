import { getAuth, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";


import initializeAuthentication from './../firebase/firebase.auth';


initializeAuthentication();

const useFirebase = ()=>{
  const [updatedName, setUpdatedName] = useState("");
const [user, setUser]= useState({});
const [email, setEmail]= useState("");
const [password, setPassword]= useState("");
const [isLoading, setIsLoading] = useState(true);
const [isLogin, setIsLogin] = useState(false);
const [error, setError] = useState("");
const [isAdmin, setIsAdmin] = useState(false);
const auth = getAuth();





const handleUpdateUser = e => {
  setUpdatedName(e.target.value)
}

const handleSubmit = e => {
  e.preventDefault();
  e.target.reset();
}

const handleRegister =()=> {
  
  if (password.length < 6) {
    setError("At least six characters required for password")
    return;
  }


   createNewUserWithEmail(email, password); 
 }
const handleLogin =()=> {
  
  if (password.length < 6) {
    setError("At least six characters required for password")
    return;
  }


 existingUserLogin(email, password);
 }

 const existingUserLogin= (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
  .then(result=>{
    localStorage.setItem('email', result?.user?.email);
    setError("");
   
    
  })
  .catch(error=>{
    setError(error.message)
  })
}
  

const setNewUser = ()=> {
  updateProfile(auth.currentUser, {
    email,
    displayName: updatedName
  }).then(() => {
    
  }).catch((error) => {
    
  });
}

 const createNewUserWithEmail =(email, password)=>{
  createUserWithEmailAndPassword(auth, email, password)
.then(result=>{
  localStorage.setItem('email', result?.user?.email);
  setError("");
  setNewUser();
  saveUser(email, updatedName)

})
.catch(error=>{
  setError(error.message)
})

}

const saveUser = (email, displayName) => {
  const user = {email, displayName}
  fetch("https://whispering-headland-30788.herokuapp.com/users", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((result) =>{
     
        alert('User Added Successfully')
   
    
    });
  console.log(user);
  };

  const handleEmail =e=> {
     setEmail(e.target.value); }
  
     const handlePassword =e=> {
      setPassword(e.target.value);
  
      }
const toggleLogin = e=> {
  setIsLogin(e.target.checked);
}



const logOut =()=> {
    signOut(auth)
    .then(()=>{})
    .finally(()=>setIsLoading(false));
}




useEffect(() => {
  fetch(`https://whispering-headland-30788.herokuapp.com/users/${user?.email}`)
    .then((res) => res.json())
    .then((data) => setIsAdmin(data.admin));
}, [user?.email]);



useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, user => {
        if (user) {
          setUser(user);
        } else {
         setUser({});
        }
        setIsLoading(false);
      });
      return ()=> unSubscribe();
},[])

return{
    user,
    email,
    password,
    logOut,
    isLoading, 
    error,
    handleUpdateUser,
    handleSubmit,
    handleEmail,
     handlePassword,
     toggleLogin, 
     isLogin,
     handleRegister,
     handleLogin,
     isAdmin

}
}

export default useFirebase;