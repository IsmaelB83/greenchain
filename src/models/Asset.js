// Constantes para el trabajo con el modelo de asset
export const ASSET_CONSTANTS = {
    TYPE: {
        GENERATOR: 1,
        CONSUMER: 2
    },
}

// Empty asset aux
export const EMPTY_ASSET = {
    code: '',
    address: '',
    type: ASSET_CONSTANTS.TYPE,
    operational: false,
    registrationDate: Date.now(),
    selected: false
}

/**
 * Modelo de Asset en Greenchain
 */
export default class Asset {
    
    /**
     * Constructor
     * @param {Object} Asset 
     */    
    constructor(asset) {
        this.code = asset.code;
        this.address = asset.address;
        this.type = asset.type;
        this.operational = asset.operational;
        this.registrationDate = asset.registrationDate;
        this.selected = false;
    }
}