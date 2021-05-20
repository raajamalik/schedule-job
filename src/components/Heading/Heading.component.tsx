interface Props {
    label: string,
    level: string,
}
const H3 = (props: Props) => {
    return <h3>{props.label}</h3>
}

export default H3;