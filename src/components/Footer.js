import {FaInstagram} from 'react-icons/fa'

const Footer = ({text}) => {
    return (
        <div className='container footer'>
            <h4><FaInstagram />{text}</h4>
        </div>
    )
}

export default Footer
