import { parseCookies } from '/helpers/index';


export default function Page({ token }) {

  //  We now have access to the token
  console.log(token)

  return (
    <main className="dashboard">
      <h1>Product initialization</h1>  
    </main>
  )
}


export async function getServerSideProps({ req }) {

  const { token } = parseCookies(req);

  // Redirecting the user if the token is not found
  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  


  return {
    props: {
      token
    },
  };
}