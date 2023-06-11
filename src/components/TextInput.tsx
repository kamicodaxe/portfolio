'use client';
type Props = {
    label: string
    name: string
    onTextChange: (text: string) => void
} & {}

const TextInput: React.FC<Props> = ({
    label,
    name,
    onTextChange
}) => (
    <div className='w-full h-12 relative'>
        <label htmlFor={label} className=' absolute leading-4 -top-2 bg-white px-2'>{label}</label>
        <input name={name} onChange={e => onTextChange(e.target.value)} className='w-full leading-6 h-12 px-2 border-2 border-black' type="text" />
    </div>
)

export default TextInput