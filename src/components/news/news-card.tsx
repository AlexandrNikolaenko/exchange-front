import Image from "next/image"
import { New } from "@/api/api"

export default function NewCard({data}: {data: New}) {
  return (
    <div className="new">
      <Image alt="new-fon" fill style={{objectFit: "contain"}} src="/images/Rectangle 18.jpg"/>
      <div className="new-content">
          <div className="avtor">
              <div className="name">{data.author}</div>
              <div className="date"></div>
          </div>
          <span className="new-header"></span>
          <p className="new-body"></p>
          <a href="./newsInner.html" className="new-button"></a>
      </div>
  </div>
  )
}