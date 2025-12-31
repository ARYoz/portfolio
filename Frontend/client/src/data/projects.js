import ComputationalGraphics from "../assets/Projects-images/ComputationalGraphics.png";
import shop from "../assets/Projects-images/shop.png";
import auth from "../assets/Projects-images/login.png";
import chatbot from "../assets/Projects-images/chatbot.png";
import tinyurl from "../assets/Projects-images/TinyUrl.png";
import basicSpring from "../assets/Projects-images/basicSpring.png";
import financialManagement from "../assets/Projects-images/financial.png";

export const projects = [
    {
        id:1,
        title: "Computational Graphics",
        description: "A ray tracing project for image generation using geometric primitives, Phong shading, anti-aliasing, and BVH for efficient ray–object intersection.",
        techStack: ["Java"],
        image : ComputationalGraphics,
        githubLink: "https://github.com/ARYoz/ISE5785_2540_8484",
        youtubeUrl: ""
    },
    {
        id:2,
        title: "fullstack-shop",
        description: "A full-stack e-commerce web application with user authentication, product management, shopping cart, and order processing.",
        techStack: ["React", "Node.js", "Express", "MongoDB"],
        image: shop,
        githubLink: "https://github.com/ARYoz?tab=repositories",
        youtubeUrl: ""
    },
    {
        id:3,
        title: "fullstack-auth-project",
        description: "This project is a full-stack authentication system built as part of an academic assignment It demonstrates user registration, email verification using OTP, and login with JWT-based authentication.",
        techStack: ["React", "Node.js", "Express", "MongoDB"," JWT", "Nodemailer", "bcrypt"],
        image: auth,
        githubLink: "https://github.com/ARYoz/fullstack-auth-project",
        youtubeUrl: ""
    },
    {
        id:4,
        title: "Chatbot",
        description: "Java-based app using Swagger, OkHttp, and external APIs for product search and chatbot responses.",
        techStack: ["Java", "Swagger", "OkHttp", "APIs", "JSON", "Maven",],
        image : chatbot,
        githubLink: "https://github.com/ARYoz/Chatbot",
        youtubeUrl: ""
    },
    {
        id:5,
        title: "TinyURL",
        description: "Backend service for URL shortening with multiple databases, API documentation via Swagger, and containerized using Docker.",
        techStack: ["Java", "Spring Boot", "Swagger", "Docker", "MySQL", "MongoDB", "Redis"],
        image : tinyurl,
        githubLink: "https://github.com/ARYoz/TinyURL",
        youtubeUrl: ""
    },
    {
        id:6,
        title: "BasicSpring",
        description: "A student management web application with authentication, data handling, and asynchronous processing.",
        techStack: ["Java", "Spring Boot", "Maven","Jwt","PostgreSQL","AWS S3", "Docker","JPA (Java Persistence API)"],
        image : basicSpring,
        githubLink: "https://github.com/ARYoz/BasicSpring",
        youtubeUrl: ""
    },
    {
        id:7,
        title: "financial-management",
        description: "A financial analysis system that manages income and expense categories and calculates monthly balance status.",
        techStack: ["C++"],
        image : financialManagement,
        githubLink: "https://github.com/ARYoz/financial-management",
        youtubeUrl: ""
    }

];