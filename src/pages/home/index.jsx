import React, { useState } from 'react'
import { useEffect } from 'react';

import './home.css';

import { useParams, useHistory } from 'react-router-dom'
import ListImage from '../../components/ListImage';
import axios from '../../service/axios';

export default function Home() {
    let params = useParams();
    const history = useHistory();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [text, setText] = useState("");

    useEffect(() => {
        async function getData() {
            await axios.get(`${params.typeImage}&per_page=24&format=json&nojsoncallback=1`).then(response => {
                console.log(response)
                setData(response.data.photos.photo);
                setLoading(false)
            }).catch(error => {
                console.log(error)
                alert("ocorreu um erro");
            })
        }

        getData();
    }, [])

    function changeText(value) {
        setText(value);
    }

    function searchButton() {
        history.push(`/home/${text}`);
    }

    return (
        <div className="container">
            <div className="logo">
                <h1>SnapShot</h1>
            </div>

            <div className="search">
            <form class="search-form">
                <input type="text" onChange={(e) => changeText(e.target.value)} placeholder='Pesquisar...' />
                <button type="submit" onClick={(e) => searchButton()} class="search-button null" disabled="">
                <svg height="32" width="32"><path d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z" fill="#ffffff" fill-rule="evenodd"></path></svg></button></form>
            </div>

            <nav className='flex'>
                <ul>
                    <li>
                        <a className='active' href="/home/montanha">Montanha</a>
                    </li>

                    <li>
                        <a className='active' href="/home/praia">Praia</a>
                    </li>

                    <li>
                        <a className='active' href="/home/passáros">Pássaros</a>
                    </li>

                    <li>
                        <a className='active' href="/home/comida">Comida</a>
                    </li>
                </ul>
            </nav>

            <div>
                <h2>Imagens de {params.typeImage}</h2>

                {loading ? 'Carregando...' : <ListImage dados={data} />}
            </div>
        </div>
    )
}