import { ContactsIcon } from "@/components/core/icons/icon";

export default function Page() {
  return (
    <>
      <div className="container">
        <section className="news-blocks">
          <ul className="news-block__list">
            <li className="news-block__list-item">
              <span>Техническая поддержка</span>
              <p>
                Наша служба поддержки готова помочь вам круглосуточно и без
                выходных. Если вы столкнулись с проблемой, нуждаетесь в совете
                или у вас есть какие-либо вопросы, не стесняйтесь обращаться к
                нам. Мы стремимся предоставить быструю и дружелюбное
                обслуживание
              </p>
              <a className="news-block-item-button">Написать в поддержку</a>
            </li>
            <li className="news-block__list-item">
              <span>Социальные сети</span>
              <p>
                Оставайтесь на связи с нами в социальных сетях и по электронной
                почте! Есть вопросы или отзывы? Напишите нам по электронной
                почте в любое время. Нам приятно слышать ваше мнение, и мы
                всегда готовы помочь!
              </p>
              <div className="news-block__list-down">
                <a href="#" className="news-block-item-button">
                  Написать на почту
                </a>
                <div className="social">
                  <ContactsIcon src="/icons/Twitter.svg" alt="twitter" />
                  <ContactsIcon src="/icons/telegram.svg" alt="telegram" />
                  <ContactsIcon src="/icons/Facebook.svg" alt="facebook" />
                  <ContactsIcon src="/icons/instagram.svg" alt="instagram" />
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section className="cont-links-block">
          <div className="cont-links">
            <div className="cont-links-item">
              <span className="cont-links-title">
                мы&nbsp; <div className="purple"> на мориторингах</div>
              </span>
              <ul className="cont-links-list">
                <li className="cont-links-list-item">
                  <a>forum.bits.media</a>
                </li>
                <li className="cont-links-list-item">
                  <a>SearchEngines.guru</a>
                </li>
                <li className="cont-links-list-item">
                  <a>Bitalk.org</a>
                </li>
                <li className="cont-links-list-item">
                  <a>Mmgp.ru</a>
                </li>
                <li className="cont-links-list-item">
                  <a>ForumBusiness.net</a>
                </li>
                <li className="cont-links-list-item">
                  <a>forum.cryptoff.org</a>
                </li>
                <li className="cont-links-list-item">
                  <a>Maultalk.com</a>
                </li>
                <li className="cont-links-list-item">
                  <a>Cryptotalk.org</a>
                </li>
              </ul>
            </div>
            <div className="cont-links-item">
              <span className="cont-links-title">
                мы&nbsp; <div className="purple"> на форумах</div>
              </span>
              <ul className="cont-links-list purple-type">
                <li className="cont-links-list-item">
                  <a>Bestchange</a>
                </li>
                <li className="cont-links-list-item">
                  <a>Курс Эксперт</a>
                </li>
                <li className="cont-links-list-item">
                  <a>Okchanger.ru</a>
                </li>
                <li className="cont-links-list-item">
                  <a>Exchangesumo.com</a>
                </li>
                <li className="cont-links-list-item">
                  <a>Eobmen-obmen.ru</a>
                </li>
                <li className="cont-links-list-item">
                  <a>Bitcoinmarket.global</a>
                </li>
                <li className="cont-links-list-item">
                  <a>Glazok.org</a>
                </li>
                <li className="cont-links-list-item">
                  <a>bits.media</a>
                </li>
                <li className="cont-links-list-item">
                  <a>pro-obmen.ru</a>
                </li>
                <li className="cont-links-list-item">
                  <a>e-mon.ru</a>
                </li>
                <li className="cont-links-list-item">
                  <a>crypto.ru</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="line"></div>
      </div>
    </>
  );
}
