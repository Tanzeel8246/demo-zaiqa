export const SITE = {
  name: "Zaiqa",
  tagline: "Taste of Lahore",
  domain: "https://zaiqa.mamfss.com",
  address: "14-B Main Boulevard, Gulberg III, Lahore, Pakistan",
  phone: "+92 42 3577 8899",
  hours: "Monday – Sunday · 12:00 PM – 12:00 AM",
  whatsappUrl: "https://wa.me/923023448246",
  email: "hello@zaiqa.mamfss.com",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu/", label: "Menu" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/reservations/", label: "Reservations" },
  { href: "/contact/", label: "Contact" },
  { href: "/about/", label: "About" },
];

export type MenuItem = { name: string; price: string; desc: string; tag?: string };

export type MenuCategory = { id: string; label: string; items: MenuItem[] };

export const MENU: MenuCategory[] = [
  {
    id: "bbq",
    label: "BBQ",
    items: [
      { name: "Chicken Tikka (Leg Piece)", price: "Rs 420", desc: "Marinated overnight in yogurt and our house spice mix, grilled over open flame until charred at the edges.", tag: "Bestseller" },
      { name: "Chicken Tikka (Breast)", price: "Rs 480", desc: "Lean breast fillet in the same overnight marinade — smoky outside, juicy inside." },
      { name: "Seekh Kabab", price: "Rs 380 / pc", desc: "Hand-rolled minced beef with green chilies and fresh coriander, smoked over real coals.", tag: "Bestseller" },
      { name: "Malai Boti (8 pc)", price: "Rs 850", desc: "Cream-and-cheese marinated chicken cubes — mild, melting, with a gentle char." },
      { name: "Chicken Behari Boti", price: "Rs 720", desc: "Thin strips in a mustard-oil and poppy-seed marinade, a nod to old Delhi." },
      { name: "Mutton Seekh Kabab", price: "Rs 950", desc: "Coarse-ground mutton, hand-kneaded with browned onions — our smokiest kabab." },
      { name: "Mutton Chops", price: "Rs 1,650", desc: "Frenched ribs rubbed with crushed black pepper and roasted garlic, finished on the grill." },
      { name: "Chapli Kabab (2 pc)", price: "Rs 640", desc: "Peshawari-style patties with anardana, pomegranate seeds and a crisp tomato crown." },
      { name: "Fish Tikka — Rahu (4 pc)", price: "Rs 950", desc: "River fish in a mustard and ajwain crust, grilled till the skin crackles." },
      { name: "Zaiqa BBQ Platter", price: "Rs 3,200", desc: "Serves four: tikka, seekh kabab, malai boti, mutton chops, chapli kabab and fresh naan — the whole grill on one tray.", tag: "Serves 4" },
    ],
  },
  {
    id: "karahi",
    label: "Karahi & Handi",
    items: [
      { name: "Chicken Karahi (Half)", price: "Rs 1,450", desc: "The Lahori classic — wok-tossed in desi ghee with fresh tomatoes, ginger and green chilies.", tag: "Signature" },
      { name: "Chicken Karahi (Full)", price: "Rs 2,750", desc: "Double the wok, same fire. Made for a full table." },
      { name: "Mutton Karahi (Half)", price: "Rs 2,400", desc: "Slow-tendered mutton finished fast and hot — the way karahi was meant to be." },
      { name: "Mutton Karahi (Full)", price: "Rs 4,500", desc: "Our most celebrated dish. Tender mutton, fresh tomato, desi ghee, nothing else needed." },
      { name: "White Karahi (Chicken)", price: "Rs 1,650", desc: "Creamy yogurt base, crushed black pepper and a heap of green chilies. Rich without the red." },
      { name: "Koyla Karahi (Chicken)", price: "Rs 1,650", desc: "Finished under a smoking coal ember — every bite carries the tandoor's memory." },
      { name: "Desi Murgh Karahi", price: "Rs 2,200", desc: "Free-range village chicken, cooked low and slow. Deeper flavour, worth the wait." },
      { name: "Chicken Handi (Boneless)", price: "Rs 1,750", desc: "Boneless chicken folded into a velvet tomato-cream gravy, served bubbling in the handi." },
      { name: "Daal Makhani Handi", price: "Rs 950", desc: "Black lentils simmered overnight with white butter — comfort in a clay pot." },
      { name: "Palak Paneer Handi", price: "Rs 1,050", desc: "Fresh spinach and soft paneer with a tempering of garlic. Our vegetarian pride." },
    ],
  },
  {
    id: "breads",
    label: "Breads & Rice",
    items: [
      { name: "Tandoori Roti", price: "Rs 60", desc: "Whole-wheat, slapped fresh onto the tandoor wall." },
      { name: "Roghni Naan", price: "Rs 120", desc: "Soft, sesame-topped, brushed with ghee. The karahi's best friend." },
      { name: "Garlic Naan", price: "Rs 150", desc: "Roasted garlic and coriander pressed into a pillowy naan." },
      { name: "Cheese Naan", price: "Rs 280", desc: "Stuffed with molten cheese — the kids' table favourite.", tag: "Kids love it" },
      { name: "Laccha Paratha", price: "Rs 180", desc: "Sixteen flaky layers, finished with a knob of white butter." },
      { name: "Chicken Biryani", price: "Rs 380", desc: "Layered basmati, saffron milk and a whole green chili on top. Served with raita." },
      { name: "Sindhi Beef Biryani", price: "Rs 420", desc: "Fiery, tangy, potato-studded — the Karachi way.", tag: "Spicy" },
      { name: "Beef Pulao", price: "Rs 450", desc: "Yakhni-cooked beef folded through fragrant rice. Gentle, aromatic, deeply satisfying." },
      { name: "Kabuli Pulao", price: "Rs 520", desc: "Sweet carrots, raisins and tender beef over long-grain rice." },
      { name: "Zeera Rice", price: "Rs 320", desc: "Steamed basmati tossed with toasted cumin — the quiet hero of the table." },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Gulab Jamun (4 pc)", price: "Rs 350", desc: "Served warm in light syrup, with a whisper of cardamom." },
      { name: "Kheer-e-Khaas", price: "Rs 320", desc: "Slow-stirred for hours, crowned with pistachio and silver varq." },
      { name: "Shahi Tukra", price: "Rs 420", desc: "Saffron-soaked fried bread under a blanket of rabri." },
      { name: "Kulfi Falooda", price: "Rs 450", desc: "Dense hand-churned kulfi over vermicelli, basil seeds and rose syrup.", tag: "Bestseller" },
      { name: "Gajar ka Halwa", price: "Rs 480", desc: "Winter carrots reduced in milk and desi ghee. Seasonal — ask before you dream of it." },
      { name: "Rasmalai (2 pc)", price: "Rs 380", desc: "Feather-light chenna discs floating in chilled, cardamom-scented milk." },
      { name: "Rabri with Jalebi", price: "Rs 420", desc: "Crisp hot jalebi meets cold, thick rabri. A Lahori street classic, plated properly." },
      { name: "Ice Cream Trio", price: "Rs 350", desc: "Three scoops — mango, pistachio, vanilla — with roasted nuts." },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    items: [
      { name: "Sweet Lassi (Kulhar)", price: "Rs 280", desc: "Thick dahi churned with sugar, served in a clay kulhar with a malai topi.", tag: "Must try" },
      { name: "Salty Lassi", price: "Rs 260", desc: "The old-school cooler — salt, roasted cumin, ice." },
      { name: "Mango Lassi", price: "Rs 350", desc: "Chaunsa pulp folded into thick lassi. Summer in a glass." },
      { name: "Doodh Patti", price: "Rs 200", desc: "Milk-only chai, brewed strong and poured from a height." },
      { name: "Kashmiri Chai", price: "Rs 250", desc: "Pink, salty-sweet, with crushed pistachio and almond." },
      { name: "Elaichi Chai", price: "Rs 180", desc: "The everyday cup — cardamom, comfort, conversation." },
      { name: "Fresh Lime Soda", price: "Rs 220", desc: "Hand-squeezed lime, sparkling water, a pinch of black salt." },
      { name: "Mint Margarita", price: "Rs 240", desc: "Crushed mint and lime over ice — the BBQ's cooling counterpart." },
      { name: "Rooh Afza Milk", price: "Rs 230", desc: "Chilled milk with the classic rose sharbat. Nostalgia, served cold." },
      { name: "Cold Drink (Can)", price: "Rs 150", desc: "Chilled cans — ask your server what's in the fridge today." },
    ],
  },
];

export const DISH_COUNT = MENU.reduce((n, c) => n + c.items.length, 0);

export const SIGNATURE_DISHES: MenuItem[] = [
  { name: "Chicken Karahi (Half)", price: "Rs 1,450", desc: "Wok-tossed in desi ghee with fresh tomatoes and ginger.", tag: "Signature" },
  { name: "Seekh Kabab", price: "Rs 380 / pc", desc: "Hand-rolled, smoked over real coals.", tag: "Bestseller" },
  { name: "Mutton Karahi (Full)", price: "Rs 4,500", desc: "Our most celebrated dish — tender mutton, fresh tomato, desi ghee.", tag: "Signature" },
  { name: "Sweet Lassi (Kulhar)", price: "Rs 280", desc: "Thick churned dahi in a clay kulhar, crowned with malai.", tag: "Must try" },
];

export type Testimonial = { quote: string; name: string; detail: string };

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "The mutton karahi here ruined every other karahi for me. Desi ghee, fresh tomato, that wok hei — I've brought three different families here and every single one asked for the address before dessert.",
    name: "Ayesha Raza",
    detail: "Regular since 2019 · Gulberg",
  },
  {
    quote: "We ordered the BBQ platter for a dawat of twelve. The seekh kababs arrived still sizzling, the malai boti disappeared in minutes, and the kids are still talking about the cheese naan. Worth every rupee.",
    name: "Bilal Sheikh",
    detail: "Family dinner · DHA Phase 5",
  },
  {
    quote: "I'm from Karachi and I don't say this lightly: the Sindhi beef biryani here is the real thing. Proper masala, proper aloo, proper attitude. Zaiqa is my first stop every Lahore trip now.",
    name: "Danish Ali",
    detail: "Visiting from Karachi",
  },
  {
    quote: "Booked a table for my parents' anniversary through WhatsApp — took two minutes. The staff had the table ready with a complimentary kheer. Small gestures, big impression. The koyla karahi is a must.",
    name: "Mahnoor Fatima",
    detail: "Anniversary dinner · Model Town",
  },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "Do I need a reservation, or can I walk in?",
    a: "Walk-ins are welcome, but Friday to Sunday evenings fill up fast. A quick WhatsApp reservation takes two minutes and guarantees your table — we hold reservations for 20 minutes past the booked time.",
  },
  {
    q: "Do you offer family seating and outdoor dining?",
    a: "Yes. We have a dedicated family hall on the first floor and a rooftop section with heaters in winter. Mention your preference when booking and we'll arrange it.",
  },
  {
    q: "Is there parking available?",
    a: "We have valet parking every evening from 7 PM onwards, plus a dedicated parking lane right outside on Main Boulevard during the day.",
  },
  {
    q: "Do you cater events or take bulk orders?",
    a: "We do — dawat platters, office lunches and wedding catering across Lahore. Share your headcount on WhatsApp and we'll send a custom quote within a day.",
  },
  {
    q: "Are vegetarian options available?",
    a: "Absolutely. Our Daal Makhani Handi and Palak Paneer Handi are cooked in separate utensils, and most breads, rice and desserts are vegetarian-friendly.",
  },
];

export const TIME_SLOTS = [
  "12:30 PM", "1:30 PM", "2:30 PM", "3:30 PM", "5:00 PM",
  "6:30 PM", "7:30 PM", "8:30 PM", "9:30 PM", "10:30 PM",
];

export function waLink(message: string): string {
  return `${SITE.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
