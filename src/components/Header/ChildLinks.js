import React from "react";

const ChildLinks = ({ childLinks, showingParentLinkList }) => {
  return (
    <div className="child-links-container">
      <div className="list-of-child-links">
        {childLinks[showingParentLinkList].map((childLink) => (
          <div className="child-link" key={childLink}>
            {childLink}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChildLinks;
