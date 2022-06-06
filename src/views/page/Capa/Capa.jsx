import React, { useContext } from 'react'
import { CrudContext } from '../../../provider/CrudFmea'


const Capa = () => {
    const Crud = useContext(CrudContext)
    console.log(Crud.infoFmea)
    return (
        <div>
            <table className="table table-striped">
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
                        {Crud.infoFmea.map((resp, index) => {
                            return(
                                <tr key={index}>
                                <td scope="row">{resp.nome}</td>
                                <td>{resp.peca}</td>
                                <td>{resp.programa}</td>
                                <td>{resp.setor}</td>
                                <td>{resp.responsavel}</td>
                                <td><a href='/revisao'>Visualizar</a>/<a href='#'>editar</a>                         
                                </td>
                            </tr>
                            )
                        })}
                   

                </tbody>
            </table>
        </div>
    )
}

export default Capa