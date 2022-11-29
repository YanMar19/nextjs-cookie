import { parseCookies } from '/helpers/index';


export default function Page({ x_access_token }) {

  //  We now have access to thex_access_token
  console.log(x_access_token)

  return (
    <main className="dashboard">
      <h1>Product initialization</h1>  
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