import * as React from "react";
import './DevelopBlog.css'
import Bookmark from "../../../common/Bookmark";
import userPic from "../../../../user.jpg"

class DevelopBlog extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {

        const header = props => (
            <div>Блог разработки
                <sub>месяцев: 0 дней: 7</sub>
            </div>
        )

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
                                Переделал букмарк, реализовал адаптивный хидер
                            </div>

                            <div className="develop-blog-content-changes-author">
                                <img src={userPic} id="develop-blog-content-changes-author-ava"/>
                                <div>
                                    nayutalienx commited 15 hours ago
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