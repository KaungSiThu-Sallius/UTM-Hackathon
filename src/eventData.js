// ============================================
// HACKATHON EVENT DATA
// ============================================
// Update this file to change website content without touching the code!

export const eventData = {
    // Hero Section
    hero: {
        title: "UTMxHackathon 2026",
        subtitle: "Build. Innovate. Transform.",
        description: "An innovation-driven hackathon organised by Club PERSAKA, Universiti Teknologi Malaysia.",
        // Countdown target date: Registration closes 30 Apr 2026
        countdownDate: new Date("2026-04-30T23:59:59").getTime(),
        countdownLabel: "Registration Close",
        registerButtonText: "Register Now",
        registerLink: "https://kooq.my/events/utmxhackathon26",
    },

    // About Section
    about: {
        title: "About UTMxHackathon'26",
        content: `UTMxHackathon'26 is an exciting innovation-driven event that brings all passionate students together to transform innovative ideas into powerful solutions. It is organized by Club PERSAKA from Universiti Teknologi Malaysia. This hackathon provides a platform for participants to collaborate, think critically, and tackle real-world challenges through technology and innovation. Throughout the event, teams will work intensively to develop their ideas, connect with like-minded innovators, and showcase their creativity in a competitive yet inspiring environment.`,
        stats: [
            { number: "24", label: "Hours" },
            { number: "5", label: "Max Team Size" },
            { number: "May 24", label: "Grand Finale" },
        ],
    },

    // Tentative / Timeline
    tentative: [
        { date: "2 Mar – 30 Apr", label: "Registration", mode: "Online", icon: "📋" },
        { date: "9 Mar – 3 May", label: "Workshops", mode: "Online", icon: "🛠️" },
        { date: "4 May", label: "Opening Ceremony & Participant Briefing", mode: "Online", icon: "🎉" },
        { date: "4 – 10 May", label: "Preliminary Round", mode: "Online", icon: "💻" },
        { date: "18 – 24 May", label: "Finals Round", mode: "Online", icon: "🏆" },
        { date: "24 May", label: "Finals Round (Exhibition & Pitching)", mode: "Physical – Dewan Kejora, N28a, UTM JB", icon: "🎤" },
    ],

    // Rules Section
    rules: [
        {
            title: "Team Size",
            description: "Teams may consist of 1 to 5 members. Solo participants are welcome.",
        },
        {
            title: "Submission Requirements",
            description: "All submissions are to be made via the Koo'Q system. Required deliverables include a working prototype or demo, a project poster, and a 3-minute pitch video.",
        },
        {
            title: "Evaluation Criteria",
            description: "All submissions will be evaluated based on innovation, creativity, functionality, design impact, and presentation.",
        },
        {
            title: "Preliminary Round",
            description: "The Preliminary Round will be conducted online from 4 May to 10 May 2026.",
        },
        {
            title: "Rule Violations",
            description: "Any teams found guilty of violating the competition rules and regulations will be disqualified immediately.",
        },
    ],

    // FAQ Section
    faqs: [
        {
            question: "What is UTMxHackathon?",
            answer: "UTMxHackathon is a hackathon event organised by the Persatuan Mahasiswa Sains Komputer (PERSAKA) at Universiti Teknologi Malaysia (UTM) where teams of students collaborate to build innovative tech solutions. Participants work on real-world problem statements, design prototypes or applications, and pitch their ideas to judges.",
        },
        {
            question: "Where and when will the event be held?",
            answer: "Workshops will be carried out online from 9th March 2026 until 3rd May 2026. The opening ceremony and participant briefing will be held online on 4th May 2026. The preliminary round will be held online from 4th May to 10th May 2026. The final round will be held from 18th May to 24th May 2026. The grand finale will be held physically at Dewan Kejora, N28a, UTM Johor Bahru on 24th May 2026.",
        },
        {
            question: "Who can participate?",
            answer: "All undergraduate level university students around Malaysia are eligible to participate.",
        },
        {
            question: "How much is the registration fee?",
            answer: "Registration is completely free of charge.",
        },
        {
            question: "How do I get to UTMJB if I'm not a UTM student?",
            answer: "E-hailing services such as Grab, Maxim, and AirAsia Ride are recommended for transportation throughout the area. If you are flying to JB, you will arrive at Senai Airport. If you are taking a bus to JB, you will arrive at Larkin Bus Central.",
        },
        {
            question: "Can I back out from the competition?",
            answer: "Yes, all teams are free to back out from the competition at any phase if they wish to.",
        },
    ],

    // Sponsors Section
    sponsors: {
        title: "Our Sponsors",
        comingSoon: true,
        tiers: [], // TBD – will be updated when sponsors are confirmed
        interested: {
            title: "Interested in Sponsoring?",
            description: "Join us in supporting the next generation of innovators and get your brand in front of talented students. Download our prospectus to find out more.",
            prospectusLink: "/prospectus.pdf",
            contacts: [
                {
                    name: "Hoe Zhi Wan",
                    role: "Director of Hackathon '26",
                    phone: "+6017-5259491",
                    email: "hoezhiwan@graduate.utm.my",
                },
                {
                    name: "Asilah Binti Mohd Razak",
                    role: "Head of Sponsorship Unit",
                    phone: "+6011-39712366",
                    email: "asilah04@graduate.utm.my",
                },
            ],
        },
    },

    // Social / Footer Links
    social: {
        email: "hackathon.persakautm@gmail.com",
        telegram: { label: "PERSAKA", url: "https://t.me/persakautm" },
        instagram: { label: "@utmxhackathon26", url: "https://www.instagram.com/utmxhackathon26/" },
        linkedin: { label: "PERSAKA", url: "https://my.linkedin.com/company/persaka" },
        facebook: { label: "UTM PERSAKA", url: "https://www.facebook.com/utmpersaka/?locale=ms_MY" },
    },
};
