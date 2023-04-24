// Post Personal Info
import axios from 'axios';

export const postPersonalInfo = async (data) => {
  try {
    const response = await axios.post('http://localhost:55731/api/PersonalInformation/add', data, {
      headers: {
        'Content-Type': 'application/json-patch+json',
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
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
      console.log("Post Attachment:",response.data);
    } catch (error) {
      console.error(error);
    }
  };
  

// Post Application