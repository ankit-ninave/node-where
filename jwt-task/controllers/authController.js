

const { userinfo } = require('../users')
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'my_super_secret'; // Define it here
const pool = require('../../connection')

exports.dashboard = (req, res) => {
  //console.warn('3rd authController');
  res.json({ message: 'dashboard viewing' });
}

exports.login = (req, res) => {
  const { username, password } = req.body;
  // Find user
  const user = userinfo.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate token
  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '15Seconds' });
  return res.json({ message: 'Login successful', token });
};

exports.logout = (req, res) => {
  res.json({ message: 'logout successful' });
}


exports.signup = async (req, resp) => {
  console.warn('req.body 1111', req.url);
  console.warn('req.body', req.body);

  try{
  let l_UserDetails = req.body

  const insertQuery =
    `INSERT into adm_user_mst (user_id,first_name,last_name,email,username,password_hash,role,status) 
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
    RETURNING *
    `
  const values = [l_UserDetails.user_id,
                  l_UserDetails.first_name,
                  l_UserDetails.last_name,
                  l_UserDetails.email,
                  l_UserDetails.username,
                  l_UserDetails.password_hash,
                  l_UserDetails.role,
                  l_UserDetails.status]

  const result = await pool.query(insertQuery, values);
  console.warn('INSERTED DTAA',result.rows[0]);
   resp.status(201).json({
    message:'Data inserted successfully',
    data:result.rows[0]
   }) 

  }catch(err){
        console.error('❌ Insert error:', err.message);
        resp.status(501).json({
          error:'Data not inserted',
          details:err.message
        })
  } 
}


exports.userlisting = (async (req,resp)=>{
try{
  let GetDataQuery = `Select * from adm_user_mst` 
    const result = await pool.query(GetDataQuery);
   resp.status(201).json({
    message:'Data get successfully',
    data:result.rows[0]
   }) 
}catch(err){
        console.error('❌ Insert error:', err.message);
        resp.status(501).json({
          error:'Data not inserted',
          details:err.message
        })
}
})


