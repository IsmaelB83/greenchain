// React components
import React, { useContext } from 'react';
// React bootstrap components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// Own components
import AssetCard from '../AssetCard/AssetCard';
// Own modules
import { GreenchainContext } from '../../context/Context';
import { getVisibleAssets } from '../../context/Selectors';
// Models
import { ASSET_CONSTANTS } from '../../models/Asset';
// Own Styles
import './SideMenu.css'

// Assets
import spinner from '../../assets/spinner.gif';


export default function SideMenu(props) {

    const context = useContext(GreenchainContext);
    const { assets, filteredAssets, setFilteredAssets, isLoadingAssets } = context;

    const filterNameChange = ev => {
        setFilteredAssets(getVisibleAssets(assets, {code: ev.target.value}));
    }

    const filterTypeChange = ev => {
        setFilteredAssets(getVisibleAssets(assets, {type: ev.target.value}));
    }

    const filterMostrarChange = ev => {
        setFilteredAssets(getVisibleAssets(assets, {selected: ev.target.value}));
    }

    return (
        <aside className='SideMenu'>
            <div className='SideMenu__Actions'>
                <h3>Filtrar activos</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="nombre" placeholder="Buscar" onChange={filterNameChange}/>
                    </Form.Group>
                    <div key='radioType' className="mb-3">
                        <Form.Check
                            inline
                            label="Gener."
                            name="tipoActivo"
                            type='radio'
                            value={1}
                            onChange={filterTypeChange}
                        />
                        <Form.Check
                            inline
                            label="Cons."
                            name="tipoActivo"
                            type='radio'
                            value={2}
                            onChange={filterTypeChange}
                        />
                    </div>
                    <div key='radioMostrar' className="mb-3">
                        <Form.Check
                            inline
                            label="Selec."
                            name="tipoMostrar"
                            type='radio'
                            value={true}
                            onChange={filterMostrarChange}
                        />
                        <Form.Check
                            inline
                            label="No Selec."
                            name="tipoMostrar"
                            type='radio'
                            value={false}
                            onChange={filterMostrarChange}
                        />
                    </div>
                </Form>
                <div className='Buttons'>
                    <Button variant="primary">Desmarcar todo</Button>{' '}
                </div>
            </div>
            <div className='SideMenu__Assets'>
                { isLoadingAssets && <img className="spinner" src={spinner} alt="" /> }
                { !isLoadingAssets && filteredAssets.length > 0 &&
                    <ul>
                        { filteredAssets.map((asset, index) => 
                            <li key={index}>
                                <AssetCard
                                    address={asset.address}
                                    code={asset.code}
                                    operational={asset.operational}
                                    registrationDate={asset.registrationDate}
                                    type={asset.type}
                                />
                            </li>
                        )}
                    </ul>
                }
            </div>
        </aside>
    );
}