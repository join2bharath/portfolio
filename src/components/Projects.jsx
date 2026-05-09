import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'Celsius Fahrenheit Converter',
      description: 'Built a real-time temperature conversion tool with a responsive interface and clear file structure, useful for weather, cooking, and health scenarios.',
      image: '🌡️',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/join2bharath',
      demo: 'https://celsius-to-fahrenheat.netlify.app/',
      featured: true
    },
    {
      title: 'Educational Chatbot',
      description: 'Developed an educational web chatbot for students in grades 10-12, providing access to previous years\' questions, study materials, and textbooks.',
      image: '🤖',
      tech: ['React.js', 'JavaScript', 'CSS', 'Web Development'],
      github: 'https://github.com/join2bharath',
      demo: 'https://chatbot.televein.in',
      featured: true
    },
    {
      title: 'Student Management System',
      description: 'Developed an application to manage student records with CRUD operations using JDBC. Features include add, update, delete, and view student information.',
      image: '📚',
      tech: ['Java', 'MySQL', 'JDBC', 'Database Management'],
      github: 'https://github.com/join2bharath',
      demo: '#',
      featured: true
    },
    {
      title: 'Task Manager Web App',
      description: 'Built a task management app with add/delete/update features using React hooks. Helps users organize and track their daily tasks efficiently.',
      image: '✅',
      tech: ['React.js', 'JavaScript', 'React Hooks', 'CSS'],
      github: 'https://github.com/join2bharath',
      demo: '#',
      featured: false
    },
  ]

  return (
    <section id="projects" className="section-padding relative bg-gradient-to-b from-transparent via-[#0f0f1e]/50 to-transparent">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-responsive-lg font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`glass rounded-2xl overflow-hidden card-hover group ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center overflow-hidden">
                <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent opacity-60" />
                
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-neon-blue rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-neon-blue/10 text-neon-blue rounded-full border border-neon-blue/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-medium text-white hover:shadow-lg hover:shadow-neon-blue/50 transition-all"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </motion.a>

                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-neon-blue rounded-lg font-medium text-neon-blue hover:bg-neon-blue hover:text-white transition-all"
                  >
                    <FaExternalLinkAlt />
                    <span>Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/join2bharath"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-semibold text-white hover:shadow-lg hover:shadow-neon-blue/50 transition-all"
          >
            <FaCode className="text-xl" />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
