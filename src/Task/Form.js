import { Button, Flex, TextField, TextAreaField } from "@aws-amplify/ui-react";
import React, { useState } from 'react';
// import {
//     FieldGroupIcon,
//     FieldGroupIconButton,
//   } from '@aws-amplify/ui-react';
//   import { MdInfo, MdSearch } from 'react-icons/md';

const Form = () => {
    const [name, setName] = useState('');
    const [batchnumber, setBatchNumber] = useState('');
    const [URL, setURL] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:',name);
        console.log('Batch Number:',batchnumber);
        console.log('URL:',URL);
        console.log('Message:',message);
    };
  return (
    <>
      {/* <Flex
    backgroundColor="#1C3484"
    > */}
      <form method='POST' onSubmit={handleSubmit}>
        <Flex
          justifyContent="center"
          backgroundColor="var(--amplify-colors-white)"
          height="auto"
          marginLeft="25%"
          marginRight="25%"
          borderRadius="10px"
          paddingBottom="30px"
          marginTop="50px"
        >
            <Flex 
            justifyContent="center"
            width="400px"
            direction="column">
            <h1>Send Broadcast Messages</h1>

            <TextField
              type="text"
              isRequired={true}
              placeholder="Enter your name"
              outerStartComponent={<Button>Name</Button>}
              innerEndComponent={<span>
                  <i className="material-icons" >person</i>
                </span>}
              label={<span><i
                    className="material-icons"
                    style={{ marginRight: "8px", verticalAlign: "middle" }} 
                    htmlFor='Name'>
                    person
                  </i>
                  <b>Name</b>
                </span>
              }
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              placeholder="Batch number"
              type="number"
              isRequired={true}
              label={<span> <i
                    className="material-icons"
                    style={{ marginRight: "8px", verticalAlign: "middle" }} 
                    htmlFor='batchnumber'>
                    batch_prediction
                  </i> <b>Batch Number</b> </span> 
              }
              id='batchnumber'
              onChange={(e) => setBatchNumber(e.target.value)}
            />
            <TextField
              placeholder="URL"
              type="text"
              isRequired={true}
              label={<span><i
                    className="material-icons"
                    style={{ marginRight: "8px", verticalAlign: "middle" }}
                    htmlFor='URL'>
                    link
                  </i> <b>URL</b> </span>
              }
              onChange={(e) => setURL(e.target.value)}
            />
            <TextAreaField
              minrows={3}
              maxLength={100}
              descriptiveText=""
              type=""
              isRequired={true}
              resize="vertical"
              placeholder="Message your queries here"
              label={<span> <i 
                    className="material-icons"
                    style={{ marginRight: "8px", verticalAlign: "middle" }}>
                    message
                  </i> <b>Message</b> </span>
              }
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              type="submit"
              // variation="primary"
              // // backgroundColor='var(--amplify-colors-myblue)'   // colorTheme="info"
              className="custom-button"
              marginTop="20px"
            >
              Send Whatsapp Message
            </Button>
          </Flex>
        </Flex>
      </form>
    </>
  );
};

export default Form;


// body {
//   background-color: #1C3484;
// }
// /* Button {
//   background-color: #15a8f3;
// } */
// .custom-button {
//   background-color: #15a8f3;
//   color: white; 
//   transition: background-color 0.3s; 
//   cursor: pointer; 
//   font-size: 16px;
// }
// .custom-button:hover {
//   background-color: #1c3484; 
// }