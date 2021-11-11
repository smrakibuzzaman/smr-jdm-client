import { getAuth, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";



const useFirebase = ()=>{
  const [updatedName, setUpdatedName] = useState("");
const [user, setUser]= useState({});
const [email, setEmail]= useState("");
const [password, setPassword]= useState("");
const [isLoading, setIsLoading] = useState(true);
const [isLogin, setIsLogin] = useState(false);
const [error, setError] = useState("");
const auth = getAuth();



const handleUpdateUser = e => {
  setUpdatedName(e.target.value)
}
const handleSubmit =e=> {
  e.preventDefault();
  if (password.length < 6) {
    setError("At least six characters required for password")
    return;
  }


  isLogin? existingUserLogin(email, password) : createNewUserWithEmail(email, password); 
 }

 const existingUserLogin= (email,password) => {
  signInWithEmailAndPassword(auth, email, password)
  .then(result=>{
   
    setError("");
    
  })
  .catch(error=>{
    setError(error.message)
  })
}
  

const setNewUser = ()=> {
  updateProfile(auth.currentUser, {
    displayName: updatedName
  }).then(() => {
    
  }).catch((error) => {
    
  });
}

 const createNewUserWithEmail =(email, password)=>{
  createUserWithEmailAndPassword(auth, email, password)
.then(result=>{
 
  setError("");
  setNewUser();

})
.catch(error=>{
  setError(error.message)
})

}

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

}
}

export default useFirebase;