import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            <h1>Products Management Software</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Button</button>
            </div>
            <h3>Click on Add Button for order management</h3>
        </header>
    )
}

export default Header