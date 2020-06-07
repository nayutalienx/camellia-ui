import * as React from "react";
import './DevelopBlog.css'
import Bookmark from "../../../common/Bookmark";


class DevelopBlog extends React.Component {


    client_id = "19f8a039944f401672d8"
    client_secret = "ab2c7f1b2ac0bf142edec51044eb1766945a3265"

    constructor() {
        super();
        this.state = {
            lastCommit: {
                author: "Загрузка...",
                date: "Загрузка...",
                message: "Загрузка...",
                imgUrl: "none"
            },
            sinceStart: {
                month: 0,
                day: 0
            }
        }
    }


    componentDidMount() {

        let message
        let date
        let author
        // считаем кол-во дней с начала разработки
        const whenItStarted = new Date(2020, 4, 31, 1, 29)
        const now = new Date()
        const differenceInSeconds = (now - whenItStarted) / 1000
        const days = Math.floor(differenceInSeconds / (3600 * 24));

        // Делаем базовую авторизацию по клиент id и secret для повышения лимита на вызовы api (80 запросов в минуту)
        var headers = new Headers()
        const auth = this.client_id + ":" + this.client_secret
        headers.append("Authorization", "Basic " + btoa(auth));

        // парсим последний коммит
        fetch("https://api.github.com/repos/nayutalienx/camellia-ui/commits", {
            headers: headers
        })
            .then(res => res.json())
            .then(
                (result) => {
                    for (let commit of result) {
                        if (!commit.commit.message.toString().includes("Merge pull request")) {
                            message = commit.commit.message.toString()
                            date = commit.commit.author.date.toString()
                            let toParseDate = new Date(date)
                            date = toParseDate.toLocaleString().substring(0, 10)
                            author = commit.commit.author.name

                            // обновляем стейт с инфой о коммите
                            this.setState(prevState => {
                                return (
                                    {
                                        lastCommit: {
                                            message: message,
                                            author: author,
                                            date: date,
                                            imgUrl: prevState.lastCommit.imgUrl
                                        },
                                        sinceStart: {
                                            month: 0,
                                            day: days
                                        }
                                    }
                                )
                            })

                            // парсим аву коммитера
                            fetch("https://api.github.com/search/users?q=" + author, {
                                headers: headers
                            }).then(res => res.json())
                                .then(
                                    result => {
                                        let downloadedImgUrl = result.items[0].avatar_url

                                        this.setState(prevState => {
                                            return (
                                                {
                                                    ...prevState,
                                                    lastCommit: {
                                                        ...prevState.lastCommit,
                                                        imgUrl: downloadedImgUrl
                                                    }
                                                }
                                            )
                                        })
                                    }
                                )

                            break;
                        }
                    }
                }
            )


    }

    render() {

        const header = props => (
            <div>Блог разработки
                <sub>месяцев: {this.state.sinceStart.month} дней: {this.state.sinceStart.day}</sub>
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