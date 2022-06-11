import React, { useState } from "react";
import MuiPhoneNumber from 'material-ui-phone-number';

function PhoneNumberSelector ({phone,handleChange}) {
    return (
        <div className="phone_selector">
            <MuiPhoneNumber
                defaultCountry={"us"}
                phone={phone}
                onChange={handleChange} />
        </div>
    );
}

export default PhoneNumberSelector