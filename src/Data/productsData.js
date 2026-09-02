import blooms1 from "../Images/Flower Arrangment 5.jpeg";
import blooms2 from "../Images/peony.jfif";
import blooms3 from "../Images/wild flowers.jfif";
import blooms4 from "../Images/tablescape-2.jfif";
import blooms5 from "../Images/alter-1.jpeg";
import blooms6 from "../Images/aisle-1.jfif";
import blooms7 from "../Images/lapel-2.jpg";
import blooms8 from "../Images/ceiling installment-1.jfif";
import blooms9 from "../Images/floating flowers.jfif";
import bakes10 from "../Images/Buttercream Cake 3.jpg";
import bakes11 from "../Images/Hard Icing Cake 1.jpg";
import bakes12 from "../Images/Flower Cake 1.jpg";
import bakes13 from "../Images/pressed petals.webp";
import bakes14 from "../Images/painted-cake.jpg";
import bakes15 from "../Images/Piping cake.webp";
import bakes16 from "../Images/Piping Embossed Cake 1.jpg";
import bakes17 from "../Images/Vintage Cake 3.jpg";
import bakes18 from "../Images/Macaroon 1.jpg";
import bakes19 from "../Images/Cupcakes 3.jpg";
import bakes20 from "../Images/chocolate cupcakes.jpg";

// Bloom and cake products just use one of these two shared type lists below. A few products (Event Bunches, Tablescapes, Macaroons, cupcakes, etc.) need their own specific options, so those are written directly on the product instead of using these.
const bloomTypes = [
  "small bunch",
  "medium bunch",
  "large bunch",
  "Bridal bunch",
  "Groom lepal",
];

const cakeTypes = ["Mini Cake", "Occasion Cake", "Simple Cake", "Bridal Cake"];

// This is the product data that will be used in the products page. Each product has an id, name, description, price, image, and types (which can be a shared list or a specific list for that product).
export const productData = [
  {
    id: "p1",
    name: "Wild Flowers",
    description: "Whimsical and vibrant, fresh wild flowers.",
    price: 150.0,
    image: blooms1,
    types: bloomTypes,
  },
  {
    id: "p2",
    name: "Seasonal Bouquet",
    description: "flowers arrangement rose.",
    price: 180.0,
    image: blooms2,
    types: bloomTypes,
  },
  {
    id: "p3",
    name: "Event Bunches",
    description: "Elegant flowers for any occasion.",
    price: 300.0,
    image: blooms3,
    types: ["Small", "Medium", "Large"],
  },
  {
    id: "p4",
    name: "Tablescapes",
    description: "Elegant flowers for your special day.",
    price: 1500.0,
    image: blooms4,
    types: ["Small x 4", "Medium x 6", "Large x 12"],
  },
  {
    id: "p5",
    name: "Alter",
    description: "Elegant flowers for your special day.",
    price: 1600.0,
    image: blooms5,
    types: ["Small x 4", "Medium x 6", "Large x 12"],
  },
  {
    id: "p6",
    name: "Aisle",
    description: "Elegant flowers for your special day.",
    price: 1800.0,
    image: blooms6,
    types: ["Small x 8", "Medium x 16", "Large x 32"],
  },
  {
    id: "p7",
    name: "Lapel",
    description: "For the grooms special day.",
    price: 400.0,
    image: blooms7,
    types: ["Regular x 1"],
  },
  {
    id: "p8",
    name: "Ceiling Installment",
    description: "For the grooms special day.",
    price: 4000.0,
    image: blooms8,
    types: ["2.4m x 3.0m", "4.0m x 5.0m", "5.0m x 6.0m"],
  },
  {
    id: "p9",
    name: "Floating Flowers",
    description: "For the grooms special day.",
    price: 2300.0,
    image: blooms9,
    types: ["2.4m x 3.0m", "4.0m x 5.0m", "5.0m x 6.0m"],
  },

  {
    id: "p10",
    name: "Buttercream Cake",
    description: "Elegant orchids for any occasion.",
    price: 600.0,
    image: bakes10,
    types: cakeTypes,
  },
  {
    id: "p11",
    name: "Hard Icing Cake",
    description: "Elegant orchids for any occasion.",
    price: 900.0,
    image: bakes11,
    types: cakeTypes,
  },

  {
    id: "p12",
    name: "Chocolate Wall Cake",
    description: "Elegant orchids for any occasion.",
    price: 1100.0,
    image: bakes12,
    types: cakeTypes,
  },
  {
    id: "p13",
    name: "Pressed Petal Cake",
    description: "Elegant orchids for any occasion.",
    price: 850.0,
    image: bakes13,
    types: cakeTypes,
  },
  {
    id: "p14",
    name: "Hand Painted Cake",
    description: "Elegant orchids for any occasion.",
    price: 1300.0,
    image: bakes14,
    types: cakeTypes,
  },

  {
    id: "p15",
    name: "Piping Cake",
    description: "Elegant orchids for any occasion.",
    price: 1800.0,
    image: bakes15,
    types: cakeTypes,
  },
  {
    id: "p16",
    name: "Embossed Cake",
    description: "Elegant orchids for any occasion.",
    price: 1800.0,
    image: bakes16,
    types: cakeTypes,
  },
  {
    id: "p17",
    name: "Vintage Cake",
    description: "Elegant orchids for any occasion.",
    price: 2000.0,
    image: bakes17,
    types: cakeTypes,
  },
  {
    id: "p18",
    name: "Macaroons",
    description: "Elegant orchids for any occasion.",
    price: 320.0,
    image: bakes18,
    types: ["Pistachio", "Cheesecake", "Red Velvet", "Raspberry", "Tiramisu"],
  },
  {
    id: "p19",
    name: "Fruit Cupcakes",
    description: "Elegant orchids for any occasion.",
    price: 360.0,
    image: bakes19,
    types: ["Raspberry", "Blueberry", "Granadilla", "Cherry"],
  },
  {
    id: "p20",
    name: "Chocolate Cupcakes",
    description: "Elegant orchids for any occasion.",
    price: 360.0,
    image: bakes20,
    types: ["Dark Chocolate", "White Chocolate", "Plain Chocolate"],
  },
];
