import pen from "../img/headers/pen.jpg";
import pencil from "../img/headers/pencil.jpg";

export const linksWithOptions = ["Pens", "Jewelry", "Accessory"];
export const directLinks = ["Gallery", "About"];
export const childLinks = {
  Pens: {
    sublinks: ["Pen", "Pencil"],
    linksData: {
      Pen: {
        name: "Pen",
        image: pen,
      },
      Pencil: {
        name: "Pencil",
        image: pencil,
      },
    },
  },
  Jewelry: {
    sublinks: ["Pendants", "Bracelets"],
    linksData: {
      Pendants: {
        name: "Pendants",
        image: pen,
      },
      Bracelets: {
        name: "Bracelets",
        image: pencil,
      },
    },
  },
  Accessory: {
    sublinks: ["Keychains", "Beads"],
    linksData: {
      Keychains: {
        name: "Keychains",
        image: pen,
      },
      Beads: {
        name: "Beads",
        image: pencil,
      },
    },
  },
};
