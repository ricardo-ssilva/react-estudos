type Props = {
    clickFn: () => void
    value: string
}

export const Botao = ({clickFn, value}: Props) => {
    return (
        <button  onClick={clickFn}>{value}</button>
    )

}