import React, { useState } from "react";
import MuiPhoneNumber from 'material-ui-phone-number';

function PhoneNumberSelector () {
    const [phone, setPhone] = useState("");

    const handleOnChange = value => {
        setPhone(value);
    };
    return (
        <div className="phone_selector">
            <MuiPhoneNumber defaultCountry={"us"} onChange={handleOnChange} />
        </div>
    );
}

export default PhoneNumberSelector