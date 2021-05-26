import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SignInButton() {
  const userLoggedIn = true;
  
  return userLoggedIn ? (
    <button
      className={styles.signInButton}
    >
      <FaGithub color="#04d361"/>
      Leonardo Menezes
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
    <button
      className={styles.signInButton}
    >
      <FaGithub color="#eba417"/>
      Sign in with Github
    </button>
  );
}