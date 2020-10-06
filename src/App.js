import React,{useEffect, useState} from 'react';
import './App.css';
import Form from './components/Form';
import Main from './components/Main';
import fire from './fire'

function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasAcc, setHasAcc] = useState(true);
  
  useEffect(() =>{
    AuthListener();
  })

  const signUpHandle = (e) =>{
    e.preventDefault();
    console.log('suc');
    fire.auth().createUserWithEmailAndPassword(email, password)
    .then(cred => {
      console.log(cred.user);
      setEmail('');
      setPassword('');
    })
  }

  const logOutHandle = () =>{
    fire.auth().signOut()
    .then(() =>{
      console.log('logged Out');
    })
  }

  const logInHandle = (e) =>{
    e.preventDefault();
    fire.auth()
    .signInWithEmailAndPassword(email, password)
    .then(cred => {
      console.log(cred.user);
      console.log('logged In');
      setEmail('');
      setPassword('');

    })
  }

  const AuthListener = () =>{
    fire.auth().onAuthStateChanged(user =>{
      if(user){
        setUser(user);
      }else{
        setUser('')
      }
    })
  }

  const hasAccHandle = () =>{
    setHasAcc(!hasAcc);
  }
  return (
    <div className="App">
      {
        !user && <Form hasAcc={hasAcc}
                  email={email}
                  password={password}
                  setEmail={setEmail}
                  setPassword={setPassword}
                  signUpHandle={signUpHandle}
                  logInHandle={logInHandle}
                  hasAccHandle={hasAccHandle}
                  />
      }
      {
        user && <Main logOutHandle={logOutHandle}/>
      }
    </div>
  );
}

export default App;
