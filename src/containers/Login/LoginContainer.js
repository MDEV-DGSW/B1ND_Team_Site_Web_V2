import React, {useState} from 'react';
import sha512 from 'js-sha512';
import {observer, inject} from 'mobx-react';

import Login from 'components/Login';

const LoginContainer = ({store, history}) =>{
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const {handleLogin} = store.LoginStore;
  const requestLogin = e =>{
    e.preventDefault();
    const data ={
      id,
      pw: sha512(password),
    };
    handleLogin(data)
      .then(response=>{
        if(response.status===200){
          window.alert('환영합니다.');
          sessionStorage.setItem('Token', response.data["x-access-token"]);
        }
        history.push('/todo');
      })
      .catch(error=>{
        console.log(error);
      })
  }

  return(
    <>
    <Login
      id={id}
      password={password}
      setId={setId}
      setPassword={setPassword}
      requestLogin = {requestLogin}
    />
    </>
  );
};

export default inject("store")(observer(LoginContainer));