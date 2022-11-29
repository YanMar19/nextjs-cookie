import { API_URL } from '../../config/index'
import cookie from 'cookie'

const user = async (req, res) => {
  if (req.method === 'GET') {
    if (!req.headers.cookie) {
      res.status(403).json({message: 'Not Authorized'})
      return
    }

    const {x_access_token } = cookie.parse(req.headers.cookie)
// console.log(x_access_token);
    const apiRes = await fetch(`${API_URL}/users`, {
      method: 'GET',
      headers: {
        'x_access_token': x_access_token
      }
    })
// console.log(apiRes.headers);
    const user = await apiRes.json()
// console.log(user.data);
    if(apiRes.ok) {
      res.status(200).json({user})
    } else {
      res.status(403).json({message: 'User forbidden'})
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}

export default user
