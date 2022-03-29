import React from "react";
import NavigationSidebar from "../NavigationSideBar/navigation-sidebar";
import PostSummaryList from "../post-summary-list";
import PostList from "../PostList/PostList.js";
import "./home.css"

const HomeScreen = () => {
    return (
    <div class="row mt-2">
            <div class="col-lg-2 col-md-1 col-2">
                <NavigationSidebar active="home"/>
            </div>
            <div class="col-lg-6 col-md-11 col-10">
                <PostList/>
            </div>
            <div class="col-lg-4 d-none d-lg-block">
                <PostSummaryList/>
            </div>
    </div>
    );
};
export default HomeScreen;