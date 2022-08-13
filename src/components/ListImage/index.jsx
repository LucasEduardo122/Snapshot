import React from 'react';
import './list.css';

export default function listImage({ dados }) {
    return (
        <div className='photo-container'>
            <ul>
                {dados.map(image => (
                    <li>
                        <img key={image.id} src={`https://farm${image.farm}.staticflickr.com/65535/${image.id}_${image.secret}_m.jpg`} alt={image.title} />
                    </li>
                ))}
            </ul>
        </div>
    )
}