import { useState } from 'react'

function User() {

    const [value, setValue] = useState('');

    const BtnChange = (e) => {
        setValue(e.target.value);
      };

    const BtnClick = () => {
        alert('Button clicked!');
        console.log('Button clicked!');
      };
  return (
    <>
      <button onClick={BtnClick}>Click</button>
      
      <input
        type="text"
        value={value}
        onChange={BtnChange}
        placeholder="Type something..."
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '250px',
          textAlign: 'center',
        }}
      />
      <h3>{value}</h3>
    </>
  )
}

export default User
