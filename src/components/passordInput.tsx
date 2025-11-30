// src/components/PasswordInput.jsx
import { useState } from 'react';

function PasswordInput() {
  const [password, setPassword] = useState('fdgf');

  return (
      <input className='password-input'
        type='text'  
        value={password}    
        onChange={(e) => setPassword(e.target.value)}
      />     
  );
}

export default PasswordInput;