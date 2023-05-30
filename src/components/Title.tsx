

type Props = {
    value: string
}

const Title: React.FC<Props> = ({ value }) => {
    return (
        <h2 className="text-4xl font-bold">{value}</h2>
    )
}

export default Title