import styles from './ProfileCard.module.css';

function ProfileCard({ profile }) {
  const { name, agency, image, status, wikipedia: wiki } = profile;

  let agencyContent;

  if (agency === 'NASA') {
    agencyContent = <h3 className={styles.nasa}>{agency}</h3>;
  }
  if (agency === 'JAXA') {
    agencyContent = <h3 className={styles.jaxa}>{agency}</h3>;
  }
  if (agency === 'ESA') {
    agencyContent = <h3 className={styles.esa}>{agency}</h3>;
  }
  if (agency === 'SpaceX') {
    agencyContent = <h3 className={styles.spacex}>{agency}</h3>;
  }
  if (agency === 'Roscosmos') {
    agencyContent = <h3 className={styles.roscosmos}>{agency}</h3>;
  }
  if (agency === 'Axiom Space') {
    agencyContent = <h3 className={styles.axiom}>{agency}</h3>;
  }

  return (
    <div className={styles.profile_container}>
      <a href={wiki}>
        <img src={image} alt="profile pic" className={styles.image} />
      </a>
      <div className={styles.detail_container}>
        <h3>{name}</h3>
        {agencyContent}
        <h3 className={styles.status}>{status}</h3>
      </div>
    </div>
  );
}
export default ProfileCard;
