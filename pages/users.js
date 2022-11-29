import { useState, useEffect } from 'react';
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { parseCookies } from '/helpers/index';


export default function Users() {
  // const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  const { getAllUsers } = useContext(AuthContext)
  const [users, setUsers] = useState(null);

  useEffect(() => {
// const users = getAllUsers();
setUsers(getAllUsers());
    // getAllUsers().then(x => setUsers(x));
  }, []);
 
 console.log(getAllUsers());

  return (
    <main className="dashboard">
      {/* <ul>
        {users.map((e) => (
          <li>{e.username} - {e.firstName} - {e.lastName}</li>
        ))}
      </ul> */}
      {users &&
        <ul>
          {users.map(user =>
            <li>{user.username} {user.firstName} {user.lastName}</li>
          )}
        </ul>
      }
    </main>
  )
}


export async function getServerSideProps({ req }) {

  const { x_access_token } = parseCookies(req);

  // Redirecting the user if the x_access_token is not found
  if (!x_access_token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }


  return {
    props: {
     x_access_token
    },
  };
}