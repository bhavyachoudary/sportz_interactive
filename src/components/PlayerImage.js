import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router";

const PlayerImage = () => {
    const { state } = useLocation();

    return (
        <>

            <Link to="/">Back</Link>
            <div>
                <img src={`/images/${state.id}.jpg`} alt="no-img" height="400px" width="400px" />
            </div>
        </>
    )
}

export default PlayerImage