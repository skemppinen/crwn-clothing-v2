import { useContext } from 'react'

import { AsiakkaatContext } from '../../contexts/asiakkaat.context';
import Asiakaskortti from '../../components/asiakaskortti/asiakaskortti.component';
import './asiakkaat.styles.scss'


const Asiakkaat = () => {
    const { asiakkaat } = useContext(AsiakkaatContext)
    return (
        <div className='asiakkaat-container'>
            {asiakkaat.map((asiakas) => (
                <Asiakaskortti key={asiakas.id} asiakas={asiakas} />
            ))}
        </div>
    )
}

export default Asiakkaat;