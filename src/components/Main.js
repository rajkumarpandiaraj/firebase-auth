import React from 'react'

function Main({logOutHandle}) {
    return (
        <div className='hero'>
            <nav>
                <h2>Authentication</h2>
                <button onClick={logOutHandle}>Logout</button>
            </nav>
        </div>
    )
}

export default Main
