// React components
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
// Own components
import AssetCard from '../AssetCard/AssetCard';
// Own modules
import { GreenchainContext } from '../../context/Context';
// Own Styles
import React from 'react';
import './MainContent.css'

export default function MainContent(props) {

    const context = useContext(GreenchainContext);

    return (
        <main className='MainContent'>
            <h1>Hola Main</h1>
        </main>
    );
}