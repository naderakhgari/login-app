import React, { useEffect, useState } from 'react';

import { getTokenData, getPolicyData } from "./functions";
import './App.css';
import Policy from "./components/Policy";

function App() {

  const [userData, setUserData] = useState({
    username: '',
    password: '',
    type: 'USER_PASSWORD_AUTH'
  })
  const [tokenData, setTokenData] = useState({})
  const [policyData, setPolicyData] = useState({})

  const changeHandler = (event) => {
    const { name, value } = event.target
    setUserData({
      ...userData,
      [name]: value,
    })
  }

  useEffect(() => {
    (async () => {
      if (tokenData && tokenData.access_token) {
        setPolicyData(await getPolicyData(tokenData.access_token))
      }
    })()
  }, [tokenData])

  const submitHandler = async (event) => {
    event.preventDefault()
    setTokenData(await getTokenData(userData))
  }
  return (
    <div>
      {policyData.policy
        ? <Policy policyData={policyData} />
        : <div className="App">
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
        </div>}
    </div>
  );
}

export default App;
