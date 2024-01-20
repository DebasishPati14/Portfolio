import FeedPostApp from "./images/feed-post.webp";
import EcommerceApp from "./images/ecommerce-website.jpg";
import LinkedInApp from "./images/linked-in.avif";
import LinkedInAPI from "./images/linked-in-api.jpg";
import BookmarkApp from "./images/bookmark.jpg";

const resumeData = {
    experience: [
        {
            title: "Software Engineer ",
            subTitle: "In Time Tec",
            description: "Worked in various projects and contributed efficiently as a Full Stack Web Developer.",
        },
        {
            title: "Jr. Software Engineer",
            subTitle: "In Time Tec Visionsoft Pvt. Ltd.",
            description: "Worked as an Angular Developer after completing training in web development.",
        },
        {
            title: "Internship",
            subTitle: "Global Info Tech, BBSR",
            description: "Learnt soft skills, team collaboration and adaptability",
        },
    ],
    education: [
        {
            title: "Secondary",
            subTitle: "Govt. High School,VSS Nagar",
            description: "Matriculation with 79 percentage",
        },
        {
            title: "Higher Secondary",
            subTitle: "Gyan Bharati Institute Of Sci. & Tech.",
            description: "Intermediate in Science with 72 percentage",
        },
        {
            title: "B.Tech",
            subTitle: "Eastern Academy of Science and Technology",
            description: "Graduated in 2022 with 8.4 CGPA",
        },
    ],
};

const personalDetails = [
    {
        label: "Name",
        value: "Debasish Pati",
    },
    {
        label: "Age",
        value: "23",
    },
    {
        label: "Address",
        value: "Rasulgarh, Bhubaneswar, Odisha",
    },
    {
        label: "Email",
        value: "debasishpati14@gmail.com",
    },
    {
        label: "Contact No",
        value: "+91 6370130345",
    },
];

const about = "To be associated with a progressive organization, which would give an opportunity to apply my skills and knowledge and build a career with a leading corporate of hi-tech environment with committed and dedicated people, which will help me to explore myself fully and realize my potential."

const skillsData = [
    {
        label: "FRONT END",
        data: [
            {
                skillName: "ANGULAR",
                percentage: "70",
            },
            {
                skillName: "JAVASCRIPT",
                percentage: "90",
            },
            {
                skillName: "REACT",
                percentage: "50",
            },
            {
                skillName: "BOOTSTRAP",
                percentage: "50",
            },
            {
                skillName: "MUI",
                percentage: "65",
            }
        ],
    },
    {
        label: "BACK END",
        data: [
            {
                skillName: "NODE JS",
                percentage: "85",
            },
            {
                skillName: "JAVA",
                percentage: "75",
            },
            {
                skillName: "GRAPH QL",
                percentage: "70",
            },
            {
                skillName: "SOCKET PROGRAMMING",
                percentage: "65",
            },
        ],
    },
    {
        label: "DATABASES",
        data: [
            {
                skillName: "MY SQL",
                percentage: "70",
            },
            {
                skillName: "MONGO DB",
                percentage: "65",
            },
        ],
    },
];

const projectData = [
    {
        id: 3,
        name: "Linkedin APIs",
        image: LinkedInAPI,
        repository: "https://github.com/DebasishPati005/linked-in-backend",
        link: "https://linked-in-omay.onrender.com/api-docs#/",
    },
    {
        id: 2,
        name: "Ecommerce App",
        image: EcommerceApp,
        repository: "https://github.com/DebasishPati14/Projects/tree/master/AngularAssignments/week-5/e-commerceApp",
        link: "https://happyshopping-8fc5b.web.app/",
    },
    {
        id: 2,
        name: "Feed Post App",
        repository: "https://github.com/DebasishPati005/FeedChatGraphQL",
        link: "https://feed-chat-460de.web.app/",
        image: FeedPostApp,
    },
    {
        id: 2,
        name: "Linkedin Clone",
        image: LinkedInApp,
        repository: "https://github.com/DebasishPati005/FeedChatGraphQL",
        link: "https://linked-in-backend.web.app",
    },
    {
        id: 3,
        name: "Bookmark APIs",
        image: BookmarkApp,
        repository: "https://github.com/DebasishPati14/NestJs/tree/development",
        link: "https://feed-post-app.onrender.com",
    },
];

const projectFilterData = [
    {
        filterId: 1,
        label: "Full Stack",
    },
    {
        filterId: 2,
        label: "Frontend",
    },
    {
        filterId: 3,
        label: "Backend",
    },
];

const particleOptions = {

    fpsLimit: 200,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#41644A",
        },
        links: {
            color: "#41644A",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 200,
            },
            value: 120,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
}

export { resumeData, personalDetails, skillsData, about, projectData, projectFilterData, particleOptions }










