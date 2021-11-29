import '../css/card.css'

const Card = ({ children, title }) => {
    return <>
        <div className='card-wrap theme-color'>
            <div className='card-wrap-header sub-color font-color'>{title}</div>
            {children}
        </div>
    </>
}

export default Card