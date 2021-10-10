import React from 'react';
import './main.css';

const minSpinSpeed = 1
const maxSpinSpeed = 6

function Main() {
    const [spinning, setSpinning] = React.useState(false)
    const [spinSpeed, setSpinSpeed] = React.useState(minSpinSpeed)

    return (
        <main>
            <button onClick={function () { setSpinning(!spinning) }}>Spin that Toucan</button>
            <input
                onChange={(e) => { setSpinSpeed(e.target.value) }}
                type="range"
                min={minSpinSpeed}
                max={maxSpinSpeed}
                value={spinSpeed}
            />
            <img
                style={spinning ? {
                    animation: `rotation ${maxSpinSpeed - spinSpeed + 1}s infinite linear`
                } : null}
                alt="toucan"
                src="https://pgcpsmess.files.wordpress.com/2014/07/image62.jpg"
            />
        </main>
    );
}

export default Main;