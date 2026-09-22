export const siteConfig = {
  schoolName: "Yashraj English High School & College",
  schoolShortName: "Yashraj English High School & College",
  ownerName: "Mr. Parshuram Yadav",
  principalName: "Fiyaz Uddins",
  phoneDisplay: "+91 89998 26471",
  phoneHref: "tel:+918999826471",
  whatsappNumber: "918999826471",
  whatsappLink: "https://wa.me/918999826471",
  address: "RQ77+G2Q, Shigaon Rd, Krishna Nagar, Boisar, Maharashtra 401501",
  logoText: "Yashraj English High School & College",
  schoolTagline: "Nurturing confidence, character, and academic excellence for every learner.",
  metaDescription:
    "Yashraj English High School & College blends strong academics, value-based learning, and a caring campus environment to help students thrive.",
  social: {
    instagram: "https://www.instagram.com/yashrajenglishighschool/",
    facebook: "https://www.facebook.com/search/top?q=Yash%20Raj%20English%20High%20School%20%26%20Jr%20College",
    youtube: "https://www.youtube.com/results?search_query=Yash+Raj+English+High+School+%26+Jr+College",
  },
  schoolBoard: "CBSE / State Board curriculum",
  mapEmbedUrl: "https://www.google.com/maps?q=19.8138146,72.7624803&z=17&output=embed",
  metadataBase: "https://example-school.vercel.app",
  heroImage: "/images/hero/hero-home.png",
  principalImage: "/images/principal/principal-placeholder.svg",
  ownerImage: "/images/owner/owner-photo.svg",
  logo: "/images/branding/logo.jpg",
  navLinks: [
    { label: "Home", href: "/" },
    {
      label: "About",
      href: "/about",
      dropdown: [
        { label: "Our Institution", href: "/about#institution" },
        { label: "Vision & Mission", href: "/about#vision" },
        { label: "Principal's Message", href: "/about#principal" },
        { label: "Management", href: "/about#management" },
      ],
    },
    {
      label: "Academics",
      href: "/academics",
      dropdown: [
        { label: "School Academics", href: "/academics#overview" },
        { label: "Junior College – Science", href: "/academics#science" },
        { label: "Junior College – Commerce", href: "/academics#commerce" },
        { label: "Our Faculty", href: "/academics#faculty" },
      ],
    },
    {
      label: "Admissions",
      href: "/admissions",
      dropdown: [
        { label: "School Admission", href: "/admissions#school" },
        { label: "Junior College Admission", href: "/admissions#junior-college" },
        { label: "Eligibility", href: "/admissions#eligibility" },
        { label: "Process", href: "/admissions#process" },
        { label: "Documents", href: "/admissions#documents" },
      ],
    },
    {
      label: "Campus",
      href: "/campus",
      dropdown: [
        { label: "Infrastructure", href: "/campus#infrastructure" },
        { label: "Laboratories", href: "/campus#laboratories" },
        { label: "Sports & Facilities", href: "/campus#sports" },
      ],
    },
    {
      label: "Student Life",
      href: "/student-life",
      dropdown: [
        { label: "Events", href: "/student-life#events" },
        { label: "Activities", href: "/student-life#activities" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ],
  stats: [
    { label: "Board pass rate", value: 98.9, suffix: "%", description: "Academic excellence" },
    { label: "Years of excellence", value: 11, suffix: "+", description: "Steady growth" },
    { label: "Students", value: 1200, suffix: "+", description: "Across classes" },
    { label: "Faculty", value: 72, suffix: "+", description: "Mentors & guides" },
  ],
  features: [
    { title: "Academics", description: "Balanced learning with guided study habits, strong mentoring, and a focus on concept clarity.", icon: "BookOpen" },
    { title: "Junior College Science & Commerce", description: "Focused streams that prepare students for competitive exams and future career pathways.", icon: "GraduationCap" },
    { title: "Experienced Faculty", description: "Dedicated teachers who combine subject expertise with personal encouragement and care.", icon: "Users" },
    { title: "Modern Labs", description: "Well-equipped science, ICT, and practical learning spaces that make concepts come alive.", icon: "FlaskConical" },
    { title: "Sports", description: "Physical vigor, teamwork, and a healthy routine are woven into campus life.", icon: "Trophy" },
    { title: "Activities", description: "Cultural, literary, and co-curricular opportunities that build confidence beyond the classroom.", icon: "Sparkles" },
  ],
  testimonials: [
    {
      quote: "The teachers here do not just teach—they mentor. My daughter gained confidence in both academics and character.",
      name: "Ritu Sharma",
      relation: "Parent of Grade 10 student",
    },
    {
      quote: "The junior college faculty helped our son focus on both board excellence and competitive readiness with clarity.",
      name: "Amit Patil",
      relation: "Parent of FYJC student",
    },
    {
      quote: "The school balances discipline and warmth beautifully. Students are encouraged to lead, excel, and give back.",
      name: "Sneha Kulkarni",
      relation: "Parent of Grade 8 student",
    },
  ],
  gallery: [
    { title: "Classroom learning", image: "/images/gallery/gallery-1.svg" },
    { title: "Campus events", image: "/images/gallery/gallery-2.svg" },
    { title: "Science activity", image: "/images/gallery/gallery-3.svg" },
    { title: "School culture", image: "/images/gallery/gallery-4.svg" },
  ],
  faculty: [
    { name: "Mrs. Aditi Deshmukh", subject: "Mathematics", qualification: "B.Sc., M.Sc. Mathematics", image: "/images/faculty/teacher-1.svg" },
    { name: "Mr. Rohan Khan", subject: "Physics", qualification: "B.Sc. Physics, M.Ed.", image: "/images/faculty/teacher-2.svg" },
    { name: "Ms. Priya Joshi", subject: "Biology", qualification: "B.Sc. Life Sciences", image: "/images/faculty/teacher-3.svg" },
    { name: "Mr. Sagar Yadav", subject: "Commerce", qualification: "B.Com., M.Com.", image: "/images/faculty/teacher-4.svg" },
  ],
  events: [
    { title: "Annual Science Exhibition", date: "12 Oct 2026", description: "Students showcase innovation, practical inquiry, and collaborative learning.", featured: true },
    { title: "Inter-School Sports Day", date: "05 Nov 2026", description: "A spirited celebration of teamwork, fitness, and sporting values.", featured: false },
    { title: "Cultural Fest Week", date: "18 Dec 2026", description: "Music, dance, dramatics, and art bring the school community together.", featured: false },
  ],
  activities: [
    { title: "Literary Club", description: "Debates, essays, and presentations that sharpen expression and confidence." },
    { title: "Science Club", description: "Hands-on project work and inquiry-driven exploration beyond the textbook." },
    { title: "Sports & Wellness", description: "Games, drills, and competitions that reinforce discipline and resilience." },
    { title: "Arts & Culture", description: "Music, dance, painting, and stage performance that celebrate creativity." },
  ],
  management: [
    { name: "Mr. Parshuram Yadav", title: "Founder & Owner", image: "/images/owner/owner-photo.svg", bio: "Guiding the school with a vision where every child feels seen, supported, and inspired to excel." },
    { name: "Fiyaz Uddins", title: "Principal", image: "/images/principal/principal-placeholder.svg", bio: "Creating a school culture rooted in values, curiosity, and academic confidence." },
    { name: "Trustees & Mentors", title: "Advisory Team", image: "/images/owner/owner-photo.svg", bio: "Experienced education leaders shaping holistic growth and community values." },
  ],
  schoolAdmission: {
    overview: "A nurturing environment for young learners, guided by discipline, care, and curiosity.",
    criteria: [
      "Age-appropriate admission according to the current academic year norms.",
      "Previous academic records and interaction with the school team.",
      "Supportive communication with parents to ensure the right student-fit." ,
    ],
  },
  juniorCollegeAdmission: {
    overview: "A focused, future-ready learning path for Science and Commerce students through mentoring and discipline.",
    criteria: [
      "Completion of the qualifying class/grade as per academic norms.",
      "Interest alignment with the selected stream and subject combination.",
      "Academic performance review and counselling for readiness.",
    ],
  },
  processSteps: [
    "Enquiry",
    "Document Submission",
    "Interaction/Test",
    "Confirmation",
    "Fee Payment",
  ],
  requiredDocuments: [
    "Birth certificate / age proof",
    "Previous school report card",
    "Transfer certificate (if applicable)",
    "Passport-size photographs",
    "Address proof and parent ID",
  ],
  principalMessage: {
    text: "Welcome to Yashraj English High School & Jr. College. Our school is built around the idea that every child deserves a bright beginning, a strong sense of values, and the opportunity to grow with confidence. We believe learning must be joyful, purposeful, and rooted in character. Our team works with care and commitment to help students become disciplined, compassionate, and academically capable citizens of tomorrow. We are proud to provide a learning environment that encourages curiosity, creativity, and resilience. We invite families to partner with us in shaping a future filled with opportunity, dignity, and excellence.",
    signature: "— Fiyaz Uddins, Principal",
  },
  ownerMessage: {
    text: "When I envisioned this school, I wanted more than classrooms and results. I wanted a place where every student feels respected, encouraged, and empowered to discover their potential. At Yashraj English High School & Jr. College, we aim to nurture not only bright minds but also strong values, resilient character, and a healthy sense of belonging. We are committed to shaping young learners into confident, responsible, and compassionate citizens who contribute meaningfully to society. We believe that true education grows from care, discipline, and a sincere commitment to excellence. I thank our families, teachers, and students for being part of this journey.",
    signature: "Mr. Parshuram Yadav, Founder & Owner",
  },
  aboutIntro:
    "Yashraj English High School & Jr. College is a values-led learning institution committed to helping students grow academically, socially, and personally. Our aim is to provide a caring and disciplined environment where every learner can thrive, think independently, and develop the confidence to build a meaningful future.",
  vision: "To become a trusted centre of excellence where learners are guided to grow in knowledge, confidence, and character for a changing world.",
  mission: "To provide a secure, caring, and intellectually vibrant learning environment that balances academic rigor, life values, and holistic development.",
};

export const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Campus", href: "/campus" },
  { label: "Contact", href: "/contact" },
];

export function getWhatsAppMessage(form: Record<string, string | undefined>): string {
  const lines = [
    "New Admission Enquiry",
    "",
    `Student Name: ${form.studentName || "-"}`,
    `Date of Birth: ${form.dateOfBirth || "-"}`,
    `Gender: ${form.gender || "-"}`,
    `Admission For: ${form.admissionFor || "-"}`,
    `Stream: ${form.stream || "-"}`,
    `Class/Grade: ${form.classGrade || "-"}`,
    `Parent/Guardian Name: ${form.parentName || "-"}`,
    `Parent Contact Number: ${form.parentPhone || "-"}`,
    `Parent Email: ${form.parentEmail || "-"}`,
    `Address: ${form.address || "-"}`,
    `Previous School: ${form.previousSchool || "-"}`,
    `Message: ${form.message || "-"}`,
  ];

  return lines.join("\n");
}

export function buildWhatsAppLink(message: string, phone = siteConfig.whatsappNumber): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
