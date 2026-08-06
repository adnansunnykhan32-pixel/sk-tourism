export const BUSINESS_INFO = {
  name: "SK Tourism",
  legalName: "Dubai Tourism Services LLC",
  tagline: "Ultra-Luxury Dubai Travel & VIP Chauffeur Experiences",
  phonePrimary: "+971 50 888 7766",
  phoneSecondary: "+971 4 321 0000",
  whatsappNumber: "971508887766",
  whatsappMessageDefault: "Hello SK Tourism, I would like to inquire about booking a VIP luxury Dubai experience.",
  email: "info@sktourismdubai.com",
  bookingEmail: "booking@sktourismdubai.com",
  address: "Level 42, Boulevard Plaza Tower 1, Downtown Dubai, Opposite Burj Khalifa, UAE",
  openingHours: "24/7 VIP Concierge Services Available",
};

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  iconName: string;
  features: string[];
  startingPriceUSD: number;
  badge?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "airport-transfer",
    title: "Airport Transfer",
    shortDesc: "Executive airport arrival and departure transfers with meet-and-greet in Mercedes Maybach or Cadillac.",
    fullDesc: "Seamless flight tracking, personalized terminal gate greeting, luggage assistance, and champagne executive transfer from DXB or DWC airports to your hotel or private residence.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    iconName: "Plane",
    features: ["Flight Tracking Included", "60 Mins Free Wait Time", "Chilled Mineral Water & Refreshments", "Uniformed VIP Chauffeur"],
    startingPriceUSD: 120,
    badge: "24/7 Airport VIP",
  },
  {
    id: "desert-safari",
    title: "Desert Safari",
    shortDesc: "VIP private dune bashing, camel trek, luxury VIP desert lounge, and Michelin-star style dining.",
    fullDesc: "Escape into the golden Arabian dunes with private land cruisers, falconry displays, quad biking options, and exclusive fine-dining under the desert stars at our private VIP royal camp.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    iconName: "Sun",
    features: ["Private VIP Camp Cabana", "4x4 Luxury Dune Bashing", "Gourmet Live BBQ Buffet", "Dune Buggy Upgrade Available"],
    startingPriceUSD: 250,
    badge: "Exclusive Desert",
  },
  {
    id: "city-tour",
    title: "City Tour",
    shortDesc: "Private bespoke tour of Dubai's iconic landmarks with personal VIP guide and luxury chauffeur.",
    fullDesc: "Experience the ultimate guided journey through futuristic skyscrapers, historic Al Fahidi quarter, Burj Al Arab, Palm Jumeirah, and exclusive VIP lounge access at Burj Khalifa At The Top Sky.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    iconName: "Compass",
    features: ["Private Luxury Vehicle", "Multilingual VIP Guide", "Customizable Itinerary", "Burj Khalifa Priority Tickets"],
    startingPriceUSD: 299,
    badge: "Most Popular",
  },
  {
    id: "luxury-car-rental",
    title: "Luxury Car Rental",
    shortDesc: "Drive the latest Rolls Royce, Lamborghini, Ferrari, or SUV with door-to-door delivery.",
    fullDesc: "Access Dubai's finest supercar fleet. Pristine condition, comprehensive insurance, zero-hassle paperwork, and instant drop-off directly to your hotel or private villa.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    iconName: "Car",
    features: ["Zero Security Deposit Options", "Doorstep Delivery & Pickup", "Full Comprehensive Coverage", "24/7 Roadside Assistance"],
    startingPriceUSD: 450,
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking",
    shortDesc: "Exclusive VIP upgrades, resort credits, and preferred rates at 5-star & 7-star luxury hotels.",
    fullDesc: "Book Burj Al Arab, Atlantis The Royal, Armani Hotel, or One&Only Resorts through SK Tourism to enjoy complimentary room upgrades, early check-in, late check-out, and daily complimentary breakfast.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    iconName: "Building",
    features: ["Guaranteed Room Upgrades", "Complimentary Breakfast", "$100 Spa / Dining Credit", "Personalized Butler Service"],
    startingPriceUSD: 500,
    badge: "VIP Preferred",
  },
  {
    id: "dhow-cruise",
    title: "Dhow Cruise",
    shortDesc: "Private luxury yacht & traditional glass dhow dinner cruises along Dubai Marina & Canal.",
    fullDesc: "Sail past illuminated skyscrapers aboard a high-end luxury yacht or glass-walled dhow. Enjoy live international entertainment, gourmet 5-star buffet, and private upper-deck seating.",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1200&q=80",
    iconName: "Ship",
    features: ["5-Star Gourmet Dinner", "Live Tanoura & Music", "Open-Air Sky Lounge", "Private Yacht Charter Available"],
    startingPriceUSD: 180,
  },
  {
    id: "vip-chauffeur",
    title: "VIP Chauffeur",
    shortDesc: "Dedicated multi-day professional executive chauffeur services in premier luxury vehicles.",
    fullDesc: "Impeccably trained, discreet, English/Arabic speaking executive chauffeurs at your service for business meetings, shopping sprees, galas, and regional diplomatic travel.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    iconName: "UserCheck",
    features: ["Discreet & Security Trained", "Hourly or Daily Hiring", "Wi-Fi & Premium Amenities", "Spotless Mercedes Maybach / V-Class"],
    startingPriceUSD: 90,
    badge: "VIP Choice",
  },
];

export const FLEET_VEHICLES = [
  {
    name: "Rolls-Royce Cullinan",
    category: "Ultra-Luxury SUV",
    passengers: 4,
    luggage: 4,
    image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=1000&q=80",
    features: ["Starlight Headliner", "Massage Seats", "Champagne Cooler", "Privacy Glass"],
    priceTagUSD: 1200,
  },
  {
    name: "Mercedes-Maybach S-Class",
    category: "Executive Sedan",
    passengers: 3,
    luggage: 3,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=80",
    features: ["Executive Recline Seats", "Burmester 3D Sound", "Rear Entertainment Screens", "Ambient Lighting"],
    priceTagUSD: 450,
  },
  {
    name: "Cadillac Escalade ESV Platinum",
    category: "Luxury SUV",
    passengers: 6,
    luggage: 6,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80",
    features: ["Extended Wheelbase", "AKG Studio Sound", "Panoramic Sunroof", "Leather Captain Chairs"],
    priceTagUSD: 400,
  },
  {
    name: "Mercedes-Benz V-Class VIP",
    category: "VIP Van",
    passengers: 7,
    luggage: 8,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80",
    features: ["Face-to-Face Leather Conference", "Apple TV & High Speed Wi-Fi", "Mini Bar", "Electric Footrests"],
    priceTagUSD: 350,
  },
];

export const REVIEWS = [
  {
    name: "Lord Alexander Sterling",
    location: "London, United Kingdom",
    rating: 5,
    comment: "SK Tourism redefined luxury for our Dubai vacation. The Rolls-Royce chauffeur was on time to the second, and our private desert camp was fit for royalty. Truly 7-star service.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    serviceUsed: "Desert Safari & Chauffeur",
  },
  {
    name: "Dr. Elena Rostova",
    location: "Zurich, Switzerland",
    rating: 5,
    comment: "Flawless airport transfers and hotel bookings. SK Tourism arranged VIP access to Burj Khalifa and reserved the best table at Burj Al Arab. Their WhatsApp response is instant!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    serviceUsed: "VIP Chauffeur & Hotel Booking",
  },
  {
    name: "Marcus Vance",
    location: "New York, USA",
    rating: 5,
    comment: "We rented the Escalade ESV for our family of 6. Immaculate vehicle, incredible driver who knew every shortcut and private spot in Dubai. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    serviceUsed: "Luxury Car Rental",
  },
];

export const FAQS = [
  {
    q: "How do I confirm a booking with SK Tourism?",
    a: "You can submit our online Booking Form or click 'Book on WhatsApp'. Our VIP Concierge team will instantly review your request, confirm vehicle/service availability, and send your itinerary confirmation within minutes.",
  },
  {
    q: "Are your chauffeurs English speaking and professionally certified?",
    a: "Yes, 100% of our chauffeurs are licensed by the RTA, fluently multilingual (English, Arabic, Russian, French), security-vetted, and dressed in immaculate executive suits.",
  },
  {
    q: "Can I customize my tour itinerary?",
    a: "Absoltely. SK Tourism specializes in bespoke itineraries. Whether you want a private helicopter tour, yacht dining, or specialized desert glamping, we tailor every single detail to your preference.",
  },
  {
    q: "What is your cancellation policy for VIP services?",
    a: "We offer flexible cancellation policies. Most chauffeur transfers and city tours can be modified or cancelled up to 24 hours prior without any fee.",
  },
  {
    q: "Do you offer airport pick-up with luggage assistance?",
    a: "Yes, our executive airport service includes flight tracking, meet-and-greet right at the arrivals hall with a custom name sign, full luggage handling, and direct VIP vehicle transfer.",
  },
];

export interface HeroDestination {
  id: string;
  tag: string;
  name: string;
  subtitle: string;
  image: string;
  priceUSD: number;
  rating: string;
}

export const HERO_DESTINATIONS: HeroDestination[] = [
  {
    id: "burj-khalifa",
    tag: "DOWNTOWN DUBAI",
    name: "Burj Khalifa & Downtown",
    subtitle: "Stand atop the world's tallest tower & explore Downtown Dubai in ultra-executive VIP comfort.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2560&q=90",
    priceUSD: 180,
    rating: "4.95",
  },
  {
    id: "palm-jumeirah",
    tag: "PALM JUMEIRAH",
    name: "Palm Jumeirah & Atlantis",
    subtitle: "Coastal luxury, monorail tours, 7-star resort access, and private beach dining on The Palm.",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=2560&q=90",
    priceUSD: 320,
    rating: "4.98",
  },
  {
    id: "desert-safari",
    tag: "DESERT SAFARI",
    name: "VIP Arabian Desert Safari",
    subtitle: "Private dune bashing, royal desert cabanas, falconry, and fine dining under Arabian stars.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2560&q=90",
    priceUSD: 250,
    rating: "4.99",
  },
  {
    id: "dubai-marina",
    tag: "DUBAI MARINA",
    name: "Dubai Marina & Yacht Cruise",
    subtitle: "Cruise past illuminated skyscrapers aboard high-end luxury yachts with 5-star VIP catering.",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2560&q=90",
    priceUSD: 290,
    rating: "4.92",
  },
  {
    id: "museum-future",
    tag: "FUTURE WONDERS",
    name: "Museum of the Future",
    subtitle: "Discover tomorrow's innovations inside Dubai's iconic architectural masterpiece with fast-track VIP entry.",
    image: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?auto=format&fit=crop&w=2560&q=90",
    priceUSD: 160,
    rating: "4.96",
  },
];

export const DUBAI_LOCATIONS = [
  "Downtown Dubai",
  "Burj Khalifa",
  "Dubai Marina",
  "Palm Jumeirah",
  "Dubai Creek",
  "Bluewaters Island",
  "Jumeirah Beach",
  "Dubai Frame",
  "Museum of the Future",
  "Al Seef",
  "Dubai Mall",
  "Global Village",
  "Dubai Miracle Garden",
  "Atlantis The Palm",
  "Ain Dubai",
];

export const EXPLORE_DUBAI_ITEMS = [
  {
    id: "1",
    title: "Burj Khalifa At The Top Sky",
    category: "Downtown",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80",
    priceUSD: 180,
    duration: "4 Hours",
    rating: 4.9,
    description: "Fast-track access to Levels 124, 125 & 148 with VIP lounge access.",
  },
  {
    id: "2",
    title: "Atlantis The Royal Helicopter & Resort Tour",
    category: "Palm Jumeirah",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1000&q=80",
    priceUSD: 450,
    duration: "Full Day",
    rating: 5.0,
    description: "15-minute aerial helicopter tour followed by luxury resort cabana access.",
  },
  {
    id: "3",
    title: "Royal Desert Glamping & Falconry",
    category: "Desert",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
    priceUSD: 350,
    duration: "Overnight",
    rating: 4.98,
    description: "Private air-conditioned luxury tent with gourmet breakfast & dune buggies.",
  },
  {
    id: "4",
    title: "Sunset VIP Yacht Charter Marina",
    category: "Marina",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=80",
    priceUSD: 600,
    duration: "3 Hours",
    rating: 4.95,
    description: "Private 56ft luxury yacht with personal captain & live BBQ chef.",
  },
  {
    id: "5",
    title: "Museum of the Future & Old Dubai Heritage",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?auto=format&fit=crop&w=1000&q=80",
    priceUSD: 220,
    duration: "6 Hours",
    rating: 4.92,
    description: "Futuristic technology tour combined with private traditional abra boat cruise.",
  },
];
