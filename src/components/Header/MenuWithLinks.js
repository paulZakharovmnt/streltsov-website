import React, { useState } from "react";
import ParentLink from "./ParentLink";
import {
  linksWithOptions,
  directLinks,
  childLinks,
} from "../../core/NavigationLinks";
import "./MenuWithLinks.css";

const MenuWithLinks = () => {
  const [showingParentLinkList, setShowingParentLinkList] = useState("");
  const [showChildLinks, setshowChildLinks] = useState(false);

  const handleShowChildLinksClick = (parentLink) => {
    if (parentLink === showingParentLinkList) {
      setShowingParentLinkList("");
      return;
    }
    setShowingParentLinkList(parentLink);
  };
  return (
    <div className="black-cover">
      <div className="parrent-list-of-links">
        <div className="list-of-links">
          {linksWithOptions.map((parentLink) => (
            <ParentLink
              key={parentLink}
              parentLink={parentLink}
              childLinks={childLinks}
              showingParentLinkList={showingParentLinkList}
              handleShowChildLinksClick={handleShowChildLinksClick}
            />
          ))}

          {directLinks.map((directLink) => (
            <div className="parent-link-container">
              <div className="parent-link" key={directLink}>
                {directLink}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuWithLinks;
