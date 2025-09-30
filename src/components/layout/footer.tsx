import { ContactsIcon } from "../core/icons/icon";
import Logo from "../core/logo";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-container">
            <Logo />
            <nav className="footer-nav">
              <a href="./rules.html">Правила обмена</a>
              <a href="./partners.html">Партнерам</a>
              <a href="./news.html">Новости</a>
              <a href="./faq.html">FAQ</a>
              <a href="./contacts.html">Контакты</a>
            </nav>
          </div>
          <div className="line"></div>
          <div className="footer-container">
            <span>© 2024 Azazex. Сервис обмена электорнных валют.</span>
            <div className="social">
              <ContactsIcon src="./assets/icons/Ywitter.svg" alt="twitter" />
              <ContactsIcon
                src="./assets/icons/icon-park-outline_telegram.svg"
                alt="telegram"
              />
              <ContactsIcon src="./assets/icons/Facebook.svg" alt="Facebook" />
              <ContactsIcon
                src="./assets/icons/instagram.svg"
                alt="instagram"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
