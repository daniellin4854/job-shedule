import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FacebookLogin from 'react-facebook-login'

function App() {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState({});

  const responseFacebook = (response) => {
    // setUserData({
    //   name: response.name,
    //   email: response.email,
    //   picture: response.picture.data.url,
    // })
    if (response.status !== 'unknown') {
      setShowModal(false);
      console.error('Sorry!', 'Something went wrong with facebook Login.');
      return;
    } else {
      console.log('response: ', response);
    }
  }

  return (
    <>
      <button className='bg-blue-500 px-4, py-2, w-1/4' onClick={() => setShowModal(true)}>Continue with login</button>
      <div className={`${showModal ? 'block' : 'hidden'}`}>
        <div>
          {userData.name ? (
            <div>
              <img src={userData.picture} alt={userData.name} />
              <p>Welcome, {userData.name}</p>
              <p>Email: {userData.email}</p>
            </div>
          ) : (
            <FacebookLogin
              buttonStyle={{padding:"6px"}} 
              appId="1229501584718546"
              autoLoad={false}
              fields="name, email, picture"
              callback={responseFacebook}
            />
          )}
        </div>
      </div>

    </>
  )
}

export default App
