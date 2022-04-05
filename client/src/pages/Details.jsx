import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Details = () => {
    let { state } = useLocation();
    let navigate = useNavigate();
    const goBackButton = () => navigate("/feed");

    return (
        <div className='details'>
            <header className='details__header'>
                <h1>Name: {state.item.name}</h1>
            </header>
            <section className='details__body'>
                <h2>Description: {state.item.description}</h2>
                <h2>Location: {state.item.city}</h2>
            </section>
            <div className='details___button'>
                <button className="btn--primary" onClick={() => goBackButton()}>
                    Go back
                </button>
            </div>
        </div>
    )
}
