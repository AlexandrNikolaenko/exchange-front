"use client";

import { useState } from "react";
import { ContactsIcon } from "../core/icons/icon";
import Logo from "../core/logo";
import NavLink from "../core/links/nav-link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleVisibleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__first-cont">
            <Logo />
          </div>

          <nav className="header__list">
            <NavLink href={'/rules'}>Правила обмена</NavLink>
            <NavLink href={'/partners'}>Партнерам</NavLink>
            <NavLink href={'/news'}>Новости</NavLink>
            <NavLink href={'/faq'}>FAQ</NavLink>
            <NavLink href={'/contacts'}>Контакты</NavLink>
          </nav>
          <div className="header__end">
            <div className="custom-lang-select">
              <button className="lang-select">RU</button>
              <div className="lang-options hide">
                <p>Выберите язык</p>
                <button data-value="RU">Русский</button>
                <button data-value="EN">English</button>
              </div>
            </div>
            <a className="login__button" href="./auth.html">
              вход
            </a>
          </div>
        </div>
        <div className="header__mobile">
          <div className="header__first-cont">
            <Logo />
          </div>
          <button onClick={handleVisibleMenu}>
            <ul className="burger">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </button>
        </div>
      </div>
      <div className="fall-menu">
        <div className="base-header-menu">
          <ul className="header__list">
            <li>
              <a href="./rules.html">Правила обмена</a>
            </li>
            <li>
              <a href="./partners.html">Партнерам</a>
            </li>
            <li>
              <a href="./news.html">Новости</a>
            </li>
            <li>
              <a href="./faq.html">FAQ</a>
            </li>
            <li>
              <a href="./contacts.html">Контакты</a>
            </li>
          </ul>
          <div className="header__end">
            <div className="custom-lang-select">
              <button className="lang-select">RU</button>
              <div className="lang-options hide">
                <p>Выберите язык</p>
                <button data-value="RU">Русский</button>
                <button data-value="EN">English</button>
              </div>
            </div>
            <a className="login__button" href="./auth.html">
              вход
            </a>
          </div>
        </div>
        <a className="support__button" href="#">
          Поддержка
        </a>
        <div className="social">
          <a href="#">
            <ContactsIcon alt="twitter" src="./assets/icons/Twitter.svg" />
          </a>
          <a href="#">
            <ContactsIcon
              alt="telegram"
              src="./assets/icons/icon-park-outline_telegram.svg"
            />
          </a>
          <a href="#">
            <ContactsIcon alt="facebook" src="./assets/icons/Facebook.svg" />
          </a>
          <a href="#">
            <ContactsIcon alt="instagram" src="./assets/icons/instagram.svg" />
          </a>
        </div>
      </div>
    </header>
  );
}
