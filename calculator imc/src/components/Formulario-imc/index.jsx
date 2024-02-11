import { useState } from 'react';
import './form-imc.css'

const CalculatorImc = () => {
    let[peso, setPeso] = useState('')
    let[altura, setAltura] = useState('')
    let[resultado, setResultado] = useState(null)
    
    const calcularImc = () => {              
        let alturaEmMetros = altura / 100
        const imcCalculado = peso / (alturaEmMetros * alturaEmMetros);               
        setResultado(imcCalculado);
    }

    const StatusImc = () => {
        if(resultado === null){
            return 'Insira peso e altura'
        } else if (resultado < 18.5){
            return 'Abaixo do peso ideal'
        } else if (resultado >= 18.5 && resultado < 25) {
            return 'Peso ideal'
        } else if (resultado >= 25 && resultado < 30){
            return 'Sobrepeso'
        } else {
            return 'Obesidade'
        }
    }

    return(
    <div className="frm-container">        
        <input className='input-custom' type="number" placeholder="Peso (kg)" value={peso} onChange={(e) => setPeso(e.target.value)} />
        <input className='input-custom' type="number" placeholder="Altura (cm)" value={altura} onChange={(e) => setAltura(e.target.value)} />
        <button className='button-custom' onClick={calcularImc}>Calcular</button>        
        <div className="resultado">
            { resultado && (
                <div>
                    <p>Seu IMC é: {resultado.toFixed(2)}</p>
                    <p>Status: {StatusImc()}</p>
                </div>
            )}            
        </div>
    </div>
    )
}

export default CalculatorImc;