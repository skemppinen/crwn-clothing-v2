import { Fragment, useContext } from 'react';
import {Outlet, Link } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
/* import { ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import { ReactComponent as AwsLogo} from '../../assets/amazon-web-services-2.svg' */
import { ReactComponent as HomeLogo} from '../../assets/homepage.svg'
import { signOutUser } from '../../utils/firebase/firebase.utils';


import '../../routes/navigation/navigation.styles.scss'


const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async ()  => {
    await signOutUser();
    setCurrentUser(null);

  }

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
                <span className='nav-link' onClick={signOutHandler}> SIGN OUT</span>
              ) : (
              <Link className='nav-link'to='/auth'>
                  SIGN IN
              </Link>
            )}
          </div>
        </div>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation 