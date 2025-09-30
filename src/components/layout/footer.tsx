import { ContactsIcon } from "../core/icons/icon";
import Logo from "../core/logo";
import NavLink from "../core/links/nav-link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-container">
            <Logo />
            <nav className="footer-nav">
              <NavLink href={'/rules'}>Правила обмена</NavLink>
              <NavLink href={'/partners'}>Партнерам</NavLink>
              <NavLink href={'/news'}>Новости</NavLink>
              <NavLink href={'/faq'}>FAQ</NavLink>
              <NavLink href={'/contacts'}>Контакты</NavLink>
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
