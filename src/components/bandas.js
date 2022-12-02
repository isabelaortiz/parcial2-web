import React from "react";
import { FormattedMessage } from 'react-intl';
import Detail from "./detail";


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const { useEffect, useState } = require("react");

function Bandas() {

    const antigua = () => {
        let maximo  =0; 
        let bandaNombre = ""; 
        bandas.forEach(banda => {
            if(2022 - banda.foundation_year > maximo){
                maximo = 2022 - banda.foundation_year; 
                bandaNombre = banda.name;
            }
            
        });
        return bandaNombre; 
       
    };

    const [selected, setSelected] = useState(false);
    const clickSelected = () => {
        console.log("espiche la banda");
        setSelected(true);
    }
    const [bandas, setBandas] = useState([]);

    useEffect(() => {
        const URL =
            "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setBandas(data);
            });
    }, []);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col"> <FormattedMessage id="Nombre" /></th>
                        <th scope="col"> <FormattedMessage id="Pais" /></th>
                        <th scope="col"> <FormattedMessage id="Genero" /></th>
                        <th scope="col"> <FormattedMessage id="Fundacion" /></th>
                    </tr>
                </thead>
                <tbody>
                    {bandas.map((banda) => (
                        <tr>
                            <th scope="row">{banda.id}</th>
                            <td onClick = {clickSelected}>{banda.name}</td>
                            <td>{banda.country}</td>
                            <td>{banda.genre}</td>
                            <td>{banda.foundation_year}</td>
                        </tr>))}

                </tbody>
            </table>
            <p> <FormattedMessage id="Banda" /> {antigua()}</p>
            <div>
                {selected === true ? <Detail></Detail> : <div></div>}
            </div>
        </div>
    );
};

export default Bandas;

