import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Hi There!';
}

// Function Based Component using ES 2015 Syntax
const App = () => {
    return(
        <div>
            <label htmlFor='name' className='label'>enter e-mail</label>
            <input id="name" type="text"></input>
            <button style={{backgroundColor: 'black', color: 'white'}}>
                {getButtonText()}
            </button>
        </div>
    )
}

// To show to the user
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)