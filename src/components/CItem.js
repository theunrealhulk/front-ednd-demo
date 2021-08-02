const CItem = ({src,title,text}) => {
    return (
        <div className="item">
        <div className='wrapper'>
            <div className='container'>
            
                <img src={src}/>
            <div className ='title'>
                <h2>{title}</h2>
            </div>
            <div className='paragraph'>
                <p>
                {text}
                </p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default CItem