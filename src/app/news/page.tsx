'use client'

import Breadcrumbs from "@/components/core/breadcrumbs";
import Pagination from "@/components/core/pagination";
import { news } from "@/components/data";
import NewCard from "@/components/news/news-card";
import { useState } from "react";


export default function Page() {
  const [pagination, setPagination] = useState<number>(1);

  function handleChangePage(page: number) {
    setPagination(page);
  }

  console.log(news.slice(pagination * 6 - 6, pagination * 6))

  return (
    <div className="container">
        <Breadcrumbs pages={[{name: 'Новости', href: '/news'}]}/>
        <h1 className="new-title">новости</h1>
        <div className="news-container">
          {
            news.slice(pagination * 6 - 6, pagination * 6).map(elem => (
              <NewCard data={elem} key={elem.id}/>
            ))
          }
        </div>
        <div className="news-nav">
          <Pagination total={Math.ceil(news.length / 6)} pagination={pagination} setPagination={handleChangePage}/>
        </div>
    </div>
  )
}