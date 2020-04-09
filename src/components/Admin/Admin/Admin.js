import React from 'react';

const Admin = ({id, setId, password, setPassword, requestAdminLogin}) => {
  return (
    <div>
      <form onSubmit={requestAdminLogin}>
      <input placeholder="아이디" value={id} 
       onChange={e => setId(e.target.value)} /> 
      <input placeholder="비밀번호" value={password}
      onChange={e => setPassword(e.target.value)}/>
      <button onClick={requestAdminLogin} >로그인</button>
      </form>
    </div>
  );
};

export default Admin;