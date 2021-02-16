import pen from "../img/headers/pen.jpg";
import pencil from "../img/headers/pencil.jpg";
import pendants from "../img/headers/pendants.jpg";
import bracelets from "../img/headers/bracelets.jpg";
import keychains from "../img/headers/keychains.jpg";
import beads from "../img/headers/beads.jpg";

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
        image: pendants,
      },
      Bracelets: {
        name: "Bracelets",
        image: bracelets,
      },
    },
  },
  Accessory: {
    sublinks: ["Keychains", "Beads"],
    linksData: {
      Keychains: {
        name: "Keychains",
        image: keychains,
      },
      Beads: {
        name: "Beads",
        image: beads,
      },
    },
  },
};
