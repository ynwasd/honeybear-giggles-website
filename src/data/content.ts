// ===== CONTENT DATA =====
// Update tour dates, merch, media, and copy here.

export interface TourDate {
  id: string;
  date: string;
  day: string;
  city: string;
  venue: string;
  ticketUrl: string;
  soldOut: boolean;
  month: string;
}

export interface MerchItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  buyUrl: string;
  badge?: string;
}

export interface Video {
  id: string;
  title: string;
  youtubeId: string;
  thumbnail: string;
}

export interface PressQuote {
  quote: string;
  source: string;
}

export const BRAND = {
  name: "Honeybear Giggles",
  tagline: "Comedy That Stings Just Right",
  heroSubtitle: "Selling out shows. Breaking rules. Making you ugly laugh.",
  bio: "Honeybear Giggles isn't your typical stand-up. With a razor-sharp wit and a stage presence that fills arenas, Honeybear has become one of the most electrifying voices in comedy today. From sold-out theater tours to viral specials, the laughs never stop.",
  bioShort: "Comedian. Troublemaker. Professional giggle merchant.",
  managerName: "Steve Barry",
  managerEmail: "ynwasd@gmail.com",
  agentName: "Jemaine DuBarre",
  agentEmail: "productimagepro@gmail.com",
  social: {
    instagram: "https://instagram.com/honeybeargiggles",
    tiktok: "https://tiktok.com/@honeybeargiggles",
    youtube: "https://youtube.com/@honeybeargiggles",
    twitter: "https://x.com/honeybeargiggz",
  },
};

export const ANNOUNCEMENT = {
  text: '🔥 NEW SPECIAL — "Sweet Venom" streaming everywhere March 15',
  link: "#",
  linkText: "Watch the Trailer",
};

export const TOUR_DATES: TourDate[] = [
  { id: "1", date: "Feb 28", day: "Saturday", city: "Austin, TX", venue: "Fatman Club", ticketUrl: "#", soldOut: false, month: "February" },
  { id: "2", date: "Mar 21", day: "Friday", city: "Denver, CO", venue: "Bellco Theatre", ticketUrl: "#", soldOut: false, month: "March" },
  { id: "3", date: "Mar 28", day: "Friday", city: "Nashville, TN", venue: "Ryman Auditorium", ticketUrl: "#", soldOut: false, month: "March" },
  { id: "4", date: "Apr 4", day: "Friday", city: "Chicago, IL", venue: "Chicago Theatre", ticketUrl: "#", soldOut: true, month: "April" },
  { id: "5", date: "Apr 11", day: "Friday", city: "New York, NY", venue: "Beacon Theatre", ticketUrl: "#", soldOut: false, month: "April" },
  { id: "6", date: "Apr 18", day: "Friday", city: "Los Angeles, CA", venue: "The Wiltern", ticketUrl: "#", soldOut: false, month: "April" },
  { id: "7", date: "May 2", day: "Friday", city: "Portland, OR", venue: "Arlene Schnitzer Hall", ticketUrl: "#", soldOut: false, month: "May" },
  { id: "8", date: "May 9", day: "Friday", city: "Seattle, WA", venue: "Moore Theatre", ticketUrl: "#", soldOut: false, month: "May" },
];

export const MERCH_ITEMS: MerchItem[] = [
  { id: "1", name: "HoneyBear Retro Logo Tee", price: 44.95, image: "/merch/honeybear-tee.png", category: "Shirts", buyUrl: "https://honeybear-giggles.printify.me/product/27086389", badge: "New" },
  { id: "2", name: "Honeybear Logo Hoodie", price: 35.97, image: "/merch/honeybear-hoodie.png", category: "Hoodies", buyUrl: "https://honeybear-giggles.printify.me/product/27086162" },
  { id: "3", name: "Classic Cuffed Beanie (Embroidery)", price: 26.99, image: "/merch/honeybear-beanie.png", category: "Hats", buyUrl: "https://honeybear-giggles.printify.me/product/27086443" },
  { id: "4", name: "HoneyBear Embroidered Dad Cap", price: 33.43, image: "/merch/honeybear-dad-cap.png", category: "Hats", buyUrl: "https://honeybear-giggles.printify.me/product/27086510" },
  { id: "5", name: "Stinger Sticker Pack", price: 12, image: "", category: "Stickers", buyUrl: "#" },
  { id: "6", name: "Neon Nights Crewneck", price: 55, image: "", category: "Hoodies", buyUrl: "#", badge: "Limited" },
  { id: "7", name: "Mic Drop Poster", price: 20, image: "", category: "Posters", buyUrl: "#" },
];

export const VIDEOS: Video[] = [
  { id: "1", title: "Sweet Venom — Official Trailer", youtubeId: "8pArbo-QI-8", thumbnail: "" },
  { id: "2", title: "Live at The Beacon", youtubeId: "dQw4w9WgXcQ", thumbnail: "" },
  { id: "3", title: "Crowd Work Compilation", youtubeId: "dQw4w9WgXcQ", thumbnail: "" },
  { id: "4", title: "Podcast Appearance — Laugh Factory", youtubeId: "dQw4w9WgXcQ", thumbnail: "" },
  { id: "5", title: "Behind the Scenes: Tour Life", youtubeId: "dQw4w9WgXcQ", thumbnail: "" },
  { id: "6", title: "First Time at The Store", youtubeId: "dQw4w9WgXcQ", thumbnail: "" },
];

export const PRESS_QUOTES: PressQuote[] = [
  { quote: "A comedic force that can't be ignored.", source: "Rolling Stone" },
  { quote: "Honeybear Giggles is the future of stand-up.", source: "Vulture" },
  { quote: "Absolutely unhinged in the best way possible.", source: "The AV Club" },
  { quote: "If you're not watching Honeybear, you're missing out.", source: "Complex" },
];

export const PHOTO_PLACEHOLDERS = Array.from({ length: 12 }, (_, i) => ({
  id: String(i + 1),
  alt: `Honeybear Giggles photo ${i + 1}`,
}));
