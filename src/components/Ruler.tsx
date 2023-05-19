
type Props = {
    height: '8px' | '16px' | '32px' | '64px' | '128px'
    lgHidden?: boolean
}

const Ruler: React.FC<Props> = ({ height, lgHidden }) => {
    return (
        <div style={{ height: height || '8px' }}
            className={`w-6 flex justify-center items-center ${lgHidden && 'md:opacity-0'} text-xs text-gray-50 relative -left-8 md:-left-16 bg-gray-100`}>
            {parseInt(height.split('px')[0]) / 8}x
        </div>
    )
}

export default Ruler