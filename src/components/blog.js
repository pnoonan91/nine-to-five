import React from "react";

import BlogEntries from "./blog-entries/BlogEntries.js";
import BlogImageComponent from "./blog-image/BlogImage.js";
import BlogCaptionComponent from "./blog-caption/BlogCaption.js";
import LandingSubscriptionComponent from "./landing-subscription/LandingSubscription.js";

const Blog = props => (
  <div>
    <BlogImageComponent />
    <BlogCaptionComponent />
    <BlogEntries />
    <LandingSubscriptionComponent
      onModalClick={props.onModalClick}
      isCompanyPath={window.location.pathname.indexOf("hire") > -1}
    />
  </div>
);

export default Blog;
