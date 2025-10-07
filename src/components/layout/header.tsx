"use client";

import { useState } from "react";
import { ContactsIcon } from "../core/icons/icon";
import Logo from "../core/logo";
import NavLink from "../core/links/nav-link";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [lang, setLang] = useState<'RU' | 'EN'>('RU');
  const [isVisibleLang, setIsVisibleLang] = useState<boolean>(false)

  function handleVisibleMenu() {
    setIsOpen(!isOpen);
  }

  function handleChangeLang(value: 'RU' | 'EN') {
    setLang(value);
  }

  function handleChangeVisibleLang() {
    setIsVisibleLang(!isVisibleLang);
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__first-cont">
            <Logo />
          </div>

          <nav className="header__list">
            <NavLink href={"/"}>Обмен</NavLink>
            <NavLink href={"/rules"}>Правила обмена</NavLink>
            <NavLink href={"/partners"}>Партнерам</NavLink>
            <NavLink href={"/news"}>Новости</NavLink>
            <NavLink href={"/faq"}>FAQ</NavLink>
            <NavLink href={"/contacts"}>Контакты</NavLink>
          </nav>
          <div className="header__end">
            <div className="custom-lang-select">
              <button className="lang-select" onClick={handleChangeVisibleLang}>{lang}</button>
              <div className={`lang-options ${isVisibleLang ? '' : 'hide'}`}>
                <p>Выберите язык</p>
                <button data-value="RU" onClick={() => {
                  handleChangeLang('RU');
                  handleChangeVisibleLang();
                }}>Русский</button>
                <button data-value="EN" onClick={() => {
                  handleChangeLang('EN');
                  handleChangeVisibleLang();
                }}>English</button>
              </div>
            </div>
            <a className="login__button" href="/auth/signin">
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
              <li
                style={{
                  transform: isOpen
                    ? "translateY(9px) rotate(-45deg)"
                    : "translateY(0px) rotate(0deg)",
                }}
              ></li>
              <li style={{ width: isOpen ? "0" : "100%" }}></li>
              <li
                style={{
                  transform: isOpen
                    ? "translateY(-9px) rotate(45deg)"
                    : "translateY(0px) rotate(0deg",
                }}
              ></li>
            </ul>
          </button>
        </div>
      </div>
      <div
        className="fall-menu"
        style={{ transform: isOpen ? "translateY(0%)" : "translateY(-130%)" }}
      >
        <div className="base-header-menu">
          <ul className="header__list">
            <li>
              <Link href="/">Обмен</Link>
            </li>
            <li>
              <Link href="/rules">Правила обмена</Link>
            </li>
            <li>
              <Link href="/partners">Партнерам</Link>
            </li>
            <li>
              <Link href="/news">Новости</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/contacts">Контакты</Link>
            </li>
          </ul>
          <div className="header__end">
            <div className="custom-lang-select">
              <button className="lang-select">{lang}</button>
              <div className={`lang-options ${isVisibleLang ? '' : 'hide'}`}>
                <p>Выберите язык</p>
                <button data-value="RU" onClick={() => {
                  handleChangeLang('RU');
                  handleChangeVisibleLang();
                }}>Русский</button>
                <button data-value="EN" onClick={() => {
                  handleChangeLang('RU');
                  handleChangeVisibleLang();
                }}>English</button>
              </div>
            </div>
            <a className="login__button" href="/auth/signin">
              вход
            </a>
          </div>
        </div>
        <a className="support__button" href="#">
          Поддержка
        </a>
        <div className="social">
          <a href="#">
            <ContactsIcon alt="twitter" src="/icons/Twitter.svg" />
          </a>
          <a href="#">
            <ContactsIcon alt="telegram" src="/icons/telegram.svg" />
          </a>
          <a href="#">
            <ContactsIcon alt="facebook" src="/icons/Facebook.svg" />
          </a>
          <a href="#">
            <ContactsIcon alt="instagram" src="/icons/instagram.svg" />
          </a>
        </div>
      </div>
    </header>
  );
}
