import React from "react";
import ChildLinks from "./ChildLinks";
import classNames from "classnames";
import NavArrow from "../Button/NavArrow";

const ParentLink = ({
  handleShowChildLinksClick,
  parentLink,
  showingParentLinkList,
  childLinks,
  setShowMenu,
}) => {
  const lineClasses = classNames("border-under-link", {
    openedLine: showingParentLinkList === parentLink,
  });
  const angleDownClasses = classNames("arrow-btn", "fas fa-angle-down", {
    angleClose: showingParentLinkList === parentLink,
  });

  const parentLinkClasses = classNames("parent-link", {
    openedParent: showingParentLinkList === parentLink,
  });
  return (
    <div className="parent-link-container">
      <div
        className={parentLinkClasses}
        onClick={() => handleShowChildLinksClick(parentLink)}
      >
        <p>{parentLink}</p>
        <i className={angleDownClasses} />
      </div>
      <span className={lineClasses}></span>

      {showingParentLinkList === parentLink && (
        <ChildLinks
          setShowMenu={setShowMenu}
          childLinks={childLinks}
          showingParentLinkList={showingParentLinkList}
        />
      )}
    </div>
  );
};

export default ParentLink;
