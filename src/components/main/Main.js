import React from 'react';
import './main.css';

function Main() {
    const [spinning, setSpinning] = React.useState(false)

    return (
        <main>
            <button onClick={() => { setSpinning(!spinning) }}>Default</button>;
            <img className={spinning ? 'spin' : ''} alt="toucan" src="https://pgcpsmess.files.wordpress.com/2014/07/image62.jpg" />
        </main>
    );
}

export default Main;