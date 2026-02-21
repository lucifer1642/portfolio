// ─── Navigation Links ───────────────────────────────────────────
export const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Research', href: '#research' },
    { label: 'Contact', href: '#contact' },
] as const;

export const SECTION_IDS = [
    'hero',
    'about',
    'skills',
    'experience',
    'projects',
    'research',
    'leadership',
    'achievements',
    'education',
    'contact',
] as const;

// ─── Social Links ───────────────────────────────────────────────
export const SOCIAL_LINKS = {
    github: 'https://github.com/lucifer1642',
    linkedin: 'https://www.linkedin.com/in/ashwinikumarkar',
    email: 'mailto:ashwinikumarkar16@gmail.com',
} as const;

// ─── Hero ───────────────────────────────────────────────────────
export const HERO_TITLES = [
    'ML Engineer',
    'Researcher',
    'Patent Holder',
    'Builder',
] as const;

export const HERO_TAGLINE = 'I build intelligent systems that solve real problems.';

// ─── About ──────────────────────────────────────────────────────
export const ABOUT_BIO = `I'm Ashwini Kumar Kar — an ML engineer and researcher driven by the conviction that intelligent systems should solve tangible, real-world problems. From building retinal disease classifiers that achieve 95% accuracy to architecting emergency blood supply platforms protected by patent, I approach every project with rigorous methodology and a builder's mindset. Currently pursuing my MCA at Lovely Professional University, I bring a 9.66 CGPA foundation from KIIT University and a portfolio of peer-reviewed research to every challenge I take on.`;

export const ABOUT_PHILOSOPHY = `What drives me is the intersection of deep technical craft and meaningful impact. I don't build demos — I build systems that work in production, at scale, for people who need them most.`;

export const ABOUT_STATS = [
    { value: 9.66, label: 'CGPA', suffix: '', decimals: 2 },
    { value: 3, label: 'Projects', suffix: '+', decimals: 0 },
    { value: 1, label: 'Patent', suffix: '', decimals: 0 },
    { value: 95, label: 'Peak Accuracy', suffix: '%', decimals: 0 },
] as const;

// ─── Skills ─────────────────────────────────────────────────────
export interface SkillCategory {
    title: string;
    skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: 'Languages',
        skills: ['C++', 'Python', 'C', 'Java'],
    },
    {
        title: 'Web Technologies',
        skills: ['HTML5', 'CSS3', 'JavaScript'],
    },
    {
        title: 'ML & Data',
        skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy', 'PyTorch'],
    },
    {
        title: 'Tools & Platforms',
        skills: ['Excel', 'Google Sheets', 'Git', 'Jupyter Notebook'],
    },
    {
        title: 'Core Competencies',
        skills: ['DSA', 'OOP', 'Deep Learning', 'Model Optimization', 'Data Analysis', 'Computer Vision', 'NLP'],
    },
];

// ─── Experience ─────────────────────────────────────────────────
export interface ExperienceEntry {
    id: string;
    role: string;
    company: string;
    period: string;
    bullets: string[];
}

export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
    {
        id: 'acechem',
        role: 'Content and Data Analysis Intern',
        company: 'Acechem Remedies Pvt Ltd',
        period: 'Oct 2024 – Apr 2025',
        bullets: [
            'Performed comprehensive data analysis on pharmaceutical datasets to drive business intelligence and operational improvements.',
            'Created content strategies backed by data insights, increasing engagement metrics across digital platforms.',
            'Built automated reporting pipelines using Python and Excel for monthly performance tracking.',
            'Collaborated with cross-functional teams to translate data findings into actionable recommendations.',
        ],
    },
    {
        id: 'kiit-research',
        role: 'Machine Learning Intern',
        company: 'KIIT University Biomedical Research',
        period: 'Dec 2024',
        bullets: [
            'Conducted biomedical image classification research using deep learning architectures including CNN, ViT, and Swin Transformer.',
            'Achieved 95% classification accuracy on retinal disease detection from fundus images.',
            'Co-authored IEEE paper presented at OCIT conference, KIIT University.',
            'Optimized model inference time while maintaining accuracy through architecture-level improvements.',
        ],
    },
];

// ─── Projects ───────────────────────────────────────────────────
export interface Project {
    slug: string;
    title: string;
    tagline: string;
    period: string;
    status: 'active' | 'completed';
    metric: string;
    metricLabel: string;
    accent: string;
    glow: string;
    techTags: string[];
    description: string;
    problemStatement: string;
    solutionArchitecture: string;
    techStack: string;
    results: string;
    challenges: string;
}

export const PROJECTS: Project[] = [
    {
        slug: 'rakshak',
        title: 'Rakshak',
        tagline: 'Emergency Blood Supply & Donor Platform',
        period: 'Jan 2025 – Present',
        status: 'active',
        metric: 'PATENT',
        metricLabel: 'Filed Feb 2026',
        accent: '#FF6B6B',
        glow: '0 0 20px rgba(255,107,107,0.25)',
        techTags: ['ML', 'Blockchain', 'React Native', 'Node.js', 'Gamification'],
        description: 'A comprehensive emergency blood supply and donor management platform that combines ML-driven demand forecasting, blockchain-based anti-theft tracking, and gamified donor engagement to solve critical blood shortage crises.',
        problemStatement: 'India faces a chronic blood shortage crisis — over 12,000 units of blood go unaccounted for annually due to theft, mismanagement, and lack of demand forecasting. Existing blood bank systems are fragmented, lack transparency, and offer no real-time coordination between donors, hospitals, and blood banks.',
        solutionArchitecture: 'Rakshak is a full-stack platform comprising: (1) A React Native citizen app for donors to register, track donations, and earn gamified rewards; (2) An ML-powered demand forecasting engine that predicts blood type requirements by region using historical data and LSTM models; (3) A blockchain-based tracking system that creates an immutable audit trail for every blood unit from donation to transfusion; (4) A hospital-facing dashboard for real-time inventory monitoring and automated emergency alerts.',
        techStack: 'React Native (Expo), Node.js, Express, MongoDB, TensorFlow (LSTM demand forecasting), Hyperledger Fabric (blockchain tracking), Firebase (real-time notifications), Docker, AWS EC2.',
        results: 'Patent filed with the Indian Patent Office on February 7, 2026 for "Anti-Theft Blood Tracking and Optimization System." Platform currently in active development with pilot deployment planned. ML model achieves 87% accuracy in 7-day demand forecasting.',
        challenges: 'Integrating blockchain with real-time hospital workflows required careful latency optimization. Balancing gamification incentives to avoid perverse incentives (gaming the system) required behavioral design iteration. Cross-platform React Native performance on low-end Android devices required architecture-level optimizations.',
    },
    {
        slug: 'iris',
        title: 'IRIS',
        tagline: 'Retinal Disease Classification',
        period: 'Jan – Apr 2025',
        status: 'completed',
        metric: '95%',
        metricLabel: 'Accuracy',
        accent: '#4ECDC4',
        glow: '0 0 20px rgba(78,205,196,0.25)',
        techTags: ['CNN', 'ViT', 'Swin Transformer', 'YOLOv8', 'PyTorch'],
        description: 'A deep learning system for automated retinal disease classification from fundus images, benchmarking multiple state-of-the-art architectures to identify the optimal approach for clinical deployment.',
        problemStatement: 'Diabetic retinopathy affects over 93 million people globally and is a leading cause of preventable blindness. Early-stage detection from fundus images requires expert ophthalmologists, creating a bottleneck in underserved regions. Automated classification could dramatically improve screening throughput.',
        solutionArchitecture: 'Built a comparative classification pipeline evaluating four architectures: (1) Custom CNN baseline; (2) Vision Transformer (ViT) with patch embeddings; (3) Swin Transformer with shifted window attention; (4) YOLOv8-N adapted for classification. Each model was trained on a curated fundus image dataset with standardized preprocessing, augmentation, and evaluation protocols.',
        techStack: 'Python, PyTorch, torchvision, timm (pretrained models), OpenCV, Albumentations (augmentation), Weights & Biases (experiment tracking), Matplotlib, scikit-learn.',
        results: 'Achieved 95% classification accuracy with the Swin Transformer architecture, outperforming the CNN baseline (82%), ViT (89%), and YOLOv8-N (91%). The model demonstrated strong generalization across unseen test data with balanced performance across all disease classes. Results published as IEEE paper at OCIT conference.',
        challenges: 'Class imbalance in fundus image datasets required sophisticated augmentation strategies. Training Vision Transformers on limited data required careful transfer learning from ImageNet-21k pretrained weights. Inference speed optimization for potential edge deployment in clinical settings required architecture pruning.',
    },
    {
        slug: 'urban-sound',
        title: 'Urban Sound Classification',
        tagline: 'Hybrid Deep Learning for Audio',
        period: 'Jan – Apr 2025',
        status: 'completed',
        metric: '92%',
        metricLabel: 'Accuracy',
        accent: '#FFE66D',
        glow: '0 0 20px rgba(255,230,109,0.25)',
        techTags: ['CNN', 'BiLSTM', 'GRU', 'TensorFlow', 'Librosa'],
        description: 'A hybrid CNN-BiLSTM-GRU architecture for urban sound classification, achieving a 20% improvement over baseline approaches for smart city noise monitoring applications.',
        problemStatement: 'Urban noise pollution is a growing public health concern, linked to cardiovascular disease, cognitive impairment, and sleep disruption. Effective smart city noise management requires automated classification of urban sound sources — but traditional approaches struggle with the temporal complexity and environmental variability of urban audio.',
        solutionArchitecture: 'Designed a novel hybrid architecture combining: (1) CNN layers for spectral feature extraction from mel-spectrograms; (2) Bidirectional LSTM for capturing temporal dependencies in audio sequences; (3) GRU layers for efficient sequential modeling. The pipeline processes raw audio → mel-spectrogram conversion → CNN feature maps → BiLSTM temporal encoding → GRU refinement → classification. Trained on the UrbanSound8K benchmark dataset.',
        techStack: 'Python, TensorFlow/Keras, Librosa (audio processing), NumPy, Pandas, scikit-learn, Matplotlib, Seaborn.',
        results: 'Achieved 92% overall accuracy on the UrbanSound8K dataset, a 20% improvement over the CNN-only baseline (72%). The hybrid architecture demonstrated superior performance on temporally complex sound classes (engine idling, jackhammer) where spatial-only features are insufficient. Smart city noise monitoring application potential validated.',
        challenges: 'Audio preprocessing consistency across different recording conditions required robust normalization. Finding the optimal fusion point between CNN and RNN branches required extensive architecture search. Managing computational cost of the BiLSTM component for potential real-time deployment required careful layer sizing.',
    },
];

// ─── Research & Patents ─────────────────────────────────────────
export interface ResearchItem {
    type: 'patent' | 'paper';
    title: string;
    venue: string;
    date: string;
    tag: string;
    accent: string;
}

export const RESEARCH_ITEMS: ResearchItem[] = [
    {
        type: 'patent',
        title: 'Anti-Theft Blood Tracking and Optimization System',
        venue: 'Indian Patent Office',
        date: 'Filed: Feb 7, 2026',
        tag: 'PATENT FILED',
        accent: '#C084FC',
    },
    {
        type: 'paper',
        title: 'Retinal Disease Classification using Deep Learning Architectures',
        venue: 'IEEE OCIT, KIIT University',
        date: 'Dec 20, 2025',
        tag: 'PEER REVIEWED',
        accent: '#34D399',
    },
];

// ─── Leadership ─────────────────────────────────────────────────
export interface LeadershipEntry {
    title: string;
    event: string;
    stat: string;
    statLabel: string;
    description: string;
}

export const LEADERSHIP_ENTRIES: LeadershipEntry[] = [
    {
        title: 'Lead Organiser',
        event: 'KIIT-FEST 7.0',
        stat: '500+',
        statLabel: 'Participants',
        description: 'Led the organization of KIIT-FEST 7.0, coordinating 20+ universities and managing logistics for 500+ participants across multiple competitive events and workshops.',
    },
    {
        title: 'Event Organiser',
        event: 'BytoMania',
        stat: '1,000+',
        statLabel: 'Students',
        description: 'Organized BytoMania, a flagship coding event that attracted 1,000+ students, managing event planning, sponsorships, and technical infrastructure.',
    },
];

// ─── Achievements ───────────────────────────────────────────────
export interface Achievement {
    title: string;
    description: string;
    icon: string; // lucide icon name
}

export const ACHIEVEMENTS: Achievement[] = [
    {
        title: 'Academic Excellence',
        description: '9.66 CGPA — Highest in department',
        icon: 'GraduationCap',
    },
    {
        title: 'Best NSS Volunteer',
        description: 'KIIT University — National Service Scheme',
        icon: 'Heart',
    },
    {
        title: 'Rajya Puraskar',
        description: 'Bharat Scouts and Guides — Highest state level award',
        icon: 'Award',
    },
    {
        title: 'Red Cross India',
        description: 'Baliyatra humanitarian initiative — Community service',
        icon: 'Shield',
    },
    {
        title: 'Data Analytics Certification',
        description: 'Udemy — Comprehensive data analytics program',
        icon: 'BarChart3',
    },
    {
        title: 'Machine Learning Certification',
        description: 'Coursera — Stanford University ML specialization',
        icon: 'Brain',
    },
];

// ─── Education ──────────────────────────────────────────────────
export interface EducationEntry {
    institution: string;
    degree: string;
    period: string;
    location: string;
    grade?: string;
}

export const EDUCATION_ENTRIES: EducationEntry[] = [
    {
        institution: 'Lovely Professional University',
        degree: 'Master of Computer Applications (MCA)',
        period: 'Aug 2025 – Present',
        location: 'Jalandhar, Punjab',
    },
    {
        institution: 'KIIT University',
        degree: 'BSc Computer Science (Hons)',
        period: 'Oct 2022 – Jul 2025',
        location: 'Bhubaneswar, Odisha',
        grade: 'CGPA: 9.66',
    },
    {
        institution: 'Kendriya Vidyalaya',
        degree: 'Intermediate (Class XI–XII)',
        period: 'Apr 2018 – Mar 2020',
        location: 'Cuttack, Odisha',
    },
];

// ─── Site Metadata ──────────────────────────────────────────────
export const SITE_CONFIG = {
    name: 'Ashwini Kumar Kar',
    title: 'Ashwini Kumar Kar — ML Engineer & Researcher',
    description: 'ML engineer, patent holder, and researcher building intelligent systems. KIIT University graduate with 9.66 CGPA. Specializing in deep learning, computer vision, and full-stack development.',
    url: 'https://ashwinikumarkar.online',
    ogImage: '/og-image.png',
    email: 'ashwinikumarkar16@gmail.com',
} as const;
