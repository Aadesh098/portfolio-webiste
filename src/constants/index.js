import {
    solidity,
    backend,
    frontend,
    software,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    next,
    thirdweb,
    urja,
    tesla,
    qmark,
    carrent,
    jobit,
    tripguide,
    eth,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "resume",
      title: "Resume",
    },
    {
      id: "college",
      title: "College",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Developer",
      icon: software,
    },
    {
      title: "Frontend Developer",
      icon: frontend,
    },
    {
      title: "Solidity Developer",
      icon: solidity,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "next",
      icon: next,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "eth",
      icon: eth,
    },
    {
      name: "thirdweb",
      icon: thirdweb,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Technical Head",
      sg_name: "Urja Sports Fest, Thapar University",
      icon: urja,
      iconBg: "#E7E7E7",
      date: "Jan 2023 - Feb 2023",
      points: [
        "Led the development of a highly successful website with a team of Developers for Urja-2023, one of North India's largest sports fests.",
        "The Project generated over 15 Lakhs in Registration fees from over 30 Colleges in the North Zone, providing a seamless user experience.",
        "Technologies Used - Tailwind Css, React.Js, Firebase and was Deployed over Hostinger"
      ],
    },
    {
      title: "RaiseWise, Project Lead",
      sg_name: "Smart India Hackthon",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Sept 2023",
      points: [
        "Built a decentralized blockchain-implemented crowdfunding platform that offers a secure and transparent solution for individuals and organizations to raise funds for various personal/social causes.",
        "The project was built over Sepolia Testnet. It tends to eliminate intermediaries and reduces transaction costs, making it particularly advantageous for small startups and individuals with limited financial resources.",
        "Technologies Used - Tailwind Css, React.Js, Solidity, Thirdweb and was Deployed over Vercel",
      ],
    },
    {
      title: "Internship 1",
      sg_name: "",
      icon: qmark,
      iconBg: "#000000",
      date: "2023",
      points: [
        "Coming Soon...",
      ],
    },
    {
      title: "Internship 2",
      sg_name: "",
      icon: qmark,
      iconBg: "#000000",
      date: "2023",
      points: [
        "Coming Soon..."
      ],
    },
  ];
  
  const testimonials = [
    { 
      name: "Semester - 4",
      subject1:
        "Database Management - 10",
        subject2:
        "Software Engineering - 10",
        subject3:
        "Computer Networks - 10",
        subject4:
        "Artificial Intelligence - 10",
        subject5:
        "Analysis of Algorithms - 9",
        subject6:
        "Optimization Techniques - 9",
      cg: "9.3 / 10",
      sg: "9.7 / 10",
    },
    { 
      name: "Semester - 3",
      subject1:
      "Operating Systems - 10",
      subject2:
      "Computer Architecture - 10",
      subject3:
      "Discrete Maths - 10",
      subject4:
      "Data Structures - 9",
      subject5:
      "Numerical Analysis - 9",
      subject6:
      "ELC Activity - NA",
      cg: "9.2 / 10",
      sg: "9.6 / 10",
    },
    {  
      name: "Semester - 2",
      subject1:
      "Object Oriented Prog. - 10",
      subject2:
      "Professional Comm. - 10",
      subject3:
      "Manufacturing Process. - 10",
      subject4:
      "Applied Physics - 9",
      subject5:
      "Engineering Drawing - 9",
      subject6:
      "Mathematics || - 8",
      cg: "9 / 10",
      sg: "9.3 / 10",
    },
  ];
  
  const projects = [
    {
      name: "Raise-Wise",
      description:
        "A decentralized blockchain-implemented crowdfunding platform that offers a secure and transparent solution for individuals and organizations to raise funds for various personal/social causes.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "solidity",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Aadesh098/sih-crowdfunding",
    },
    {
      name: "Urja-Wesbite",
      description:
        "The project is a responsive website with excellent UI/UX for our Campus's Sports Fest. The site generated over 15 lakhs in registration fees and provided a seamless user experience for the participating teams.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Aadesh098/urja2023",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };