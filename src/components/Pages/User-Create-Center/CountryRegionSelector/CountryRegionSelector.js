import React, { useState } from "react";
import './CountryRegionSelector.css'
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const CountryRegionSelector = () => {
    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");

    return (
        <div>
            <CountryDropdown
                value={country}
                onChange={(val) => setCountry(val)}
            />{" "}
            <RegionDropdown
                country={country}
                value={region}
                onChange={(val) => setRegion(val)}
            />
        </div>
    );
};

export default CountryRegionSelector;
