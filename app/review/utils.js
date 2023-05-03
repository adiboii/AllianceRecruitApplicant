// Post Personal Info
import axios from 'axios';

export const retrieveFromCloudinary = async (data) => {
  return data;
}

export const postPersonalInfo = async (data) => {
  try {
    const response = await axios.post('http://localhost:55731/api/PersonalInformation/add', data, {
      headers: {
        'Content-Type': 'application/json-patch+json',
      }
    });
    const responseData = response.data;
    const personalInfoId = responseData.match(/\d+/)[0];
    console.log("Post Personal Information:", responseData);
    console.log("New ID:", personalInfoId);
    return personalInfoId;
  } catch (error) {
    console.error(error.response.data.ModelStateErrors);
  }
};


// Post Attachment
export const postAttachment = async (data) => {
    try {
      const response = await axios.post('http://localhost:55731/api/Attachment/add', data, {
        headers: {
          'Content-Type': 'application/json-patch+json',
        }
      });
      const responseData = response.data;
      const attachmentId = responseData.match(/\d+/)[0];
      console.log("Post Attachment:", responseData);
      console.log("New ID:", attachmentId);
      return attachmentId;
    } catch (error) {
      console.error(error.response.data.ModelStateErrors);
    }
  };
  

// Post Application

export const postApplication = async (data) => {
    try {
      const response = await axios.post('http://localhost:55731/api/Application/add', data, {
        headers: {
          'Content-Type': 'application/json-patch+json',
        }
      });
      console.log("Post Application:", response.data);
    } catch (error) {
      console.error(error.response.data.ModelStateErrors);
    }
  }