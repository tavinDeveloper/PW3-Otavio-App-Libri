import Style from './Button.module.css'

function Button({rotulo}) {

    return (
        <div className={Style.button}>
            <button>{rotulo}</button>
        </div>
    )
}

export default Button