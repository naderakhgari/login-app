import React from 'react';
import './App.css';

function App() {
  const changeHandler = (event) => {

  }

  const submitHandler = (event) => {

  }
  return (
    <div className="App">
      <h2>Sign In</h2>
      <hr />
      <form >
        <label htmlFor='username'>User Name:</label>
        <input type='text' name='username' placeholder='usertest' onChange={changeHandler}></input>
        <br />
        <label htmlFor='password'>Password:</label>
        <input type='password' name='password' placeholder='Password...' onChange={changeHandler}></input>
        <br />
        <button onClick={submitHandler}>Sign In</button>
      </form>
    </div>
  );
}

export default App;
