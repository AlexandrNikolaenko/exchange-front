import Accordion from "@/components/core/accordion/accordion";
import Breadcrumbs from "@/components/core/breadcrumbs";
import NewBlock from "@/components/core/news-block";

export default function Page() {
  return (
    <div className="container">
      <Breadcrumbs pages={[{ name: "FAQ", href: "/faq" }]} />
      <div className="banner">
        <div className="banner__text">
          <span className="banner__title">FAQ | Список вопросов и ответов</span>
        </div>
        <div className="banner__image faq"></div>
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
  );
}
