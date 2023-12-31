const { Post } = require('../models');

const postData = [
    {
        "title": "The Future of Artificial Intelligence",
        "date": "11/24/23",
        "description": "The future of Artificial Intelligence (AI) holds unprecedented promise and challenges, as we stand on the cusp of a technological revolution. AI's evolution is set to transform industries, reshape daily life, and amplify human potential. Advancements in machine learning, natural language processing, and robotics are paving the way for smarter systems that can understand, learn, and adapt. While the benefits are immense, ethical considerations and responsible AI development are essential to navigate the potential pitfalls. The future will likely see AI seamlessly integrated into various aspects of our lives, from healthcare to education, empowering us to solve complex problems and ushering in an era of unprecedented innovation. As we journey into this AI-powered future, the key lies in fostering collaboration, ensuring ethical guidelines, and embracing the transformative possibilities of technology for the betterment of society.",
        "user_id": 1,
    },
    {
        "title": "Elevate Your Code: Quick Programming Pro Tips",
        "date": "10/23/23",
        "description": "Elevating your code from functional to exceptional involves mastering a few key programming pro tips. First, embrace the power of clean and readable code. Consistent indentation, meaningful variable names, and well-structured logic not only enhance collaboration but also make debugging a breeze. Next, prioritize efficiency by understanding algorithmic complexity and optimizing where necessary. Regularly update your skills, staying abreast of the latest language features and tools. Utilize version control systems to track changes systematically, ensuring a robust codebase. Lastly, cultivate a problem-solving mindset; approach challenges systematically, break down complex tasks, and leverage online resources and communities. By integrating these programming pro tips into your workflow, you'll not only write code but craft solutions that stand the test of time.",
        "user_id": 2,
    },
    {
        "title": "The Impact of Artificial Intelligence on the Job Market: Navigating the Future",
        "date": "10/23/23",
        "description": "The rapid integration of Artificial Intelligence (AI) into the job market is reshaping the professional landscape, sparking both excitement and concerns. While AI streamlines routine tasks, it also prompts a shift in the skills demanded by employers. Routine, manual jobs may face automation, but there's a simultaneous surge in demand for roles requiring creativity, critical thinking, and adaptability. Navigating this future requires a commitment to lifelong learning, as individuals must continually update their skill sets to align with evolving industry needs. Embracing AI as a collaborator rather than a competitor can unlock new opportunities, fostering a job market where humans and machines complement each other. Policymakers and businesses play a pivotal role in ensuring a smooth transition, emphasizing reskilling initiatives and fostering an inclusive, adaptable workforce prepared for the dynamic challenges of an AI-driven era.",
        "user_id": 3,
    }
];

const seedPost  = () => Post.bulkCreate(postData);
module.exports = seedPost;