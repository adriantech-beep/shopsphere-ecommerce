import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerLinks}>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>Contact</p>
        <p>Blog</p>
      </div>
      <div className={styles.socialLinks}>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
      </div>
      <p>© 2025 Shopsphere. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
