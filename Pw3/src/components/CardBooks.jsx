import style from './CardBooks.module.css'
import Button from'./Button'

const CardBooks = ({titulo, autor, imagem}) => {

    return(

        <div className={style.CardBooks}>

            <h3 className={style.titulo}> {titulo} </h3>
            <p className={style.autor}>{autor}</p>
            <img src={imagem} alt={titulo} title={{titulo}} />

            <div>
               <button label= 'Detalhe' />
            </div>

        </div>

    )
}

export default CardBooks