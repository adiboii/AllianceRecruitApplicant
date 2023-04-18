import axios from "axios";

export const getJobList = () => {
    return axios.get(`http://localhost:55731/api/Job/list?Page=1`)
      .then((response) => {
        const { data } = response.data;
        console.log("data:", data);
        return data.map(({ id, jobTitle, location }) => ({ id, jobTitle, location }));
      })
      .catch((error) => {
        console.log(error);
        return [];
      });
  };
  

export const getJobDetails = async ({ params }) => {
    const { id } = params;
    return await axios.get(`http://localhost:55731/api/Job/getJob?Id=${id}`)
        .then((response) => {
        const { data } = response.data;
        return data;
    })
    .catch((error) => {
        console.log(error);
        return null;
    });
};