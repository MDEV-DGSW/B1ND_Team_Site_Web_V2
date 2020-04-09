import React, {useState} from 'react';
import sha512 from "js-sha512";
import { observer, inject } from "mobx-react";

import Admin from 'components/Admin/Admin';

const AdminLogin = ({store, history}) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const {handleAdminLogin} = store.AdminStore;
  const requestAdminLogin = e =>{
    e.preventDefault();
    const data ={
      id,
      pw: sha512(password)
    };
    handleAdminLogin(data)
    .then(response=>{
      if(response.status===200){
        window.alert('환영합니다, 관리자님');
        sessionStorage.setItem("Token", response.data["x-access-token"]);
      }
      history.push('/admin');
    })
    .catch(error=>{
      const {status} = error;
      if(status===401){
        window.alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      } else{
        console.error(error);
      }
    })
  }
  return (
    <>
      <Admin
        id={id}
        password={password}
        setId={setId}
        setPassword={setPassword}
        requestAdminLogin={requestAdminLogin}
      />
    </>
  );
};

export default inject("store")(observer(AdminLogin));