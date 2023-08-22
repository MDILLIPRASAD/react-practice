import { Button, Flex, TextField, TextAreaField } from "@aws-amplify/ui-react";
import React, { useState } from "react";
import "./App.css";

const WatiForm2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    batchnumber: "",
    url: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    batchnumber: "",
    url: "",
    message: "",
  });

  const validateField = (name, value) => {
    let errorMessage = "";
    if (value.trim() === "") {
      errorMessage = "Field can't be empty";
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    for (const field in formData) {
      if (formData[field].trim() === "") {
        newErrors[field] = "Field can't be empty";
      }
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Perform your logic here
    }
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
          <Flex justifyContent="center" width="400px" direction="column">
            <h1>Send Broadcast Messages</h1>

            <div>
              <TextField
                type="text"
                isRequired={true}
                placeholder="Enter your name"
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
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <div className="error-msg">{errors.name}</div>}
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
                value={formData.batchnumber}
                onChange={handleChange}
              />
              {errors.name && <div className="error-msg">{errors.name}</div>}
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
                value={formData.url}
                onChange={handleChange}
              />
              {errors.name && <div className="error-msg">{errors.name}</div>}
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
                value={formData.message}
                onChange={handleChange}
              />
              {errors.name && <div className="error-msg">{errors.name}</div>}
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

export default WatiForm2;


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
