import pen from "../../../img/headers/pen.jpg";
import pencil from "../../../img/headers/pencil.jpg";
import pendants from "../../../img/headers/pendants.jpg";
import bracelets from "../../../img/headers/bracelets.jpg";
import keychains from "../../../img/headers/keychains.jpg";
import beads from "../../../img/headers/beads.jpg";

const initialSettings = {
  settingAllIds: [
    "name",
    "description",
    "price",
    "inStock",
    "featured",
    "productType",
    "material",
    "penType",
    "collection",
  ],
  settingsById: {
    name: {
      name: "Product Name",
      type: "input",
      inputType: "text",
    },
    description: {
      name: "Product Description",
      type: "textarea",
      inputType: null,
    },
    price: {
      name: "Product Price",
      type: "input",
      inputType: "number",
    },
    inStock: {
      name: "product in Stock?",
      type: "input",
      inputType: "checkbox",
    },
    featured: {
      name: "featured item?",
      type: "input",
      inputType: "checkbox",
    },
    productType: {
      name: "Product Type",
      type: "select",
      inputType: null,
      allIds: ["Pen", "Pencil", "Pendants", "Bracelets", "Keychains", "Beads"],
      byId: {
        Pen: {
          category: "Pen & Pencil",
          name: "Pen",
          image: pen,
        },
        Pencil: {
          category: "Pen & Pencil",
          name: "Pencil",
          image: pencil,
        },
        Pendants: {
          category: "Jewelry",
          name: "Pendants",
          image: pendants,
        },
        Bracelets: {
          category: "Jewelry",
          name: "Bracelets",
          image: bracelets,
        },
        Keychains: {
          category: "Accessory",
          name: "Keychains",
          image: keychains,
        },
        Beads: {
          category: "Accessory",
          name: "Beads",
          image: beads,
        },
      },
    },
    material: {
      name: "Material",
      type: "select",
      inputType: null,
      allIds: ["Titanium", "Aluminium"],
      byId: {
        Titanium: {
          name: "Titanium",
          description: "titanuim material",
        },
        Aluminium: {
          name: "Aluminium",
          description: "Aluminium material",
        },
      },
    },
    penType: {
      name: "Pen Type",
      type: "select",
      inputType: null,
      allIds: ["Ballpoint", "Fountain"],
      byId: {
        Ballpoint: {
          name: "Ballpoint",
          description: "Ballpoint pen",
        },
        Fountain: {
          name: "Fountain",
          description: "Fountain pen",
        },
      },
    },
    collection: {
      name: "Collection",
      type: "select",
      inputType: null,
      allIds: ["Dragon&Moon", "Klimt duet", "Ninja", "Samurai"],
      byId: {
        "Dragon&Moon": {
          name: "Dragon&Moon",
        },
        "Klimt duet": {
          name: "Klimt duet",
        },
        Ninja: {
          name: "Ninja",
        },
        Samurai: {
          name: "Samurai",
        },
      },
    },
  },
};

const settingsReducer = (state = initialSettings, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TYPE":
      const selectedFeatureToChange = action.payload.selectedFeature;
      const featureNewInfo = action.payload.featureInfo;
      return {
        ...state,
        settingsById: {
          ...state.settingsById,
          [selectedFeatureToChange]: {
            ...state.settingsById[selectedFeatureToChange],
            allIds: [
              ...state.settingsById[selectedFeatureToChange].allIds,
              featureNewInfo.name,
            ],
            byId: {
              ...state.settingsById[selectedFeatureToChange].byId,
              [featureNewInfo.name]: featureNewInfo,
            },
          },
        },
      };
    case "DELETE_FEATURE_OPTION":
      const featureToChange = action.payload.selectedFeature;
      const optionToDelete = action.payload.optionToDelete;
      return {
        ...state,
        settingsById: {
          ...state.settingsById,
          [featureToChange]: {
            ...state.settingsById[featureToChange],
            allIds: [
              ...state.settingsById[featureToChange].allIds.filter(
                (featureOption) => featureOption !== optionToDelete
              ),
            ],
          },
        },
      };
    default:
      return state;
  }
};

export default settingsReducer;
