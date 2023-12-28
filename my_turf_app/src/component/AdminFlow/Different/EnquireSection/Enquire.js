import React, { useEffect, useState } from 'react';
import EnquireUserContainer from './EnquireUserContainer';

export default function Enquire() {
  const [user, setUser] = useState([]);
  const [searchNames, setSearchName] = useState('');
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch('https://fakestoreapi.com/users')
      .then(res => res.json())
      .then(json => {
        setUser(json);
        setLoader(false);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setLoader(false);
      });
  }, []);

  let handleChange = (event) => {
    setSearchName(event.target.value);
  };

  let filteredUsers = user.filter((userData) =>
    userData.name.firstname.toLowerCase().startsWith(searchNames.toLowerCase())
  );

  let Users = filteredUsers.map((userData, index) => (
    <EnquireUserContainer
      key={index}
      srNo={index + 1}
      UserName={userData.name.firstname}
      email={userData.email}
      mobileNumber={userData.phone}
      address={userData.address.city}
    />
  ));

  return (
    <div className='EnquirePage'>
      <div className="searchBoxContainer">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="search" placeholder='Enter User Name' name='name' onChange={handleChange} />
      </div>
      {/* <p className='heading'>User Enquire List are...</p> */}
      {loader ? (
        <div className="loader">
        </div>
      ) : (
        Users
      )}
    </div>
  );
}





























// import React, { useEffect, useState } from 'react'
// import EnquireUserContainer from './EnquireUserContainer'

// export default function Enquire() {
//   const [user, setUser] = useState([])
//   const [searchNames, setSearchName] = useState('')
//   const [loader ,setLoader] = useState(false);
//   useEffect(() => {
//     setLoader(true)
//     fetch('https://fakestoreapi.com/users')
//       .then(res => res.json())
//       .then(json => setUser(json))
//       setLoader(false)
//   }
//   , [])

//   let handleChange = (event) => {
//     setSearchName(event.target.value)
//   }
  
//   let filteredUsers = user.filter((userData) =>
//     userData.name.firstname.toLowerCase().startsWith(searchNames.toLowerCase())
//   );

//   let Users = filteredUsers.map((user, index) => {
//     return (
//       {
//         loader ?(
//         .loader {
//           width: 65px;
//           height: 117px;
//           position: relative;
//         }
//         .loader:before,
//         .loader:after {
//           content: "";
//           position: absolute;
//           inset: 0;
//           background: #ff8001;    
//           box-shadow: 0 0 0 50px;
//           clip-path: polygon(100% 0, 23% 46%, 46% 44%, 15% 69%, 38% 67%, 0 100%, 76% 57%, 53% 58%, 88% 33%, 60% 37%);;
//         }
//         .loader:after {
//           animation: l8 1s infinite;
//           transform: perspective(300px) translateZ(0px)
//         }
//         @keyframes l8 {
//           to {transform:perspective(300px) translateZ(180px);opacity:0}
//         }):(

//           <EnquireUserContainer key={index} srNo={index + 1} UserName={user.name.firstname} email={user.email} mobileNumber={user.phone} address={user.address.city} />
//         )
//       }
//     )
//   })
//   return (
//     <div className='EnquirePage'>
//       <div className="searchBoxContainer">
//         <i class="fa-solid fa-magnifying-glass"></i>
//         <input type="search" placeholder='Enter User Name' name='name' onChange={handleChange} />
//       </div>
//       <p className='heading'>User Enquire List are...</p>
//       {
//         Users
//       }
//     </div>
//   )
// }
