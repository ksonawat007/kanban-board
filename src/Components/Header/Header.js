import React from 'react'
import "./Header.css"
import { Search } from '@material-ui/icons';

const Header = () => {
    return (
        <header className="MainContainer">
            <div className="LeftMenu">
                <button className="ButtonWrapper">
                    <img className="Icon" alt="" src="https://trello-replica.web.app/static/media/apps_white.2aa687f0.svg" />
                </button>
                <div className="MenuItem">
                    <p className="Logo"></p>
                </div>
                <div className="MenuItem">
                    <span>Workspaces</span>
                    <img
                        className="ArrowDown"
                        alt="Caret Down"
                        src="data:image/png;base64,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"
                    />
                </div>
                <div className="MenuItem">
                    <span>Recent</span>
                    <img
                        className="ArrowDown"
                        alt="Caret Down"
                        src="data:image/png;base64,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"
                    />
                </div>
                <div className="MenuItem">
                    <span>Starred</span>
                    <img
                        className="ArrowDown"
                        alt="Caret Down"
                        src="data:image/png;base64,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"
                    />
                </div>
                <div className="MenuItem">
                    <span>Templates</span>
                    <img
                        className="ArrowDown"
                        alt="Caret Down"
                        src="data:image/png;base64,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"
                    />
                </div>
                <button className="ButtonWrapper DarkButton">
                    <span className="Label">Create</span>
                </button>
            </div>
            <div className="RightMenu">
                <div className="SearchWrapper">

                    <input
                        className="SearchInput"
                        type="search"
                        placeholder="Search"
                    />
                    <span><Search /></span>
                </div>
                <button className="ButtonWrapper">
                    <img className="Icon" alt="" src="https://trello-replica.web.app/static/media/info.23e92631.png" />
                </button>
                <button className="ButtonWrapper">
                    <img className="Icon" alt="" src="https://trello-replica.web.app/static/media/notification.c7957132.png" />
                </button>
                <span className="DefaultAvatar">QK</span>
            </div>
        </header >
    )
}

export default Header