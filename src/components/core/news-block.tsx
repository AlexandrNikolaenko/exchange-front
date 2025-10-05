import Image from "next/image";
import ShowAllLink from "./links/show-all";

export default function NewBlock() {
  return (
    <section className="news">
      <h2 className="news-block-title">Новости</h2>
      <ul className="news-block__list">
        <li className="news-block__list-item">
          <span>Стартап Фреймворк</span>
          <p>
            Стартап — мощный инструмент для быстрого и удобного прототипирования
            ваших проектов. Он подойдет большинству проектов, поскольку содержит
            актуальные и современные веб-элементы.
          </p>
          <a className="news-block-item-button">Подробнее</a>
        </li>
        <li className="news-block__list-item">
          <span>Стартап Фреймворк</span>
          <p>
            Стартап — мощный инструмент для быстрого и удобного прототипирования
            ваших проектов. Он подойдет большинству проектов, поскольку содержит
            актуальные и современные веб-элементы.
          </p>
          <a className="news-block-item-button">Подробнее</a>
        </li>
        <li className="news-block__list-item">
          <span>Стартап Фреймворк</span>
          <p>
            Стартап — мощный инструмент для быстрого и удобного прототипирования
            ваших проектов. Он подойдет большинству проектов, поскольку содержит
            актуальные и современные веб-элементы.
          </p>
          <a className="news-block-item-button">Подробнее</a>
        </li>
        <li className="news-block__list-item">
          <span>Стартап Фреймворк</span>
          <p>
            Стартап — мощный инструмент для быстрого и удобного прототипирования
            ваших проектов. Он подойдет большинству проектов, поскольку содержит
            актуальные и современные веб-элементы.
          </p>
          <a className="news-block-item-button">Подробнее</a>
        </li>
      </ul>
      <div className="all-review-content">
        <ShowAllLink link="/news" text="Все новости" />
      </div>
    </section>
  );
}
