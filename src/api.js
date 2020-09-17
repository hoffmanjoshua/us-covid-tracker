import axios from "axios";

export const fetchData = async (stateSel) => {
  const url = `https://api.covidtracking.com/v1/states/${stateSel}/current.json`;

  try {
    const res = await axios.get(url);
    return res;
  } catch (error) {
    console.log(error);
  }
};
