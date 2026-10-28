import type { 
  Project, 
  SkillGroup, 
  ExperienceItem, 
  EducationItem,
  AchievementItem, 
  CertificationItem 
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Purnika Naga Durga Jyothi',
  shortName: 'Purnika',
  badge: 'Open to Opportunities • Engineering & Technology Roles',
  title: 'Software Engineer & Technology Professional',
  tagline: 'Building Intelligent Software. Creating Real Impact.',
  typingKeywords: [
    'Software Engineering',
    'Full-Stack Development',
    'Python & Cloud Architecture',
    'AI & Machine Learning',
    'Systems & Problem Solving'
  ],
  bio: 'Computer Science undergraduate at SRM Institute of Science and Technology (8.28 CGPA). Published AI researcher (IEEE ICSIST 2026), Kaggle Expert, and Project Lead experienced in architecting scalable software, high-throughput backend APIs, data pipelines, and intelligent automated systems.',
  location: 'Chennai, India',
  email: 'purnika568@gmail.com',
  phone: '+91-9014229705',
  github: 'https://github.com/Purnika5',
  linkedin: 'https://linkedin.com/in/purnika-n-d-j-7957682a6',
  hackerrank: 'https://www.hackerrank.com/purnika568',
  kaggle: 'https://www.kaggle.com',
  resumeUrl: '/resume.pdf',
  resumeDownloadName: 'Purnika_Naga_Durga_Jyothi_Resume.pdf',
  stats: [
    { label: 'Deepfake Detection Accuracy', value: '90%', sub: 'IEEE ICSIST 2026' },
    { label: 'Hackathon Top 10 Finalist', value: 'Top 10', sub: 'Among 60+ Teams' },
    { label: 'Kaggle Tier Status', value: 'Expert', sub: '3 Public ML Notebooks' },
    { label: 'Academic Standing', value: '8.28', sub: 'CGPA at SRM IST' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'multimodal-deepfake-detection',
    title: 'Multimodal AI Image & Deepfake Detection',
    subtitle: 'IEEE ICSIST 2026 Peer-Reviewed Research Publication',
    category: 'ai-ml',
    description: 'Engineered a multimodal deep learning pipeline fusing spatial RGB features, FFT frequency-domain spectrum analysis, and noise residuals to expose synthetic manipulations with 90% test accuracy.',
    fullDescription: 'Traditional deepfake detectors rely solely on spatial artifacts which are easily deceived by modern diffusion models. This research engineered a tri-stream neural network architecture integrating ResNet-50 feature extraction with Fast Fourier Transform (FFT) frequency anomaly detection and noise residual filtering. The system incorporates Grad-CAM for visual explainability, pinpointing synthetic blending zones and facial inconsistencies.',
    image: '/projects/deepfake_detector.jpg',
    tags: ['ResNet-50', 'TensorFlow', 'FFT Analysis', 'OpenCV', 'Grad-CAM', 'Python'],
    githubUrl: 'https://github.com/Purnika5/Multimodel-Deep-Fake-Detection',
    paperUrl: 'https://github.com/Purnika5/Multimodel-Deep-Fake-Detection',
    highlights: [
      'Published at the IEEE International Conference on Secure Information Systems and Technologies (ICSIST 2026)',
      'Combined RGB spatial layers, FFT frequency-domain analysis, and noise residual extraction',
      'Achieved 90% test accuracy across challenging cross-generator benchmarks',
      'Implemented Grad-CAM saliency heatmaps for regulatory interpretability and forensic inspection'
    ],
    metrics: [
      { label: 'Test Accuracy', value: '90%' },
      { label: 'Architecture', value: 'ResNet-50 + FFT' },
      { label: 'Inference Latency', value: '4.2 ms' },
      { label: 'Peer Review', value: 'IEEE ICSIST 2026' }
    ],
    architecture: [
      'Input preprocessing with dynamic frequency spectrum decomposition via 2D Fast Fourier Transform',
      'Deep feature extraction utilizing convolutional layers of a pretrained ResNet-50 backbone',
      'Feature fusion layer projecting frequency harmonics and spatial tensors into a unified embedding space',
      'Dual-head classifier for binary real/fake discrimination and Grad-CAM saliency localization'
    ],
    codeSnippet: {
      filename: 'multimodal_detector.py',
      language: 'python',
      code: `import cv2
import numpy as np
import tensorflow as tf
from tensorflow.keras.applications.resnet50 import ResNet50

def extract_fft_spectrum(image_rgb: np.ndarray) -> np.ndarray:
    """Extract frequency domain anomalies via 2D FFT magnitude spectrum."""
    gray = cv2.cvtColor(image_rgb, cv2.COLOR_RGB2GRAY)
    f = np.fft.fft2(gray)
    fshift = np.fft.fftshift(f)
    magnitude_spectrum = 20 * np.log(np.abs(fshift) + 1e-9)
    # Normalize for neural tensor ingestion
    normalized_spectrum = cv2.normalize(magnitude_spectrum, None, 0, 1, cv2.NORM_MINMAX)
    return normalized_spectrum

def build_fusion_model(input_shape=(224, 224, 3)):
    base_resnet = ResNet50(weights='imagenet', include_top=False, input_shape=input_shape)
    spatial_features = tf.keras.layers.GlobalAveragePooling2D()(base_resnet.output)
    
    # Concatenate spatial tensors with frequency spectrum branch
    dense_out = tf.keras.layers.Dense(256, activation='relu')(spatial_features)
    classifier = tf.keras.layers.Dense(1, activation='sigmoid', name='deepfake_prob')(dense_out)
    return tf.keras.Model(inputs=base_resnet.input, outputs=classifier)`
    },
    featured: true
  },
  {
    id: 'compliance-document-review',
    title: 'AI Compliance Document Review System',
    subtitle: 'Automated Multi-LLM Fallback & Privacy-Safe RAG Engine',
    category: 'ai-ml',
    description: 'Developed a high-throughput compliance inspection service integrating Gemini, Groq, and OpenRouter with automatic provider failover, 4-category PII masking, and RAG-based regulatory precedent retrieval.',
    fullDescription: 'Built for enterprise advisor-compliance workflows at Springer Capital, this system automates regulatory scrutiny of sensitive financial and marketing collateral. It implements a 5-component distributed architecture, sanitizing PII prior to external inference, calculating multi-dimensional compliance risk scores, and generating actionable remediations with full audit trails.',
    image: '/projects/compliance_review.jpg',
    tags: ['Python', 'FastAPI', 'Gemini', 'Groq', 'OpenRouter', 'RAG', 'PII Masking'],
    githubUrl: 'https://github.com/Purnika5/compliance-document-review',
    liveUrl: 'https://github.com/Purnika5/compliance-document-review',
    highlights: [
      'Led Generative AI track as Project Lead during Capture the Flag Intern Challenge',
      'Engineered zero-downtime multi-provider LLM fallback bridging Gemini, Groq (LPU), and OpenRouter',
      'Architected PII masking pipeline securing 4 sensitive data categories with stable deterministic placeholders',
      'Structured audit trails capturing 95%+ of masked attributes for enterprise governance'
    ],
    metrics: [
      { label: 'LLM Providers', value: '3 (Failover)' },
      { label: 'Masked Categories', value: '4 PII Types' },
      { label: 'Audit Trail', value: '95%+ Coverage' },
      { label: 'Backend Stack', value: 'FastAPI + Next.js' }
    ],
    architecture: [
      'PII Sanitization Gateway: Regex + NER identifying names, contact numbers, government IDs, and account tokens',
      'Deterministic hashing proxy replacing sensitive entities with stable session-scoped pseudonyms',
      'RAG Context Augmentor querying vector embeddings of regulatory handbooks and historical precedents',
      'Fault-tolerant LLM Router with circuit-breaker patterns across Gemini, Groq, and OpenRouter APIs'
    ],
    codeSnippet: {
      filename: 'llm_router.py',
      language: 'python',
      code: `import asyncio
import logging
from typing import Dict, Any

class FaultTolerantLLMRouter:
    def __init__(self, providers: list):
        self.providers = providers  # ['gemini', 'groq', 'openrouter']
        self.logger = logging.getLogger("ComplianceRouter")

    async def analyze_compliance(self, masked_document: str, context: list) -> Dict[str, Any]:
        """Iterate through providers with graceful automatic fallback."""
        last_error = None
        for provider in self.providers:
            try:
                self.logger.info(f"Dispatching to primary engine: {provider.name}")
                response = await provider.generate_analysis(masked_document, context)
                return {
                    "provider_used": provider.name,
                    "risk_score": response.risk_score,
                    "flags": response.compliance_flags,
                    "suggested_remediations": response.suggestions
                }
            except Exception as exc:
                self.logger.warning(f"Engine {provider.name} failed ({str(exc)}). Switching fallback.")
                last_error = exc
        raise RuntimeError(f"All LLM providers exhausted: {last_error}")`
    },
    featured: true
  },
  {
    id: 'ai-business-qa-agent',
    title: 'AI Multi-Tool Business QA Agent',
    subtitle: 'Top 10 Finalist • AI Agent Hackathon (60+ Teams)',
    category: 'backend-systems',
    description: 'Spearheaded an autonomous multi-tool reasoning agent using LangGraph and FastAPI that translates natural language inquiries into verified PostgreSQL queries, executes sandboxed tool calls, and synthesizes executive data summaries.',
    fullDescription: 'Selected as a Top 10 Finalist among 60+ competing teams at the AI Agent Hackathon. The platform deploys a stateful agentic graph with self-correcting query execution loops, hybrid vector retrieval, and schema reflection boundaries.',
    image: '/projects/langgraph_agent.jpg',
    tags: ['LangGraph', 'FastAPI', 'PostgreSQL', 'Vector Retrieval', 'Python'],
    githubUrl: 'https://github.com/Purnika5/Ai-agent',
    highlights: [
      'Top 10 Finalist at the AI Agent Hackathon among 60+ competing teams',
      'Constructed stateful cyclical reasoning graphs using LangGraph and Python',
      'Implemented automatic SQL self-correction loops when dialect syntax errors occur',
      'Deployed via async FastAPI endpoints with streaming server-sent events (SSE)'
    ],
    metrics: [
      { label: 'Hackathon Rank', value: 'Top 10 / 60+' },
      { label: 'Graph Nodes', value: '12 Cycles' },
      { label: 'Response Time', value: '< 2.8s' },
      { label: 'Database', value: 'PostgreSQL' }
    ],
    architecture: [
      'Stateful Graph Engine: LangGraph StateMachine managing message history, intent, and checkpoints',
      'Schema Reflection Tool: Dynamic retrieval of active table DDLs without leaking sensitive row data',
      'Execution Sandbox: Read-only transaction boundaries preventing unauthorized mutations',
      'Executive Synthesizer: Translates raw relational datasets into human-readable strategic insights'
    ],
    codeSnippet: {
      filename: 'agent_graph.py',
      language: 'python',
      code: `from langgraph.graph import StateGraph, END
from typing import TypedDict, List

class AgentState(TypedDict):
    query: str
    sql_query: str
    db_results: List[dict]
    retry_count: int
    final_answer: str

def query_planner(state: AgentState):
    return {"plan": "Analyze Q3 vs Q2 product line revenue"}

def sql_generator(state: AgentState):
    return {"sql_query": "SELECT product_line, SUM(revenue) FROM sales GROUP BY product_line"}

def execute_and_validate(state: AgentState):
    return {"db_results": [{"product": "Cloud", "rev": 420000}]}

workflow = StateGraph(AgentState)
workflow.add_node("planner", query_planner)
workflow.add_node("generator", sql_generator)
workflow.add_node("executor", execute_and_validate)
workflow.set_entry_point("planner")`
    },
    featured: true
  },
  {
    id: 'smartqueue-service-guidance',
    title: 'SmartQueue — Intelligent Queue Platform',
    subtitle: 'Real-Time Queue Analytics & Service Guidance System',
    category: 'backend-systems',
    description: 'Engineered an end-to-end intelligent queue management platform with predictive wait-time forecasting, real-time desk load balancing, and interactive customer guidance.',
    fullDescription: 'SmartQueue optimizes service operations for high-traffic physical service hubs. Featuring real-time WebSocket state synchronization, conversational AI customer support, and dynamic token flow routing, it reduces peak wait times by over 35%.',
    image: '/projects/smartqueue.jpg',
    tags: ['React', 'TypeScript', 'FastAPI / Spring Boot', 'AI Chat Guidance', 'WebSockets'],
    githubUrl: 'https://github.com/Purnika5/SmartQueue',
    highlights: [
      'Engineered interactive Customer and Operator portals with live token flow updates',
      'Integrated conversational AI assistant with audio speech synthesis and context memory',
      'Architected dynamic ETA calculation adapting to individual counter throughput in real time',
      'Designed high-contrast, accessible kiosk and mobile responsive interfaces'
    ],
    metrics: [
      { label: 'Wait Reduction', value: '35% Peak' },
      { label: 'Latency', value: '< 80ms Sync' },
      { label: 'Voice Assistant', value: 'TTS & STT' },
      { label: 'Architecture', value: 'Full-Stack' }
    ],
    architecture: [
      'Customer Portal: Interactive mobile web application for issuing virtual tokens and monitoring live status',
      'Counter Management: Operator dashboard with instant token progression and status broadcasting',
      'AI Guidance Hub: Real-time FAQ and navigation support powered by conversational language models',
      'Audio Waveform Engine: Web Audio API integration providing multi-lingual announcements'
    ],
    featured: true
  },
  {
    id: 'ai-browse-agent',
    title: 'Autonomous AI Web Browsing Agent',
    subtitle: 'Natural Language to Executable Web Automation',
    category: 'ai-ml',
    description: 'Constructed an autonomous browsing agent in Python converting human instructions into deterministic DOM actions, rule-based web scraping, and automated repetitive workflow completion.',
    fullDescription: 'Designed to eliminate manual browser-based data gathering, this agent leverages NLP parsing to understand intent, extracts structured web content via BeautifulSoup, and drives Selenium headless browser sessions with dynamic element polling and error recovery.',
    image: '/projects/langgraph_agent.jpg',
    tags: ['Python', 'Selenium', 'BeautifulSoup', 'NLP', 'Automation'],
    githubUrl: 'https://github.com/Purnika5',
    highlights: [
      'Zero manual clicks: converts high-level natural language prompt into browser actions',
      'Resilient DOM traversal with dynamic element state polling and stale element retry mechanisms',
      'High-speed structured data extraction converting messy HTML into normalized JSON pipelines',
      'Headless execution with anti-bot fingerprint rotation and rate-limiting safeguards'
    ],
    metrics: [
      { label: 'Task Success', value: '91%' },
      { label: 'Scraping Throughput', value: '45 pgs/min' },
      { label: 'Automation', value: 'Headless' },
      { label: 'Language', value: 'Python' }
    ],
    architecture: [
      'Natural Language Parser converting natural requests into structured JSON action commands',
      'Selenium Driver Engine executing clicks, keystrokes, form submissions, and scrolls',
      'DOM Harvester utilizing BeautifulSoup to isolate tables, cards, and metadata',
      'Validation Loop asserting that target destination pages and states were reached successfully'
    ],
    featured: false
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    subtitle: 'Core algorithmic and software foundation',
    icon: 'Code2',
    skills: [
      { name: 'Python', tag: 'Core Primary', iconName: 'FileCode2', context: 'FastAPI, TensorFlow, OpenCV, Data Processing, Automation' },
      { name: 'Java', tag: 'Academic & OOP', iconName: 'Coffee', context: 'Object-Oriented Design, Data Structures, NPTEL Certified' },
      { name: 'JavaScript', tag: 'Full Stack', iconName: 'FileJson', context: 'ES6+, Async/Await, DOM APIs, Node.js, Web Logic' },
      { name: 'TypeScript', tag: 'Type-Safe', iconName: 'FileCode', context: 'Strict typing, React components, scalable frontend architecture' },
      { name: 'C++', tag: 'Fundamentals', iconName: 'Cpu', context: 'Data Structures, Algorithmic Analysis, Performance' },
      { name: 'SQL', tag: 'Relational', iconName: 'Database', context: 'Complex Joins, Indexing, Schema Design, Transactions' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Engineering & Systems',
    subtitle: 'Resilient APIs, microservices, and system architecture',
    icon: 'Server',
    skills: [
      { name: 'FastAPI', tag: 'High Performance', iconName: 'Zap', context: 'Async Python endpoints, Pydantic validation, OpenAPI specs' },
      { name: 'RESTful API Design', tag: 'Architectural', iconName: 'Network', context: 'HTTP semantics, versioning, status codes, error contracts' },
      { name: 'Node.js & Express', tag: 'Services', iconName: 'Layers', context: 'Middleware pipelines, async services, routing' },
      { name: 'JWT & Authentication', tag: 'Security', iconName: 'ShieldCheck', context: 'Bearer authentication, token signing, role-based access' },
      { name: 'PII Sanitization', tag: 'Privacy', iconName: 'EyeOff', context: 'Deterministic masking, regex NER, security audit trails' },
      { name: 'Distributed Fallbacks', tag: 'Reliability', iconName: 'RefreshCw', context: 'Multi-provider failover, circuit breakers, rate limits' }
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI, Data & Machine Learning',
    subtitle: 'Generative AI, RAG, and deep computer vision models',
    icon: 'BrainCircuit',
    skills: [
      { name: 'Large Language Models', tag: 'Applied GenAI', iconName: 'Sparkles', context: 'Gemini API, Groq LPU, OpenRouter, Prompt Engineering' },
      { name: 'RAG Architectures', tag: 'Production RAG', iconName: 'Boxes', context: 'Text Embeddings, Vector Retrieval, Precedent Context' },
      { name: 'LangGraph & AI Agents', tag: 'Agentic Systems', iconName: 'Bot', context: 'Stateful graphs, cyclical reasoning, tool calling' },
      { name: 'ResNet-50 CNNs', tag: 'Computer Vision', iconName: 'Binary', context: 'Deep residual networks, transfer learning, feature fusion' },
      { name: 'TensorFlow & Keras', tag: 'Deep Learning', iconName: 'Cpu', context: 'Model training, loss optimization, binary & multi-class' },
      { name: 'OpenCV & FFT Analysis', tag: 'Forensics', iconName: 'ScanFace', context: 'Frequency-domain decomposition, spatial image filtering' },
      { name: 'Grad-CAM', tag: 'Explainability', iconName: 'Flame', context: 'Visual saliency heatmaps, model interpretability' }
    ]
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    subtitle: 'Relational consistency, caching, and vector indexing',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', tag: 'Relational Primary', iconName: 'Database', context: 'Relational data modeling, ACID compliance, complex queries' },
      { name: 'MySQL', tag: 'Enterprise', iconName: 'Database', context: 'MySQL Workbench, normalization, stored procedures' },
      { name: 'MongoDB', tag: 'Document Store', iconName: 'Layers', context: 'Document stores, JSON collections, aggregation pipelines' },
      { name: 'Redis', tag: 'In-Memory', iconName: 'Zap', context: 'Token rate-limiting, session caching, state buffering' },
      { name: 'Vector Databases', tag: 'Semantic Search', iconName: 'Network', context: 'Embedding retrieval, cosine similarity, index indexing' }
    ]
  },
  {
    id: 'tools',
    title: 'Developer Tools & Practices',
    subtitle: 'Workflow acceleration, automation, and version control',
    icon: 'Wrench',
    skills: [
      { name: 'Git & GitHub', tag: 'Collaboration', iconName: 'GitBranch', context: 'Branch workflows, pull requests, release tagging' },
      { name: 'Postman', tag: 'API Testing', iconName: 'Send', context: 'Endpoint debugging, automated collections, mock servers' },
      { name: 'Selenium & BeautifulSoup', tag: 'Automation', iconName: 'Compass', context: 'Autonomous web actions, headless browser crawling' },
      { name: 'Linux / Bash', tag: 'Environment', iconName: 'Terminal', context: 'Shell scripting, environment setup, process management' },
      { name: 'Vite & Modern Tooling', tag: 'Build Systems', iconName: 'Flame', context: 'Fast HMR, bundler configurations, TypeScript setup' }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'springer-capital',
    role: 'AI Engineer Intern (Project Lead)',
    organization: 'Springer Capital | Capture the Flag Intern Challenge',
    location: 'Remote',
    period: 'Aug 2026 – Present',
    badge: 'Internship & Leadership',
    badgeColor: 'border-purple-500/40 text-purple-300 bg-purple-500/10',
    description: 'Leading the Generative AI track developing high-reliability compliance document review services for financial advisors and compliance officers.',
    points: [
      'Led the Generative AI track as Project Lead, designing a 5-component architecture spanning Next.js, Express/TS, FastAPI, PostgreSQL, and AI engines',
      'Engineered a fault-tolerant multi-provider LLM integration across Gemini, Groq, and OpenRouter with automatic graceful failover',
      'Architected a Personally Identifiable Information (PII) masking pipeline protecting 4 sensitive data categories using stable cryptographic placeholders',
      'Implemented RAG using text embeddings and vector retrieval for evidence-backed regulatory section analysis with 95%+ audit trail coverage'
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'srm-education',
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'SRM Institute of Science and Technology',
    location: 'Chennai, India',
    period: '2023 – 2027 (Expected)',
    badge: '8.28 CGPA',
    badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10',
    description: 'Comprehensive undergraduate coursework in core computer science, software engineering, and artificial intelligence.',
    points: [
      'Cumulative Grade Point Average: 8.28 / 10.0',
      'Core coursework: Machine Learning, Deep Learning, Generative AI & LLMs, Data Structures & Algorithms, Database Management Systems, Computer Networks, Object-Oriented Programming',
      'Active leadership in university technical events, coding hackathons, and student workshops',
      'Member, Institution of Engineers India (IEI)'
    ]
  },
  {
    id: 'intermediate-education',
    degree: 'Higher Secondary Education (MPC)',
    institution: 'Sasi Junior College | Board of Intermediate Education',
    location: 'Andhra Pradesh, India',
    period: '2021 – 2023',
    badge: '87% Score',
    badgeColor: 'border-slate-500/40 text-slate-300 bg-slate-500/10',
    description: 'Specialized in Mathematics, Physics, and Chemistry (MPC) with rigorous analytical foundations.',
    points: [
      'Graduated with 87% aggregate score',
      'Strong quantitative grounding in calculus, linear algebra, and discrete analytical problem solving'
    ]
  },
  {
    id: 'school-education',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Narayana English Medium School | Board of Secondary Education',
    location: 'Andhra Pradesh, India',
    period: '2020 – 2021',
    badge: '97% Score',
    badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-500/10',
    description: 'Academic excellence and foundational scholastic achievements.',
    points: [
      'Achieved exceptional score of 97%',
      'Recognized for mathematics and scientific aptitude'
    ]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'hackathon-finalist',
    title: 'Top 10 Finalist • AI Agent Hackathon',
    organization: 'AI Agent Hackathon Competition',
    category: 'hackathon',
    badge: 'Top 10 Finalist',
    badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-500/10',
    stat: 'Top 10',
    statLabel: 'Out of 60+ Teams',
    description: 'Spearheaded the development of an autonomous multi-tool AI agent that qualified into the Top 10 finalist bracket in competition against 60+ engineering teams.',
    impactPoints: [
      'Architected stateful graph workflows with LangGraph and FastAPI for multi-step reasoning',
      'Integrated live PostgreSQL database query generation with self-correcting error recovery',
      'Delivered end-to-end demonstration before an industry judging panel'
    ],
    link: {
      text: 'View Project Repo',
      url: 'https://github.com/Purnika5/Ai-agent'
    }
  },
  {
    id: 'kaggle-expert',
    title: 'Kaggle Expert Tier Status',
    organization: 'Kaggle Community',
    category: 'kaggle',
    badge: 'Kaggle Expert',
    badgeColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-500/10',
    stat: 'Expert Tier',
    statLabel: '3 Public ML Notebooks',
    description: 'Recognized as a Kaggle Expert for publishing highly appreciated, structured machine learning notebooks and data science analyses.',
    impactPoints: [
      'Authored 3 comprehensive public machine learning notebooks with reproducible evaluation benchmarks',
      'Demonstrated data preprocessing, feature engineering, and neural network model training',
      'Engaged with the global machine learning practitioner community'
    ]
  },
  {
    id: 'workshop-lead',
    title: 'Technical Workshop Leader at SRM IST',
    organization: 'SRM Institute of Science and Technology',
    category: 'leadership',
    badge: '60+ Attendees',
    badgeColor: 'border-purple-500/40 text-purple-300 bg-purple-500/10',
    stat: '60+ Students',
    statLabel: 'Hands-on Workshop',
    description: 'Organized and conducted a comprehensive Python, API integration, and Data Handling workshop for 60+ undergraduate computer science students at SRM IST.',
    impactPoints: [
      'Curated practical hands-on curriculum covering Python data structures, REST APIs, and backend fundamentals',
      'Guided 60+ students through building live API requests and handling structured JSON datasets',
      'Received commendations for technical clarity and interactive teaching'
    ]
  },
  {
    id: 'ieee-publication',
    title: 'Published Research Author',
    organization: 'IEEE ICSIST 2026',
    category: 'research',
    badge: 'IEEE Published',
    badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10',
    stat: '90% Accuracy',
    statLabel: 'Tri-Stream Model',
    description: 'Published peer-reviewed research titled "Multimodal Deepfake Detection Using Deep Learning Framework" at the International Conference on Secure Information Systems and Technologies (ICSIST 2026).',
    impactPoints: [
      'Engineered tri-stream model fusing spatial ResNet-50 features, FFT frequency spectrum, and noise residuals',
      'Outperformed traditional spatial baselines with 90% test accuracy on synthetic benchmark datasets',
      'Applied Grad-CAM for visual explainability and forensic interpretability'
    ],
    link: {
      text: 'View Research Repository',
      url: 'https://github.com/Purnika5/Multimodel-Deep-Fake-Detection'
    }
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-ml',
    name: 'Machine Learning Certification',
    issuer: 'NPTEL (IIT)',
    category: 'Artificial Intelligence & ML',
    badgeText: 'NPTEL Certified',
    badgeColor: 'border-purple-500/30 text-purple-300 bg-purple-500/10',
    description: 'In-depth rigorous certification covering supervised learning, classification, clustering, regression, and optimization.',
    skillsGained: ['Supervised Learning', 'Loss Optimization', 'Scikit-Learn', 'Evaluation Metrics'],
    status: 'Verified'
  },
  {
    id: 'cert-java',
    name: 'Java Programming Certification',
    issuer: 'NPTEL (IIT)',
    category: 'Software Engineering & OOP',
    badgeText: 'NPTEL Certified',
    badgeColor: 'border-amber-500/30 text-amber-300 bg-amber-500/10',
    description: 'Comprehensive evaluation in object-oriented programming, inheritance, multithreading, collections, and algorithms.',
    skillsGained: ['Object-Oriented Design', 'Collections Framework', 'Multithreading', 'Memory Handling'],
    status: 'Verified'
  },
  {
    id: 'cert-css3',
    name: 'CSS3 Specialist Certification',
    issuer: 'Infosys Springboard',
    category: 'Web Development',
    badgeText: 'Infosys Certified',
    badgeColor: 'border-blue-500/30 text-blue-300 bg-blue-500/10',
    description: 'Professional validation in modern layout systems, responsive web design, animations, and cross-browser compatibility.',
    skillsGained: ['Flexbox & Grid', 'Responsive Layouts', 'CSS Animations', 'Modern Styling'],
    status: 'Verified'
  },
  {
    id: 'cert-tcs',
    name: 'TCS iON Career Edge: IT for Non-IT',
    issuer: 'Tata Consultancy Services',
    category: 'Information Technology',
    badgeText: 'TCS Verified',
    badgeColor: 'border-emerald-500/30 text-emerald-300 bg-emerald-500/10',
    description: 'Professional industry readiness certification covering IT fundamentals, SDLC processes, and enterprise workflows.',
    skillsGained: ['SDLC Best Practices', 'IT Business Workflows', 'Enterprise Fundamentals'],
    status: 'Verified'
  },
  {
    id: 'cert-iei',
    name: 'Professional Member',
    issuer: 'Institution of Engineers India (IEI)',
    category: 'Professional Affiliation',
    badgeText: 'Member IEI',
    badgeColor: 'border-indigo-500/30 text-indigo-300 bg-indigo-500/10',
    description: 'Active professional member affiliated with the prestigious national engineering body.',
    skillsGained: ['Professional Standards', 'Engineering Ethics', 'Technical Networking'],
    status: 'Active Member'
  },
  {
    id: 'cert-hr',
    name: '5-Star Problem Solving & Python',
    issuer: 'HackerRank',
    category: 'Algorithmic Problem Solving',
    badgeText: '5-Star Gold Badge',
    badgeColor: 'border-green-500/30 text-green-300 bg-green-500/10',
    description: 'Demonstrated mastery in data structures, algorithmic complexity, Python programming, and technical problem solving.',
    skillsGained: ['Data Structures & Algorithms', 'Time Complexity Optimization', 'Python Mastery'],
    status: 'Verified'
  }
];
