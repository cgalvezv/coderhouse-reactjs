import './index.css'
import React from 'react'

export const LoadingPage = () => {
    return (
        <div className="overlay_loading-page">
            <div className="text-center">
                <div className="spinner-grow text-success"role="status"></div>
            </div>
        </div>
    )
}

