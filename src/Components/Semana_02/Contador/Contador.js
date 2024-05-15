import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import Styles from './Style/Contador.module.css'

import reset_icon from './Img/reset-icon.png'
import homem_icon from './Img/homem-icon.png'
import mulher_icon from './Img/mulher-icon.png'
import botao_mais_icon from './Img/botao-mais-icon.png'
import botao_menos_icon from './Img/botao-menos-icon.png'

export default function Contador() {

    const [homem, setHomem] = useState(0)
    const [mulher, setMulher] = useState(0)
    const [total, setTotal] = useState(0)

    function AdicionarHomem() {
        setHomem(homem + 1)
        setTotal(total + 1)
    }

    function RemoverHomem() {
        if (homem > 0) {
            setHomem(homem - 1)
            setTotal(total - 1)
        }
    }

    function AdicionarMulher() {
        setMulher(mulher + 1)
        setTotal(total + 1)
    }

    function RemoverMulher() {
        if (mulher > 0) {
            setMulher(mulher - 1)
            setTotal(total - 1)
        }
    }

    function ResetarContador() {
        setHomem(0)
        setMulher(0)
        setTotal(0)
    }

    return (
        <>
            <div className={Styles.div_contador}>
                <div className={Styles.titulo_reset}>
                    <h1 className={Styles.titulo_contador}> Total </h1>
                    <img src={reset_icon} alt='imagem reset' className={Styles.imagem_reset} onClick={ResetarContador} />
                </div>

                <p className={Styles.contador_total}>
                    {total}
                </p>

                <div className={Styles.div_pessoas}>
                    <div className={Styles.div_homem}>
                        <img src={homem_icon} alt='imagem homem' className={Styles.imagem_pessoa} />

                        <div className={Styles.div_botoes}>
                            <img src={botao_mais_icon} alt='botao mais homem' className={Styles.botao_mais} onClick={AdicionarHomem} />
                            <img src={botao_menos_icon} alt='botao menos homem' className={Styles.botao_menos} onClick={RemoverHomem} />
                        </div>

                        <h1 className={Styles.titulo_pessoa}> Homens </h1>

                        <p className={Styles.contador_homem}>
                            {homem}
                        </p>
                    </div>

                    <div className={Styles.div_mulher}>
                        <img src={mulher_icon} alt='imagem homem' className={Styles.imagem_pessoa} />

                        <div className={Styles.div_botoes}>
                            <img src={botao_mais_icon} alt='botao mais homem' className={Styles.botao_mais} onClick={AdicionarMulher} />
                            <img src={botao_menos_icon} alt='botao menos homem' className={Styles.botao_menos} onClick={RemoverMulher} />
                        </div>

                        <h1 className={Styles.titulo_pessoa}> Mulheres </h1>

                        <p className={Styles.contador_mulher}>
                            {mulher}
                        </p>
                    </div>
                </div>
            </div>

            <Link to='/' className='link_voltarHome'> Voltar para a Home </Link>
        </>
    )
}

