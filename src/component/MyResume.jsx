import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MyResume.css';

function MyResume() {
    return (
        <div className="myResume">
            <div className="getStarted">
                <h2>Create the perefect resume</h2>
                <p>Choose from several templates and follow easy prompts to create a cover letter.</p>
                <a><button>CREATE NEW RESUME</button></a>
            </div>
            <div className="document">
                <div className="documentContent">
                    <div className="logo"><FontAwesomeIcon icon='file' /></div>
                    <p>Create a New Document</p>
                    <a href="" className="createNew">Create New</a>
                </div>
            </div>
        </div>
    );
}

export default MyResume;