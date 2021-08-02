

const Item = ({label,background}) => {
    return (
        <div className='box row align-items-center'>
            
            <h3 >{label!== '' ? <span className='label'>{label}</span> :< img className='bg' src={background}/>} </h3>
        </div>
    )
}

export default Item
