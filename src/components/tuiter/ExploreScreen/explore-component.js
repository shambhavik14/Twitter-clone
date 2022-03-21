import React from "react";
import PostSummaryList from "../post-summary-list";

const ExploreComponent = () => {
    return(
    <>
            <span className="wd-search-glass"><i className="fa fa-search"></i></span>
            <div className="input-group">
          <input type="search" className="form-control rounded-pill" placeholder="Search Twitter" aria-label="Search"
            aria-described="search-addon" />
            <i className="fa fa-cog fa-2x"></i>
        </div>

      <ul className="nav nav-tabs">
          <li className="nav-item">
              <a className="nav-link active" href="#"><span className="wd-nav-text-selected">For you</span></a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#"><span className="wd-nav-text">Trending</span></a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#"><span className="wd-nav-text">News</span></a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#"><span className="wd-nav-text">Sports</span></a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#"><span className="wd-nav-text-vanish">Entertainment</span></a>
          </li>
      </ul>
                  <div className="wd-head-image">
                    <img src="/images/starship.jpg" className="wd-topic-heading-image"/>
                  <div className="wd-img-text">SpaceX Starship</div>
                  </div>
           {PostSummaryList()}
    </>
    );
}
export default ExploreComponent;
