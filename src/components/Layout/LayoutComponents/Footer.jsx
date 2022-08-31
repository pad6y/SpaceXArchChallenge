import Logo from '../../UI/Logo';
import styles from './Footer.module.css';
import axios from 'axios';

import { useEffect, useState, useCallback } from 'react';

function Footer() {
  const [company, setCompany] = useState();

  const fetchCompany = useCallback(async () => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v4/company');

      setCompany(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchCompany();
  }, [fetchCompany]);

  let content;
  if (company) {
    const { name, ceo, coo, founded, headquarters, summary, links } = company;

    const { address, city, state } = headquarters;
    const { website } = links;
    content = (
      <>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.container}>
          <div className={styles.col1}>
            <div className={styles.col_format}>
              <h5>ceo: {ceo}</h5>
              <h5>coo: {coo}</h5>
              <h5>founded: {founded}</h5>
              <h5>
                Company webpage:
                <a href={website}> {name}</a>
              </h5>
            </div>
          </div>
          <div className={styles.col2}>
            <div className={styles.col_format}>
              <h5>Address: {address}</h5>
              <h5>city: {city}</h5>
              <h5>state: {state}</h5>
            </div>
          </div>
        </div>{' '}
      </>
    );
  }

  return (
    <footer>
      <Logo className={styles.logo} />
      {content}

      <div className={styles.copyright}>
        &copy;Copyright {new Date().getFullYear()} by pad6yDesigns
      </div>
    </footer>
  );
}
export default Footer;
