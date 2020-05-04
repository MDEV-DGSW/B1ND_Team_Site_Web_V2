import React, {useState} from 'react';
import sha512 from 'js-sha512';
import {observer, inject} from 'mobx-react';

import Register from 'components/Register';

const RegisterContainer = ({store, history}) =>{
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const {handleLogin} = store.LoginStore;
  const requestLogin = e =>{
    e.preventDefault();
    const data ={
      id,
      pw: sha512(password),
      name,
      email
    };
    handleLogin(data)
      .then(response=>{
        if(response.status===200){
          window.alert('환영합니다.');
        }
        history.push('/login');
      })
      .catch(error=>{
        console.log(error);
      })
  }

  return(
    <>
    <Register
      id={id}
      password={password}
      name={name}
      email={email}
      setId={setId}
      setPassword={setPassword}
      setName={setName}
      setEmail={setEmail}
      requestLogin = {requestLogin}
    />
    </>
  );
};

export default inject("store")(observer(RegisterContainer));