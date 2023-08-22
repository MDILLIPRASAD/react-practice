// import "./App.css"
// import React, { useState } from 'react';

// const BroadcastForm = () => {
//   const [batchNumber, setBatchNumber] = useState('');
//   const [url, setUrl] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Batch Number:', batchNumber);
//     console.log('URL:', url);
//     console.log('Message:', message);
    
//   };

//   return (
//     <form className="form-items" onSubmit={handleSubmit}>
//         <div className="form-items" >
//             <h1>Send Broadcast Messages</h1>
//         </div>
//       <div className="form-items">
//         <label htmlFor="batchNumber">Batch Number:</label>
//         <input
//           type="text"
//           id="batchNumber"
//           // value={batchNumber}
//           // onChange={(e) => setBatchNumber(e.target.value)}
//         />
//       </div>
//       <div className="form-items">
//         <label htmlFor="url">URL:</label>
//         <input
//           type="text"
//           id="url"
//           // value={url}
//           // onChange={(e) => setUrl(e.target.value)}
//         />
//       </div>
//       <div className="form-items">
//         <label htmlFor="message">Message:</label>
//         <textarea
//           id="message"
//           // value={message}
//           // onChange={(e) => setMessage(e.target.value)}
//         />
//       </div>
//       <button className="form-items" type="submit">Send WhatsApp Message</button>
//     </form>
//   );
// };

// export default BroadcastForm;

// form {
//     display: flex;
//     flex-direction: column;
//     width: 40%;
//     margin: 0 auto;
//     background-color: rgb(243, 246, 249);
//     border-radius: 20px;
//     height: 500px;
   
//   }
//   /* body {
//     background-color: #1C3484;
//   } */
  
//   /* h1 {
//     margin-left: 25%;
//   } */
//   label {
//     margin-top: 10px;
//     padding-right: 10px;
//   }
  
//   input, textarea {
//     border-radius: 5px;
//     outline: none;
//     padding: 8px;
//     margin-top: 5px;
//   }
  
//   input {
//     /* border-radius: ; */
//   }
//   button {
//     padding: 10px 20px;
//     margin-top: 10px;
//     background-color: #007bff;
//     color: white;
//     border: none;
//     cursor: pointer;
//     width: 40%;
//   }
  
//   button:hover {
//     background-color: #0056b3;
//   }
//   .form-items {
//     margin-left: auto;
//     margin-right: auto;
//     margin-top: 30px;
//     text-align: center;
//   }


