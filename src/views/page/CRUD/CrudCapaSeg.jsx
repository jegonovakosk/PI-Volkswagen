import React, { Fragment, useContext } from 'react'
import './estilo.css'

import { CrudContext } from '../../../provider/CrudFmea'
import { Link } from 'react-router-dom'

const CrudCapaSeg = () => {
    const Crud = useContext(CrudContext)
    console.log(Crud.crud)

    const valorTodo = (e) => {
        const auxValor = { ...Crud.crud }
        auxValor[e.target.name] = e.target.value
        Crud.setCrud(auxValor)
    }
    return (
        <Fragment>

            <div className='col-12 crud '>
                <div className='row'>
                    <div className="title">
                        <h1>Segunda Parte Capa</h1>
                    </div>
                    <input className='col-5 m-2 p-4' type='text' placeholder='Nome' name='nomeRespo' onChange={(e) => valorTodo(e)} />
                    <input className='col-5 m-2 p-4' type='text' placeholder='Departamento / Ramal' name='ramal' onChange={(e) => valorTodo(e)} />
                    <input className='col-5 m-2 p-4' type='text' placeholder='Data Emissão - Rev 00' name='date' onChange={(e) => valorTodo(e)} />
                    <input className='col-5 m-2 p-4' type='text' placeholder='Comentários / Motivo / Observações' name='obs' onChange={(e) => valorTodo(e)} />
                </div>
                <div className='col-12 mt-5 button '>
                    <button className='col-3'>
                        <Link to='/crudcapa'>
                            Voltar
                        </Link>
                    </button>
                    <button className='col-3'>
                        <Link to='/crudfmea'>
                            Proximo
                        </Link>
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default CrudCapaSeg