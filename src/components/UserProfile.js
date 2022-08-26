import classes from './UserProfile.module.css';
import { useSelector } from 'react-redux/es/exports';

const UserProfile = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);


  return (
    <>
    {isAuthenticated &&
    <main className={classes.profile}>
    <h2>My User Profile</h2>
  </main>}
    </>
  );
};

export default UserProfile;
