import Accordion from "@/components/core/accordion/accordion";
import NewBlock from "@/components/core/news-block";

export default function Page() {
  return (
    <>
      <div className="container">
       <div className="banner">
        <div className="banner__text">
            <span className="banner__title">
                <div className="purple">правила&nbsp;</div>
                обмена
            </span>
            <p>Перед тем как воспользоваться услугами сервиса  Azazex.com, Пользователь обязан ознакомиться в полном объеме с Правилами и условиями предоставления услуг сервисом  Azazex.com. Использование услуг сервиса  Azazex.com возможно только в случае, если Пользователь принимает все условия соглашения.</p>
        </div>
        <div className="banner__image rules">
        </div>
       </div>
       <section className="info-list-sec">
        <ol className="info-list">
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
        </ol>
       </section>
        <NewBlock />
    </div>
    </>
  )
}