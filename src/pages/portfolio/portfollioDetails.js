import Crypto1 from "../../components/assets/portfolio/production/crypto/pf1.png";
import Crypto2 from "../../components/assets/portfolio/production/crypto/pf2.png";
import Crypto3 from "../../components/assets/portfolio/production/crypto/pf3.png";
import Crypto4 from "../../components/assets/portfolio/production/crypto/pf4.png";
import Crypto5 from "../../components/assets/portfolio/production/crypto/pf5.png";
import Crypto6 from "../../components/assets/portfolio/production/crypto/pf6.png";
import Crypto7 from "../../components/assets/portfolio/production/crypto/pf7.png";
import Crypto8 from "../../components/assets/portfolio/production/crypto/pf8.png";
import Crypto9 from "../../components/assets/portfolio/production/crypto/pf9.png";
import Ecom1 from "../../components/assets/portfolio/production/ecommerce/ecm1.png";
import Ecom2 from "../../components/assets/portfolio/production/ecommerce/ecm2.png";
import Ecom3 from "../../components/assets/portfolio/production/ecommerce/ecm3.png";
import Ecom4 from "../../components/assets/portfolio/production/ecommerce/ecm4.png";
import Ecom5 from "../../components/assets/portfolio/production/ecommerce/ecm5.png";
import Ecom6 from "../../components/assets/portfolio/production/ecommerce/ecm6.png";
import Ecom7 from "../../components/assets/portfolio/production/ecommerce/ecm7.png";
import Skin1 from "../../components/assets/portfolio/production/skinCare/skc1.png";
import Skin2 from "../../components/assets/portfolio/production/skinCare/skc2.png";
import Skin3 from "../../components/assets/portfolio/production/skinCare/skc3.png";
import Skin4 from "../../components/assets/portfolio/production/skinCare/skc4.png";
import Skin5 from "../../components/assets/portfolio/production/skinCare/skc5.png";

// Production Work
export const productionWorkDetails = [
  {
    id: 1,
    title: "OmaaJWallet",
    subtitle: "Production Crypto Wallet Management App",
    info: "A web application used by businesses to manage multiple crypto wallet addresses, control which coins are publicly visible, and track balances and transaction activity from a single dashboard.",
    techStack:
      "React · Redux Toolkit · Firebase · REST APIs · Tailwind · Axios · Node.js · Express · CORS · dotenv · Git · Postman · Redux DevTools · Vercel",
    year: "2025 - Present",
    urlLink: "https://omaajwallet.vercel.app",
    images: [
      {
        id: 1,
        img: Crypto1,
      },
      {
        id: 2,
        img: Crypto2,
      },
      {
        id: 3,
        img: Crypto3,
      },
      {
        id: 4,
        img: Crypto4,
      },
      {
        id: 5,
        img: Crypto5,
      },
      {
        id: 6,
        img: Crypto6,
      },
      {
        id: 7,
        img: Crypto7,
      },
      {
        id: 8,
        img: Crypto8,
      },
      {
        id: 9,
        img: Crypto9,
      },
    ],
    role: "Frontend Engineer",
    pageSubtitle: "Multi-Wallet Crypto Management Web Application",
    pageInfo:
      "A production web application that allows users to manage multiple crypto wallet addresses across platforms, track balances and transactions, and securely control which wallet addresses are publicly visible.",
    purpose:
      "OmaajWallet is designed for users who receive crypto payments across multiple platforms (such as Trust Wallet, Binance, Coinbase) and want to manage all their wallet addresses in one place.",
    purposeDetails: {
      purposeTitle: "Access Control & Roles",
      purposeMain: "The application includes two distinct access levels.",
      children: [
        {
          title: "Public side:",
          info: "The first is a general user login that allows users to access the public-facing side of an account, where they can view active wallet addresses and copy them to make payments. This flow is designed for customers and visitors and does not allow any modification of wallet data.",
        },
        {
          title: "Authenticated admin side:",
          info: "The second is a separate, restricted admin login used only by the account owner. This admin-only dashboard allows the owner to edit wallet addresses, manage active coins, and view notification activity such as when wallet addresses are copied. This area is fully protected and not accessible to regular users.",
        },
      ],
      mainGoal:
        "The goal is organization and visibility, not holding funds. No money is deposited into the app, it acts as a centralized management layer for multiple external wallets.",
    },
    responsibilitie: {
      myRole:
        "I designed, built, and shipped the entire frontend of OmaajWallet as a production system used by real users, while also implementing a lightweight backend layer to handle API security and CORS constraints.",
      respos: "I was responsible for:",
      children: [
        "Full authentication flow using Firebase (sign up, login, logout)",
        "Protected routes using React Router to secure the dashboard",
        "Two-step verification using a unique 12-word phrase generated at signup",
        "Public and private views with different access levels",
        "Integration with CoinMarket API to fetch real-time coin data",
        "Global state management for transactions, coins, notifications, and user data",
        "QR code generation for quick wallet address sharing",
        "Notification system that tracks when wallet addresses are copied",
        "Deployment and production setup",
        "API integration and network-layer problem solving",
      ],
    },
    features: [
      "User registration and secure login",
      "Import and verify recovery phrase after authentication",
      "Add, edit, and manage multiple wallet addresses",
      "Activate or deactivate specific coins",
      "View balances per coin and total balances",
      "View transaction history and receipts",
      "Search and filter coins",
      "Public access to active wallet addresses and market prices",
      "QR code support for fast wallet address sharing",
      "Live cryptocurrency prices integrated via CoinMarket API",
    ],
    challenges: [
      {
        header: "API Integration & CORS Handling",
        problem:
          "When integrating the CoinMarket API, direct client-side requests were blocked due to CORS and browser Same-Origin Policy restrictions.",
        solution:
          "I implemented a backend proxy server using Node.js, Express, CORS, and dotenv.",
      },
      {
        header: "Multi-user data separation",
        problem:
          "When converting the app from a single-user setup to a multi-user system, I needed to ensure each user’s data remained isolated.",
        solution:
          "Each user is assigned a unique ID, and all wallet data, transactions, and settings are stored under that ID in the database. This ensured actions performed by one user never affected another.",
      },
      {
        header: "Deployment architecture",
        problem:
          "Deploying both the frontend and the API server together caused issues in production.",
        solution:
          "I separated the frontend and backend deployments, hosted them independently, and connected them through environment-based API URLs. This improved reliability and simplified debugging.",
      },
      {
        header: "State consistency across features",
        problem:
          "Managing transactions, coin data, notifications, and authentication state across multiple screens introduced complex state dependencies.",
        solution:
          "I structured global state using Redux Toolkit and Redux Thunk for async actions, ensuring predictable updates and preventing stale or duplicated data.",
      },
    ],
    debugging: {
      children: [
        {
          header: "Chrome DevTools",
          solution:
            "Used the Network, Console, and Application tabs to trace API requests, inspect headers, debug runtime errors, and verify authentication state.",
        },
        {
          header: "Redux DevTools",
          solution:
            "Tracked dispatched actions and state changes to identify incorrect reducers, missing updates, and unexpected state mutations.",
        },
        {
          header: "Postman",
          solution:
            "Tested CoinMarket API endpoints independently to validate headers, API keys, and responses before integrating them into the app.",
        },
      ],
      conclusion:
        "This debugging workflow helped me catch issues early and resolve problems that only appeared during real usage.",
    },
    demostrate: {
      conclusion: "This project demonstrates my ability to:",
      children: [
        "build and ship production-ready, multi-user applications",
        "Handle real-world API limitations such as CORS and SOP restrictions",
        "understand authentication, protected routes, and user-scoped data",
        "integrate third-party APIs and handle real-world failures",
        "design frontend applications as systems, not just interfaces",
        "be comfortable debugging issues across UI, state, and network layers",
      ],
    },
  },

  {
    id: 2,
    title: "Vita Renewal Aesthetics",
    subtitle: "Production Business Website & Appointment Platform",
    info: "A live appointment-booking website built for a UK aesthetics clinic, transforming UI/UX designs into a production-ready customer platform.",
    techStack: "React · CSS · Firebase · Git",
    year: "2024 - Present",
    urlLink: "https://vitarenewalaesthetics.com",
    images: [
      {
        id: 1,
        img: Skin1,
      },
      {
        id: 2,
        img: Skin2,
      },
      {
        id: 3,
        img: Skin3,
      },
      {
        id: 4,
        img: Skin4,
      },
      {
        id: 5,
        img: Skin5,
      },
    ],
    role: "Frontend Engineer",
    pageSubtitle:
      "Production Business Website for Aesthetic & Skincare Services",
    pageInfo:
      "A live branding and appointment-booking website built for a UK-based aesthetics business, designed to showcase treatments, capture client enquiries, and convert visitors into booked appointments.",
    purpose:
      "Vita Renewal Aesthetics is a production website built for a London-based aesthetics clinic to present their services, build brand trust, and allow customers to book appointments online.",
    purposeDetails: {
      children: [
        {
          title: "The site is fully public and focuses on:",
          children: [
            "Showcasing aesthetic and skincare treatments in a structured, easy-to-navigate layout",
            "Providing detailed information about each service offered",
            "Allowing customers to request appointments through a booking form",
            "Displaying the business location using an embedded interactive map",
          ],
        },
        {
          title: "Customers can submit:",
          children: ["Name", "Email", "Phone number", "Requested treatment"],
        },
      ],
      mainGoal:
        "All admin actions instantly reflect for all users in real time. The website acts as a digital storefront and lead-generation platform for the business.",
    },
    responsibilitie: {
      children: [
        "Implemented the full responsive frontend based on UI/UX designs",
        "Translated Figma designs into a functional production website",
        "Built dynamic service detail pages using React routing and parameters",
        "Implemented appointment booking form with email delivery",
        "Integrated interactive Google Maps iframe for business location",
        "Structured content for scalability as new treatments are added",
        "Optimized layout for usability, performance, and real customer interaction",
      ],
    },
    features: [
      "Public access to all service and branding pages",
      "Detailed treatment pages generated dynamically",
      "Appointment booking form with email notifications",
      "Location map with pinpointed clinic address",
      "Smooth navigation between service categories",
      "Responsive design for mobile and desktop users",
    ],
    challenges: [
      {
        header: "Converting UI/UX designs into a real production site",
        problem:
          "Working closely with a UI/UX designer required accurately translating static designs into a responsive, functional web experience.",
        solution:
          "I broke down the designs into reusable React components and implemented consistent layouts while maintaining design accuracy across devices.",
      },
      {
        header: "Dynamic treatment detail system",
        problem:
          "Rather than creating separate static pages for each treatment, I implemented a scalable structure using arrays of treatment data.",
        solution:
          "I used React routing with parameters to dynamically load treatment details when users click on a service, making the system easy to extend in the future.",
      },
    ],
    debugging: {
      children: [
        {
          header: "Chrome DevTools",
          solution:
            "Used to debug layout issues, form submissions, console errors, and responsiveness across screen sizes.",
        },
      ],
    },
    demostrate: {
      conclusion: "This project demonstrates my ability to:",
      children: [
        "collaborate effectively with designers and stakeholders",
        "turn UI/UX designs into real production websites",
        "understand real-world business requirements (branding, leads, conversions)",
        "build scalable frontend structures instead of static pages",
        "deliver live applications used by real customers",
      ],
    },
  },
  {
    id: 3,
    title: "Rimberios",
    subtitle: "Production E-commerce Management Platform",
    info: "A live e-commerce web application that enables a business owner to manage products in real time while customers browse, shop, checkout securely, and receive order updates.",
    techStack: "React · Redux Toolkit · Firebase · CSS · Git · Vercel",
    year: "2023 - Present",
    urlLink: "https://rimberios.vercel.app/",
    role: "Frontend Engineer",
    pageSubtitle:
      "E-Commerce Product Management & Online Store Web Application",
    pageInfo:
      "A production e-commerce web application built for a single entrepreneur to manage and sell clothing, bags, gadgets, and accessories online, with full admin control, user authentication, shopping cart system, order tracking, and crypto/PayPal payments.",
    purpose:
      "Rimberios is a complete online store platform designed for an individual business owner who sells products such as:",
    listPurpose: {
      children: [
        "Clothing (men, women, children)",
        "Bags, shoes, wristwatches",
        "Gadgets and accessories",
      ],
      conclusion:
        "The platform allows the business owner to upload, update, and manage products in real time while customers can browse, register, place orders, and complete payments online.",
    },
    images: [
      {
        id: 1,
        img: Ecom2,
      },
      {
        id: 2,
        img: Ecom1,
      },
      {
        id: 3,
        img: Ecom3,
      },
      {
        id: 4,
        img: Ecom4,
      },
      {
        id: 5,
        img: Ecom5,
      },
      {
        id: 6,
        img: Ecom6,
      },
      {
        id: 7,
        img: Ecom7,
      },
    ],
    purposeDetails: {
      purposeTitle: "Access Control & Roles",
      purposeMain: "The application includes two distinct access levels.",
      children: [
        {
          title: "Public customer side",
          info: "Users can:",
          children: [
            "Register and log in",
            "Browse products by category (women, men, gadgets, etc.)",
            "Search for items by name",
            "Sort products by price (ascending/descending) and alphabetically (A–Z, Z–A)",
            "Add items to cart",
            "View total cost and quantity",
            "Checkout (only after authentication)",
            "Make payments using Bitcoin or PayPal",
            "Receive order status updates from the admin",
          ],
        },
        {
          title: "Private admin side",
          info: "Only the business owner (admin) can access:",
          children: [
            "Product creation (upload images, name, price, category)",
            "Product editing and deletion",
            "Order management",
            "Updating customers on delivery status and movement of goods",
          ],
        },
      ],
      mainGoal:
        "All admin actions instantly reflect for all users in real time.",
    },
    responsibilitie: {
      myRole:
        "I developed the full frontend system and product flow including:",
      children: [
        "User authentication system with Firebase (signup, login, logout)",
        "Protected routes using React Router (users must log in before checkout)",
        "Separate admin and customer dashboards",
        "Real-time product management with Firestore and Firebase Storage",
        "Global shopping cart system using Redux Toolkit",
        "Cart calculations (total price, quantity, item count)",
        "Order submission flow from customer to admin",
        "Role-based UI (admin-only buttons and panels hidden from users)",
        "Sorting, filtering, searching, and pagination for product lists",
        "Deployment to production",
      ],
    },
    features: [
      "Secure login and registration",
      "Product browsing by category",
      "Search and filtering system",
      "Shopping cart with real-time updates",
      "Checkout protection for logged-in users only",
      "Bitcoin and PayPal payment options",
      "Order submission and tracking",
    ],
    adminFeatures: [
      "Upload products with images",
      "Edit existing items",
      "Delete products",
      "Manage orders",
      "Send delivery updates to customers",
    ],
    globalFeatures: {
      myRole: "I used Redux Toolkit to manage:",
      children: [
        "Cart items",
        "Total price calculations",
        "Quantity per product",
        "Add/remove logic",
        "Order-related state",
      ],
      conclusion:
        "This ensured consistent data across pages and prevented cart bugs during navigation.",
    },
    debugging: {
      roleUse:
        "Since the app uses Firebase directly (no external REST API), I focused on frontend and state debugging using:",
      children: [
        {
          header: "Chrome DevTools",
          children: [
            "Console for runtime errors",
            "Network tab for Firebase requests",
          ],
        },
        {
          header: "Redux DevTools",
          children: [
            "Tracked cart updates and state mutations",
            "Debugged incorrect totals and item duplication",
          ],
        },
      ],
      conclusion:
        "This helped maintain a stable shopping experience in production.",
    },
    demostrate: {
      conclusion: "This project demonstrates my ability to:",
      children: [
        "build full production e-commerce workflows",
        "understand authentication and protected routes",
        "design role-based access (admin vs customer)",
        "manage real-time data updates",
        "build scalable cart and product systems",
        "ship apps used by real people",
      ],
    },
  },
];

// productionDetails

export const roleDetails = (field, liveActive) => [
  {
    title: "Role:",
    value: field.role,
  },
  {
    title: "Stack:",
    value: field.techStack,
  },
  !field.category && {
    title: "Status:",
    value: liveActive,
  },
  {
    title: "Timeline:",
    value: field.year,
  },
];

// Systems Details
export const systemDetails = [
  {
    id: 1,
    title: "OmaaJPay",
    subtitle:
      "System Design Banking Application (Citibank-Inspired Digital Platform)",
    info: "A digital banking simulation featuring multi-bank transfers, savings & checking accounts, secure authentication, and real-time transaction management.",
    techStack:
      "React · Redux Toolkit · Firebase · REST APIs · Tailwind · Axios · Git · Postman · Redux DevTools · Vercel",
    year: "2025",
    urlLink: "https://citibankonline.vercel.app/personalBanking",
    role: "Frontend Engineer",
    category: "systems",
    pageSubtitle:
      "System Design Banking Application (Citibank-Inspired Digital Banking Platform)",
    pageInfo:
      "A fully functional digital banking simulation that replicates real-world banking workflows including multi-bank transfers, savings and checking accounts, transaction history, secure authentication with two-factor verification, and external bank integrations.",
    purpose:
      "OmaajPay is a system design banking platform created to simulate how modern digital banks like Citibank operate.",
    listPurpose: {
      role: "It allows users to:",
      children: [
        "Create secure banking accounts",
        "Verify access using a two-step authentication process",
        "Manage checking and savings accounts",
        "Connect external local and international banks",
        "Transfer funds between banks and accounts",
        "Track balances and transaction history in real time",
      ],
      conclusion:
        "Since real money cannot be transferred in a test environment, each connected external bank is initialized with a $10,000 virtual balance per user.",
    },
    images: [
      {
        id: 1,
        img: Ecom2,
      },
      {
        id: 2,
        img: Ecom1,
      },
      {
        id: 3,
        img: Ecom3,
      },
      {
        id: 4,
        img: Ecom4,
      },
      {
        id: 5,
        img: Ecom5,
      },
      {
        id: 6,
        img: Ecom6,
      },
      {
        id: 7,
        img: Ecom7,
      },
    ],
    purposeDetails: {
      children: [
        {
          info: "Each user is assigned a unique ID so:",
          children: [
            "Transfers only affect that user’s linked banks",
            "No user’s balance interferes with another",
          ],
        },
      ],
      mainGoal:
        "This mirrors how real financial systems isolate customer data.",
    },
    platform: [
      {
        title: "Public front page",
        subtitle: "Just like real banks, OmaajPay includes:",
        children: [
          "A marketing-style landing page",
          "Product explanations",
          "Bank branding layout",
        ],
        conclusion: "This introduces users before authentication.",
      },
      {
        title: "Secure user dashboard (after login + verification)",
        subtitle:
          "Users access a full banking dashboard with three major sections:",
        parent: [
          {
            mainTitle: "Overview",
            children: [
              "Account summary",
              "Recent transactions (last 30 days)",
              "Toggle between savings and checking activity",
            ],
          },
          {
            mainTitle: "Checking Account",
            children: [
              "Available balance",
              "Account information",
              "Full transaction history",
              "Filter by time range (7 days → 12 months)",
              "Search by description",
              "Filter by credit, debit, or all",
            ],
            conclusion: "Displayed in a real banking table format:",
            subConclusion:
              "Date | Description | Debit | Credit | Available Balance",
          },
          {
            mainTitle: "Savings Account",
            subTitle: "Mirrors all checking account features with:",
            children: [
              "Independent balance",
              "Independent transaction history",
              "Same filtering and search functionality",
            ],
          },
        ],
      },
      {
        title: "External bank connections & transfers",
        subtitle: "Users can attach:",
        children: ["Local banks", "International banks"],
        parent: [
          {
            mainTitle: "Using:",
            children: [
              "Manual routing & account number input",
              "Plaid-style authentication flow",
            ],
          },
          {
            mainTitle: "Once connected:",
            children: [
              "Funds can be transferred between banks and OmaajPay accounts",
              "Transfers instantly reflect across balances",
            ],
          },
        ],
      },
      {
        title: "Card integration",

        parent: [
          {
            mainTitle: "Users can also add:",
            children: ["Debit cards", "Credit cards"],
          },
          {
            mainTitle: "With real validation logic:",
            children: ["Card number", "CVV", "Expiry date"],
            conclusion:
              "The system blocks invalid or expired cards, simulating real banking checks.",
          },
        ],
      },
    ],
    responsibilitie: {
      myRole:
        "I developed the full frontend system and product flow including:",
      children: [
        "User authentication system with Firebase (signup, login, logout)",
        "Protected routes using React Router",
        "Two-factor style verification using generated backup codes",
        "Multi-user balance handling",
        "Real-time transaction updates",
        "External local banking finance API",
        "External local banking finance API",
        "Integrated using Axios and async Redux flows",
      ],
    },
    features: [
      "Secure login and registration",
      "Two-step verification flow",
      "View balances in real time",
      "Transfer between banks and accounts",
      "Order submission and tracking",
      "Advanced filtering & searching",
      "Full transaction history",
      "Full transaction history",
      "Card-based transfers",
    ],
    challenges: [
      {
        header: "Multi-user banking data isolation",
        problem:
          "When scaling the system to support multiple users, transactions initially overlapped.",
        solution:
          "Assigned each user a unique ID and stored all balances, banks, and transactions under that ID in Firebase.",
      },
    ],
    debugging: {
      children: [
        {
          header: "Chrome DevTools",
          children: [
            "Traced API requests",
            "Debugged component state",
            "Inspected auth sessions",
            "Analyzed network responses",
          ],
        },
        {
          header: "Redux DevTools",
          children: [
            "Tracked dispatched actions",
            "Debugged broken slices",
            "Monitored async flows",
          ],
        },
        {
          header: "Postman",
          children: [
            "Tested banking API endpoints",
            "Validated headers & keys",
            "Ensured clean API responses before integration",
          ],
        },
      ],
    },
    demostrate: {
      conclusion: "This project demonstrates my ability to:",
      children: [
        "design complex system flows",
        "understand real banking logic and user isolation",
        "understand real banking logic and user isolation",
        "integrate third-party APIs professionally",
        "think beyond UI into full application systems",
      ],
    },
  },
];

// professional
export const professionalDetails = [
  {
    id: 1,
    title: "Frontend Engineer",
    company: "Ovaloop",
    companyBrand: "SaaS Business Management Platform",
    year: "May 2025 – September 2025",
    url: "https://www.ovaloop.com/",
    info: "Ovaloopp is a SaaS business management platform designed to help small and medium-sized businesses manage inventory, sales, staff roles, customer wallets, and daily operations through a centralized dashboard.",
    contribution: [
      "Built and optimized customer-facing dashboard features for inventory, transactions, and customer management within a production SaaS platform.",
      "Integrated REST APIs using Axios to manage real-time business data across inventory and transaction workflows.",
      "Managed complex shared state using Redux Toolkit across multiple dashboard views.",
      "Strengthened application reliability by debugging API inconsistencies and improving error handling in production.",
      "Standardized responsive UI components with Tailwind CSS and collaborated cross-functionally to ship features and fixes.",
    ],
    stack: "React, Redux Toolkit, REST APIs, Axios, Tailwind CSS, Git",
    challenges: [
      "Worked through inconsistent API responses by debugging network requests and adjusting frontend logic to handle real-world backend behavior.",
      "Gained hands-on experience managing shared state across complex dashboard screens and learning how production applications handle real data flows.",
    ],
    impact: [
      "Contributed to shipping customer-facing features used by real businesses on the platform.",
      "Helped improve performance and UI consistency across key sections of the dashboard.",
      "Supported production releases by implementing features and fixing bugs alongside the frontend team.",
    ],
  },
  {
    id: 2,
    company: "Vita Renewal Aesthetics",
    title: "Frontend Engineer",
    companyBrand: "Branding & Appointment Platform (UK)",
    year: "August 2024 – February 2025",
    url: "https://vitarenewalaesthetics.com/",
    info: "A live branding and appointment-booking website built for a UK-based aesthetics business, designed to showcase treatments, capture client enquiries, and convert visitors into booked appointments.",
    contribution: [
      "Built and deployed a fully responsive React website, translating Figma designs into reusable, component-driven architecture.",
      "Implemented dynamic service pages using React Router and structured data patterns for scalable content management.",
      "Developed an appointment booking form to capture customer inquiries and support direct lead generation.",
      "Ensured mobile-first responsiveness and production readiness through debugging and performance refinement.",
    ],
    stack: "React, CSS, Git",
    challenges: [
      "Working from UI/UX designs required precision in layout structure and responsiveness. I broke the designs into modular React components and ensured consistency across screen sizes while maintaining visual accuracy.",
      "Instead of building static pages for every treatment, the site needed flexibility for future updates. I implemented dynamic routing with structured data arrays, allowing new services to be added easily without rewriting components.",
    ],
    impact: [
      "Delivered a live production website actively used by real customers",
      "Improved the business’s online visibility and professionalism",
      "Enabled direct customer inquiries and lead generation",
      "Provided a scalable frontend structure for future growth",
    ],
  },
  {
    id: 3,
    company: "Planpaddy Technologies",
    title: "Frontend Developer",
    companyBrand: "IT Solutions Company",
    year: "June 2023 – May 2024",
    url: "https://nigeria24.me/waleco-nig-ltd?utm_source=planpaddy-technologies",
    info: "Planpaddy Technologies is an IT solutions company that builds web platforms and digital tools for businesses, including dashboards and custom software solutions.",
    contribution: [
      "Built and styled responsive UI components using HTML, CSS, and JavaScript for internal and client-facing web applications.",
      "Translated design mockups into structured, user-friendly layouts across multiple screen sizes.",
      "Implemented interactive behaviors using JavaScript for forms, content updates, and user interactions.",
      "Resolved UI bugs and improved layout consistency in collaboration with the development team.",
    ],
    stack: "HTML, CSS, JavaScript, Git",
    challenges: [
      "Learned to translate design mockups into clean, responsive layouts across different screen sizes",
      "Improved problem-solving skills by debugging layout issues and JavaScript interactions",
      "Gained experience working within a development team and following real project workflows",
      "Developed a strong foundation in frontend fundamentals that prepared me for modern frameworks like React",
    ],
    impact: [
      "Contributed to polished UI implementations used in real business tools",
      "Helped improve visual consistency and usability across multiple pages",
      "Built a solid frontend foundation that supported my growth into more advanced frontend development",
    ],
  },
];

// Professional Single Details

export const profDetails = (field) => [
  {
    name: "Key Contributions & Responsibilities",
    value: field.contribution,
  },
  {
    name: "Challenges & Growth",
    value: field.challenges,
  },
  {
    name: "Impact",
    value: field.impact,
  },
];
