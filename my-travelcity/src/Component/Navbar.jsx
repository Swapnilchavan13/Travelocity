// import Login from "./Login";
// import { Link } from 'react-router-dom';

function navbar() {
return (
<>
<div className="navbar">
      <div>
    <img src="https://www.travelocity.com/_dms/header/logo.svg?locale=es_MX&siteid=80001&2" alt="image"/>
    
    <select>
      <option>More Travel options</option>
      <option>packeges</option>
      <option>lodging</option>
      <option>cars</option>
      <option>flights</option>
      <option>Activities</option>
      </select>
      </div>

      <div className='secdiv'>
      <h5>Advertice a property</h5>
      <h5>Cutomer Support</h5>
      <h5>My trips</h5>
      <h5>Login</h5>
      </div>
    </div>
    </>    
)
}
export default navbar;