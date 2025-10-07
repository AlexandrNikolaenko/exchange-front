"use client";

import ShowAllLink from "@/components/core/links/show-all";
import WhyWeBlock from "@/components/core/why-we-block";
import Feedback from "@/components/main/feedback";
import Notification from "@/components/core/notification";
import { useState } from "react";
import Image from "next/image";
import NextButton from "@/components/core/buttons/next-button";
import BackButton from "@/components/core/buttons/back-button";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [exchangeSection, setExchangeSection] = useState<
    "fir" | "sec" | "thir"
  >("fir");
  const [coinsVisible, setCoinVisible] = useState<{
    coin1: boolean;
    coin2: boolean;
  }>({ coin1: false, coin2: false });
  const [firstFilter, setFirstFilter] = useState<string[]>([]);
  const [secondFilter, setSecondFilter] = useState<string[]>([]);
  const [selectValues, setSelectValues] = useState<{name: string, src: string}[]>([{name: '', src: ''}, {name: '', src: ''},]);

  function handleChangeFirstValue(value: {name: string, src: string}) {
    setSelectValues([value, selectValues[1]])
  }

  function handleChangeSecondValue(value: {name: string, src: string}) {
    setSelectValues([selectValues[0], value])
  }

  function handleChangeFirstFilter(value: string) {
    if (value == "all") {
        setFirstFilter([]);
    } else {
        if (firstFilter.includes(value)) {
            setFirstFilter(firstFilter.filter(elem => elem != value))
        } else setFirstFilter(firstFilter.concat(value));
    }
  }

  function handleChangeSecondFilter(value: string) {
    if (value == "all") {
        setSecondFilter([]);
    } else {
        if (secondFilter.includes(value)) {
            setSecondFilter(secondFilter.filter(elem => elem != value))
        } else setSecondFilter(secondFilter.concat(value));
    }
  }

  function handleChangeIsOpen() {
    setIsOpen(!isOpen);
  }

  function handleNextExchangeSection() {
    if (exchangeSection == "fir") setExchangeSection("sec");
    else if (exchangeSection == "sec") setExchangeSection("thir");
    else setExchangeSection("thir");
  }

  function handleBackExchangeSection() {
    if (exchangeSection == "sec") setExchangeSection("fir");
    else if (exchangeSection == "thir") setExchangeSection("sec");
  }

  function handleChangeVisibleCoins(coin: "coin1" | "coin2") {
    if (coin == "coin1")
      setCoinVisible({ ...coinsVisible, coin1: !coinsVisible.coin1 });
    else setCoinVisible({ ...coinsVisible, coin2: !coinsVisible.coin2 });
  }

  return (
    <>
      <div className="container">
        <div className="banner">
          <div className="banner__text">
            <span className="banner__title">
              <div className="purple">Надёжный сервис</div>
              по обмену криптовалют
            </span>
          </div>
          <div className="banner__image index"></div>
        </div>
      </div>
      <section className={`exchanger ${exchangeSection}`}>
        <div className="container">
          <div className="exchanger-body">
            <div className="exchanger-header">
              <div className="exchanger-sub">
                <Image
                  alt="exchange"
                  width={31}
                  height={31}
                  src="icons/exhi.svg"
                />
              </div>
              <div className="exchanger-line">
                <div className="line-el active">
                  <div className="line-text">
                    <span>01</span>
                    <p>Выберете валюту</p>
                  </div>
                  <div className="line-img">
                    <svg
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="31" height="31" rx="15.5" fill="white" />
                      <rect
                        x="2"
                        y="2"
                        width="27"
                        height="27"
                        rx="13.5"
                        fill="#D7D7D7"
                      />
                      <path
                        d="M21 12L13.5 19L9 14.8"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                    <div className="line-gap"></div>
                  </div>
                </div>
                <div className="line-el">
                  <div className="line-text">
                    <span>02</span>
                    <p>Даные операции</p>
                  </div>
                  <div className="line-img">
                    <svg
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="31" height="31" rx="15.5" fill="white" />
                      <rect
                        x="2"
                        y="2"
                        width="27"
                        height="27"
                        rx="13.5"
                        fill="#D7D7D7"
                      />
                      <path
                        d="M21 12L13.5 19L9 14.8"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                    <div className="line-gap"></div>
                  </div>
                </div>
                <div className="line-el">
                  <div className="line-text">
                    <span>03</span>
                    <p>Подтверждение операции</p>
                  </div>
                  <div className="line-img">
                    <svg
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="31" height="31" rx="15.5" fill="white" />
                      <rect
                        x="2"
                        y="2"
                        width="27"
                        height="27"
                        rx="13.5"
                        fill="#D7D7D7"
                      />
                      <path
                        d="M21 12L13.5 19L9 14.8"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="exchanger-first">
              <div className="exchanger-main">
                <div className="exchanger-cont">
                  <div className="exchanger-out">
                    <h4>Вы отправляете</h4>
                    <div className="fiat">
                      <input className="exchanger-input" placeholder="1000" />
                      <span>RUB</span>
                    </div>
                    <div
                      className="dropdown"
                      onClick={() => handleChangeVisibleCoins("coin1")}
                    >
                      <div className="dropdown-btn">
                        {
                            selectValues[0].name != '' &&
                            <>
                                <span>
                                    <Image
                                        alt="icon"
                                        width={18}
                                        height={18}
                                        src={selectValues[0].src}
                                    />
                                    <span>{selectValues[0].name}</span>
                                </span>
                            </>
                        }
                      </div>
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className={`dropdown-content ${coinsVisible.coin1 ? "show" : ""}`}
                      >
                        <div className="dropdown-filters">
                          <button data-filter="all" onClick={() => handleChangeFirstFilter('all')}>Все</button>
                          <button data-filter="Сбербанк" onClick={() => handleChangeFirstFilter('Сбербанк')}>Сбербанк</button>
                          <button data-filter="Тинькофф" onClick={() => handleChangeFirstFilter('Тинькофф')}>Тинькофф</button>
                        </div>
                        <div className="dropdown-search-container">
                          <input
                            type="text"
                            className="dropdown-search"
                            placeholder="Search..."
                          />
                          <i className="fas fa-search dropdown-search-icon"></i>
                        </div>

                        <ul className="dropdown-list" id="bank">
                          <li onClick={() => handleChangeFirstValue({name: 'Сбербанк', src:"/icons/sber.svg"})} style={{display: `${firstFilter.includes('Сбербанк') || firstFilter.length == 0 ? 'flex' : 'none'}`}}>
                            <Image
                              alt="sber"
                              width={18}
                              height={18}
                              src="/icons/sber.svg"
                            />
                            <span>Сбербанк</span>
                          </li>
                          <li onClick={() => handleChangeFirstValue({name: 'Сбербанк', src:"/icons/sber.svg"})} style={{display: `${firstFilter.includes('Сбербанк') || firstFilter.length == 0 ? 'flex' : 'none'}`}}>
                            <Image
                              alt="sber"
                              width={18}
                              height={18}
                              src="/icons/sber.svg"
                            />
                            <span>Сбербанк</span>
                          </li>
                          <li onClick={() => handleChangeFirstValue({name: 'Сбербанк', src:"/icons/sber.svg"})} style={{display: `${firstFilter.includes('Сбербанк') || firstFilter.length == 0 ? 'flex' : 'none'}`}}>
                            <Image
                              alt="sber"
                              width={18}
                              height={18}
                              src="/icons/sber.svg"
                            />
                            <span>Сбербанк</span>
                          </li>
                          <li onClick={() => handleChangeFirstValue({name: 'Сбербанк', src:"/icons/sber.svg"})} style={{display: `${firstFilter.includes('Сбербанк') || firstFilter.length == 0 ? 'flex' : 'none'}`}}>
                            <Image
                              alt="sber"
                              width={18}
                              height={18}
                              src="/icons/sber.svg"
                            />
                            <span>Сбербанк</span>
                          </li>
                          <li onClick={() => handleChangeFirstValue({name: 'Сбербанк', src:"/icons/sber.svg"})} style={{display: `${firstFilter.includes('Сбербанк') || firstFilter.length == 0 ? 'flex' : 'none'}`}}>
                            <Image
                              alt="sber"
                              width={18}
                              height={18}
                              src="/icons/sber.svg"
                            />
                            <span>Сбербанк</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="exchanger-mix">
                    <button className="exchanger-mix-button">
                      <Image
                        width={38.400001525878906}
                        height={38.400001525878906}
                        alt="exchange"
                        src="/icons/arrows.svg"
                      />
                    </button>
                  </div>
                  <div className="exchanger-in">
                    <h4>Вы получаете</h4>
                    <div className="fiat">
                      <input className="exchanger-input" placeholder="1000" />
                      <span>BTC</span>
                    </div>
                    <div className="bank">
                      <div
                        className="dropdown"
                        onClick={() => handleChangeVisibleCoins("coin2")}
                      >
                        <div className="dropdown-btn">
                        {
                            selectValues[1].name != '' &&
                            <>
                                <span>
                                    <Image
                                        alt="icon"
                                        width={18}
                                        height={18}
                                        src={selectValues[1].src}
                                    />
                                    <span>{selectValues[1].name}</span>
                                </span>
                            </>
                        }
                        </div>
                        <div
                          onClick={(e) => e.stopPropagation()}
                          className={`dropdown-content ${coinsVisible.coin2 ? "show" : ""}`}
                        >
                          <div className="dropdown-filters">
                            <button data-filter="all" onClick={() => handleChangeSecondFilter('all')}>Все</button>
                            <button data-filter="BTC" onClick={() => handleChangeSecondFilter('BTC')}>BTC</button>
                            <button data-filter="RUB" onClick={() => handleChangeSecondFilter('RUB')}>RUB</button>
                          </div>
                          <div className="dropdown-search-container">
                            <input
                              type="text"
                              className="dropdown-search"
                              placeholder="Search..."
                            />
                            <i className="fas fa-search dropdown-search-icon"></i>
                          </div>
                          <ul className="dropdown-list" id="crypto">
                            <li onClick={() => handleChangeSecondValue({name: 'Bitcoin', src:"/icons/bitcoin-icon.svg"})} style={{display: `${secondFilter.includes('BTC') || secondFilter.length == 0 ? 'flex' : 'none'}`}}>
                              <Image
                                alt="btc"
                                width={18}
                                height={18}
                                src="/icons/bitcoin-icon.svg"
                              />
                              <span>Bitcoin</span>
                            </li>
                            <li onClick={() => handleChangeSecondValue({name: 'Сбербанк', src:"/icons/sber.svg"})} style={{display: `${secondFilter.includes('RUB') || secondFilter.length == 0 ? 'flex' : 'none'}`}}>
                              <Image
                                alt="sber"
                                width={18}
                                height={18}
                                src="/icons/sber.svg"
                              />
                              <span>Сбербанк</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="exchanger-info">
                <div className="exchanger-left-cont">
                  <div className="curs info">
                    <Image
                      alt="course"
                      width={34}
                      height={34}
                      src="/icons/course-icon.svg"
                    />
                    <div>
                      <span>Курс обмена:</span>
                      <p> 7114613 rub = 1 btc</p>
                    </div>
                  </div>
                  <div className="exchanger-minmax info">
                    <Image
                      alt="exchange"
                      width={34}
                      height={34}
                      src="/icons/diapason-icon.svg"
                    />
                    <div className="minmax">
                      <div>
                        <span>Min:</span>
                        <p>1000</p>
                      </div>
                      <div>
                        <span>Max:</span>
                        <p>250000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="exchanger-right-cont">
                  <div className="sale info">
                    <Image
                      alt="sale"
                      width={34}
                      height={34}
                      src="/icons/sale.svg"
                    />
                    <div>
                      <span>Скидка:</span>
                      <p>0%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="exchanger-down">
                <div className="exchanger-work">
                  <span>Работаем</span>
                  <Image
                    alt="24hours"
                    width={33}
                    height={33}
                    src="/icons/24hours.svg"
                  />
                </div>
                <NextButton action={handleNextExchangeSection} />
              </div>
            </div>
            <div className="exchanger-second">
              <div className="exchanger-main">
                <h4>Введите данные перевода</h4>
                <div className="exchanger-sec-body">
                  <input
                    className="exchanger-input"
                    id="email"
                    placeholder="E-mail"
                  />
                  <div className="exchanger-values">
                    <div className="exchanger-values__left-cont">
                      <div className="fiat">
                        <input
                          className="exchanger-input"
                          id="sumSec"
                          placeholder="1000"
                        />
                        <span>RUB</span>
                      </div>
                      <input
                        className="exchanger-input"
                        id="name"
                        placeholder="ФИО отправителя"
                      />
                      <input
                        className="exchanger-input"
                        id="card"
                        placeholder="Карта Сбербанка, от16 до 18 цифр"
                      />
                    </div>
                    <div className="exchanger-values__right-cont">
                      <div className="fiat">
                        <input
                          className="exchanger-input"
                          id="cryptoSec"
                          placeholder="1000"
                        />
                        <span>RUB</span>
                      </div>
                      <input
                        className="exchanger-input"
                        id="cryptoCard"
                        placeholder="Bitcoin кошелёк от 28 до 100 цифр"
                      />
                      <div className="curs info">
                        <Image
                          alt="course"
                          width={34}
                          height={34}
                          src="/icons/course-icon.svg"
                        />
                        <div>
                          <span>Курс обмена:</span>
                          <p> 7114613 rub = 1 btc</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="exchanger-down">
                  <label className="radio-button">
                    <input type="radio" className="rel-radio" />
                    <span className="radio-cus"></span>Я согласен с правилами
                    обмена и политикой AML
                  </label>
                  <div className="exchanger-sec__buttons">
                    {/* <button className="back-button">
                                            <svg width="46" height="8" viewBox="0 0 46 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M43.1328 3.09501L42.782 2.72901L40.9028 0.814662C40.2756 0.175707 39.1892 0.619808 39.1892 1.51517L39.1892 2.09502C39.1892 2.6473 38.7414 3.09501 38.1892 3.09501H1.3418C0.789511 3.09501 0.341797 3.54272 0.341797 4.09501V6.48696C0.341797 7.03924 0.789512 7.48696 1.3418 7.48696L39.1891 7.48696L44.9984 7.48696C45.8791 7.48696 46.3297 6.4309 45.7204 5.79506L43.1328 3.09501Z" fill="white"/>
                                                </svg>
                                                
                                            <span>Назад</span>
                                        </button> */}
                    <BackButton
                      text="Назад"
                      action={handleBackExchangeSection}
                    />
                    <NextButton action={handleNextExchangeSection} />
                    {/* <button className="next-button">
                                            <span>Далее</span>
                                            <svg width="46" height="8" viewBox="0 0 46 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M43.1328 3.09501L42.782 2.72901L40.9028 0.814662C40.2756 0.175707 39.1892 0.619808 39.1892 1.51517L39.1892 2.09502C39.1892 2.6473 38.7414 3.09501 38.1892 3.09501H1.3418C0.789511 3.09501 0.341797 3.54272 0.341797 4.09501V6.48696C0.341797 7.03924 0.789512 7.48696 1.3418 7.48696L39.1891 7.48696L44.9984 7.48696C45.8791 7.48696 46.3297 6.4309 45.7204 5.79506L43.1328 3.09501Z" fill="white"/>
                                                </svg>
                                                
                                        </button> */}
                  </div>
                </div>
                <span className="error-sec"></span>
              </div>
            </div>
            <div className="exchanger-third">
              <div className="exchanger__payment">
                <div className="exchanger-thir__out">
                  <div className="exchanger__payment-header">
                    <span className="sum" id="sumThir">
                      1000
                    </span>
                    <span className="coin" id="fiatThir">
                      RUB
                    </span>
                    <div className="bank-thir" id="bankThir">
                      <Image
                        alt="sber"
                        width={18}
                        height={18}
                        src="/icons/sber.svg"
                      />
                      <span>Сбербанк</span>
                    </div>
                  </div>
                  <div className="exchanger__payment-down">
                    <span className="name" id="nameThir">
                      Артур
                    </span>
                    <span className="card" id="cardThir">
                      12345
                    </span>
                  </div>
                </div>
                <div className="exchanger__line"></div>
                <div className="exchanger-thir__in">
                  <div className="exchanger__payment-header">
                    <span className="sum" id="cryptoThir">
                      1000
                    </span>
                    <span className="coin" id="cryptoShort">
                      RUB
                    </span>
                    <div className="bank-thir " id="cryptoName">
                      <Image
                        alt="sber"
                        width={18}
                        height={18}
                        src="/icons/sber.svg"
                      />
                      <span>Сбербанк</span>
                    </div>
                  </div>
                  <div className="exchanger__payment-down">
                    <span className="card" id="cryptoCardThir">
                      12345
                    </span>
                  </div>
                </div>
              </div>
              <div className="exchanger-sec__buttons">
                {/* <button className="back-button">
                                    <svg width="46" height="8" viewBox="0 0 46 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M43.1328 3.09501L42.782 2.72901L40.9028 0.814662C40.2756 0.175707 39.1892 0.619808 39.1892 1.51517L39.1892 2.09502C39.1892 2.6473 38.7414 3.09501 38.1892 3.09501H1.3418C0.789511 3.09501 0.341797 3.54272 0.341797 4.09501V6.48696C0.341797 7.03924 0.789512 7.48696 1.3418 7.48696L39.1891 7.48696L44.9984 7.48696C45.8791 7.48696 46.3297 6.4309 45.7204 5.79506L43.1328 3.09501Z" fill="white"/>
                                        </svg>
                                        
                                    <span>Отмена</span>
                                </button> */}
                <BackButton text="Отмена" action={handleBackExchangeSection} />

                <NextButton action={handleNextExchangeSection} />
                {/* <button className="next-button">
                                    <span>Далее</span>
                                    <svg width="46" height="8" viewBox="0 0 46 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M43.1328 3.09501L42.782 2.72901L40.9028 0.814662C40.2756 0.175707 39.1892 0.619808 39.1892 1.51517L39.1892 2.09502C39.1892 2.6473 38.7414 3.09501 38.1892 3.09501H1.3418C0.789511 3.09501 0.341797 3.54272 0.341797 4.09501V6.48696C0.341797 7.03924 0.789512 7.48696 1.3418 7.48696L39.1891 7.48696L44.9984 7.48696C45.8791 7.48696 46.3297 6.4309 45.7204 5.79506L43.1328 3.09501Z" fill="white"/>
                                        </svg>
                                        
                                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <WhyWeBlock />
        <section className="reviews">
          <h3 className="reviews-header">
            <span>Что&nbsp;</span>
            <span className="purple">о нас говорят?</span>
          </h3>
          <ul className="reviews-list">
            <Feedback />
            <Feedback />
            <Feedback />
            <Feedback />
          </ul>
          <div className="all-review-content">
            <ShowAllLink />
          </div>
        </section>
      </div>
      <Notification isOpen={isOpen} setIsOpen={handleChangeIsOpen} />
    </>
  );
}
