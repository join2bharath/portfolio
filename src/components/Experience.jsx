import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      type: 'work',
      icon: FaBriefcase,
      title: 'Web Developer Intern',
      company: 'Gateway Software Solution',
      period: '2023 - 2024',
      description: 'Developed responsive web designs using HTML, CSS, and JavaScript, enhancing user experience across devices.',
      achievements: [
        'Built and maintained website content and designs',
        'Ensured consistency and accessibility',
        'Collaborated with team members to deliver web applications on time'
      ]
    },
    {
      type: 'education',
      icon: FaGraduationCap,
      title: 'Bachelor of Technology',
      company: 'VSB Engineering College, Karur',
      period: '2021 - 2025',
      description: 'Information Technology - CGPA: 7.5/10',
      achievements: [
        'Strong foundation in programming and web development',
        'Completed multiple real-world projects',
        'Active participant in technical workshops'
      ]
    },
    {
      type: 'education',
      icon: FaGraduationCap,
      title: 'Higher Secondary (HSC)',
      company: 'P K P Swamy Matriculation Higher Secondary School, Erode',
      period: '2020 - 2021',
      description: 'Scored 490/600 marks',
      achievements: [
        'Strong academic performance',
        'Focus on Science and Mathematics',
        'Developed interest in technology'
      ]
    },
    {
      type: 'education',
      icon: FaGraduationCap,
      title: 'Secondary School (SSLC)',
      company: 'P K P Swamy Matriculation Higher Secondary School, Erode',
      period: '2018 - 2019',
      description: 'Scored 368/500 marks',
      achievements: [
        'Completed secondary education',
        'Built strong fundamentals',
        'Participated in school activities'
      ]
    },
  ]

  return (
    <section id="experience" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-responsive-lg font-bold gradient-text mb-4">
            Experience & Education
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink hidden lg:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass p-6 rounded-2xl card-hover"
                  >
                    <div className="flex items-center gap-3 mb-3 lg:hidden">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                        exp.type === 'work' ? 'from-neon-blue to-neon-purple' : 'from-neon-purple to-neon-pink'
                      } flex items-center justify-center`}>
                        <exp.icon className="text-xl text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-neon-blue text-sm">{exp.company}</p>
                      </div>
                    </div>

                    <div className="hidden lg:block mb-3">
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-neon-blue font-medium">{exp.company}</p>
                    </div>

                    <p className="text-gray-400 text-sm mb-3 flex items-center gap-2 lg:justify-end">
                      <span className="px-3 py-1 bg-neon-blue/20 rounded-full">{exp.period}</span>
                    </p>

                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-neon-blue mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Icon (Desktop) */}
                <div className="hidden lg:block">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                      exp.type === 'work' ? 'from-neon-blue to-neon-purple' : 'from-neon-purple to-neon-pink'
                    } flex items-center justify-center shadow-lg`}
                  >
                    <exp.icon className="text-2xl text-white" />
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center gradient-text mb-8">
            Certifications & Awards
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Workshop: Virtual Reality - MIT, Anna University (2024)',
              'Introduction to Python - Infosys Springboard (2022)',
              'Introduction to IoT - NPTEL (2023)'
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-xl text-center card-hover"
              >
                <FaAward className="text-4xl text-neon-blue mx-auto mb-3" />
                <p className="text-white font-medium">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
