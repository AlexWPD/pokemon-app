import './error.scss'

import img from "./error-image.png"

const Error = () => {
    return (
        <div className='error'>
            <img src={img} alt='error'></img>
        </div>
    )
}

export default Error