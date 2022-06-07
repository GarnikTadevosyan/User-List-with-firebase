import React from 'react';
import Swal, {fire} from "sweetalert2";

function Alert_Modal(props) {
    return (
        Swal, fire,
            Swal.fire(
                {
                    title: 'Are you sure to delete this comment ?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }
            )
    );
}

export default Alert_Modal;