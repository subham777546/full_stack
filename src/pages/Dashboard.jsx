


import React from 'react';

const Dashboard = () => {
  return (
    <div style={{ width: '300px', padding: '20px', border: 'black' }}>
   

    <input type="text" placeholder="Username"/>
      <input type="email" placeholder="email"/>
    <input type="password" placeholder="Password"/>

      <div >
        <label>Gender: </label>
      <input type="radio" name="gender" value="male" /> Male
       <input type="radio" name="gender" value="female" /> Female
      <input type="radio" name="gender" value="other" /> Other

      </div>

      <textarea placeholder="Address" ></textarea>

      <select >
       <option value="">Select Country</option>
       <option value="india">india</option>
      <option value="italy">italy</option>
      <option value="russia">russia</option>
      </select>

      <div> 
        <input type="file"/>
      </div>
    </div>
  );
};

export default Dashboard;
