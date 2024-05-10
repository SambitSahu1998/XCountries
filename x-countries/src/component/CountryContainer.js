import React, { useState, useEffect } from "react";
import axios from "axios";
import { COUNTRY_INFORMATION_API } from "../apis/api";
import CountryCard from "./CountryCard";
import { Grid } from "@mui/material";
import styles from "../module/CountryContainer.module.css";

const CountryContainer = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(COUNTRY_INFORMATION_API);
        setCountries(response.data);
      } catch (error) {
        console.error("Error Fetching Data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.countryContainer}>
        <p style={{fontFamily:"sans-serif", fontSize:"50px", fontWeight:"bold", textAlign:"center", textDecoration:"underline"}}>Countries List</p>
      {countries.length > 0 && (
        <Grid container spacing={2}>
          {countries.map((country) => (
            <Grid item key={country.name.common} xs={12} sm={6} md={4} lg={3}>
              <CountryCard country={country} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default CountryContainer;
