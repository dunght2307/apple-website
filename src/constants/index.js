import {
  accessibilityIcon,
  allColorsImg,
  blackImg,
  blackTitaniumImg,
  blueImg,
  cameraIcon,
  carrierIcon,
  chevronRightIcon,
  deliveryIcon,
  desertTitaniumImg,
  flashLightIcon,
  focusIcon,
  highlightFirstVideo,
  highlightFivethVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightSixthVideo,
  highlightThirdVideo,
  iphoneAirPodsImg,
  iphoneApplewatchImg,
  iphoneMacImg,
  magnifierIcon,
  naturalTitaniumImg,
  payIcon,
  personalIcon,
  plusIcon,
  saveIcon,
  screenAccessibilityImg,
  screenCameraImg,
  screenFlashlightImg,
  screenFocusImg,
  screenMagnifierImg,
  screenRingSilentImg,
  screenShortcutsImg,
  screenTranslateImg,
  screenVoiceMemosImg,
  shoppingIcon,
  shortcutIcon,
  silentModeIcon,
  specialistIcon,
  translateIcon,
  voiceMemoIcon,
  whiteImg,
  whiteTitaniumImg,
  yellowImg,
} from "../utils";

import {
  prolens1Img,
  prolens2Img,
  prolens3Img,
  prolens4Img,
  prolens5Img,
  prolens6Img,
  prolens7Img,
} from "../utils";

export const nav1Lists = [
  {
    id: 1,
    name: "Store",
    subLinks: [
      {
        head: "Shop",
        headLink: [
          "Shop the Latest",
          "Mac",
          "iPad",
          "iPhone",
          "Apple Watch",
          "Apple Vision Pro",
          "Accessories",
        ],
      },
      {
        head: "Quick Links",
        subLink: [
          "Find a Store",
          "Order Status",
          "Apple Trade In",
          "College Student Offer",
        ],
      },
      {
        head: "Shop Special Stores",
        subLink: [
          "Certified Refurbished",
          "Education",
          "Business",
          "Veterrans And Military",
          "Government",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Mac",
    subLinks: [
      {
        head: "Explore Mac",
        headLink: [
          "Explore All Mac",
          "MacBook Air",
          "MacBook Pro",
          "iMac",
          "Mac mini",
          "Mac Studio",
          "Mac Pro",
          "Displays",
        ],
        footer: ["Compare Mac", "Mac Does That"],
      },
      {
        head: "Shop Mac",
        subLink: [
          "Shop Mac",
          "Help Me Choose",
          "Mac Accessories",
          "Apple Trade In",
          "Financing",
          "College Student Offer",
        ],
      },
      {
        head: "More from Mac",
        subLink: [
          "Mac Support",
          "AppleCare+ for Mac",
          "macOS Sequoia Preview",
          "Apps by Apple",
          "Continuity",
          "Mac for Business",
          "Education",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "iPad",
    subLinks: [
      {
        head: "Explore iPad",
        headLink: [
          "Explore All iPad",
          "iPad Pro",
          "iPad Air",
          "iPad",
          "iPad mini",
          "Apple Pencil",
        ],
        footer: ["Compare iPad", "Why iPad"],
      },
      {
        head: "Shop iPad",
        subLink: [
          "Shop iPad",
          "iPad Accessories",
          "Apple Trade In",
          "Financing",
          "College Student Offer",
        ],
      },
      {
        head: "More from iPad",
        subLink: [
          "iPad Support",
          "AppleCare+ for iPad",
          "iPadOS 18",
          "Apple Intelligence",
          "Apps by Apple",
          "iCloud+",
          "Education",
        ],
      },
    ],
  },
  {
    id: 4,
    name: "iPhone",
    subLinks: [
      {
        head: "Explore iPhone",
        headLink: [
          "Explore All iPhone",
          "iPhone 16 Pro",
          "iPhone 16",
          "iPhone 15",
          "iPhone 14",
          "iPhone SE",
        ],
        footer: ["Compare iPhone", "Switch from Android"],
      },
      {
        head: "Shop iPhone",
        subLink: [
          "Shop iPhone",
          "iPhone Accessories",
          "Apple Trade In",
          "Carrier Deals at Apple",
          "Financing",
        ],
      },
      {
        head: "More from iPhone",
        subLink: [
          "iPhone Support",
          "AppleCare+ for iPhone",
          "iOS 18",
          "Apple Intelligence",
          "Apps by Apple",
          "iPhone Privacy",
          "iCloud+",
          "Wallet, Pay, Card",
          "Siri",
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Watch",
    subLinks: [
      {
        head: "Explore Watch",
        headLink: [
          "Explore All Apple Watch",
          "Apple Watch Series 10",
          "Apple Watch Ultra 2",
          "Apple Watch SE",
          "Apple Watch Nike",
          "Apple Watch Hermès",
        ],
        footer: ["Compare Watch", "Why Apple Watch"],
      },
      {
        head: "Shop Watch",
        subLink: [
          "Shop Apple Watch",
          "Apple Watch Studio",
          "Apple Watch Bands",
          "Apple Watch Accessories",
          "Apple Trade In",
          "Financing",
        ],
      },
      {
        head: "More from Watch",
        subLink: [
          "Apple Watch Support",
          "AppleCare+",
          "watchOS 11",
          "Apple Watch For Your Kids",
          "Apps by Apple",
          "Apple Fitness+",
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Vision",
    subLinks: [
      {
        head: "Explore Vision",
        headLink: ["Explore Apple Vision Pro"],
        footer: ["Guided Tour", "Tech Specs"],
      },
      {
        head: "Shop Vision",
        subLink: [
          "Shop Apple Vision Pro",
          "Apple Vision Pro Accessories",
          "Book a Demo",
          "Financing",
        ],
      },
      {
        head: "More from Vision",
        subLink: ["Apple Vision Pro Support", "AppleCare+", "visionOS 2"],
      },
    ],
  },
  {
    id: 7,
    name: "AirPods",
    subLinks: [
      {
        head: "Explore AirPods",
        headLink: [
          "Explore All AirPods",
          "AirPods 4",
          "AirPods Pro 2",
          "AirPods Max",
        ],
        footer: ["Compare AirPods"],
      },
      {
        head: "Shop AirPods",
        subLink: ["Shop AirPods", "AirPods Accessories"],
      },
      {
        head: "More from AirPods",
        subLink: [
          "AirPods Support",
          "AppleCare+ for Headphones",
          "Hearing Health",
          "Apple Music",
        ],
      },
    ],
  },
  {
    id: 8,
    name: "TV & Home",
    subLinks: [
      {
        head: "Explore TV & Home",
        headLink: [
          "Explore TV & Home",
          "Apple TV 4K",
          "HomePod",
          "HomePod mini",
        ],
      },
      {
        head: "Shop TV & Home",
        subLink: [
          "Shop Apple TV 4K",
          "Shop HomePod",
          "Shop HomePod mini",
          "Shop Siri Remote",
          "TV & Home Accessories",
        ],
      },
      {
        head: "More from TV & Home",
        subLink: [
          "Apple TV Support",
          "HomePod Support",
          "AppleCare+",
          "Apple TV app",
          "Apple TV+",
          "Home app",
          "Apple Music",
          "Siri",
          "AirPlay",
        ],
      },
    ],
  },
  {
    id: 9,
    name: "Entertainment",
    subLinks: [
      {
        head: "Explore Entertainment",
        headLink: [
          "Explore Entertainment",
          "Apple One",
          "Apple TV+",
          "Apple Music",
          "Apple Arcade",
          "Apple Fitness+",
          "Apple News+",
          "Apple Podcasts",
          "Apple Books",
          "App Store",
        ],
      },
      {
        head: "Support",
        subLink: ["Apple TV+ Support", "Apple Music Support"],
      },
    ],
  },
  {
    id: 10,
    name: "Accessories",
    subLinks: [
      {
        head: "Shop Accessories",
        headLink: [
          "Shop Accessories",
          "Mac",
          "iPad",
          "iPhone",
          "Apple Watch",
          "Apple Vision Pro",
          "Accessories",
          "AirPods",
          "TV & Home",
        ],
      },
      {
        head: "Explore Accessories",
        subLink: ["Made by Apple", "Beats by Dr. Dre", "AirTag"],
      },
    ],
  },
  {
    id: 11,
    name: "Support",
    subLinks: [
      {
        head: "Explore Support",
        headLink: [
          "iPhone",
          "Mac",
          "iPad",
          "Watch",
          "Apple Vision Pro",
          "AirPods",
          "Music",
          "TV",
        ],
        footer: ["Explore Support"],
      },
      {
        head: "Get Help",
        subLink: ["Community", "Check Coverage", "Repair", "Contact Us"],
      },
      {
        head: "Helpful Topics",
        subLink: [
          "Get AppleCare+",
          "Apple ID & Password",
          "Billing & Subscriptions",
          "Find My",
          "Accessibility",
        ],
      },
    ],
  },
];

export const nav2Lists = [
  "Overview",
  "Switch from Android to iPhone",
  "Tech Specs",
];

export const quickLinks = [
  "Find a Store",
  "Apple Vision Pro",
  "Tech Specs",
  "AirPods",
  "AirTad",
  "Apple Trade In",
];

export const highlightsSlides = [
  {
    id: 1,
    textLists: [
      "The first iPhone built for Apple Intelligence. ",
      "Personal, private, powerful",
    ],
    video: highlightFirstVideo,
    videoDuration: 5,
  },
  {
    id: 2,
    textLists: [
      "So fast. So fluid.",
      "Get a feel for the all-new Camera Control.",
    ],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "4K 120 fps Dolby Vision",
      "4 studio-quality mics.",
      "A Pro studio in your pocket.",
    ],
    video: highlightThirdVideo,
    videoDuration: 7,
  },
  {
    id: 4,
    textLists: [
      "Our thinnest borders yet — for even larger displays. Brilliant.",
    ],
    video: highlightFourthVideo,
    videoDuration: 3,
  },
  {
    id: 5,
    textLists: [
      "All-new A18 Pro chip powers unrivaled intelligence.",
      "And unprecedented performance.",
    ],
    video: highlightFivethVideo,
    videoDuration: 7,
  },
  {
    id: 6,
    textLists: ["A huge leap in battery life.", "Game on."],
    video: highlightSixthVideo,
    videoDuration: 3,
  },
];

export const prolensSides = [
  {
    id: 1,
    image: prolens1Img,
    text: ["0.5x", "Ultra Wide | Macro"],
  },
  {
    id: 2,
    image: prolens2Img,
    text: ["0.5x", "Ultra Wide | 13 mm"],
  },
  {
    id: 3,
    image: prolens3Img,
    text: ["1x", "Main | 24 mm"],
  },
  {
    id: 4,
    image: prolens4Img,
    text: ["1x", "Main | 28 mm"],
  },
  {
    id: 5,
    image: prolens5Img,
    text: ["1x", "Main | 35 mm"],
  },
  {
    id: 6,
    image: prolens6Img,
    text: ["2x", " Telephoto | 48 mm"],
  },
  {
    id: 7,
    image: prolens7Img,
    text: ["New 5x", "Telephoto | 120 mm"],
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const modelsFM = [
  {
    id: 0,
    title: "6.3” iPhone 16 Pro3 in four colors",
    color: "",
    img: allColorsImg,
  },
  {
    id: 1,
    title: "6.9” iPhone 16 Pro Max3 & 6.3” iPhone 16 Pro3 in Black Titanium",
    color: "#181919",
    img: blackTitaniumImg,
  },
  {
    id: 2,
    title: "6.9” iPhone 16 Pro Max3 & 6.3” iPhone 16 Pro3 in White Titanium",
    color: "#d3d1cd",
    img: whiteTitaniumImg,
  },
  {
    id: 3,
    title: "6.9” iPhone 16 Pro Max3 & 6.3” iPhone 16 Pro3 in Natural Titanium",
    color: "#959086",
    img: naturalTitaniumImg,
  },
  {
    id: 4,
    title: "6.9” iPhone 16 Pro Max3 & 6.3” iPhone 16 Pro3 in Desert Titanium",
    color: "#977e6b",
    img: desertTitaniumImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const actionButtonList = [
  {
    id: 1,
    icon: silentModeIcon,
    text: "Silent mode",
    image: screenRingSilentImg,
  },
  {
    id: 2,
    icon: focusIcon,
    text: "Focus",
    image: screenFocusImg,
  },
  {
    id: 3,
    icon: cameraIcon,
    text: "Camera",
    image: screenCameraImg,
  },
  {
    id: 4,
    icon: flashLightIcon,
    text: "Flashlight",
    image: screenFlashlightImg,
  },
  {
    id: 5,
    icon: voiceMemoIcon,
    text: "Voice memo",
    image: screenVoiceMemosImg,
  },
  {
    id: 6,
    icon: translateIcon,
    text: "Translate",
    image: screenTranslateImg,
  },
  {
    id: 7,
    icon: magnifierIcon,
    text: "Magnifier",
    image: screenMagnifierImg,
  },
  {
    id: 8,
    icon: shortcutIcon,
    text: "Shortcut",
    image: screenShortcutsImg,
  },
  {
    id: 9,
    icon: accessibilityIcon,
    text: "Accessibility",
    image: screenAccessibilityImg,
  },
];

export const SignificantOthers = [
  {
    id: 1,
    title: "iPhone and Apple Watch",
    desc: "Misplaced your iPhone? The latest Apple Watch models can show you its approximate distance and direction.21 To set up a group photo on your iPhone, join the group and use Apple Watch as a viewfinder to snap the shot. And when you take a call on your Apple Watch, just tap your iPhone to continue the conversation there.",
    img: iphoneApplewatchImg,
  },
  {
    id: 2,
    title: "iPhone and Mac",
    desc: "You can answer calls or messages from your iPhone directly on your Mac. Copy images, video, or text from your iPhone, then paste into another app on your nearby Mac. And with iCloud, you can access your favorite files from either your iPhone or Mac.",
    img: iphoneMacImg,
  },
  {
    id: 3,
    title: "iPhone and AirPods",
    desc: "Set up AirPods on iPhone with just a tap. You’ll love Adaptive Audio, which automatically tailors the noise control to provide the best listening experience across different environments and interactions throughout the day.",
    img: iphoneAirPodsImg,
  },
];

export const WaysToShopList = [
  {
    id: 1,
    icon: saveIcon,
    title: "Save with Apple Trade In.",
    desc: "Get $170–$620 in credit toward iPhone 15 or iPhone 15 Pro when you trade in iPhone 11 or higher.",
    btn: plusIcon,
  },
  {
    id: 2,
    icon: payIcon,
    title: "Pay over time interest‑free.",
    desc: "When you choose to check out with Apple Card Monthly Installments.22",
    btn: plusIcon,
  },
  {
    id: 3,
    icon: carrierIcon,
    title: "iPhone carrier deals. Right here at Apple. For as low as $0.",
    desc: "Includes trade‑in and carrier credits. AT&T: up to $1000. T‑Mobile: up to $800. Verizon: up to $830.23",
    btn: chevronRightIcon,
  },
  {
    id: 4,
    icon: deliveryIcon,
    title: "Get flexible delivery and easy pickup.",
    desc: "Choose two‑hour delivery from an Apple Store, free delivery, or easy pickup options.",
    btn: plusIcon,
  },
  {
    id: 5,
    icon: specialistIcon,
    title: "Shop live with a Specialist.",
    desc: "Let us guide you live over video and answer all of your questions.",
    btn: plusIcon,
  },
  {
    id: 6,
    icon: personalIcon,
    title: "Get to know your new iPhone.",
    desc: "Learn how to get the most out of your new iPhone with a free one‑on‑one Personal Session.",
    btn: plusIcon,
  },
  {
    id: 7,
    icon: shoppingIcon,
    title: "Explore a shopping experience designed around you.",
    desc: "Get $170–$620 in credit toward iPhone 15 or iPhone 15 Pro when you trade in iPhone 11 or higher.",
    btn: plusIcon,
  },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];

export const footerNav = [
  {
    id: 1,
    column: 1,
    header: "Shop and Learn",
    items: [
      "Store",
      "Mac",
      "iPad",
      "iPhone",
      "Watch",
      "Vision",
      "AirPods",
      "TV & Home",
      "AirTag",
      "Accessories",
      "Gift Cards",
    ],
  },
  {
    id: 2,
    column: 1,
    header: "Apple Wallet",
    items: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"],
  },
  {
    id: 3,
    column: 2,
    header: "Account",
    items: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
  },
  {
    id: 4,
    column: 2,
    header: "Entertainment",
    items: [
      "Apple One",
      "Apple TV+",
      "Apple Music",
      "Apple Arcade",
      "Apple Fitness+",
      "Apple News+",
      "Apple Podcasts",
      "Apple Books",
      "App Store",
    ],
  },
  {
    id: 5,
    column: 3,
    header: "Apple Store",
    items: [
      "Find a Store",
      "Genius Bar",
      "Today at Apple",
      "Group Reservations",
      "Apple Camp",
      "Apple Store App",
      "Certified Refurbished",
      "Apple Trade In",
      "Financing",
      "Carrier Deals at Apple",
      "Order Status",
      "Shopping Help",
    ],
  },
  {
    id: 6,
    column: 4,
    header: "For Business",
    items: ["Apple and Business", "Shop for Business"],
  },
  {
    id: 7,
    column: 4,
    header: "For Education",
    items: ["Apple and Education", "Shop for K-12", "Shop for College"],
  },
  {
    id: 8,
    column: 4,
    header: "For Healthcare",
    items: [
      "Apple in Healthcare",
      "Mac in Healthcare",
      "Health on Apple Watch",
      "Health Records on iPhone and iPad",
    ],
  },
  {
    id: 9,
    column: 4,
    header: "For Government",
    items: ["Shop for Government", "Shop for Veterans and Military"],
  },
  {
    id: 10,
    column: 5,
    header: "Apple Values",
    items: [
      "Accessibility",
      "Education",
      "Environment",
      "Inclusion and Diversity",
      "Privacy",
      "Racial Equity and Justice",
      "Supply Chain",
    ],
  },
  {
    id: 11,
    column: 5,
    header: "About Apple",
    items: [
      "Newsroom",
      "Apple Leadership",
      "Career Opportunities",
      "Investors",
      "Ethics & Compliance",
      "Events",
      "Contact Apple",
    ],
  },
];
