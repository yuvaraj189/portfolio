import React, { useEffect } from 'react';
import AOS from 'aos';
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
        <p className="mt-4 text-lg md:text-xl text-gray-300" data-aos="fade-up" data-aos-delay="200">
        "Self-Made Full-Stack Developer and Data Analyst, driven by perseverance"
        </p>

        <button
  className="mt-8 px-6 py-3 font-semibold transition-all duration-300 rounded-full border border-indigo-500 shadow-lg hover:bg-indigo-500 hover:text-black " data-aos="fade-up" data-aos-delay="300"
  onClick={() => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to your resume file in the public folder
    link.download = 'Yuvaraj_Resume.pdf'; // Name for the downloaded file
    link.click();
  }}
>
  Resume !?
</button>
</section>




      {/* About Section */}
      <section className="py-16 px-8 bg-cover bg-center" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?coding,dark)' }}>
  <h2 className="text-4xl font-extrabold text-center text-indigo-500 mb-12" data-aos="fade-up">About Me</h2>
  
  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Technical Tile */}
    <div className="bg-black bg-opacity-70 p-8 rounded-3xl shadow-xl hover:scale-105 transition-transform ease-in-out duration-300 transform hover:shadow-2xl" data-aos="fade-right">
      <h3 className="text-3xl font-semibold text-white mb-6">Technically Speaking</h3>
      <p className="text-lg text-gray-300 mb-6">
        I build, optimize, and innovate—whether it’s with React, or the latest data analysis tools. Passionate about turning complex challenges into seamless user experiences, I live for writing clean, scalable code and delivering results that matter.
      </p>
      <ul className="text-lg text-gray-300 list-disc ml-6 space-y-2">
        <li><strong className="text-indigo-500">Full-Stack Mastery:</strong> React, Tailwind CSS, Node.js—building solutions from front to back.</li>
        <li><strong className="text-indigo-500">Data Whisperer:</strong> Analyzing trends, visualizing data, and turning insights into action.</li>
        <li><strong className="text-indigo-500">Problem Solver:</strong> Creative solutions to complex problems, always focused on efficiency and elegance.</li>
        <li><strong className="text-indigo-500">Continuous Learner:</strong> Constantly evolving by keeping up with the latest technologies and best practices in the field.</li>
      </ul>
    </div>
    
    {/* Non-Technical Tile */}
    <div className="bg-black bg-opacity-70 p-8 rounded-3xl shadow-xl hover:scale-105 transition-transform ease-in-out duration-300 transform hover:shadow-2xl" data-aos="fade-left">
      <h3 className="text-3xl font-semibold text-white mb-6">Beyond the Code</h3>
      <p className="text-lg text-gray-300 mb-6">
      Curiosity drives me—whether it's traveling, exploring new cultures, or embracing fresh ideas. I’m as passionate about connecting with people as I am about writing code. I believe every experience is an opportunity to learn and grow. Always pushing myself to evolve, in and around.
      </p>
      <ul className="text-lg text-gray-300 list-disc ml-6 space-y-2">
        <li><strong className="text-indigo-500">Explorer:</strong> From hiking trails to city streets, I seek adventure in every corner of the world.</li>
        <li><strong className="text-indigo-500">Creator:</strong> Capturing moments and expressing ideas through photography and writing.</li>
        <li><strong className="text-indigo-500">Collaborator:</strong> Building together with others, making ideas stronger through teamwork.</li>
        <li><strong className="text-indigo-500">Empathizer:</strong> Connecting with people through shared experiences and understanding, fostering meaningful relationships.</li>
      </ul>
    </div>
  </div>
</section>





{/* Skills Section */}
<section className="py-16 px-8 bg-cover bg-center" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?skills,dark)' }}>
  <h2 className="text-4xl font-bold text-center text-indigo-500 mb-12" data-aos="fade-up">Skills</h2>

  <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
    {[
      { name: 'C', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/c.svg', link: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/python.svg', link: 'https://www.python.org/' },
      { name: 'Java', logo: 'https://img.icons8.com/?size=100&id=2572&format=png&color=000000', link: 'https://www.java.com/' }, // Updated Java logo
      { name: 'HTML', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/html5.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'CSS', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/css3.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/javascript.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/typescript.svg', link: 'https://www.typescriptlang.org/' },
      { name: 'React.js', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/react.svg', link: 'https://react.dev/' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/nodedotjs.svg', link: 'https://nodejs.org/' },
      { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/tailwindcss.svg', link: 'https://tailwindcss.com/' },
      { name: 'Git/GitHub', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg', link: 'https://github.com/' },
      { name: 'Flask', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/flask.svg', link: 'https://flask.palletsprojects.com/' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/docker.svg', link: 'https://www.docker.com/' },
      { name: 'AWS', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/amazonaws.svg', link: 'https://aws.amazon.com/' },
      { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/graphql.svg', link: 'https://graphql.org/' }, // New skill
    ].map((skill, index) => (
      <a 
        href={skill.link} 
        key={index} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
        data-aos="fade-up" 
      >
        <img src={skill.logo} alt={skill.name} className="h-16 w-16 mb-4" />
        <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
      </a>
    ))}
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
        'Led the development team in building a comprehensive web solution for SHEC, a leading construction company based in Dubai.',
        'Designed and implemented a user-friendly platform for managing construction projects, client data, and scheduling.',
        'Integrated advanced reporting features for real-time project tracking and management.',
        'Collaborated with the client to customize the platform according to specific business needs and workflows.',
        'Ensured high performance and security of the platform to protect sensitive business and client data.'
      ],
      github: null // No GitHub link for this client project
    }, {
      title: 'Arca Client App - Mobile Application',
      description: [
        'Led the development team to build Arca, a mobile application designed to enhance patient engagement and streamline clinic services.',
        'Implemented real-time chat and support features, enabling patients to connect with clinic staff for inquiries and assistance.',
        'Optimized performance and ensured seamless cross-platform compatibility for both Android and iOS devices.',
        'Developed features for appointment booking, medical history tracking, and real-time notifications for patients.',
        'Worked closely with the product team to align the app with patient feedback and healthcare requirements.',
        'Conducted detailed testing to ensure reliability, security, and performance under high traffic.'
      ],
      github: null // No GitHub link for this client project
    }, {
      title: 'Event-Whisperer',
      description: [
        'Designed a smart event reminder system leveraging SQL for efficient data management.',
        'Implemented a scheduling feature that sends real-time event notifications and reminders.',
        'Optimized SQL queries to manage large event datasets and ensure fast retrieval.',
        'Developed a user-friendly interface for seamless interaction with the reminder system.',
        'Integrated automated notifications to keep users informed about upcoming events.',
        'Ensured scalability of the system to handle an increasing number of events and users.',
        'Created a clean and simple user interface for an intuitive user experience.'
      ],
      github: 'https://github.com/yuvaraj189/Event-whisperer' // Placeholder for GitHub link
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
    Internships
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
          {/* Domain: Business Development */}
          <div className="bg-gray-800 shadow-md rounded-lg p-6" data-aos="fade-right" data-aos-delay="300">
            <h3 className="text-xl font-semibold text-indigo-500 mb-2">Business Development</h3>
            <ul className="text-white space-y-2">
              <li>
                <strong>Experience:</strong> Identified and secured strategic partnerships, contributing to revenue growth and market expansion.
              </li>
              <li>
                <strong>Interest:</strong> Driven to explore new market opportunities, develop growth strategies, and build lasting business relationships.
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
        "The greatest glory in living lies not in never falling, but in rising every time we fall."
      </p>
      <p className="text-sm text-gray-400 mt-2">— Nelson Mandela</p>
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
