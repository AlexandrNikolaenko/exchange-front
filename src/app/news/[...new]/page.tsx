"use client";

import Breadcrumbs from "@/components/core/breadcrumbs";
import NewBlock from "@/components/core/news-block";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Page() {
  const { new: id } = useParams();
  console.log(id);
  return (
    <>
      <div className="container">
        <Breadcrumbs pages={[{ name: "Новости", href: "/news" }]} />
        <div className="main__screen">
          <div className="avtor">
            <div className="name">John Doe</div>
            <div className="date">19 Jan 2022</div>
          </div>
          <h1 className="main-title">
            A small business is only as good as its tools and it is totally
            true.
          </h1>
          <span className="sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </span>
        </div>
      </div>
      <div className="main__cover-cont">
        <div className="main__cover"></div>
      </div>

      <div className="container">
        <div className="news__content">
          <div className="new">
            <p className="news-body">
              Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
              сгенерировать несколько абзацев более менее осмысленного текста
              рыбы на русском языке, а начинающему оратору отточить навык
              публичных выступлений в домашних условиях. При создании генератора
            </p>
          </div>
          <div className="new">
            <h2 className="news-title">Header 1</h2>
            <p className="news-body">
              Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
              сгенерировать несколько абзацев более менее осмысленного текста
              рыбы на русском языке, а начинающему оратору отточить навык
              публичных выступлений в домашних условиях. При создании генератора
            </p>
            <div className="new-avtor">
              <p className="avtor-body">
                Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                сгенерировать несколько абзацев более менее осмысленного текста
                рыбы на русском языке, а начинающему оратору отточить
              </p>
              {/* <span className="avtor-name">-John Even Borg</span> */}
            </div>
            <p className="news-body">
              Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
              сгенерировать несколько абзацев более менее осмысленного текста
              рыбы на русском языке, а начинающему оратору отточить навык
              публичных выступлений в домашних условиях. При создании генератора
            </p>
          </div>
          <div className="new">
            <Image
              className="article-img"
              fill
              alt="new"
              src="/images/Rectangle 18.jpg"
            />
            <p className="news-body">
              Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
            </p>
          </div>
          <div className="new">
            <h2 className="news-title">Header 2</h2>
            <p className="news-body">
              Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
              сгенерировать несколько абзацев более менее осмысленного текста
              рыбы на русском языке, а начинающему оратору отточить навык
              публичных выступлений в домашних условиях. При создании генератора
              <br />
              <br />
            </p>

            <p className="news-body">
              Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
              сгенерировать несколько абзацев более менее осмысленного текста
              рыбы на русском языке, а начинающему оратору отточить навык
              публичных выступлений в домашних условиях. При создании генератора
            </p>
            <ol className="new-list">
              <li>
                <p className="news-body">
                  Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                  сгенерировать несколько абзацев более менее{" "}
                </p>
              </li>
              <li>
                <p className="news-body">
                  Jсмысленного текста рыбы на русском языке, а начинающему
                  оратору отточить навык публичных выступлений в домашних
                  условиях. При создании генератора
                </p>
              </li>
            </ol>
            <p className="news-body">
              Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
              сгенерировать несколько абзацев более менее осмысленного текста
              рыбы на русском языке, а начинающему оратору отточить навык
              публичных выступлений в домашних условиях. При создании генератора
            </p>
          </div>
        </div>
        <NewBlock />
      </div>
    </>
  );
}
