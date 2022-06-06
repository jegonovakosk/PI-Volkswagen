import React from 'react'

const Capa = () => {
    return (
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nome do FMEA</th>
                        <th scope="col">Nome e Número da Peça/ Conjunto/ Processo</th>
                        <th scope="col">Programa</th>
                        <th scope="col">Setor Emitente</th>
                        <th scope="col">Eng. Responsável</th>
                        <th scope="col">Acão</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">Aplicação de  Primero</td>
                        <td>Carroceria</td>
                        <td>Pintura</td>
                        <td>Pintura</td>
                        <td>Artur</td>
                        <td><a href='/revisao'>Visualizar</a>/<a href='#'>editar</a>                         
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Capa