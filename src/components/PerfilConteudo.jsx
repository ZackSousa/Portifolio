import React from 'react';
import './perfilConteudo.css'
import foto from './perfil.png'

export default props => 
    <div>
        <div className='perfilConteudo'>
            <div className="fotoDePerfil">
                <img src={foto} className='foto' alt='foto' />
            </div>
            <div className="texto">
                <p class="font-weight-bold">Isaac Bezerra Sousa</p>
                <p>Desenvolvedor Backend</p>
                <p>Fromação: Técnico em TI</p>
                <p>Instituição de formação:UniAteneu</p>
                <p class="font-weight-bold">Contato</p>
                <p>Email: isaacbezerrasousa@gmail.com</p>
                <p>
                    <a href="https://api.whatsapp.com/send?phone=5585987458271">Whatsapp: (85) 98745-8271</a>
                </p>
                <p>
                    <a href="https://github.com/ZackSousa">Github: Isaac Bezerra Sousa</a>
                </p>
            </div>        
        </div>
    </div>
