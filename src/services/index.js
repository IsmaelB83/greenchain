// Node Modules
import Axios from 'axios';
// Own Modules
import Asset from '../models/Asset';

// Endpoint
const API_ELECTRICITY = `/metering/electricity`;

// Headers
const config = {
    'headers': {
        'X-API-Key': process.env.REACT_APP_API_KEY
    }
}

console.log(config)

// API Object
export default {
        
    // Get all registered codes
    getRegisteredCodes: () => {
        return Axios.get(`${API_ELECTRICITY}/registeredCodes`, config)
        .then(res => res.data.map(asset => new Asset(asset)))
        .catch(err => console.log(err));
    }
}
