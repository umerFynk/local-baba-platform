export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  pricePerPc: number;
  marketRate: number;
  moq: number;
  stock: number;
  status: "active" | "draft" | "sold_out";
  tags: ("new" | "hot" | "featured" | "low_stock")[];
  variants: { type: string; options: string[]; stock?: Record<string, number> }[];
  images: string[];
  description: string;
  specs: { label: string; value: string }[];
  sellerTips: string[];
}

export interface Order {
  id: string;
  memberId: string;
  items: { productId: string; name: string; qty: number; pricePerPc: number; image: string }[];
  total: number;
  paymentMethod: "bank_transfer" | "easypaisa" | "cod";
  paymentStatus: "pending" | "confirmed" | "failed";
  orderStatus: "processing" | "dispatched" | "delivered" | "cancelled";
  courier?: string;
  trackingNumber?: string;
  createdAt: string;
  deliveryAddress: string;
  city: string;
  timeline: { step: string; timestamp?: string; status: "completed" | "active" | "pending" }[];
}

export interface Member {
  id: string;
  name: string;
  city: string;
  whatsapp: string;
  joinedDate: string;
  totalOrders: number;
  totalSpent: number;
  savedVsMarket: number;
  status: "active" | "suspended";
  avatar?: string;
}

export interface Application {
  id: string;
  name: string;
  whatsapp: string;
  city: string;
  businessName: string;
  sellsWhat: string[];
  sellsWhere: string[];
  monthlyVolume: string;
  heardFrom: string;
  appliedAt: string;
  status: "pending" | "approved" | "rejected";
}

export const categories = [
  "All",
  "New this week",
  "Trending",
  "Fashion",
  "Electronics",
  "Home",
  "Beauty",
  "Kids",
];

export const cities = [
  "Lahore",
  "Karachi",
  "Islamabad",
  "Faisalabad",
  "Rawalpindi",
  "Multan",
  "Peshawar",
  "Quetta",
  "Other",
];

const productImages = [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
];

export const products: Product[] = [
  {
    id: "p1", slug: "premium-phone-case-tpu", name: "Premium TPU Phone Case (iPhone 15 Series)", category: "Electronics",
    pricePerPc: 180, marketRate: 280, moq: 30, stock: 450, status: "active", tags: ["hot"],
    variants: [
      { type: "Model", options: ["iPhone 15", "iPhone 15 Pro", "iPhone 15 Pro Max"] },
      { type: "Color", options: ["Black", "Clear", "Navy"] },
    ],
    images: productImages,
    description: "High-quality TPU phone case with anti-yellowing technology. Slim fit, raised edges for camera protection. Best-selling case among Instagram resellers.",
    specs: [{ label: "Material", value: "Premium TPU" }, { label: "Weight", value: "28g" }, { label: "Compatibility", value: "iPhone 15 Series" }],
    sellerTips: ["Strong seller on Instagram with lifestyle flat-lay photos", "Bundles well with screen protectors — increases cart value", "Typical resale price: Rs 450–550 — ~150% margin"],
  },
  {
    id: "p2", slug: "ladies-embroidered-kurta-lawn", name: "Ladies Embroidered Lawn Kurta (Unstitched)", category: "Fashion",
    pricePerPc: 520, marketRate: 780, moq: 30, stock: 200, status: "active", tags: ["new", "hot"],
    variants: [
      { type: "Design", options: ["Floral Blue", "Classic White", "Maroon Print"] },
    ],
    images: productImages,
    description: "Premium lawn fabric with intricate embroidery on front and sleeves. 2.5 meter kameez piece. Trending design for summer 2026.",
    specs: [{ label: "Fabric", value: "Premium Lawn" }, { label: "Length", value: "2.5 meters" }, { label: "Embroidery", value: "Front + Sleeves" }],
    sellerTips: ["Top seller on Daraz in ladies fashion category", "Photograph with dupatta combo for higher perceived value", "Typical resale price: Rs 1,200–1,500 — ~130% margin"],
  },
  {
    id: "p3", slug: "kitchen-organiser-bamboo", name: "Bamboo Kitchen Organiser (3-Tier)", category: "Home",
    pricePerPc: 340, marketRate: 520, moq: 30, stock: 80, status: "active", tags: ["low_stock"],
    variants: [],
    images: productImages,
    description: "3-tier bamboo kitchen organiser for spices and condiments. Eco-friendly, natural finish. Very popular in Facebook Marketplace home decor groups.",
    specs: [{ label: "Material", value: "Natural Bamboo" }, { label: "Dimensions", value: "28 × 18 × 22 cm" }, { label: "Weight", value: "480g" }],
    sellerTips: ["Trending in home decor Facebook groups", "Pair with kitchen accessories for bundle deals", "Typical resale price: Rs 850–950 — ~150% margin"],
  },
  {
    id: "p4", slug: "led-strip-lights-rgb", name: "RGB LED Strip Lights (5 Meter)", category: "Electronics",
    pricePerPc: 220, marketRate: 350, moq: 30, stock: 320, status: "active", tags: ["hot"],
    variants: [
      { type: "Type", options: ["RGB", "Warm White", "Cool White"] },
    ],
    images: productImages,
    description: "5-meter RGB LED strip with remote control and 20 colour modes. USB powered. Hugely popular on TikTok — room transformation content.",
    specs: [{ label: "Length", value: "5 meters" }, { label: "Power", value: "USB 5V" }, { label: "Modes", value: "20 colours + effects" }],
    sellerTips: ["TikTok favourite — room glow-up content performs extremely well", "Demo videos get 3x more engagement than static photos", "Typical resale price: Rs 550–650 — ~150% margin"],
  },
  {
    id: "p5", slug: "kids-water-bottle-cartoon", name: "Kids Cartoon Water Bottle (500ml)", category: "Kids",
    pricePerPc: 150, marketRate: 240, moq: 30, stock: 500, status: "active", tags: ["new"],
    variants: [
      { type: "Character", options: ["Unicorn", "Dinosaur", "Space", "Princess"] },
    ],
    images: productImages,
    description: "BPA-free kids water bottle with pop-up straw and cartoon sleeve. Leak-proof. School season best-seller.",
    specs: [{ label: "Capacity", value: "500ml" }, { label: "Material", value: "BPA-free Tritan" }, { label: "Feature", value: "Pop-up straw, leak-proof" }],
    sellerTips: ["School season = massive demand, stock up early", "Bundle 3 designs at discount for higher order value", "Typical resale price: Rs 350–400 — ~130% margin"],
  },
  {
    id: "p6", slug: "mens-casual-polo-tshirt", name: "Men's Casual Polo T-Shirt (Cotton Blend)", category: "Fashion",
    pricePerPc: 380, marketRate: 550, moq: 30, stock: 600, status: "active", tags: ["featured"],
    variants: [
      { type: "Size", options: ["S", "M", "L", "XL", "XXL"], stock: { S: 80, M: 150, L: 200, XL: 120, XXL: 50 } },
      { type: "Color", options: ["Black", "White", "Navy", "Olive"] },
    ],
    images: productImages,
    description: "Premium cotton blend polo with reinforced collar. Ideal for casual and semi-formal wear. Consistent quality across batches.",
    specs: [{ label: "Fabric", value: "Cotton-Poly Blend (65/35)" }, { label: "Collar", value: "Reinforced Polo" }, { label: "Sizes", value: "S to XXL" }],
    sellerTips: ["Strong performer on Daraz menswear category", "Size M and L are fastest movers — order more of these", "Typical resale price: Rs 800–950 — ~110% margin"],
  },
  {
    id: "p7", slug: "beauty-organiser-acrylic", name: "Acrylic Makeup Organiser (360° Rotating)", category: "Beauty",
    pricePerPc: 290, marketRate: 450, moq: 30, stock: 180, status: "active", tags: ["hot"],
    variants: [],
    images: productImages,
    description: "360-degree rotating acrylic makeup organiser with adjustable shelves. Clear acrylic, holds 30+ products. Instagram beauty influencer favourite.",
    specs: [{ label: "Material", value: "Clear Acrylic" }, { label: "Rotation", value: "360°" }, { label: "Capacity", value: "30+ products" }],
    sellerTips: ["Instagram beauty niche = high demand", "Get a beauty influencer to showcase for instant sales", "Typical resale price: Rs 750–850 — ~160% margin"],
  },
  {
    id: "p8", slug: "wireless-earbuds-tws", name: "TWS Wireless Earbuds (ANC)", category: "Electronics",
    pricePerPc: 650, marketRate: 950, moq: 30, stock: 150, status: "active", tags: ["new", "featured"],
    variants: [
      { type: "Color", options: ["Black", "White"] },
    ],
    images: productImages,
    description: "Active Noise Cancelling wireless earbuds with 30hr battery life. IPX5 water resistant. Premium box packaging included.",
    specs: [{ label: "Battery", value: "30hrs total" }, { label: "ANC", value: "Active Noise Cancelling" }, { label: "Water Resistance", value: "IPX5" }],
    sellerTips: ["Premium product = premium audience. Target tech-savvy buyers", "Unboxing videos perform well on TikTok", "Typical resale price: Rs 1,800–2,200 — ~170% margin"],
  },
  {
    id: "p9", slug: "home-fragrance-diffuser", name: "Reed Diffuser Set (200ml)", category: "Home",
    pricePerPc: 280, marketRate: 420, moq: 30, stock: 0, status: "sold_out", tags: [],
    variants: [
      { type: "Scent", options: ["Lavender", "Vanilla", "Ocean Breeze"] },
    ],
    images: productImages,
    description: "Premium reed diffuser set with essential oil blend. Glass bottle with wooden cap. Lasts up to 90 days. Currently sold out — restocking Thursday.",
    specs: [{ label: "Volume", value: "200ml" }, { label: "Duration", value: "Up to 90 days" }, { label: "Reeds", value: "8 natural rattan reeds" }],
    sellerTips: ["Home fragrance is a growing niche in Pakistan", "Gift set potential — pair with candles", "Typical resale price: Rs 700–800 — ~150% margin"],
  },
  {
    id: "p10", slug: "portable-phone-stand", name: "Adjustable Phone Stand (Metal)", category: "Electronics",
    pricePerPc: 120, marketRate: 200, moq: 30, stock: 700, status: "active", tags: [],
    variants: [
      { type: "Color", options: ["Silver", "Black", "Rose Gold"] },
    ],
    images: productImages,
    description: "Heavy-duty metal phone stand with adjustable angle. Anti-slip base. Compatible with all phones and small tablets.",
    specs: [{ label: "Material", value: "Aluminium Alloy" }, { label: "Adjustable", value: "0°–90°" }, { label: "Compatibility", value: "All phones + small tablets" }],
    sellerTips: ["Great add-on item to boost cart value", "WFH trend keeps demand steady", "Typical resale price: Rs 300–350 — ~150% margin"],
  },
  {
    id: "p11", slug: "ladies-crossbody-bag", name: "Ladies Mini Crossbody Bag (PU Leather)", category: "Fashion",
    pricePerPc: 420, marketRate: 650, moq: 30, stock: 250, status: "active", tags: ["hot"],
    variants: [
      { type: "Color", options: ["Black", "Tan", "Blush Pink", "Burgundy"] },
    ],
    images: productImages,
    description: "Compact PU leather crossbody with gold-tone hardware. Adjustable strap. Multiple compartments. Top seller in women's accessories.",
    specs: [{ label: "Material", value: "Premium PU Leather" }, { label: "Dimensions", value: "20 × 15 × 7 cm" }, { label: "Strap", value: "Adjustable, detachable" }],
    sellerTips: ["Style flat-lays with outfits for Instagram", "Blush Pink and Tan are trending colours this season", "Typical resale price: Rs 1,100–1,300 — ~160% margin"],
  },
  {
    id: "p12", slug: "kids-building-blocks", name: "Creative Building Blocks Set (120 pcs)", category: "Kids",
    pricePerPc: 350, marketRate: 500, moq: 30, stock: 120, status: "active", tags: ["new"],
    variants: [],
    images: productImages,
    description: "120-piece creative building block set in storage bucket. Non-toxic ABS plastic. Ages 3+. Great educational toy for birthday gifts.",
    specs: [{ label: "Pieces", value: "120" }, { label: "Material", value: "Non-toxic ABS" }, { label: "Age", value: "3+" }],
    sellerTips: ["Birthday gift market is huge — target parent groups", "Bundle with other toys for gift hampers", "Typical resale price: Rs 850–1,000 — ~140% margin"],
  },
];

export const orders: Order[] = [
  {
    id: "LB-2847", memberId: "m1",
    items: [
      { productId: "p1", name: "Premium TPU Phone Case", qty: 60, pricePerPc: 180, image: productImages[0] },
      { productId: "p4", name: "RGB LED Strip Lights", qty: 30, pricePerPc: 220, image: productImages[1] },
      { productId: "p10", name: "Adjustable Phone Stand", qty: 30, pricePerPc: 120, image: productImages[2] },
    ],
    total: 21000, paymentMethod: "bank_transfer", paymentStatus: "confirmed", orderStatus: "dispatched",
    courier: "TCS", trackingNumber: "TCS-78234561", createdAt: "2026-04-10T15:45:00",
    deliveryAddress: "Shop 14, Hall Road, near Packages Mall, Lahore", city: "Lahore",
    timeline: [
      { step: "Order placed", timestamp: "10 Apr, 3:45 PM", status: "completed" },
      { step: "Payment confirmed", timestamp: "10 Apr, 5:20 PM", status: "completed" },
      { step: "Packed", timestamp: "11 Apr, 10:00 AM", status: "completed" },
      { step: "Dispatched", timestamp: "11 Apr, 2:30 PM", status: "completed" },
      { step: "Out for delivery", status: "active" },
      { step: "Delivered", status: "pending" },
    ],
  },
  {
    id: "LB-2831", memberId: "m1",
    items: [
      { productId: "p2", name: "Ladies Embroidered Lawn Kurta", qty: 30, pricePerPc: 520, image: productImages[0] },
      { productId: "p11", name: "Ladies Mini Crossbody Bag", qty: 30, pricePerPc: 420, image: productImages[1] },
    ],
    total: 28200, paymentMethod: "easypaisa", paymentStatus: "confirmed", orderStatus: "delivered",
    courier: "Leopards", trackingNumber: "LEO-9912847", createdAt: "2026-03-28T09:12:00",
    deliveryAddress: "Shop 14, Hall Road, near Packages Mall, Lahore", city: "Lahore",
    timeline: [
      { step: "Order placed", timestamp: "28 Mar, 9:12 AM", status: "completed" },
      { step: "Payment confirmed", timestamp: "28 Mar, 9:45 AM", status: "completed" },
      { step: "Packed", timestamp: "28 Mar, 4:00 PM", status: "completed" },
      { step: "Dispatched", timestamp: "29 Mar, 10:00 AM", status: "completed" },
      { step: "Out for delivery", timestamp: "30 Mar, 2:00 PM", status: "completed" },
      { step: "Delivered", timestamp: "30 Mar, 5:30 PM", status: "completed" },
    ],
  },
  {
    id: "LB-2798", memberId: "m1",
    items: [
      { productId: "p5", name: "Kids Cartoon Water Bottle", qty: 60, pricePerPc: 150, image: productImages[0] },
    ],
    total: 9000, paymentMethod: "cod", paymentStatus: "confirmed", orderStatus: "delivered",
    createdAt: "2026-03-15T14:20:00",
    deliveryAddress: "Shop 14, Hall Road, near Packages Mall, Lahore", city: "Lahore",
    timeline: [
      { step: "Order placed", timestamp: "15 Mar, 2:20 PM", status: "completed" },
      { step: "Payment confirmed", timestamp: "17 Mar, 11:00 AM", status: "completed" },
      { step: "Packed", timestamp: "16 Mar, 9:00 AM", status: "completed" },
      { step: "Dispatched", timestamp: "16 Mar, 3:00 PM", status: "completed" },
      { step: "Out for delivery", timestamp: "17 Mar, 10:00 AM", status: "completed" },
      { step: "Delivered", timestamp: "17 Mar, 1:30 PM", status: "completed" },
    ],
  },
  {
    id: "LB-2756", memberId: "m1",
    items: [
      { productId: "p8", name: "TWS Wireless Earbuds", qty: 30, pricePerPc: 650, image: productImages[0] },
    ],
    total: 19500, paymentMethod: "bank_transfer", paymentStatus: "pending", orderStatus: "processing",
    createdAt: "2026-04-12T08:00:00",
    deliveryAddress: "Shop 14, Hall Road, near Packages Mall, Lahore", city: "Lahore",
    timeline: [
      { step: "Order placed", timestamp: "12 Apr, 8:00 AM", status: "completed" },
      { step: "Payment confirmation", status: "active" },
      { step: "Packed", status: "pending" },
      { step: "Dispatched", status: "pending" },
      { step: "Out for delivery", status: "pending" },
      { step: "Delivered", status: "pending" },
    ],
  },
];

export const currentMember: Member = {
  id: "m1",
  name: "Ahmad Khan",
  city: "Lahore",
  whatsapp: "3001234567",
  joinedDate: "April 2025",
  totalOrders: 14,
  totalSpent: 245000,
  savedVsMarket: 49800,
  status: "active",
};

export const applications: Application[] = [
  { id: "a1", name: "Hira Shahid", whatsapp: "3211234567", city: "Karachi", businessName: "Hira Collections", sellsWhat: ["Fashion & clothing", "Beauty & personal care"], sellsWhere: ["Instagram / TikTok", "WhatsApp customers"], monthlyVolume: "Rs 20,000 – 1,00,000", heardFrom: "Instagram", appliedAt: "2026-04-12T10:30:00", status: "pending" },
  { id: "a2", name: "Bilal Ahmed", whatsapp: "3331234567", city: "Lahore", businessName: "Bilal Electronics", sellsWhat: ["Electronics accessories"], sellsWhere: ["Daraz", "Facebook Marketplace"], monthlyVolume: "Rs 1,00,000 – 5,00,000", heardFrom: "Friend or colleague", appliedAt: "2026-04-12T09:15:00", status: "pending" },
  { id: "a3", name: "Sana Malik", whatsapp: "3451234567", city: "Islamabad", businessName: "Style Hub PK", sellsWhat: ["Fashion & clothing", "Kids & toys"], sellsWhere: ["Instagram / TikTok", "Daraz"], monthlyVolume: "Rs 20,000 – 1,00,000", heardFrom: "TikTok", appliedAt: "2026-04-11T16:45:00", status: "pending" },
  { id: "a4", name: "Farhan Ali", whatsapp: "3121234567", city: "Faisalabad", businessName: "Ali General Store", sellsWhat: ["Home & kitchen"], sellsWhere: ["Physical retail shop"], monthlyVolume: "Under Rs 20,000", heardFrom: "WhatsApp forward", appliedAt: "2026-04-11T14:20:00", status: "pending" },
  { id: "a5", name: "Zainab Raza", whatsapp: "3001239876", city: "Lahore", businessName: "Z Beauty Bar", sellsWhat: ["Beauty & personal care"], sellsWhere: ["Instagram / TikTok", "WhatsApp customers"], monthlyVolume: "Rs 20,000 – 1,00,000", heardFrom: "Instagram", appliedAt: "2026-04-11T11:00:00", status: "pending" },
  { id: "a6", name: "Omar Sheikh", whatsapp: "3331112222", city: "Rawalpindi", businessName: "Tech Corner RWP", sellsWhat: ["Electronics accessories"], sellsWhere: ["Physical retail shop", "Facebook Marketplace"], monthlyVolume: "Rs 1,00,000 – 5,00,000", heardFrom: "Google search", appliedAt: "2026-04-10T18:30:00", status: "pending" },
  { id: "a7", name: "Amna Khalid", whatsapp: "3009998888", city: "Multan", businessName: "Amna Fashion House", sellsWhat: ["Fashion & clothing"], sellsWhere: ["Instagram / TikTok"], monthlyVolume: "Under Rs 20,000", heardFrom: "TikTok", appliedAt: "2026-04-10T09:00:00", status: "pending" },
  { id: "a8", name: "Rashid Mehmood", whatsapp: "3451119999", city: "Peshawar", businessName: "Rashid Traders", sellsWhat: ["Home & kitchen", "Kids & toys"], sellsWhere: ["Physical retail shop", "WhatsApp customers"], monthlyVolume: "Rs 5,00,000+", heardFrom: "Friend or colleague", appliedAt: "2026-04-09T15:00:00", status: "pending" },
];

export const members: Member[] = [
  currentMember,
  { id: "m2", name: "Ayesha Rizwan", city: "Lahore", whatsapp: "3009876543", joinedDate: "March 2025", totalOrders: 22, totalSpent: 380000, savedVsMarket: 68000, status: "active" },
  { id: "m3", name: "Usman Khan", city: "Karachi", whatsapp: "3211112233", joinedDate: "February 2025", totalOrders: 35, totalSpent: 520000, savedVsMarket: 95000, status: "active" },
  { id: "m4", name: "Fatima Malik", city: "Islamabad", whatsapp: "3331234568", joinedDate: "January 2025", totalOrders: 18, totalSpent: 290000, savedVsMarket: 52000, status: "active" },
  { id: "m5", name: "Hassan Ali", city: "Faisalabad", whatsapp: "3451234568", joinedDate: "December 2024", totalOrders: 8, totalSpent: 120000, savedVsMarket: 22000, status: "suspended" },
];
