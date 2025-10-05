import Breadcrumbs from "@/components/core/breadcrumbs";
import NewBlock from "@/components/core/news-block";
import WhyWeBlock from "@/components/core/why-we-block";

export default function Page() {
  return (
    <div className="container">
            <Breadcrumbs pages={[{name: 'Партнерам', href: '/partners'}]}/>
            <section className="news-blocks">
                <ul className="news-block__list">
                    <li className="news-block__list-item" style={{background: "#E4E0FF"}}>
                        <span style={{color: 'var(--purple)'}}>Пользователям</span>
                        <p style={{color: 'var(--purple)'}}>Зарабатывайте с нами. Как? Расскажите о нас, делитесь Вашей индивидуальной ссылкой с друзьями, знакомыми, размещайте наш рекламный материал на Ваших сайтах, и получайте проценты с обменных операций приведённых пользователей.</p>
                        <a className="news-block-item-button" href="./users.html">Подробнее</a>
                    </li>
                    <li className="news-block__list-item">
                        <span>Мониторингам</span>
                        <p>Уважаемые мониторинги обмена электронных валют. Мы стремимся развивать взаимовыгодные и перспективные отношения, которые позволят Вам и нам увеличить доход.</p>
                        <a className="news-block-item-button" href="./monitoring.html">Присоединиться</a>
                    </li>
                </ul>
            </section>
            <WhyWeBlock />
            <div className="line"></div>    
            <NewBlock />
        </div>
  )
}