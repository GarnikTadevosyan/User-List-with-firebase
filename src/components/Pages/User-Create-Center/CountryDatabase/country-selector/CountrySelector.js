import React, { useState } from "react";
import {makeStyles} from "@mui/styles";
import FormControl from "@mui/material/FormControl";
import {InputLabel} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import countries from "../countries/countries";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    }
}));

const CountrySelector = () => {
    const classes = useStyles();

    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");

    const handleChangeCountry = (event) => {
        setCountry(event.target.value);
    };

    const handleChangeRegion = (event) => {
        setRegion(event.target.value);
    };

    return (
        <div className="App">
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={country}
                    onChange={handleChangeCountry}
                >
                    {countries.map((country) => (
                        <MenuItem
                            value={country.countryName}
                            key={country.countryShortCode}
                        >
                            {country.countryName}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Region</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={region}
                    onChange={handleChangeRegion}
                    disabled={!country}
                >
                    {country
                        ? countries
                            .find(({ countryName }) => countryName === country)
                            .regions.map((region) => (
                                <MenuItem value={region.name} key={region.shortCode}>
                                    {region.name}
                                </MenuItem>
                            ))
                        : []}
                </Select>
            </FormControl>
        </div>
    );
};

export default CountrySelector;
