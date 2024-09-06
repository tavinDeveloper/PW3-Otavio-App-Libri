import Style from './Select.module.css'

function Select({ name, text }) {
    return (

        <div className={Style.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option>Selecione uma categoria:</option>
                <option>Ficção Cintífica</option>
                <option>Fantasia Heroica</option>
                <option>Suspense</option>
                <option>Terror </option>
            </select>
        </div>
    )
}

export default Select