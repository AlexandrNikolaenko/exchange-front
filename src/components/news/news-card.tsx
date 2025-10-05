import Image from "next/image"
import { New } from "@/api/api"

export default function NewCard({data}: {data: New}) {
  return (
    <div className="new">
      <div className="w-full aspect-[598/312] relative">
        <Image alt="new-fon" fill className="aspect-[598/312]" src="/Rectangle 18.jpg"/>
      </div>
      <div className="new-content">
        <div className="avtor">
          <div className="name">{data.author}</div>
          <div className="date">{data.date}</div>
        </div>
        <span className="new-header">{data.title}</span>
        <p className="new-body">{data.body}</p>
        <a href={`/news/${data.id}`} className="new-button">Подробнее</a>
      </div>
  </div>
  )
}