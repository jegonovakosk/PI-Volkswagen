import React, { Fragment, useContext } from 'react'
import './estilo.css'

import { CrudContext } from '../../../provider/CrudFmea'
import { Link } from 'react-router-dom'

const CrudCapa = (props) => {
    const Crud = useContext(CrudContext)
    console.log(Crud.crud)

    const valorTodo = (e) =>{
        const auxValor = {...Crud.crud}
        auxValor[e.target.name] =  e.target.value
        Crud.setCrud(auxValor)
      }
    
    return (

        <Fragment>

            <div className='col-12 crud '>
                <div className='row'>
                    <div className="title">
                        <h1>Cadastro Capa</h1>
                    </div>
                    <input className='col-5 m-2 p-4' type='text' placeholder='Nome do FMEA' name='nome' onChange={(e) => valorTodo(e)} />
                    <input className='col-5 m-2 p-4' type='text' placeholder='Nome e Número da Peça/ Conjunto/ Processo' name='peca' onChange={(e) => valorTodo(e)} />
                    <input className='col-5 m-2 p-4' type='text' placeholder='Programa' name='programa' onChange={(e) => valorTodo(e)} />
                    <input className='col-5 m-2 p-4' type='text' placeholder='Setor Emitente' name='setor' onChange={(e) => valorTodo(e)}/>
                    <input className='col-5 m-2 p-4' type='text' placeholder='Eng. Responsável' name='responsavel' onChange={(e) => valorTodo(e)} />
                    <input className='col-5 m-2 p-4' type='text' placeholder='Plantas/ fornecedores atingidos' name='fornecedor'  onChange={(e) => valorTodo(e)}/>
                    <input className='col-5 m-2 p-4' type='text' placeholder='Cliente' name='cliente' onChange={(e) => valorTodo(e)} />

                </div>
                <div className='col-12 mt-5'>
                    <button>
                        <Link to='/crudcapaSeg'>
                            Proximo
                        </Link>
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default CrudCapa