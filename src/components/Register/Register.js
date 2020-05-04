import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Register.scss';

const Register = ({id, setId, password, setPassword, name, setName, email, setEmail, requestAdminRegister}) => {
  return (
    <div className="Register">
      <form onSubmit={requestAdminRegister}>
      <div className="Register-box">
      <div className="Register-title">회원가입</div>
      <div className="Register-idBox">
      <TextField 
      id="outlined-basic" 
      label="아이디" variant="outlined" 
      value={id} onChange={e => setId(e.target.value)} className="Register-ID"/>
      </div>
      <div className="Register-pwBox">
      <TextField id="outlined-basic" 
      label="비밀번호" variant="outlined" type="password"
      value={password} onChange={e => setPassword(e.target.value)} className="Register-PW"/>
      </div>
      <div className="Register-pwBox">
      <TextField id="outlined-basic" 
      label="이름" variant="outlined" 
      value={name} onChange={e => setName(e.target.value)} className="Register-PW"/>
      </div>
      <div className="Register-pwBox">
      <TextField id="outlined-basic" 
      label="이메일" variant="outlined" 
      value={email} onChange={e => setEmail(e.target.value)} className="Register-PW"/>
      </div>
      <div className="Register-btnBox">
      <Button variant="outlined" color="primary" onClick={requestAdminRegister} className="Register-button">
      회원가입
      </Button>
      </div>
      </div>
      </form>
    </div>
  );
};

export default Register;