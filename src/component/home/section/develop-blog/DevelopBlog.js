import * as React from "react";
import './DevelopBlog.css'
import Bookmark from "../../../common/Bookmark";

class DevelopBlog extends React.Component {

    constructor() {
        super();
        this.state = {
            lastCommit: {
                author: "Загрузка...",
                date: "Загрузка...",
                message: "Загрузка...",
                imgUrl: "none"
            }
        }
    }


    componentDidMount() {
        fetch("https://api.github.com/repos/nayutalienx/camellia-ui/commits")
            .then(res => res.json())
            .then(
                (result) => {
                    let message
                    let date
                    let author
                    for (let commit of result) {
                        if (!commit.commit.message.toString().includes("Merge pull request")) {
                            message = commit.commit.message.toString()
                            date = commit.commit.author.date.toString()
                            let toParseDate = new Date(date)
                            date = toParseDate.toLocaleString().substring(0, 10)
                            author = commit.commit.author.name

                            fetch("https://api.github.com/search/users?q=" + author).then(res => res.json())
                                .then(
                                    result => {
                                        let imgUrl = result.items[0].avatar_url
                                        this.setState(prevState => {
                                            return (
                                                {
                                                    lastCommit: {
                                                        message: prevState.lastCommit.message,
                                                        author: prevState.lastCommit.author,
                                                        date: prevState.lastCommit.date,
                                                        imgUrl: imgUrl
                                                    }
                                                }
                                            )
                                        })
                                    }
                                )


                            break;
                        }
                    }
                    this.setState(prevState => {
                        return (
                            {
                                lastCommit: {
                                    message: message,
                                    author: author,
                                    date: date,
                                    imgUrl: prevState.lastCommit.imgUrl
                                }
                            }
                        )
                    })
                }
            )

    }

    render() {

        const header = props => (
            <div>Блог разработки
                <sub>месяцев: 0 дней: 7</sub>
            </div>
        )


        let displayImg = this.state.lastCommit.imgUrl == "none" ? null : this.state.lastCommit.imgUrl
        console.log(displayImg)

        return (
            <div className="develop-blog">

                <Bookmark text={header()}/>

                <div id="develop-blog-content">

                    <div className="develop-blog-content-post">
                        <div className="develop-blog-content-post-preheader">
                            <div className="develop-blog-content-post-preheader-date">
                                06.06.2020
                            </div>
                            <div className="develop-blog-content-post-preheader-topic">
                                Дизайн
                            </div>
                        </div>
                        <div className="develop-blog-content-post-header">
                            Как сделать классный дизайн без помощи дизайнера
                        </div>
                    </div>

                    <div className="develop-blog-content-post">
                        <div className="develop-blog-content-post-preheader">
                            <div className="develop-blog-content-post-preheader-date">
                                06.06.2020
                            </div>
                            <div className="develop-blog-content-post-preheader-topic">
                                Верстка
                            </div>
                        </div>
                        <div className="develop-blog-content-post-header">
                            Как научится верстать если до этого серьезно с этим не сталкивался
                        </div>
                    </div>


                    <div className="develop-blog-content-changes">
                        <div className="develop-blog-content-changes-header">
                            Последний commit
                        </div>

                        <div className="develop-blog-content-changes-commit">
                            <div className="develop-blog-content-changes-commit-text">
                                {this.state.lastCommit.message}
                            </div>

                            <div className="develop-blog-content-changes-author">
                                <img src={displayImg} id="develop-blog-content-changes-author-ava"/>
                                <div>
                                    {this.state.lastCommit.author}
                                </div>
                                <div>
                                    {this.state.lastCommit.date}
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default DevelopBlog