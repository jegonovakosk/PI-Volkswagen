import React from 'react'
import './estilo.css'

const Revisao = () => {
    return (
        <div className='tela'>
            <div className="title">
                <h1>Ultimas modificações FMEA</h1>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Rev</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Departamento / Ramal</th>
                        <th scope="col">Data Emissão / Data Revisão</th>
                        <th scope="col">Comentários / Motivo / Observações</th>
                        <th scope="col">Acões</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">01</td>
                        <td>Fred Amaral</td>
                        <td>Pintura</td>
                        <td>02/08/2022</td>
                        <td>teste de pintura esta com inconformidade </td>
                        <td><a href='/fmea'>Visualizar</a>
                        </td>
                    </tr>

                </tbody>
            </table></div>
    )
}

export default Revisao