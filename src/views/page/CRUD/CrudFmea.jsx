import React, { Fragment, useState, useContext } from 'react'
import './estilo.css'
import Table from "../../../components/table/Table"
import { CrudContext } from '../../../provider/CrudFmea'
import axios from 'axios';


const CrudFmea = () => {
    const [show, setShow] = useState(false)
    const [fmea, setFmea] = useState([])
    const [fmea2, setFmea2] = useState([])

    const Crud = useContext(CrudContext)

    const FmeaCrud = (e) => {
        const auxFmea = { ...fmea }
        auxFmea[e.target.name] = e.target.value
        setFmea(auxFmea)
    }
    const teste = (e) => {
        setFmea2([...fmea2, fmea])
        SalvarFmea()

    }
    // levar par Context
    const SalvarFmea = () => {
        const fma = fmea2
        const tst = { ...Crud.crud, tst: [fma] }
        Crud.setCrud(tst)
        setTimeout(() => {
            setFmea({
                AcoesTomadas: "",
                AcaoRecomendada: "",
                causaPotencial: "",
                classificacao: "",
                detecção: "",
                detecçãoPt2: "",
                detecçãoPt3: "",
                falha: "",
                npr: "",
                ocorrência: "",
                ocorrênciaPt2: "",
                ocorrênciaPt3: "",
                potencial: "",
                produto: "",
                severidade: ""
            })

        }, 1000)
        console.log(Crud.crud)
        console.log(fmea)

    }
    const AddApi = () => {
        axios.post(`http://localhost:3000/fmea`, Crud.crud)
            .then(resp => {
                console.log(resp.data)
            })
    }

    const showFmea = () => {
        setShow(!show)
    }
    return (
        <Fragment>
            <div className='col-12 crud '>
                <div className='row'>
                    <div className="title">
                        <h1>Cadastro FMEA</h1>
                    </div>
                    <div>
                        <button className='addButton' onClick={() => showFmea()}>
                            {show ? 'Fechar FMEA' : 'Adicionar FMEA'}
                        </button>
                    </div>
                    {show &&
                        <div className='row'>


                            <textarea className='col-5 m-2 p-4' value={fmea.produto} type='text' placeholder='Função do processo/ produto' name='produto' onChange={(e) => FmeaCrud(e)} />
                            <textarea className='col-5 m-2 p-4' value={fmea.potencial} type='text' placeholder='Modo / Tipo de falha potencial' name='potencial' onChange={(e) => FmeaCrud(e)} />
                            <textarea className='col-5 m-2 p-4' value={fmea.falha} type='text' placeholder='Efeito potencial da falha' name='falha' onChange={(e) => FmeaCrud(e)} />
                            <input className='col-5 m-2 p-4' value={fmea.classificacao} type='text' placeholder='Classificação' name='classificacao' onChange={(e) => FmeaCrud(e)} />
                            <textarea className='col-5 m-2 p-4' value={fmea.causaPotencial} type='text' placeholder='Causa potencial / mecanismos de falha' name='causaPotencial' onChange={(e) => FmeaCrud(e)} />
                            <textarea className='col-5 m-2 p-4' value={fmea.controlePreventivo} type='text' placeholder='Controle Preventivo' nome='controlePreventivo' onChange={(e) => FmeaCrud(e)} />
                            <textarea className='col-5 m-2 p-4' value={fmea.controleDetectivo} type='text' placeholder='Controle Detectivo' nome='controleDetectivo' onChange={(e) => FmeaCrud(e)} />
                            <div className='row col-5'>
                                <input className='col-6 m-2 p-4' value={fmea.severidade} type='text' placeholder='Severidade' name='severidade' onChange={(e) => FmeaCrud(e)} />
                                <input className='col-5 m-2 p-4' value={fmea.ocorrência} type='text' placeholder='Ocorrência' name='ocorrência' onChange={(e) => FmeaCrud(e)} />
                                <input className='col-6 m-2 p-4' value={fmea.detecção} type='text' placeholder='Detecção' name='detecção' onChange={(e) => FmeaCrud(e)} />
                                <input className='col-5 m-2 p-4' value={fmea.npr} type='text' placeholder='NPR' name='npr' onChange={(e) => FmeaCrud(e)} />

                            </div>
                            <textarea className='col-5 m-2 p-4' value={fmea.AçaoRecomendada} type='text' placeholder='Ação recomendada / nome do responsável / data prevista' name='AçaoRecomendada' onChange={(e) => FmeaCrud(e)} />
                            <input className='col-3 m-2 p-4' value={fmea.ocorrênciaPt2} type='text' placeholder='Ocorrência' name='ocorrênciaPt2' onChange={(e) => FmeaCrud(e)} />
                            <input className='col-2 m-2 p-4 ' value={fmea.detecçãoPt2} type='text' placeholder='Detecção' name='detecçãoPt2' onChange={(e) => FmeaCrud(e)} />
                            <textarea className='col-5 m-2 p-4' value={fmea.AcoesTomadas} type='text' placeholder='Ações tomadas/ data efetiva' name='AcoesTomadas' onChange={(e) => FmeaCrud(e)} />
                            <input className='col-3 m-2 p-4' value={fmea.ocorrênciaPt3} type='text' placeholder='Ocorrência' name='ocorrênciaPt3' onChange={(e) => FmeaCrud(e)} />
                            <input className='col-2 m-2 p-4' value={fmea.detecçãoPt3} type='text' placeholder='Detecção' name='detecçãoPt3' onChange={(e) => FmeaCrud(e)} />

                            <div className='col-12 mt-5 row'>
                                <div className='col-6'>
                                    <button className='addButton' onClick={() => teste()}>
                                        Adicionar Fmea
                                    </button>

                                </div>
                                <div className='col-6'>
                                    <button className='addButton' onClick={() => AddApi()}>
                                        Salvar
                                    </button>

                                </div>
                            </div>
                            <div>
                                <Table fmea={fmea2} />
                            </div>
                        </div>}

                </div>
            </div>
        </Fragment>
    )
}

export default CrudFmea