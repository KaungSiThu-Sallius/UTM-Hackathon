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
        stats: [],
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
            answer: "UTMxHackathon is a hackathon event organised mainly by the Persatuan Mahasiswa Sains Komputer (PERSAKA) at Universiti Teknologi Malaysia (UTM) where teams of students collaborate to build innovative tech solutions. It’s not about ‘hacking’ in the cybersecurity sense, instead, participants work on real-world problem statements, design prototypes or applications and pitch their ideas to judges."
        },
        {
            question: "Where and when the event will be held?",
            answer: "• 9/3 - 3/5 : Workshop (Online)\n• 4/5 : Opening Ceremony & Participant Briefing (Online)\n• 4/5 - 10/5 : Preliminary Round (Online)\n• 18/5 - 24/5 : Final Round (Online)\n• 24/5 : Grand Final (Dewan Kejora N28a, UTM JB)."
        },
        {
            question: "How do I get to UTMJB if I’m not a student from UTM",
            answer: "E-hailing services such as Grab, Maxim and Airasia Ride are recommended as the transportation throughout the area. If you are flying to JB, you will arrive at Senai Airport. If you are taking bus to JB, you will arrive at Larkin Bus Central."
        },
        {
            question: "Who can participate?",
            answer: "All undergraduate level university students around Malaysia."
        },
        {
            question: "Who should register in Kooq System?",
            answer: "All team members must have a Kooq account. The team leader creates the team and adds members, who must register themselves under the team."
        },
        {
            question: "How much is the registration fee?",
            answer: "We are not claiming any registration fee from participants. It’s free of charge."
        },
        {
            question: "Can I join if I only have 1 member as a team?",
            answer: "Absolutely can. The team can consists up to 5 members."
        },
        {
            question: "Can I back out from the competition?",
            answer: "Yes, all teams are free to back out from the competition at any phase if they wish to but teams will be disqualified and won’t receive a certificate"
        },
        {
            question: "Will we provide transport and accommodation for event day?",
            answer: "Transportation and accommodation will not be provided for participants. Participants are required to arrange their own transport and stay if needed."
        },
        {
            question: "Why joining our hackathon and what are the benefits?",
            answer: "Gain hands-on experience on real ideas and build innovative solution while applying technical and creative skills. Learn new tools, technologies and problem-solving approaches through workshop and collaboration.Connect with like-minded participants. Showcase project that can boost your portfolio, resume or university applications. Win exciting prizes and gain recognition for your ideas and creativity."
        }
    ],


    // Sponsors Section
    sponsors: {
        title: "Our Sponsors",
        comingSoon: true,
        tiers: [], // TBD – will be updated when sponsors are confirmed
        interested: {
            title: "Interested in Sponsoring?",
            description: "Join us in supporting the next generation of innovators and get your brand in front of talented students. Download our prospectus to find out more.",
            prospectusLink: "https://drive.google.com/file/d/1oMDbV1Erx0IXjCj2s_mTDX44Fyh8_sd_/view?usp=drive_link",
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
