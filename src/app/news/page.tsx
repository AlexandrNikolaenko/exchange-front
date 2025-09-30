import Breadcrumbs from "@/components/core/breadcrumbs";

export default function Page() {
  return (
    <div className="container">
        <Breadcrumbs pages={[{name: 'Новости', href: '/news'}]}/>
        <h1 className="new-title">новости</h1>
        <div className="news-container">
            
        </div>
        <div className="news-nav">
            
        </div>
    </div>
  )
}