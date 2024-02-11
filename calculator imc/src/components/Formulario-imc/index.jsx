import './form-imc.css'

const FormImc = () => {
    return(
        <div className="frm-container">
            <form>            
                <input className='input-custom' type="number" id="peso" placeholder="Seu Peso" />
                <input className='input-custom' type="number" id="altura" placeholder="Sua Altura" />
                <button className='button-custom' type="submit">Calcular</button>
            </form>
        </div>
    )
}

export default FormImc;