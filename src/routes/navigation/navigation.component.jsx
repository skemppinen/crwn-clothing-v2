import { Fragment, useContext } from 'react';
import {Outlet, Link } from 'react-router-dom';

import AsiakasIcon from '../../components/cart-icon/cart.icon.component'; 
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
/* import { ReactComponent as CrwnLogo} from '../../assets/crown.svg' */
import { ReactComponent as AwsLogo} from '../../assets/amazon-web-services-2.svg'
import { ReactComponent as HomeLogo} from '../../assets/homepage.svg'
import { signOutUser } from '../../utils/firebase/firebase.utils';


import '../../routes/navigation/navigation.styles.scss'


const Navigation = () => {
  const { currentUser } = useContext(UserContext);

    return (
      <Fragment>
        <div className='navigation'>
{/*           <Link className='aws-container' to='https://eu-north-1.console.aws.amazon.com/console/home?region=eu-north-1#'>
          <AwsLogo className='aws'/>
          </Link> */}
          <Link className='logo-container' to='/'>
          <HomeLogo className='logo'/>
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link'to='/asiakkaat'>
            ASIAKKAAT
            </Link>
            {currentUser ? (
                <span className='nav-link' onClick={signOutUser}> SIGN OUT</span>
              ) : (
              <Link className='nav-link'to='/auth'>
                  SIGN IN
              </Link>
            )}
            <AsiakasIcon />
          </div>
          <CartDropdown/>
        </div>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation 