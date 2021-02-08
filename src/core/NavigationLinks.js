import pen from "../img/headers/pen.jpg";
import pencil from "../img/headers/pencil.jpg";

export const linksWithOptions = ["Pens", "Jewelry", "Accessory"];
export const directLinks = ["gallery", "about"];
export const childLinks = {
  Pens: {
    sublinks: ["Pen", "Pencil"],
    pencil_image: pencil,
    pen_image: pen,
  },
  Jewelry: {
    sublinks: ["Pendants", "Bracelets"],
  },
  Accessory: {
    sublinks: ["Keychains", "Beads"],
  },
};
