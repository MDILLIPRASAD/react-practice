import { Button, Flex, TextField, TextAreaField } from "@aws-amplify/ui-react";
import React, { useState } from "react";
import './App.css'

const WatiForm = () => {
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    name: "",
    batchnumber: "",
    url: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      data.name.trim() === "" ||
      data.batchnumber.trim() === "" ||
      data.url.trim() === "" ||
      data.message.trim() === ""
    ) {
      setError(true);
      return;
    } else {
        setError(false);
    //logic
  };
};
  return (
    <>
      <form onSubmit={handleSubmit}>
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
          <Flex justifyContent="center" width="400px" direction="column" >
            <h1>Send Broadcast Messages</h1>

            <div>
              <TextField
                type="text"
                isRequired={true}
                placeholder="Enter your name"
                // hasError={!(data.name && data.name.length > 0)}
                // errorMessage="Please enter Template name"
                label={
                  <span>
                    <i
                      className="material-icons"
                      style={{ marginRight: "8px", verticalAlign: "middle" }}
                      htmlFor="name"
                    >
                      person
                    </i>
                    <b>Template Name</b>
                    <span style={{ color: "red" }}>*</span>
                  </span>
                }
                id="name"
                name="name"
                value={data.name}
                onChange={(e) => handleChange(e)}
              />
              {error && data.name === "" && (
                <label className="errorMsg">Name can't be Empty</label>
              )}
            </div>

            <div>
              <TextField
                placeholder="Batch number"
                type="number"
                isRequired={true}
                label={
                  <span>
                    
                    <i
                      className="material-icons"
                      style={{ marginRight: "8px", verticalAlign: "middle" }}
                      htmlFor="batchnumber"
                    >
                      batch_prediction
                    </i>
                    <b>Batch Number</b>
                    <span style={{ color: "red" }}>*</span>{" "}
                  </span>
                }
                id="batchnumber"
                name="batchnumber"
                value={data.batchnumber}
                onChange={(e) => handleChange(e)}
              />
              {error && data.batchnumber === "" && (
                <label className="errorMsg">Batchnumber can't be Empty</label>
             
              )}
            </div>
            <div>
              <TextField
                placeholder="URL"
                type="text"
                isRequired={true}
                label={
                  <span>
                    <i
                      className="material-icons"
                      style={{ marginRight: "8px", verticalAlign: "middle" }}
                      htmlFor="URL"
                    >
                      link
                    </i>{" "}
                    <b>URL</b>
                    <span style={{ color: "red" }}>*</span>{" "}
                  </span>
                }
                name="url"
                value={data.url}
                onChange={(e) => handleChange(e)}
              />
              {error && data.url === "" && (
                <label className="errorMsg">URL can't be Empty</label>
             
              )}
            </div>
            <div>
              <TextAreaField
                maxLength={200}
                descriptiveText=""
                type=""
                isRequired={true}
                resize="vertical"
                placeholder="Message your queries here"
                label={
                  <span>
                    <i
                      className="material-icons"
                      style={{ marginRight: "8px", verticalAlign: "middle" }}
                    >
                      message
                    </i>
                    <b>Message</b>
                    <span style={{ color: "red" }}>*</span>{" "}
                  </span>
                }
                name="message"
                value={data.message}
                onChange={(e) => handleChange(e)}
              />
              {error && data.message === "" && (
                <label className="errorMsg">Message can't be Empty</label>
              
              )}
            </div>
            <div>
              <Button
                type="submit"
                className="custom-button"
                marginTop="20px"
                style={{ position: "relative" }}
              >
                Send WhatsApp Message
              </Button>
            </div>
          </Flex>
        </Flex>
      </form>
    </>
  );
};

export default WatiForm;
