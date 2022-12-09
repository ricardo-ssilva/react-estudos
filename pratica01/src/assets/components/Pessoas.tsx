type Props = {
    data: {
        nome: string;
        sobrenome: string;
        idade: number;
    }
}
    


export const Pessoas = ({data}: Props) => {
   
    return (
        <div>
            <li><strong>Nome:</strong>  <br /> {data.nome} {data.sobrenome}; <br /> <strong>Idade:</strong> {data.idade} <hr />  </li>
        </div>
    )
}