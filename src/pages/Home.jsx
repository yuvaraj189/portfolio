import React, { useEffect } from 'react';
import AOS from 'aos';
import { Typewriter } from 'react-simple-typewriter';
import 'aos/dist/aos.css';  

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen px-8 text-center bg-cover bg-center" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?technology,dark)' }}>
        <h1 className="text-5xl font-bold md:text-7xl animate-fade-in-down" data-aos="fade-up">
          Hi, I'm <span className="text-indigo-500">Yuvaraj Kumar</span>
        </h1>
        <p className="mt-4 text-2xl md:text-xl  text-gray-300" data-aos="fade-up" data-aos-delay="200" >
  <Typewriter
    words={[
      'Self-Made Full-Stack Developer and Data Analyst, driven by perseverance',
     
    ]}
  
    cursor
    cursorStyle="_"
    typeSpeed={25}
    
    delaySpeed={1000}
  />
</p>

<div className="mt-4 flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="300">
  {/* Full Stack Resume Button */}
  <button
    className="mt-8 px-6 py-3 font-semibold transition-all duration-300 rounded-full border border-indigo-500 shadow-lg hover:bg-indigo-500 hover:text-black"
    onClick={() => {
      const link = document.createElement('a');
      link.href = 'Yuvaraj_Updated_FullStack_Resume_2025.pdf'; // Path to Full Stack resume
      link.download = 'Yuvaraj_FullStack_Resume.pdf';
      link.click();
    }}
  >
    Full Stack Developer Resume 💻
  </button>

  {/* Business Analyst Resume Button */}
  <button
    className="mt-8 px-6 py-3 font-semibold transition-all duration-300 rounded-full border border-indigo-500 shadow-lg hover:bg-indigo-500 hover:text-black"
    onClick={() => {
      const link = document.createElement('a');
      link.href = '/business_analyst_resume.pdf'; // Path to Business Analyst resume
      link.download = 'Yuvaraj_Business_Analyst_Resume.pdf';
      link.click();
    }}
  >
    Business Analyst Resume 📊
  </button>
</div>

</section>

<section className="py- px-8 bg-cover bg-center" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?coding,dark)' }}>
  <h2 className="text-4xl font-extrabold text-center text-indigo-500 mb-12" data-aos="fade-up">About Me</h2>
  
  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Technical Tile */}
    <div className="bg-black bg-opacity-70 p-8 rounded-3xl shadow-xl hover:scale-105 transition-transform ease-in-out duration-300 transform hover:shadow-2xl" data-aos="fade-right">
      <h3 className="text-3xl font-semibold text-white mb-6">Technically Speaking</h3>
      <p className="text-lg text-gray-300 mb-6">
      I build, optimize, and innovate—whether it’s with React, or the latest data analysis tools. Passionate about turning complex challenges into seamless user experiences, I live for writing clean, scalable code and delivering results that matter. Always exploring new technologies and strategies to enhance efficiency, performance, and user satisfaction.
      </p>
      <ul className="text-lg text-gray-300 list-disc ml-6 space-y-2">
        <li><strong className="text-indigo-500">Full-Stack Mastery:</strong> Expertise in React, Tailwind CSS, and Node.js, developing scalable, efficient, and secure solutions across the entire development stack.</li>
        <li><strong className="text-indigo-500">Business Analyst:</strong> Crafting innovative and effective solutions to complex challenges, always prioritizing efficiency, elegance, adaptability, and long-term scalability.</li>
        <li><strong className="text-indigo-500">Problem Solver:</strong> Crafting innovative and effective solutions to complex challenges, always prioritizing efficiency, elegance, adaptability, and long-term scalability.</li>
        <li><strong className="text-indigo-500">Data Whisperer:</strong> Skilled in analyzing trends, visualizing complex datasets, and transforming raw data into actionable, insightful, and strategic decisions.</li>
       
       
      </ul>
    </div>
    
    {/* Non-Technical Tile */}
    <div className="bg-black bg-opacity-70 p-8 rounded-3xl shadow-xl hover:scale-105 transition-transform ease-in-out duration-300 transform hover:shadow-2xl" data-aos="fade-left">
      <h3 className="text-3xl font-semibold text-white mb-6">Beyond the Code</h3>
      <p className="text-lg text-gray-300 mb-6">
      Curiosity drives me—whether it's traveling, exploring new cultures, or embracing fresh ideas. I’m as passionate about connecting with people as I am about writing code. I believe every experience is an opportunity to learn, grow, and innovate. Always pushing myself to evolve, in and around, with purpose.
      </p>
      <ul className="text-lg text-gray-300 list-disc ml-6 space-y-2">
        <li><strong className="text-indigo-500">Explorer:</strong> From hiking trails to city streets, I seek adventure, inspiration, discovery, and growth in every corner of the world, embracing new cultures and experiences.</li>
        <li><strong className="text-indigo-500">Creator:</strong> Capturing moments and expressing ideas through photography, writing, storytelling, and design, bringing creativity, vision, and passion to life.</li>
        <li><strong className="text-indigo-500">Collaborator:</strong> Building together with others, making ideas stronger through teamwork, shared insights, collective innovation, and mutual support, fostering success.</li>
        <li><strong className="text-indigo-500">Empathizer:</strong> Connecting with people through shared experiences and understanding, fostering meaningful relationships built on trust, compassion, empathy, and kindness.</li>
      </ul>
    </div>
  </div>
</section>





{/* Skills Section */}
<section
  className="py-20 px-8 bg-cover bg-center bg-black bg-opacity-90"
  style={{
    backgroundImage: 'url(https://source.unsplash.com/1600x900/?tech,gradient)',
  }}
>
  <h2 className="text-4xl font-bold text-center text-indigo-500 mb-16" data-aos="fade-up">
    Skill Set Showcase
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Full Stack Developer Side */}
    <div className="bg-gray-900 bg-opacity-70 rounded-2xl p-8 shadow-2xl" data-aos="fade-right">
      <h3 className="text-2xl font-bold text-indigo-400 flex items-center mb-6">
        Full Stack Development
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
  {[
    { name: 'Java', logo: 'https://img.icons8.com/?size=100&id=2572&format=png&color=000000', link: 'https://www.java.com/' },
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/html5.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/css3.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/javascript.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    
    { name: 'React.js', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/react.svg', link: 'https://react.dev/' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/nextdotjs.svg', link: 'https://nextjs.org/' }, // Added Next.js
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/nodedotjs.svg', link: 'https://nodejs.org/' },
    
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/tailwindcss.svg', link: 'https://tailwindcss.com/' },
    { name: 'Git/GitHub', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg', link: 'https://github.com/' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/docker.svg', link: 'https://www.docker.com/' },
    
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/amazonaws.svg', link: 'https://aws.amazon.com/' },
    { name: 'SQL', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/mysql.svg', link: 'https://www.mysql.com/' }, // Added SQL
  ].map((skill, index) => (
    <a
      key={index}
      href={skill.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center bg-gray-800 p-4 rounded-xl hover:scale-105 transition transform hover:shadow-xl"
    >
      <img src={skill.logo} alt={skill.name} className="h-12 w-12 mb-2" />
      <p className="text-sm font-medium text-white">{skill.name}</p>
    </a>
  ))}
</div>
    </div>

    {/* Business Analyst Side */}
    <div className="bg-gray-900 bg-opacity-70 rounded-2xl p-8 shadow-2xl" data-aos="fade-left">
      <h3 className="text-2xl font-bold text-pink-400 flex items-center mb-6">
        Business Analyst & Insights
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {[
         { name: 'Data Visualization', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/powerbi.svg', link: 'https://powerbi.microsoft.com/' },
         
         { name: 'Matplotlib', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/python.svg', link: 'https://matplotlib.org/' },
         { name: 'Power BI', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/powerbi.svg', link: 'https://powerbi.microsoft.com/' },
         { name: 'Excel', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/microsoftexcel.svg', link: 'https://www.microsoft.com/en-us/microsoft-365/excel' },
         { name: 'PowerPoint', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/microsoftpowerpoint.svg', link: 'https://www.microsoft.com/en-us/microsoft-365/powerpoint' },
         { name: 'Word', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/microsoftword.svg', link: 'https://www.microsoft.com/en-us/microsoft-365/word' },
         { name: 'Outlook', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/microsoftoutlook.svg', link: 'https://www.microsoft.com/en-us/microsoft-365/outlook' },
         { name: 'Negotiation Skills', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/handshake.svg', link: '#' },
         { name: 'Persuasion', logo: 'https://cdn-icons-png.flaticon.com/512/4284/4284188.png', link: '#' },

         { name: 'Handling Objections', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/dialogflow.svg', link: '#' },
         { name: 'Bargaining & Compromise', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/gitea.svg', link: '#' },
         
         { name: 'Conflict Resolution', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/handshake.svg', link: '#' },
        
    ].map((skill, index) => (

          <a
            key={index}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-gray-800 p-4 rounded-xl hover:scale-105 transition transform hover:shadow-xl"
          >
            <img src={skill.logo} alt={skill.name} className="h-12 w-12 mb-2" />
            <p className="text-sm font-medium text-white">{skill.name}</p>
          </a>
        ))}
      </div>
    </div>
  </div>
</section>







      {/* Projects Section */}
      <section className="py-16 px-8 bg-cover bg-center" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?projects,dark)' }}>
  <h2 className="text-3xl font-bold text-center text-indigo-500" data-aos="fade-up">Projects</h2>
  <div className="mt-8 grid grid-cols-2 md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="200">
    {[{
      title: 'Cubish - Fully Operational Insurance Website',
      description: [
        'Developed an interactive website with a user-friendly interface using React.js and Vite.',
        'Integrated a dynamic quote generation system for various insurance plans.',
        'Optimized website performance, achieving fast load times and seamless navigation.',
        'Implemented efficient code practices, reducing unnecessary API calls and improving speed.',
        'Designed a responsive layout to ensure a consistent experience across all devices.',
        'Built and optimized a MySQL database for efficient insurance data management.',
        'Integrated real-time data syncing to provide up-to-date information for users.'
      ],
      github: 'https://github.com/yuvaraj189/Insurence-Website  ' // Placeholder for GitHub link
    }, {
      title: 'SHEC - Construction Company (Dubai)',
      description: [
        'Led the development team in creating a web solution for SHEC to manage construction projects.',
        'Designed a user-friendly platform for project management, client data, and scheduling.',
        'Integrated real-time reporting features for efficient project tracking and decision-making.',
        'Customized the platform to align with specific business needs and operational workflows.',
        'Ensured high performance, security, and scalability to protect sensitive business data.',
        'Optimized system architecture for seamless functionality across multiple user roles.',
        'Collaborated closely with stakeholders to refine features and improve user experience.'
      ],
      github: null // No GitHub link for this client project
    }, {
      title: 'Pinnacle - Data Analytics & Business Strategy',
      description: [
        'Led data analysis and business strategy development to drive data-driven decision-making.',
        'Analyzed key business trends and user behavior to optimize services and operations.',
        'Developed predictive models and dashboards for performance tracking and strategic planning.',
        'Collaborated with stakeholders to align business objectives with data-driven insights.',
        'Implemented data visualization techniques to present complex data effectively.',
        'Identified opportunities for process improvement and operational efficiency using data insights.',
        'Ensured data integrity, accuracy, and security while handling large datasets.'
      ],
      github: null // No GitHub link for this client project
    }, {
      title: 'RapidGrow - Market & Competitor Analysis',
      description: [
        'Conducted in-depth market research to identify industry trends and growth opportunities.',
        'Analyzed competitor strategies to benchmark performance and uncover competitive advantages.',
        'Evaluated customer demographics and preferences to refine target audience segmentation.',
        'Developed data-driven insights to support strategic decision-making and business expansion.',
        'Created visual reports and dashboards to present market and competitor findings effectively',
        'Assessed pricing models and service offerings to recommend competitive positioning strategies.',
        'Collaborated with stakeholders to align business strategies with market demands and trends.'
      ],
      github: null  // Placeholder for GitHub link
    }].map((project, index) => (
      <div key={index} className="p-6 bg-black text-white rounded-lg border-2 border-indigo-400 shadow-md hover:shadow-lg transform transition-transform hover:scale-105">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <ul className="mt-2 text-gray-300">
          {project.description.map((point, idx) => (
            <li key={idx} className="mt-1">- {point}</li>
          ))}
        </ul>
        {project.github ? (
          <a href={project.github} className="text-indigo-400 mt-2 block">View on GitHub</a>
        ) : (
          <p className="text-indigo-400 mt-2">This is a client project and not shared publicly.</p>
        )}
      </div>
    ))}
  </div>
</section>






      {/* Internship Section */}
      <section className="py-16 px-8 text-gray-900">
  <h2
    className="text-3xl font-bold text-center text-indigo-500 mb-8"
    data-aos="fade-up"
  >
    Experience

  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {[
      {
        title: 'Full-Stack Developer | GetMax Solution Pvt Ltd.',
        duration: 'Oct 2023 - Nov 2024 · 1 yr 2 mos',
        location: 'Chennai, Tamil Nadu, India',
        description: [
          'Leading the full-stack development team of Getmax Solution.',
          'Collaborating with cross-functional teams for project success.',
          'Managing project timelines and ensuring on-time delivery.',
          'Optimizing performance for scalability and efficiency.',
        ],
      },
      {
        title: 'Data Analyst Intern | AltaPulse Network',
        duration: 'Jun 2024 - Aug 2024 · 3 mos',
        location: 'Remote',
        description: [
          'Analyzed data to generate actionable insights for marketing strategies.',
          'Monitored key performance metrics of social media campaigns.',
          'Created detailed reports to inform future strategies.',
          'Utilized Power BI to visualize data for clear communication of findings.',
        ],
      },
      {
        title: 'Operation Management Intern | Rizzspace',
        duration: 'May 2024 - Jul 2024 · 3 mos',
        location: 'Remote',
        description: [
          'Demonstrated strong work ethic and operational knowledge.',
          'Assisted in streamlining operational processes for improved efficiency.',
          'Supported team in monitoring and reporting key performance metrics.',
          'Collaborated on strategy development for operational improvements.',
        ],
      },
      {
        title: '2D Animation and VFX Artist Intern | Gen Z Marketers',
        duration: 'May 2023 - Aug 2023 · 4 mos',
        location: 'Remote',
        description: [
          'Created engaging digital content using animation and VFX tools.',
          'Worked with Adobe After Effects, Adobe Premiere Pro, and Figma.',
          'Collaborated with marketing teams to deliver creative assets for campaigns.',
          'Gained expertise in UI/UX design and digital marketing strategies.',
        ],
      },
    ].map((internship, index) => (
      <div
        key={index}
        className="bg-gray-900 p-6 rounded-xl shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
        data-aos="fade-up"
        data-aos-delay={index * 100}
      >
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-1.5 h-16 bg-indigo-500"></div>
          <h3 className="text-2xl font-semibold text-white">
            {internship.title}
          </h3>
        </div>
        <p className="text-sm text-white">
          {internship.duration} | {internship.location}
        </p>
        <div className="mt-4 space-y-2">
          {internship.description.map((point, idx) => (
            <p key={idx} className="text-white text-sm">
              {point}
            </p>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>
<section id="expertise" className="bg-black py-12 px-6">
      <div className="container mx-auto max-w-10xl">
        <h2 className="text-3xl font-bold text-center text-indigo-500 mb-8"
    data-aos="fade-up">Additional Expertise & Interests</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
         {/* Domain: Business Development */}
         <div className="bg-gray-800 shadow-md rounded-lg p-6" data-aos="fade-right" data-aos-delay="300">
            <h3 className="text-xl font-semibold text-indigo-500 mb-2">Business Analysis</h3>
            <ul className="text-white space-y-2">
              <li>
                <strong>Experience:</strong> Identified and secured strategic partnerships, contributing to revenue growth and market expansion.
              </li>
              <li>
                <strong>Interest:</strong> Driven to explore new market opportunities, develop growth strategies, and build lasting business relationships.
              </li>
            </ul>
          </div>
          {/* Domain: Product Management */}
          <div className="bg-gray-800 shadow-md rounded-lg p-6" data-aos="fade-right" data-aos-delay="300" >
            <h3 className="text-xl font-semibold text-indigo-500 mb-2">Product Management</h3>
            <ul className="text-white space-y-2">
              <li>
                <strong>Experience:</strong> Led cross-functional teams to develop and launch user-focused products, ensuring alignment with market needs and business objectives.
              </li>
              <li>
                <strong>Interest:</strong> Passionate about creating user-centric products that solve real-world problems and enhance user experiences.
              </li>
            </ul>
          </div>
          {/* Domain: Operations Management */}
          <div className="bg-gray-800 shadow-md rounded-lg p-6" data-aos="fade-left" data-aos-delay="300"  >
            <h3 className="text-xl font-semibold text-indigo-500 mb-2">Operations Management</h3>
            <ul className="text-white space-y-2">
              <li>
                <strong>Experience:</strong> Streamlined operational processes, resulting in increased efficiency and reduced overheads.
              </li>
              <li>
                <strong>Interest:</strong> Enthusiastic about optimizing workflows, improving resource allocation, and implementing best practices to drive operational excellence.
              </li>
            </ul>
          </div>
          
          {/* Domain: Data Analysis */}
          <div className="bg-gray-800 shadow-md rounded-lg p-6" data-aos="fade-left" data-aos-delay="300" >
            <h3 className="text-xl font-semibold text-indigo-500 mb-2">Data Analysis</h3>
            <ul className="text-white space-y-2">
              <li>
                <strong>Experience:</strong> Utilized advanced analytics tools to interpret complex datasets and provide actionable insights.
              </li>
              <li>
                <strong>Interest:</strong> Committed to leveraging data-driven approaches to solve problems and support business objectives.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>








      {/* Footer */}
      <footer className="bg-black text-white py-10" data-aos="fade-up" >
  <div className="container mx-auto px-4">
    {/* Quote Section */}
    <div className="text-center mb-8">
      <p className="text-xl font-bold text-indigo-400">
      "Life isn’t about waiting for the storm to pass; it’s about learning to dance in the rain."
      </p>
      <p className="text-sm text-gray-400 mt-2">— Vivian Greene</p>
    </div>

    {/* Interactive Links */}
    <div className="flex justify-center space-x-8 mb-6">
      <a 
        href="https://www.linkedin.com/in/yuvaraj-kumar-s-8b7728258/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400 hover:text-indigo-400 transition">
        LinkedIn
      </a>
      <a 
        href="https://github.com/yuvaraj189" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400 hover:text-indigo-400 transition">
        GitHub
      </a>
      <a 
        href="https://x.com/yuvaraj_7_" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400 hover:text-indigo-400 transition">
        Twitter
      </a>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-700 my-6"></div>

    {/* Bottom Section */}
    <div className="text-center text-sm text-gray-500">
      <p>
        Built with ❤️ by <span className="font-bold text-indigo-400">yuvaraj</span>. 
        <br /> Unlearn & Relearn.
      </p>
    </div>
  </div>
</footer>




    </div>
  );
};

export default HomePage;
