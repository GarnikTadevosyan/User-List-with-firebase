import axios from "axios";

return axios.get(url.srcPath)
    .then( result => {
        let data = {data:[...result.data],group:url.group};
        return data
    })
