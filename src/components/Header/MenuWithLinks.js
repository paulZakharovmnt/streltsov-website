import React, { useState } from "react";
import NavBarOptions from "./NavBarOptions";
import ParentLink from "./ParentLink";
import "./MenuWithLinks.css";

const MenuWithLinks = () => {
  const linksWithOptions = ["Pen", "Jewelry", "Accessory"];
  const directLinks = ["Gallery", "About"];
  const childLinks = {
    Pen: ["BallPoint Pens", "Fountain Pens", "Pencils", "Limited Edition"],
    Jewelry: ["Pendants"],
    Accessory: [
      "Bracelets",
      "Lighters",
      "Cufflinks",
      "Keychains",
      "Beads",
      "Dices",
      "MadRussianheads.com",
    ],
  };
  const [showingParentLinkList, setShowingParentLinkList] = useState("");
  const [showChildLinks, setshowChildLinks] = useState(false);

  const handleShowChildLinksClick = (parentLink) => {
    if (parentLink === showingParentLinkList) {
      console.log("why not working?");
      setShowingParentLinkList("");
      return;
    }
    setShowingParentLinkList(parentLink);
    console.log(parentLink);
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
          {/* {linksWithOptions.map((option) => (
            <NavBarOptions
              key={option}
              option={option}
              childLinks={childLinks}
            />
          ))}
          {directLinks.map((link) => (
            <div className="menu-option" key={link}>
              {link}
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default MenuWithLinks;
