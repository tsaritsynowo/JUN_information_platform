import { useParams } from "react-router"
import newslist from "../../../public/file/filelist.json"

export default function Newspage(){
    let { newsid } = useParams();
    let news = newslist.filter(
        (news) => news.id == newsid
    )
    return (
        <div className="pageContainer">
            <h1>{news[0].title}</h1>
            <samp>{news[0].author} 发布于 {news[0].date}</samp>
            <p>{news[0].content}</p>
        </div>
    )
}