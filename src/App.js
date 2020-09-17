import React, { useEffect, useState } from "react";
import DataCard from "./components/DataCard";
import "./App.scss";
import axios from "axios";
import { Box, Typography } from "@material-ui/core";

const App = () => {
  const [data, setData] = useState({ date: "" });
  const [stateSel, setStateSel] = useState("IL");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(
        `https://api.covidtracking.com/v1/states/${stateSel}/current.json`
      );

      setData(res.data);
      console.log(res.data);
      console.log(res.data.date);
    };
    fetchData();
  }, [stateSel]);

  return (
    <div className="App">
      <Box mb={5}>
        <Typography variant="h2">State-by-State COVID-19 Stats</Typography>
      </Box>
      <DataCard
        data={data}
        currentState={stateSel}
        stateSelChange={setStateSel}
      />
    </div>
  );
};

export default App;
