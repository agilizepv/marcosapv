import './style.css'

interface InputsCadastro{
    nomeLabel: string;
    name: string;
    id: string;
    tipoInput: string;
    placeholder: string;
}


const InputCadastro: React.FC<InputsCadastro> = ({nomeLabel, name, id, tipoInput, placeholder}) =>{
    return(
        <div>
            <label htmlFor={id}>{nomeLabel}</label>
            <input name={name} id={id} type={tipoInput} placeholder={placeholder}/>
        </div>
    );
}; export default InputCadastro;