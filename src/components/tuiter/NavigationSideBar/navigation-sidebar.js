import React from "react";
import {Link} from "react-router-dom";
const NavigationSidebar = ({active = 'explore'}) => {
        return(
        <>
            <nav className="wd-first-column">
                    <a href="#" className="list-group-item list-group-item-action">
                    <i className="fab fa-twitter"></i>
                    </a>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                        <Link to = "/tuiter/home"
                              className={`list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}`}
                              aria-current="true">
                              <i className="fa fa-home"></i>
                               <span className="wd-menu-text">  Home</span>
                        </Link></li>
                        <li className="nav-item">
                        <Link to = "/tuiter/explore"
                            className={`list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}`}>
                            <i className="fa fa-hashtag"></i>
                            <span className="wd-menu-text">Explore</span>
                        </Link></li>
                        <li className="nav-item">
                        <Link to = ""
                            className="list-group-item list-group-item-action">
                            <i className="fa fa-bell"></i>
                            <span className="wd-menu-text">Notifications</span>
                        </Link></li>
                        <li className="nav-item">
                        <Link to = ""
                             className="list-group-item list-group-item-action">
                            <i className="fa fa-envelope"></i>
                            <span className="wd-menu-text">Messages</span>
                        </Link></li>
                        <li className="nav-item">
                        <Link to = ""
                            className="list-group-item list-group-item-action">
                            <i className="fa fa-bookmark"></i>
                            <span className="wd-menu-text">Bookmarks</span>
                        </Link></li>
                        <li className="nav-item">
                        <Link to = ""
                            className="list-group-item list-group-item-action">
                            <i className="fa fa-list"></i>
                            <span className="wd-menu-text">Lists</span>
                        </Link></li>
                        <li className="nav-item">
                        <Link to = ""
                            className="list-group-item list-group-item-action">
                            <i className="fa fa-user"></i>
                            <span className="wd-menu-text">Profile</span>
                        </Link></li>
                        <li className="nav-item">
                        <Link to = ""
                            className="list-group-item list-group-item-action">
                            <i className="fa fa-ellipsis-h"></i>
                            <span className="wd-menu-text">More</span>
                        </Link></li>
                    </ul>
                    </nav>
                    <button className="btn btn-primary btn-sm tweetBtn" type="button">
                        Tweet
                    </button>

        </>
    );
}
export default NavigationSidebar;
