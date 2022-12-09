
type Props = {
    data: {
        nome: string;
        sobrenome: string;
        idade: number;
        peso: string;
        altura: string
    }
}




export const Pessoas = ({data}: Props) => {
    return (
        <div>
            <li><strong>Nome:</strong>  {data.nome} {data.sobrenome}; <br /> <strong>Idade:</strong> {data.idade}; <br />
          <hr /></li>
        </div>
    )
}