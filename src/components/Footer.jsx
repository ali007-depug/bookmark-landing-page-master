export default function Footer() {
  return (
    <footer>
        <img src="/assets/images/logo-bookmark.svg" alt="Bookmark company logo" />
      <nav aria-label="footer navigation">
        <ul className="footer__links">
          <li>
            <a href="#feature">feature</a>
          </li>
          <li>
            <a href="#pricing">pricing</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="footer__icons">
        <img src="/assets/images/icon-facebook.svg" alt="facebook icon" />
        <img src="/assets/images/icon-twitter.svg" alt="twitter icon" />
      </div>
    </footer>
  );
}
