import Breadcrumbs from "@/components/core/breadcrumbs";
import NewBlock from "@/components/core/news-block";

export default function Page() {
  return (
    <>
      <div className="container">
        <Breadcrumbs
          pages={[
            { name: "Партнерам", href: "/partners" },
            { name: "Пользователям", href: "/users" },
          ]}
        />
        <div className="banner">
          <div className="banner__text">
            <span className="banner__title">Пользователям</span>
            <p>
              Мы предлагаем простой и понятный способ дополнительного заработка
              нашим партнёрам на Azazex
            </p>
          </div>
          <div className="banner__image users"></div>
        </div>
      </div>
      <section className="user-info">
        <div className="container">
          <h2 className="user-info-header">
            что нужно сделать{" "}
            <div className="purple">для участия в программе?</div>
          </h2>
          <ul className="user-list">
            <li>
              <span className="user-item-number">1</span>
              <span className="user-item-header">Регистрируйтесь</span>
              <p>Получите реферальную ссылку в нашем канале</p>
            </li>
            <li>
              <span className="user-item-number">1</span>
              <span className="user-item-header">Регистрируйтесь</span>
              <p>Получите реферальную ссылку в нашем канале</p>
            </li>
            <li>
              <span className="user-item-number">1</span>
              <span className="user-item-header">Регистрируйтесь</span>
              <p>Получите реферальную ссылку в нашем канале</p>
            </li>
          </ul>
        </div>

        <div className="user-info__down-cont">
          <p>
            Вознаграждение рассчитывается от суммы обмена, Вашего реферала. В
            случае если сервис не имеет заработка с проведённого обмена,
            партнёрское вознаграждение не начисляется. Для вывода партнёрского
            вознаграждения количество уникальных привлечённых вами клиентов
            должно быть не менее 3. Партнёрские выплаты производятся на любые,
            из предложенных сервисом, направления. Минимальная сумма вывода
            партнёрского вознаграждения 3 доллара США, 150 рублей.
          </p>
          <div className="user-info-links">
            <p>
              Для уточнения информации, Вы можете написать нам на почту 
              <a>AzazexPochta@mail.com</a>, либо в <a>чат.</a>
            </p>
          </div>
        </div>
      </section>
      <div className="container">
        <NewBlock />
      </div>
    </>
  );
}
