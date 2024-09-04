import React, { useContext } from 'react';
import userContext from '../context/UserContext';

function Profile() {
  const [user] = useContext(userContext);  // Access the user data from context

  if (!user) {
    return <div>Please Login</div>;
  } else {
    // {console.log(user);}
    // {console.log(user.userName);}
    // {console.log(user.password)};
    return <div>Welcome</div>;  // Access the userName property
  }
}

export default Profile;
