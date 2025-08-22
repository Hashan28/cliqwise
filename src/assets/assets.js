import {Layers,Gauge,Smartphone,BarChart,Sparkles,
Palette, Target,BrainCircuit,PenTool,Users,Search,Lightbulb,Zap,Rocket,Shield,MailCheck,MousePointer,BadgeDollarSign,Megaphone,Users2,KeyRound,CircleDollarSign,Code,Share2 ,MousePointerClick   } from 'lucide-react';



export const services = [
    {
      icon:Share2 ,
      title: "Social Media Management And Marketing ",
      description: `We create, manage, and grow your social media presence with engaging content, smart strategies, and targeted ads—helping you connect with your audience and turn followers into loyal customers.`,
    },
    {
      icon: MousePointerClick ,
      title: " Pay Per Click Advertising",
      description: `We run highly targeted PPC campaigns that drive instant traffic, qualified leads, and real results—maximizing every click and your return on investment.`,
    },
    {
      icon:Code ,
      title: "Web Development And Maintain",
      description: `We build fast, modern, and responsive websites that look great on any device. Plus, we handle regular updates, security, and performance checks—so your site runs smoothly, all the time.`,
    },
  
  ];

export const SEpackages = [
  {
    name: "Basic Plan",
    price: "Rs: 55,000",
    description: "Perfect for startups and small businesses looking to establish their online presence.",
    features: [
      "Facebook channel growth",
      "Instagram Channel Growth",
      "Only 4 Post and 1 Reel per month",
      "Content scheduling and publishing",
      "Basic engagement (likes, comments, shares)",
    ],
    highlighted: false
  },
  {
    name: "Standard Plan",
    price: "Rs: 65,000",
    description: "Ideal for growing businesses aiming to boost engagement and brand awareness.",
    features: [
      "Facebook channel growth",
      "Instagram Channel Growth",
      "Only 7 Post and 3 Reel per month",
      "Hashtag research and strategy",
      "Content scheduling, publishing, and optimization",
    ],
    highlighted: true
  },
  {
    name: "Premium Plan",
    price: "Rs: 75,000",
    description: "Designed for established brands looking for a complete, hands-off social media solution.",
    features: [
      "Facebook , Instagram , one social-media platform of your choice (Tiktok)",
      "20 posts per month (including graphics, captions & short videos)",
      "Moderate engagement (responding to comments & DMs)",
      "Content calendar creation"
    ],
    highlighted: false
  }
];


export const Webpackages = [
  {
    name: "Basic Plan",
    price: "Rs: 55,000.00",
    description: "Perfect for individuals and small businesses needing a simple, elegant online presence.",
    features: [
      "Responsive (mobile-friendly) & Unique Design",
      "Landing Page (one page)",
      "Content-Upload",
      "Basic contact form",
      "Social-Media Integration",
      "One year free hosting",
    ],
    highlighted: false
  },
  {
    name: "Standard Plan",
    price: "Rs: 70,000.00",
    description: "Ideal for growing businesses that need a more dynamic and feature-rich website.",
    features: [
      "Responsive (mobile-friendly) and Unique Design",
      "Functional Website",
      "Number of Pages 5",
      "Content-Upload",
      "Advanced contact forms (with integrations)",
      "Social-Media Integration",
      "SEO optimization (keywords, meta tags)",
    ],
    highlighted: true
  },
  {
    name: "Premium Plan",
    price: "Rs: 100,000.00",
    description: "Best for established brands requiring a powerful, high-converting website with full customization.",
    features: [
      "Responsive (mobile-friendly) and Unique Design",
      "Advanced functionalities (eCommerce, booking systems, memberships, etc.)",
      "Number of Pages -Unlimited",
      "Content-Upload",
      "Advanced contact forms (with integrations)",
      "Social-Media Integration",
      "SEO optimization (keywords, meta tags)",
      "Custom animations and interactive elements",
    ],
    highlighted: false
  }
];


export const ppcSections = [
  {
    id: 1,
    title: "Campaign",
    color: "bg-slate-600",
    icon: Megaphone ,
    description: "Special summer offer for your clothes",
    details: [
      "Customized campaign strategies",
      "Seasonal promotions",
      "Target audience segmentation",
      "Budget optimization",
      "Performance tracking"
    ]
  },
  {
    id: 2,
    title: "Ad Group",
    color: "bg-teal-400",
    icon: Users2,
    description: "Targeted user groups",
    details: [
      "Demographic targeting",
      "Interest-based grouping",
      "Behavioral targeting",
      "Geographic segmentation",
      "Device targeting"
    ]
  },
  {
    id: 3,
    title: "Keywords",
    color: "bg-rose-400",
    icon: KeyRound,
    description: "Relevant keywords per each adgroup",
    details: [
      "Keyword research",
      "Long-tail keywords",
      "Negative keywords",
      "Match types optimization",
      "Bid management"
    ]
  },
  {
    id: 4,
    title: "Ads",
    color: "bg-orange-400",
    icon: CircleDollarSign,
    description: "Summer with special fee",
    details: [
      "Ad copy optimization",
      "A/B testing",
      "Call-to-action optimization",
      "Ad extensions",
      "Quality score improvement"
    ]
  }
];

export const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on delivering measurable outcomes that drive your business forward."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Staying ahead with cutting-edge digital marketing strategies and technologies."
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We're dedicated to exceeding your expectations."
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Transparent practices and honest communication in everything we do."
  }
];

export const reviews = [
  {
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechCorp Solutions",
    review: "Working with Cliqwise transformed our digital presence completely. Their strategic approach to PPC campaigns resulted in a 150% increase in qualified leads within just three months.",
    rating: 5
  },
  {
    name: "Michael Chen",
    position: "E-commerce Manager",
    company: "Global Retail Inc",
    review: "The team's attention to detail and data-driven approach helped us optimize our ad spend and achieve a 3x ROI on our marketing investments. They're truly experts in their field.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    position: "CEO",
    company: "StartUp Innovations",
    review: "As a startup, we needed a partner who understood our unique challenges. Cliqwise not only delivered exceptional results but also provided valuable insights that helped shape our",
    rating: 5
  },
  {
    name: "David Thompson",
    position: "Digital Director",
    company: "Creative Solutions",
    review: "The level of professionalism and expertise at Cliqwise is unmatched. They've consistently delivered outstanding results and have become an integral part of our marketing success.",
    rating: 5
  }
];

export const servicesPageData = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Boost your online visibility with our data-driven SEO strategies that drive organic traffic and improve search rankings.",
    features: [
      "Keyword Research & Strategy",
      "On-Page SEO Optimization",
      "Technical SEO Audits",
      "Link Building & Authority"
    ]
  },
  {
    icon: Megaphone,
    title: "Paid Advertising",
    description: "Maximize your ROI with targeted PPC campaigns across Google, Social Media, and Display networks.",
    features: [
      "PPC Campaign Management",
      "Social Media Advertising",
      "Display Advertising",
      "Retargeting Campaigns"
    ]
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description: "Create engaging content that resonates with your audience and drives meaningful conversions.",
    features: [
      "Content Strategy",
      "Blog Writing",
      "Copywriting",
      "Content Distribution"
    ]
  },
  {
    icon: BrainCircuit,
    title: "AI Marketing Solutions",
    description: "Leverage cutting-edge AI technology to optimize your marketing efforts and stay ahead of the competition.",
    features: [
      "AI-Powered Analytics",
      "Predictive Marketing",
      "Automated Campaigns",
      "Smart Targeting"
    ]
  }
];

export const specialties = [
  {
    icon: Layers,
    title: "Full-Funnel Marketing",
    description: "Comprehensive strategies that guide customers from awareness to conversion"
  },
  {
    icon: Gauge,
    title: "Performance Marketing",
    description: "Data-driven campaigns focused on measurable results and ROI"
  },
  {
    icon: Smartphone,
    title: "Mobile Marketing",
    description: "Targeted solutions for reaching mobile-first audiences"
  },
  {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "In-depth insights and transparent reporting on campaign performance"
  },
  {
    icon: Sparkles,
    title: "Brand Development",
    description: "Strategic brand building and positioning services"
  },
  {
    icon: Palette,
    title: "Creative Services",
    description: "Eye-catching designs and compelling visual content"
  }
];


export const faqQuies=[
  {
    question:"Why is social media marketing important for my business?",
    answer:"It helps build brand awareness, engage with your audience, and drive traffic to your site. It's one of the most effective ways to grow online and build customer loyalty."
  },
  {
    question:"Which platforms do you manage for social media marketing?",
    answer:"We manage Facebook, Instagram, LinkedIn, Tiktok, and more—depending on your business goals and target audience."
  },
  {
    question:"What is Pay-Per-Click (PPC) advertising?",
    answer:"PPC is a digital advertising model where you pay only when someone clicks your ad. It’s a fast way to get targeted traffic and generate leads or sales."
  },
  {
    question:"Which platforms do you use for PPC ads?",
    answer:"We run campaigns on Google Ads, Meta (Facebook & Instagram) Ads, and sometimes LinkedIn or YouTube—based on your audience and goals."
  },
  {
    question:" What’s included in your web development service?",
    answer:"We create fully responsive, fast, and modern websites tailored to your brand. This includes design, development, mobile optimization, and basic SEO setup."
  },
  {
    question:"Do you provide ongoing website maintenance?",
    answer:"Yes! We offer maintenance packages that cover updates, security checks, backups, and performance monitoring—so your website stays smooth and secure."
  }
]