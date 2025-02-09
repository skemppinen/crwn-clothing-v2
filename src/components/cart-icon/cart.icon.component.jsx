import { ReactComponent as AsiakkaatIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const AsiakasIcon = () => {
    return (
    <div className='asiakkaat-icon-container'>
        <AsiakkaatIcon className='asiakkaat-icon' />
        <span className='item-count'>0</span>
    </div>
    )
}

export default AsiakasIcon
