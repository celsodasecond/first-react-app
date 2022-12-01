import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './components/SingleComment.js'
import dogpic1 from './assets/dogpic1.jpg'
import dogpic2 from './assets/dogpic2.jpg'
import dogpic3 from './assets/dogpic3.jpg'

function getButtonText() {
    return 'Hi There!';
}

// Function Based Component using ES 2015 Syntax
const App = () => {
    return(
        <div className='ui comments'>
            <SingleComment 
                dogname='Milo' 
                image={dogpic1}
                date='Today at 5:00 PM'
                text='Send me Food!'
            />
            <SingleComment 
                dogname='Sadie' 
                image={dogpic2}
                date='Today at 6:00 PM'
                text='Send me Water!'
            />
            <SingleComment 
                dogname='Max' 
                image={dogpic3}
                date='Today at 7:00 PM'
                text='Send me Milk!'
            />
        </div>
        
    )
}

// To show to the user
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)