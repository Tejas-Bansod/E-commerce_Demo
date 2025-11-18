import { Product } from '../types/Product';
import product1 from '../images/product/powder.png';
import product2 from '../images/product/alfalfa powder.png';
import product3 from '../images/product/tablets.png';
import product4 from  '../images/product/capsules.png';
import product5 from  '../images/product/barleys grass.png';
import product6 from  '../images/product/Moringa.png';
import product7 from  '../images/product/MoringaC.png';
import product8 from  '../images/product/MoringaT.png';


export const products: Product[] = [
  {
    id: 1,
    name: "Spirulina Powder",
    description: "Experience the purest form of plant-based nutrition with Eseentia Organic Spirulina Powder cultivated under controlled conditions using fresh mineral-rich water and sunlight, ensuring maximum potency and safety. Our spirulina is 100% natural, vegan, and free from additives,pesticides, or heavy metals.",
    price: 449,
    compareAtPrice: 599,
    rating: 4.8,
    reviewCount: 124,
    images: [
      product1,
     
    ],
    category: "powder",
    tags: ["organic", "superfood", "vegan", "gluten-free"],
    sizes: [
      { size: "100g", price: 599, sellingPrice: 449 },
      { size: "250g", price: 899, sellingPrice: 749 },
      { size: "500g", price: 1799, sellingPrice: 1699 }
    ],
    features: [
      "Boosts energy & reduces fatigue",
      "Strengthens immunity & ghts oxidative stress",
      "Detoxi es liver and supports gut health",
      "Enhances muscle recovery and stamina",
      "Supports healthy skin, hair, and metabolism"
    ],
    ingredients: ["100% Organic Spirulina (Arthrospira platensis)"],
    nutritionalInfo: {
      "Protein": { amount: "65g", dailyValue: "130%" },
      "Iron": { amount: "28mg", dailyValue: "156%" },
      "Vitamin B12": { amount: "200μg", dailyValue: "8333%" },
      "Calcium": { amount: "120mg", dailyValue: "12%" }
    },
    stock: 50,
    sku: "SPI-PWD-100",
    isOrganic: true,
    isBestSeller: true
  },
  {
    id: 2,
    name: "Spirulina Tablets",
    description: "Simplify your superfood routine with Eseentia Organic Spirulina Tablets a clean, compact,and potent source of plant-based nutrition. Made from 100% pure spirulina, cold-compressed into tablets without any binders, additives, or preservatives. Just one product — one purpose: total body nourishment",
    price: 449,
    compareAtPrice: 599,
    rating: 4.6,
    reviewCount: 86,
    images: [
      product3,
    ],
    category: "tablets",
    tags: ["tablets", "superfood", "vegan", "gluten-free"],
    sizes: [
      { size: "60 tablets", price: 59, sellingPrice: 449 },
      { size: "120 tablets", price: 849, sellingPrice: 749 },
      { size: "240 tablets", price: 1799, sellingPrice: 1599 }
    ],
    features: [
      "Builds immunity & natural defense",
      "Increases energy, stamina & performance",
      "Promotes detoxi cation & gut cleansing",
      "Supports glowing skin & healthy hair",
      "Enhances focus & ghts fatigue"
    ],
    ingredients: ["100% Spirulina (Arthrospira platensis)"],
    nutritionalInfo: {
      "Protein": { amount: "60g", dailyValue: "120%" },
      "Iron": { amount: "25mg", dailyValue: "139%" },
      "Vitamin B12": { amount: "180μg", dailyValue: "7500%" },
      "Calcium": { amount: "100mg", dailyValue: "10%" }
    },
    stock: 120,
    sku: "SPI-TAB-100"
  },
  {
    id: 3,
    name: "Premium Spirulina Capsules",
    description: "Get your daily dose of complete nutrition in the most convenient form with Eseentia Organic Spirulina Capsules made from 100% pure, sun-dried spirulina powder, packed into easy-to swallow vegetarian capsules. No binders, llers, or additives — just clean, green, and powerful nutrition.",
    price: 449,
    compareAtPrice: 599,
    rating: 4.8,
    reviewCount: 124,
    images: [
      product4,
    ],
    category: "capsules",
    tags: ["capsules", "superfood", "vegan", "gluten-free"],
    sizes: [
      { size: "60 capsules", price: 549, sellingPrice: 449 },
      { size: "120 capsules", price: 849, sellingPrice: 749 },
      { size: "240 capsules", price: 1799, sellingPrice: 1599 }
    ],
    features: [
      "Enhances immunity and cellular health",
      "Increases energy, focus, and stamina",
      "Supports detox, gut health & metabolism",
      "Ideal for tness, wellness, and vegan lifestyles",
      "Helps maintain healthy skin, hair & nails"
    ],
    ingredients: ["Spirulina (Arthrospira platensis)", "Vegetable Cellulose (capsule)"],
    nutritionalInfo: {
      "Protein": { amount: "70g", dailyValue: "140%" },
      "Iron": { amount: "30mg", dailyValue: "167%" },
      "Vitamin B12": { amount: "220μg", dailyValue: "9167%" },
      "Calcium": { amount: "125mg", dailyValue: "13%" }
    },
    stock: 75,
    sku: "SPI-CAP-060",
    isNew: true
  },
  {
    id: 4,
    name: "Alfalfa Leaves Powder",
    description: "Revitalize your health with Eseentia Organic Alfalfa Powder, one of nature’s most mineral dense greens. Carefully harvested from young, tender alfalfa leaves, our powder is shade-dried and nely ground to preserve its raw vitality and bioactive nutrients.",
    price: 349,
    compareAtPrice: 499,
    rating: 4.8,
    reviewCount: 124,
    images: [
        product2,
    ],
    category: "blends",
    tags: ["blend", "smoothie", "organic", "vegan", "gluten-free"],
    sizes: [
      { size: "100g", price: 499, sellingPrice: 349 },
      { size: "250g", price: 599, sellingPrice: 449 },
      { size: "500g", price: 1199, sellingPrice: 1049 }
    ],
    features: [
      "Deep detoxi cation & internal cleansing",
      "Supports liver health & digestion",
      "Boosts immunity & oxygenates blood",
      "Alkalizes the body & balances pH levels",
      "Aids in hormonal balance and bone strength"
    ],
    ingredients: [
      "Organic Spirulina (Arthrospira platensis)",
      "Organic Acai Powder",
      "Organic Blueberry Powder",
      "Organic Maca Root",
      "Organic Monk Fruit Extract"
    ],
    nutritionalInfo: {
      "Protein": { amount: "40g", dailyValue: "80%" },
      "Iron": { amount: "20mg", dailyValue: "111%" },
      "Vitamin B12": { amount: "150μg", dailyValue: "6250%" },
      "Calcium": { amount: "90mg", dailyValue: "9%" },
      "Antioxidants": { amount: "High", dailyValue: "-" }
    },
    stock: 30,
    sku: "SPI-BLN-200",
    isNew: true,
    isOrganic: true
  },
  {
    id: 5,
    name: "Spirulina Tablets",
    description: "Simplify your superfood routine with Eseentia Organic Spirulina Tablets a clean, compact,and potent source of plant-based nutrition. Made from 100% pure spirulina, cold-compressed into tablets without any binders, additives, or preservatives. Just one product — one purpose total body nourishment",
    price: 449,
    compareAtPrice: 599,
    rating: 4.8,
    reviewCount: 124,
    images: [
      product3,
    ],
    category: "specialty",
    tags: ["beauty", "superfood", "vegan", "gluten-free"],
    sizes: [
      { size: "60 capsules", price: 599, sellingPrice: 449 },
      { size: "120 capsules", price: 899, sellingPrice: 749 }
    ],
    features: [
      "Builds immunity & natural defense",
      "Bioavailable Iron, Vitamin B12, and Chlorophyll",
      "Promotes detoxi cation & gut cleansing",
      "Supports glowing skin & healthy hair",
      "Enhances focus & ghts fatigue"
    ],
    ingredients: [
      "Spirulina (Arthrospira platensis)",
      "Biotin",
      "Vitamin C",
      "Bamboo Extract (silica)",
      "Hyaluronic Acid",
      "Vegetable Cellulose (capsule)"
    ],
    nutritionalInfo: {
      "Protein": { amount: "25g", dailyValue: "50%" },
      "Biotin": { amount: "5000μg", dailyValue: "16667%" },
      "Vitamin C": { amount: "80mg", dailyValue: "89%" },
      "Silica": { amount: "40mg", dailyValue: "-" }
    },
    stock: 45,
    sku: "SPI-BTY-060"
  },
  {
    id: 6,
    name: "Barleys Grass Powder",
    description: "Fuel your body with the natural power of **Eseentia Organic Barley Grass Powder harvested at the peak of freshness from organic barley elds and carefully processed to retain its vibrant nutrients and potent antioxidants. Known as a nutrient-dense supergreen, barley grass supports your overall wellness with a rich pro le of vitamins, minerals, and chlorophyll.",
    price: 349,
    compareAtPrice: 499,
    rating: 4.8,
    reviewCount: 124,
    images: [
      product5,
    ],
    category: "powder",
    tags: ["premium", "hawaiian", "organic", "vegan", "gluten-free"],
    sizes: [
      { size: "100g", price: 499, sellingPrice: 349 },
      { size: "250g", price: 799, sellingPrice: 649 },
      { size: "500g", price: 1299, sellingPrice: 1149 }
    ],
    features: [
      "Supports natural detoxi cation & liver health",
      "Enhances immunity & combats oxidative stress",
      "Boosts energy, endurance & mental clarity",
      "Helps maintain healthy digestion & alkalinity",
      "Promotes healthy skin, hair & cellular repair"
    ],
    ingredients: ["100% Organic Hawaiian Spirulina (Arthrospira platensis)"],
    nutritionalInfo: {
      "Protein": { amount: "70g", dailyValue: "140%" },
      "Iron": { amount: "32mg", dailyValue: "178%" },
      "Vitamin B12": { amount: "230μg", dailyValue: "9583%" },
      "Calcium": { amount: "130mg", dailyValue: "13%" },
      "Phycocyanin": { amount: "18%", dailyValue: "-" }
    },
    stock: 25,
    sku: "SPI-HWN-100",
    isOrganic: true,
    isBestSeller: true
  },
  {
    id: 7,
    name: "Moringa Powder",
    description: "Tap into the ancient wisdom of Ayurveda with Eseentia Organic Moringa Powder known as the “Miracle Tree” for a reason. Our moringa is organically grown, shade-dried, and nely milled to preserve its maximum nutrient potency and vibrant green color.",
    price: 449,
    compareAtPrice: 599,
    rating: 4.8,
    reviewCount: 124,
    images: [
      product6,
    ],
    category: "powder",
    tags: ["organic", "vegan", "gluten-free", "premium"],
    sizes: [
      { size: "100g", price: 599, sellingPrice: 449 },
      { size: "250g", price: 899, sellingPrice: 749 },
      { size: "500g", price: 1799, sellingPrice: 1599 }
    ],
    features: [
      "Strengthens immunity & ghts in ammation",
      "Boosts energy levels naturally (without ca eine)",
      "Balances blood sugar & supports metabolism",
      "Improves digestion & detoxi es the liver",
      "Promotes radiant skin & hormonal balance"
    ],
    ingredients: ["100% Organic Moringa Oleifera Leaf Powder"],
    nutritionalInfo: {
      "Protein": { amount: "27g", dailyValue: "54%" },
      "Iron": { amount: "28mg", dailyValue: "156%" },
      "Calcium": { amount: "2000mg", dailyValue: "200%" },
      "Vitamin A": { amount: "18.9mg", dailyValue: "2100%" }
    },
    stock: 45,
    sku: "MOR-PWD-100",
    isOrganic: true
  },
  {
    id: 8,
    name: "Moringa Capsules",
    description: "Discover clean, powerful nutrition in its purest form with Eseentia Organic Moringa Capsules.Made from 100% organically grown moringa leaves — carefully shade-dried and nely powdered— these capsules deliver a complete spectrum of essential nutrients in a convenient, tasteless form.",
    price: 699,
    compareAtPrice:899,
    rating: 4.6,
    reviewCount: 67,
    images: [
      product7,
    ],
    category: "capsules",
    tags: ["organic", "vegan", "gluten-free"],
    sizes: [
      { size: "60 capsules", price: 599, sellingPrice: 449 },
      { size: "120 capsules", price: 899, sellingPrice: 749 },
      { size: "240 capsules", price: 1799, sellingPrice: 1599 }
    ],
    features: [
      "Boosts immunity and ghts fatigue",
      "Supports hormonal balance and digestion",
      "Enhances skin glow and cellular repair",
      "Balances blood sugar & reduces in ammation",
      "Ideal for daily detox and nutrient replenishment"
    ],
    ingredients: ["Organic Moringa Oleifera Leaf Powder", "Vegetable Cellulose (capsule)"],
    nutritionalInfo: {
      "Protein": { amount: "25g", dailyValue: "50%" },
      "Iron": { amount: "25mg", dailyValue: "139%" },
      "Calcium": { amount: "1800mg", dailyValue: "180%" },
      "Vitamin A": { amount: "17mg", dailyValue: "1889%" }
    },
    stock: 85,
    sku: "MOR-CAP-060",
    isNew: true
  },
  {
    id: 9,
    name: "Moringa Tablets",
    description: "Compressed moringa tablets for those who prefer a tablet form. Each tablet contains pure moringa leaf powder for optimal nutrition.",
    price: 749,
    compareAtPrice: 899,
    rating: 4.5,
    reviewCount: 52,
    images: [
      product8,
    ],
    category: "tablets",
    tags: ["organic", "vegan", "gluten-free"],
    sizes: [
      { size: "100 tablets", price: 899, sellingPrice: 749 },
      { size: "200 tablets", price: 1799, sellingPrice: 1599 },
      { size: "400 tablets", price: 2799, sellingPrice: 2599 }
    ],
    features: [
      "400mg moringa per tablet",
      "No artificial binders",
      "Easy to take",
      "Long shelf life",
      "Pure and natural"
    ],
    ingredients: ["Organic Moringa Oleifera Leaf Powder"],
    nutritionalInfo: {
      "Protein": { amount: "24g", dailyValue: "48%" },
      "Iron": { amount: "24mg", dailyValue: "133%" },
      "Calcium": { amount: "1750mg", dailyValue: "175%" },
      "Vitamin A": { amount: "16mg", dailyValue: "1778%" }
    },
    stock: 65,
    sku: "MOR-TAB-100"
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (product: Product, limit: number = 3): Product[] => {
  return products
    .filter(p => p.id !== product.id && (p.category === product.category || p.tags.some(tag => product.tags.includes(tag))))
    .slice(0, limit);
};

export const getFilteredProducts = (
  categoryFilter?: string,
  search?: string,
  tagFilters: string[] = []
): Product[] => {
  return products.filter(product => {
    // Category filter
    if (categoryFilter && product.category !== categoryFilter) {
      return false;
    }
    
    // Search filter
    if (search) {
      const searchLower = search.toLowerCase();
      const nameMatch = product.name.toLowerCase().includes(searchLower);
      const descMatch = product.description.toLowerCase().includes(searchLower);
      if (!nameMatch && !descMatch) {
        return false;
      }
    }
    
    // Tag filters
    if (tagFilters.length > 0) {
      const hasAllTags = tagFilters.every(tag => product.tags.includes(tag));
      if (!hasAllTags) {
        return false;
      }
    }
    
    return true;
  });
};