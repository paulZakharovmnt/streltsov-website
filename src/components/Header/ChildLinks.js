import React from "react";
import { Link } from "react-router-dom";

const ChildLinks = ({ childLinks, showingParentLinkList, setShowMenu }) => {
  return (
    <div className="child-links-container">
      <div className="list-of-child-links">
        {childLinks[showingParentLinkList].map((childLink) => (
          <div key={childLink}>
            <Link
              to={`/products/${childLink}`}
              onClick={() => setShowMenu(false)}
              className="child-link"
            >
              {" "}
              {childLink}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChildLinks;
