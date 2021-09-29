import React from 'react'

const Providers = ({ T }) => {
    return (
        <div>
            <h3>{T.name}</h3>
            <img src={T.provider_logo} alt="" />
        </div>
    )
}

export default Providers

