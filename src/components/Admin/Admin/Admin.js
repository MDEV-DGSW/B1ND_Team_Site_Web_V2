import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Admin.scss';

const Admin = ({id, setId, password, setPassword, requestAdminLogin}) => {
  return (
    <div className="Login">
      <form onSubmit={requestAdminLogin}>
      <div className="Login-box">
      <div className="Login-title">관리자 로그인</div>
      <div className="Login-idBox">
      <TextField 
      id="outlined-basic" 
      label="아이디" variant="outlined" 
      value={id} onChange={e => setId(e.target.value)} className="Login-ID"/>
      </div>
      <div className="Login-pwBox">
      <TextField id="outlined-basic" 
      label="비밀번호" variant="outlined" 
      value={password} onChange={e => setPassword(e.target.value)} className="Login-PW"/>
      </div>
      <div className="Login-btnBox">
      <Button variant="outlined" color="primary" onClick={requestAdminLogin} className="Login-button">
      로그인
      </Button>
      </div>
      </div>
      </form>
    </div>
  );
};

export default Admin;