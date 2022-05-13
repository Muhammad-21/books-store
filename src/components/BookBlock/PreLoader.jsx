import React from "react";
import ContentLoader from "react-content-loader";

const PreLoader = (props) => (
  <ContentLoader
    className="book-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#e8e8e8"
    foregroundColor="#ffffff"
    {...props}
  >
    <circle cx="130" cy="130" r="130" />
    <rect x="0" y="270" rx="6" ry="6" width="280" height="25" />
    <rect x="0" y="310" rx="6" ry="6" width="280" height="84" />
    <rect x="1" y="419" rx="6" ry="6" width="90" height="30" />
    <rect x="129" y="408" rx="20" ry="20" width="145" height="45" />
  </ContentLoader>
)

export default PreLoader;
