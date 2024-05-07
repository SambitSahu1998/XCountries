import React from 'react';
import { Box } from '@mui/material';
import styles from '../module/CountryCard.module.css';

const CountryCard = ({country}) => {
  return (
    <Box className={styles.countryCardBox}>
        <div style={{padding:"10px"}}>
        <img src={country.flags.png} alt={country.flags.alt} width="180rem" height="100rem" style={{boxShadow:"0 0 7px #000000",border:"1px solid #000000"}}/>
        </div>
        <h3 style={{fontFamily:"cursive", textAlign:"center"}}>{country.name.common}</h3>
    </Box>
  )
}

export default CountryCard;