import axios from "axios";

export const getJobList = () => {
    return axios.get(`http://localhost:55731/api/Job/list?Page=1`)
      .then((response) => {
        const { data } = response.data;
        console.log("Job List:", data);
        return data.map(({ id, jobTitle, location }) => ({ id, jobTitle, location }));
      })
      .catch((error) => {
        console.log(error);
        return [];
      });
  };
  

export const getJobDetails = (id) => {
  return axios.get(`http://localhost:55731/api/Job/getJob?Id=${id}`)
    .then((response) => {
      console.log("Response:",response.data);
      return response.data;1
  })
  .catch((error) => {
    console.log(error);
    return [];
  });
};