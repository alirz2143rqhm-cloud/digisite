/* ================================================
   DigiSite — لایه‌ی داده (Portfolio & Testimonials)
   ================================================ */

const PORTFOLIO_SEED = [
  {
    id: "p1",
    title: "فروشگاه اینترنتی آرتین",
    category: "فروشگاهی",
    cover: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    ],
    video: "",
    link: "#",
    description:
      "طراحی و توسعه‌ی فروشگاه اینترنتی با تمرکز بر تجربه‌ی خرید سریع، دسته‌بندی هوشمند محصولات و درگاه پرداخت امن.",
  },
  {
    id: "p2",
    title: "سایت شرکتی پارس صنعت",
    category: "شرکتی",
    cover: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    ],
    video: "",
    link: "#",
    description:
      "وب‌سایت معرفی شرکت با ساختار حرفه‌ای، صفحه‌ی خدمات و نمونه‌کار، بهینه‌شده برای موتورهای جست‌وجو.",
  },
  {
    id: "p3",
    title: "لندینگ پیج رویداد نوران",
    category: "لندینگ",
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    ],
    video: "",
    link: "#",
    description:
      "لندینگ پیج فروش بلیت رویداد با فرم ثبت‌نام سریع و طراحی متمرکز بر نرخ تبدیل بالا.",
  },
  {
    id: "p4",
    title: "سایت نمونه‌کار استودیو مانا",
    category: "نمونه‌کار",
    cover: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop",
    ],
    video: "",
    link: "#",
    description:
      "پرتفولیوی آنلاین برای یک استودیوی طراحی گرافیک با گالری تصاویر تمام‌صفحه و بارگذاری سریع.",
  },
  {
    id: "p5",
    title: "رستوران چوبک",
    category: "رستوران",
    cover: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    ],
    video: "",
    link: "#",
    description:
      "سایت معرفی رستوران با منوی دیجیتال، رزرو میز آنلاین و گالری فضای رستوران.",
  },
  {
    id: "p6",
    title: "پلتفرم آموزشی یادگیر",
    category: "آموزشی",
    cover: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop",
    ],
    video: "",
    link: "#",
    description:
      "پلتفرم فروش دوره‌های آموزشی آنلاین با پنل کاربری، پخش‌کننده‌ی ویدیو و سیستم پیشرفت دوره.",
  },
];

const TESTIMONIALS_SEED = [
  {
    id: "t1",
    name: "امیر رستمی",
    avatar: "https://i.pravatar.cc/120?img=12",
    rating: 5,
    date: "1404/04/18",
    projectImage: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=800&auto=format&fit=crop",
    video: "",
    text:
      "تیم DigiSite از همون جلسه‌ی اول با دقت بالایی نیازهای فروشگاه ما رو بررسی کرد. سایت خیلی سریع‌تر از چیزی که فکر می‌کردم آماده شد و نتیجه فوق‌العاده حرفه‌ای بود.",
  },
  {
    id: "t2",
    name: "سارا محمدی",
    avatar: "https://i.pravatar.cc/120?img=32",
    rating: 5,
    date: "1404/03/02",
    projectImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    video: "",
    text:
      "سایت شرکتی که برامون طراحی شد دقیقاً همون حسی رو منتقل می‌کنه که می‌خواستیم؛ حرفه‌ای، قابل اعتماد و مدرن. پشتیبانی بعد از تحویل هم عالی بود.",
  },
  {
    id: "t3",
    name: "حسین کریمی",
    avatar: "https://i.pravatar.cc/120?img=51",
    rating: 5,
    date: "1404/02/11",
    projectImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    video: "",
    text:
      "لندینگ پیج رویدادمون رو در زمان خیلی کوتاهی تحویل گرفتیم و نرخ ثبت‌نام نسبت به سایت قبلی‌مون به‌وضوح بالاتر رفت.",
  },
];const LS_PORTFOLIO_KEY = "digisite_portfolio_extra";
const LS_TESTIMONIALS_KEY = "digisite_testimonials_extra";

function safeParse(json, fallback) {
  try {
    const val = JSON.parse(json);
    return Array.isArray(val) ? val : fallback;
  } catch (e) {
    return fallback;
  }
}

function loadPortfolio() {
  const extra = safeParse(localStorage.getItem(LS_PORTFOLIO_KEY), []);
  return [...extra, ...PORTFOLIO_SEED];
}

function loadTestimonials() {
  const extra = safeParse(localStorage.getItem(LS_TESTIMONIALS_KEY), []);
  return [...extra, ...TESTIMONIALS_SEED];
}

function addPortfolioItem(item) {
  const extra = safeParse(localStorage.getItem(LS_PORTFOLIO_KEY), []);
  item.id = "local-" + Date.now();
  extra.unshift(item);
  localStorage.setItem(LS_PORTFOLIO_KEY, JSON.stringify(extra));
  return item;
}

function addTestimonialItem(item) {
  const extra = safeParse(localStorage.getItem(LS_TESTIMONIALS_KEY), []);
  item.id = "local-" + Date.now();
  extra.unshift(item);
  localStorage.setItem(LS_TESTIMONIALS_KEY, JSON.stringify(extra));
  return item;
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}