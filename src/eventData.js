// ============================================
// HACKATHON EVENT DATA
// ============================================
// Update this file to change website content without touching the code!

export const eventData = {
    // Hero Section
    hero: {
        title: "UTM HACKATHON 2026",
        subtitle: "Build. Innovate. Transform.",
        description: "Join us for 48 hours of innovation, collaboration, and coding excellence.",
        // Countdown target date (3 months from now: May 9, 2026)
        countdownDate: new Date("2026-05-09T09:00:00").getTime(),
        registerButtonText: "Register Now",
    },

    // About Section
    about: {
        title: "About the Event",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        stats: [
            { number: "500+", label: "Participants" },
            { number: "48", label: "Hours" },
            { number: "$10K", label: "In Prizes" },
            { number: "20+", label: "Mentors" },
        ],
    },

    // Rules Section
    rules: {
        title: "Competition Rules",
        items: [
            {
                title: "Team Formation",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Teams of 2-5 members are allowed.",
            },
            {
                title: "Project Requirements",
                description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. All code must be written during the event.",
            },
            {
                title: "Submission Guidelines",
                description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Submit via our platform by the deadline.",
            },
            {
                title: "Judging Criteria",
                description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Innovation, execution, and presentation matter.",
            },
        ],
    },

    // FAQ Section
    faqs: [
        {
            question: "What is a hackathon?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            question: "Do I need to have a team?",
            answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            question: "What should I bring?",
            answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            question: "Is there a registration fee?",
            answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            question: "Will food be provided?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Meals and snacks will be provided throughout the event.",
        },
        {
            question: "Can beginners participate?",
            answer: "Absolutely! Sed do eiusmod tempor incididunt ut labore. We welcome hackers of all skill levels.",
        },
    ],

    // Sponsor Tiers
    sponsors: {
        title: "Our Sponsors",
        tiers: [
            {
                name: "Platinum",
                color: "from-gray-200 to-gray-400",
                companies: [
                    { name: "TechCorp Global", logo: "https://via.placeholder.com/200x80/E5E7EB/1F2937?text=TechCorp" },
                    { name: "Innovation Labs", logo: "https://via.placeholder.com/200x80/E5E7EB/1F2937?text=Innovation+Labs" },
                ],
            },
            {
                name: "Gold",
                color: "from-yellow-400 to-yellow-600",
                companies: [
                    { name: "StartupHub", logo: "https://via.placeholder.com/180x70/FDE047/854D0E?text=StartupHub" },
                    { name: "CodeMasters", logo: "https://via.placeholder.com/180x70/FDE047/854D0E?text=CodeMasters" },
                    { name: "DevTools Inc", logo: "https://via.placeholder.com/180x70/FDE047/854D0E?text=DevTools" },
                ],
            },
            {
                name: "Silver",
                color: "from-gray-300 to-gray-500",
                companies: [
                    { name: "CloudServe", logo: "https://via.placeholder.com/160x60/D1D5DB/374151?text=CloudServe" },
                    { name: "DataFlow", logo: "https://via.placeholder.com/160x60/D1D5DB/374151?text=DataFlow" },
                    { name: "AppBuilder", logo: "https://via.placeholder.com/160x60/D1D5DB/374151?text=AppBuilder" },
                    { name: "WebSolutions", logo: "https://via.placeholder.com/160x60/D1D5DB/374151?text=WebSolutions" },
                ],
            },
        ],
    },

    // Schedule (for future use)
    schedule: [
        { time: "9:00 AM", event: "Registration & Breakfast", day: "Day 1" },
        { time: "10:00 AM", event: "Opening Ceremony", day: "Day 1" },
        { time: "11:00 AM", event: "Hacking Begins!", day: "Day 1" },
        { time: "1:00 PM", event: "Lunch", day: "Day 1" },
        { time: "6:00 PM", event: "Dinner", day: "Day 1" },
        { time: "12:00 AM", event: "Midnight Snacks", day: "Day 1" },
        { time: "8:00 AM", event: "Breakfast", day: "Day 2" },
        { time: "11:00 AM", event: "Hacking Ends", day: "Day 2" },
        { time: "12:00 PM", event: "Project Presentations", day: "Day 2" },
        { time: "3:00 PM", event: "Awards Ceremony", day: "Day 2" },
    ],

    // Social Links
    social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#",
        discord: "#",
    },

    // Contact
    contact: {
        email: "hello@utmhackathon.com",
        location: "University of Technology Malaysia",
    },
};
