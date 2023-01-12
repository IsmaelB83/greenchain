// React components
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
// Own components
// Own modules
import { GreenchainContext } from '../../context/Context';
// Own Styles
import './Console.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Console() {

    const context = useContext(GreenchainContext);
    const { log, setLog } = context;
    
    return (
        <footer className='Console'>
            <div className="Actions">
                <Button variant="primary" onClick={() => setLog('')}>Clear</Button>
            </div>
            <textarea name="ConsoleLog" id="consoleLog" cols="30" rows="10" readOnly value={log}></textarea>
        </footer>
    );
}