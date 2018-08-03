import React from 'react';
import { Link } from 'react-router-dom';

const FinishedMarking = () => {
    return (
        <div className='Finished--container'>
            <Link to={process.env.PUBLIC_URL + '/'}><button className='button--home'>Search</button></Link>
            <p className='thankyou'>Thank you for peer marking!</p>
            <svg version="1.1" className={`tick`} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 37 37" height="60" width="60" style={{ enableBackground: 'new 0 0 37 37' }} xmlSpace="preserve">
                <path className={`steps card-highlighted circ path`} style={{ fill: 'none', strokeWidth: 3, strokeLinejoin: 'round', strokeMiterlimit: 10 }} d="M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"
                />
                <polyline className={`steps card-highlighted tick path`} style={{ fill: 'none', strokeWidth: 3, strokeLinejoin: 'round', strokeMiterlimit: 10 }} points="11.6,20 15.9,24.2 26.4,13.8 " />
            </svg>
        </div>
    )
}

export default FinishedMarking;