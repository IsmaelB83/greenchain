// Models
import { ASSET_CONSTANTS } from '../models/Asset';

/**
* Devuelve los assets correspondientes a los filtros indicados
* @param {Array} assets Array de assets del store 
* @param {Object} filters Filtros a aplicar a los assets del store
*/
export function getVisibleAssets(assets, filters) {
    console.log(filters)
    let visibleAssets = assets;
    if (filters.code && filters.code !== '') {
        filters.code = filters.code.toLowerCase();
        visibleAssets = visibleAssets.filter(asset => asset.code.toLowerCase().includes(filters.code));
    }
    if (filters.type) {
        visibleAssets = visibleAssets.filter(asset => asset.type == filters.type);
    }
    if (filters.selected) {
        visibleAssets = visibleAssets.filter(asset => asset.selected == filters.selected);
    }
    return visibleAssets;
}