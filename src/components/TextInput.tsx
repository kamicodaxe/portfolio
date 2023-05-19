
type Props = {
    label: string
}

const TextInput: React.FC<Props> = ({
    label
}) => (
    <div className='w-full h-12 relative'>
        <label htmlFor={label} className=' absolute leading-4 -top-2 bg-white px-2'>{label}</label>
        <input className='w-full leading-6 h-12 px-2 border-2 border-black' type="text" />
    </div>
)

export default TextInput