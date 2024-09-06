import Style from './Input.module.css'

function Input({ type, text, name, placeHolder }) {
    return (
        <div className={Style.form_control}>

            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeHolder} />
        </div>
    )
}

export default Input