import axios from "axios";

/* THIS FILE IS FOR ALL THE API CALLS */

/* GET ALL API CALLS */ 
  const fetchAll = async (url) => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (err) {
      console.log("UNABLE TO FETCH ALL, ERROR 500: ", err);
    }
  };

  /* GET ONLY ONE*/
  const fetchOne = async (url) => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (err) {
      console.log("UNABLE TO FETCH THE DATA, ERROR 500: ", err);
    }
  };

  /* PUT - UPDATE ONE */ 
  const updateOne = async (url, body) => {
    try {
      await axios.put(url, body);
    } catch (err) {
      console.log("UNABLE TO UPDATE QUERY, ERROR 500  : ", err);
    }
  };

  /* POST ONE */ 
  const postOne = async (url, body) => {
    try {
      const response = await axios.post(url, body)
      return response
    } catch (err) {
      console.log("UNABLE TO CREATE QUERY, ERROR 500: ", err);
    }
  };

  export {
    fetchAll, fetchOne, updateOne, postOne,
  }

