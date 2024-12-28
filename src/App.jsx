import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [style, setStyle] = useState({});
  const [LogIn, setLogIn] = useState(false);

  const userRef = useRef(null);

  const BtnChange = (e) => {
    setValue(e.target.value);
  };

  const BtnClick = () => {
    alert('Button clicked!');
    console.log('Button clicked!');
  };

  const MouseOver = () => {
    // alert('Mouse Over event triggered!');
    setStyle({
      color: "grey",
      fontSize: "30px",
      fontWeight: "bolder",
    });
  };

  const MouseOut = () => {
    // alert('Mouse Out event triggered!');
    setStyle({
      color: "white",
      fontSize: "16px",
      fontWeight: "normal",
    });
  };



  const handleClick = () => {
    console.log(userRef.current.value);
    userRef.current.value = "";
  };


  const Login = () => {
    setLogIn(!LogIn);
  }; 1


  return (
    <>
      <button onClick={BtnClick}>Click</button>
      <br />
      <br />
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

      <p onMouseOver={MouseOver} style={style} onMouseOut={MouseOut}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eum placeat a quae architecto soluta,
        ad debitis sint accusamus, corporis neque. Optio quaerat eaque culpa quasi blanditiis aperiam,
        consequuntur illum?
      </p>

      <input
        ref={userRef}
        type="text"
        placeholder="Type something..."
        style={{ padding: "10px", fontSize: "16px", width: "250px", margin: "10px 0" }}
      />

      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          margin: "5px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>

      <div style={{ textAlign: "center", marginTop: "50px" }}>

        {LogIn ? (
          <p>Welcome</p>
        ) : (
          <p>GOOD BY</p>
        )}

        <button
          onClick={Login}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          {LogIn ? "Log Out" : "Log In"}
        </button>
      </div>
    </>
  );
}

export default App;
