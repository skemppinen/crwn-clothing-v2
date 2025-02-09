import './asiakaskortti.styles.scss'
import Button from '../button/button.component'


const Asiakaskortti = ({asiakas}) => {
    const {name, state, imageUrl, id, createdAt, longitude, latitude, batteryPercentage, batteryVolts } = asiakas;
return (<div className='asiakaskortti-container'>
    <img src={imageUrl} alt={`${name}`}/>
    <div className='footer'>
    <span className='name'>{name}</span>
    </div>
    <div>
    <span className='state'>{state}</span>
    </div>
    <div className='id'>
    <span className='id'>{id}</span>
    </div>
    <div className='created'>
    <span className='createdAt'>{createdAt}</span>
    </div>
    <div className='location'>
    <span className='longitude'>{longitude}</span>
    <span className='latitude'>{latitude}</span>
    </div>
    <div className='battery'>
    <span className='batteryPercentage'>{batteryPercentage}</span>
    <span className='batteryVolts'>{batteryVolts}</span>
    </div>
    <Button buttonType='inverted'>Tarkastele</Button>
</div>)
}

export default Asiakaskortti;