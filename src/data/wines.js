// Real wine data for all categories
export const WINE_LIST = [
  // --- RED WINES ---
  {
    id: 1,
    name: "Premium Shiraz",
    category: "red",
    shortDescription: "This deep, dark purple-red wine offers a refined medium to full-bodied expression with elegant aromas of ripe blackberries and plums.",
    features: [
      "Deep, dark purple-red wine, medium to full-bodied",
      "Elegant aromas of ripe blackberries and plums",
      "Soft, well-integrated tannins",
      "Warm and lingering finish with delicate spicy and peppery nuances"
    ],
    foodPairing: [
      "Roasted or grilled meats",
      "Pizza",
      "Seekh kebab",
      "Garlic mashed potatoes"
    ],
    abv: "12.1%",
    sizes: ["375ml", "750ml"],
    origin: "Rhône Valley (France); now widely grown in Australia, South Africa, and worldwide",
    price: "Ask for Price",
    image: "../img/bottle/r4.jpeg"
  },
  {
    id: 2,
    name: "Tempranillo The Class",
    category: "red",
    shortDescription: "Full-bodied, dry red wine with flavors of cherry, dried fig, cedar & tobacco.",
    features: [
      "Made from Tempranillo black grapes of Spain",
      "Full-bodied, dry red wine",
      "Flavor notes: cherry, dried fig, cedar & tobacco"
    ],
    foodPairing: [
      "Roasted meats",
      "Aged cheeses",
      "Tapas"
    ],
    sizes: ["375ml", "750ml"],
    origin: "Spain",
    price: "Ask for Price",
    image: "../img/bottle/r10.jpeg"
  },
  {
    id: 3,
    name: "Cabernet Sauvignon",
    category: "red",
    shortDescription: "Deep dark red, full-bodied with a velvety texture and complex aromas.",
    features: [
      "Deep dark red, full-bodied, velvety texture",
      "Complex aroma of black cherries with a hint of oak"
    ],
    foodPairing: [
      "Sandwiches, mushroom pizzas",
      "Burgers with blue cheese",
      "Pork, meatballs"
    ],
    sizes: ["375ml", "750ml"],
    origin: "Bordeaux (France), Rioja (Spain), Italy; now grown worldwide",
    price: "Ask for Price",
    image: "../img/bottle/r7.jpeg"
  },
  {
    id: 4,
    name: "Shiraz Cabernet",
    category: "red",
    shortDescription: "Full-bodied, well-structured, smooth mouthfeel with dark fruit notes.",
    features: [
      "Full-bodied, well-structured, smooth mouthfeel",
      "Flavour Notes: Deep dark red, spice, dark fruits, lingering finish"
    ],
    sizes: ["375ml", "750ml"],
    origin: "Bordeaux (France) – Cabernet; Rhône Valley (France) – Shiraz; now grown worldwide",
    price: "Ask for Price",
    image: "../img/bottle/r6.jpeg"
  },
  {
    id: 5,
    name: "Cab Shiraz",
    category: "red",
    shortDescription: "Medium to full-bodied with a balance of ripe tannins and rich flavor.",
    features: [
      "Medium to full-bodied with a balance of ripe tannins",
      "Flavour Notes: Deep cherry, soft red fruits, spice, rich flavour"
    ],
    sizes: ["375ml", "750ml"],
    origin: "Bordeaux (France) – Cabernet; Rhône Valley (France) – Shiraz; now grown worldwide",
    price: "Ask for Price",
    image: "../img/bottle/r8.jpeg"
  },
  {
    id: 6,
    name: "Puzzle (Barrique Wine)",
    category: "red",
    shortDescription: "Rare, multi-layered profile with gentle tannins and soft oak notes.",
    features: [
      "Rare, multi-layered profile with gentle tannins",
      "Flavour Notes: Deep dark red, soft oak, dark plum, violets"
    ],
    sizes: ["750ml"],
    origin: "Blend of Cabernet Sauvignon, Shiraz & Merlot",
    price: "Ask for Price",
    image: "../img/bottle/r5.jpeg"
  },
  {
    id: 12,
    name: "Malwi Port Wine",
    category: "red",
    shortDescription: "Semi-sweet red wine with a pomegranate flavor.",
    features: [
      "Semi-sweet red wine with a pomegranate (अनार) flavor",
      "Medium-bodied with a smooth and fruity finish"
    ],
    abv: "14.8%",
    sizes: ["375ml", "750ml"],
    price: "Ask for Price",
    // image: "../img/bottle/r5.jpeg"
  },
  {
    id: 14,
    name: "Nratya Red",
    category: "red",
    shortDescription: "Sweet wine with fruity cranberry flavour.",
    features: [
      "Sweet wine with fruity cranberry flavour",
      "Rich and aromatic"
    ],
    abv: "13.0%",
    sizes: ["375ml", "750ml"],
    price: "Ask for Price",
    image: "../img/bottle/r1.png"
  },
  {
    id: 16,
    name: "Apsara Classic",
    category: "red",
    shortDescription: "Reflects flavors of chocolate & toast.",
    features: [
      "Reflects flavors of chocolate & toast",
      "Rich dessert wine character"
    ],
    abv: "14.6%",
    sizes: ["375ml", "750ml"],
    price: "Ask for Price",
    image: "../img/bottle/r2.jpeg"
  },
  {
    id: 17,
    name: "Apsara Silver",
    category: "red",
    shortDescription: "Sweet in taste, light-bodied red blend.",
    features: [
      "Sweet in taste, light-bodied red blend",
      "Smooth finish"
    ],
    abv: "14.8%",
    sizes: ["375ml", "750ml"],
    price: "Ask for Price",
    // image: "../img/bottle/r3.jpeg"
  },
  {
    id: 18,
    name: "Apsara Gold",
    category: "red",
    shortDescription: "Reflects aftertaste of black cherry flavour.",
    features: [
      "Reflects aftertaste of black cherry flavour",
      "Premium fortified blend"
    ],
    abv: "14.4%",
    sizes: ["375ml", "750ml"],
    price: "Ask for Price",
    image: "../img/bottle/r3.jpeg"
  },
  {
    id: 19,
    name: "Apsara Premium",
    category: "red",
    shortDescription: "Sweet in taste with a mix of fruit flavours.",
    features: [
      "Sweet in taste with a mix of fruit flavours",
      "Complex and rich"
    ],
    abv: "14.8%",
    sizes: ["375ml", "750ml"],
    price: "Ask for Price",
    image: "../img/bottle/r9.jpeg"
  },

  // --- WHITE WINES ---
  {
    id: 7,
    name: "Premium Chenin Blanc",
    category: "white",
    shortDescription: "This light gold-hued wine exudes elegance, with delicate aromas of honey, pear, and melon.",
    features: [
      "Light gold-hued wine, exudes elegance",
      "Delicate aromas of honey, pear, and melon",
      "Refined and balanced palate highlighting freshness",
      "Subtle complexity"
    ],
    foodPairing: [
      "Vegetable dishes or salads",
      "Rich fish or cream-based chicken",
      "Seafood"
    ],
    sizes: ["375ml", "750ml"],
    origin: "Loire Valley (France); also found across South Africa, Australia, Argentina, United States, and New Zealand",
    price: "Ask for Price",
    image: "../img/bottle/w3.jpeg"
  },
  {
    id: 13,
    name: "Malwi White Wine",
    category: "white",
    shortDescription: "Smooth, refreshing, and easy to sip with guava and tropical fruit notes.",
    features: [
      "Tasting notes of guava and tropical fruits",
      "Smooth, refreshing, and easy to sip"
    ],
    abv: "14.8%",
    sizes: ["375ml", "750ml"],
    price: "Ask for Price",
    image: "../img/bottle/w2.jpeg"
  },
  {
    id: 15,
    name: "Nratya White",
    category: "white",
    shortDescription: "Sweet wine with fruity honey and straw flavour.",
    features: [
      "Sweet wine with fruity honey and straw flavour",
      "Light and sweet"
    ],
    abv: "12.6%",
    sizes: ["375ml", "750ml"],
    price: "Ask for Price",
    image: "../img/bottle/w4.png"
  },

  // --- ROSÉ WINES ---
  {
    id: 8,
    name: "Love Drink",
    category: "rose",
    shortDescription: "This light-bodied rosé displays a delicate pink hue and enticing floral aromas intertwined with fresh strawberries.",
    features: [
      "Crafted from Shiraz and Zinfandel grapes",
      "Delicate pink hue with enticing floral aromas",
      "Vibrant and fruity palate with layered berry flavors",
      "Expertly balanced between subtle sweetness and gentle dryness"
    ],
    foodPairing: [
      "Light salads",
      "Light pasta & rice dishes",
      "Grilled chicken",
      "Fish with herbs"
    ],
    sizes: ["375ml", "750ml"],
    origin: "South of France",
    price: "Ask for Price",
    image: "../img/bottle/ro2.jpeg"
  },

  // --- BEER (SPRITZERS) ---
  {
    id: 9,
    name: "45° Spritzer – Green Apple",
    category: "beer",
    shortDescription: "A crisp and refreshing spritzer, highlighting vibrant notes of green apple. Light and easy to enjoy.",
    features: [
      "Crisp and refreshing notes of green apple",
      "Light and easy to enjoy",
      "Perfect for casual sipping or lively gatherings"
    ],
    abv: "9.0%",
    sizes: ["330ml"],
    price: "Ask for Price",
    image: "../img/bottle/s1.jpeg"
  },
  {
    id: 10,
    name: "45° Spritzer – Cranberry",
    category: "beer",
    shortDescription: "Bursting with fruity flavors of cranberry, raspberry, and cherry, offering a playful and invigorating palate.",
    features: [
      "Bursting with fruity flavors of cranberry, raspberry, and cherry",
      "Playful and invigorating palate",
      "Balances lively fruitiness with a gentle warmth"
    ],
    abv: "14.2%",
    sizes: ["330ml"],
    price: "Ask for Price",
    image: "../img/bottle/s2.jpeg"
  },
  {
    id: 11,
    name: "45° Spritzer – Strawberry",
    category: "beer",
    shortDescription: "Refreshing and light, showcasing natural strawberry flavors in every sip.",
    features: [
      "Refreshing and light",
      "Showcases natural strawberry flavors",
      "Perfect companion for sunny afternoons or easy-going evenings"
    ],
    abv: "10.0%",
    sizes: ["330ml"],
    price: "Ask for Price",
    image: "../img/bottle/s3.jpeg"
  }
];

// Category metadata for hero sections
export const CATEGORY_INFO = {
  red: {
    title: "Red Wines",
    subtitle: "Robust & Earthy Selection",
    description: "Our red wine collection showcases the depth and complexity of carefully selected varietals, each expressing the unique character of our terroir through patient aging and traditional winemaking techniques.",
    heroImage: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVkJTIwd2luZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  white: {
    title: "White Wines",
    subtitle: "Crisp & Mineral Selection",
    description: "From bright, citrus-driven expressions to rich, barrel-fermented styles, our white wines capture the freshness and elegance of carefully tended vineyards.",
    heroImage: "https://plus.unsplash.com/premium_photo-1723741352223-312276e72b15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdoaXRlJTIwd2luZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  rose: {
    title: "Rosé Wines",
    subtitle: "Fresh & Floral Selection",
    description: "Delicate and refreshing, our rosé collection offers the perfect balance of fruit and acidity, crafted for moments of effortless elegance.",
    heroImage: "https://plus.unsplash.com/premium_photo-1686904396892-7f09ce385215?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cm9zZSUyMHdpbmV8ZW58MHx8MHx8fDA%3D"
  },
  beer: {
    title: "Spritzers & Beers",
    subtitle: "Fruity & Refreshing",
    description: "Vibrant and playful, our collection brings together fresh fruit flavors and sparkling zest for the perfect low-alcohol refreshment.",
    heroImage: "https://images.unsplash.com/photo-1652862730477-782a6dcb2385?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVlciUyMHdpbmV8ZW58MHx8MHx8fDA%3D"
  }
};
