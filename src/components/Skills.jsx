import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaPython, FaReact, FaNodeJs, FaJava, FaGitAlt, FaDatabase
} from 'react-icons/fa'
import { 
  SiTensorflow, SiPytorch, SiMongodb, SiMysql, 
  SiTailwindcss, SiScikitlearn 
} from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 90, icon: FaJava, color: '#007396' },
        { name: 'JavaScript', level: 85, icon: FaReact, color: '#F7DF1E' },
        { name: 'HTML/CSS', level: 90, icon: FaReact, color: '#E34F26' },
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React.js', level: 85, icon: FaReact, color: '#61DAFB' },
        { name: 'MySQL', level: 80, icon: SiMysql, color: '#4479A1' },
        { name: 'Git', level: 75, icon: FaGitAlt, color: '#F05032' },
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Leadership', level: 85, icon: FaReact, color: '#00f0ff' },
        { name: 'Problem-Solving', level: 90, icon: FaReact, color: '#a855f7' },
        { name: 'Team Collaboration', level: 88, icon: FaReact, color: '#ec4899' },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'JDBC', level: 80, icon: FaDatabase, color: '#47A248' },
        { name: 'Responsive Design', level: 85, icon: FaReact, color: '#06B6D4' },
        { name: 'Time Management', level: 87, icon: FaReact, color: '#F05032' },
      ]
    },
  ]

  return (
    <section id="skills" className="section-padding relative bg-gradient-to-b from-transparent via-[#0f0f1e]/50 to-transparent">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-responsive-lg font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2 }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-neon-blue to-neon-purple rounded-full" />
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <skill.icon className="text-xl" style={{ color: skill.color }} />
                        </div>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-neon-blue font-semibold">{skill.level}%</span>
                    </div>

                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                        className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'JDBC', 'Responsive Design', 'Web Development', 'Problem Solving',
              'Team Collaboration', 'Time Management', 'Leadership', 'Version Control',
              'Debugging', 'Code Review'
            ].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 glass rounded-full text-sm font-medium text-gray-300 hover:text-neon-blue hover:border-neon-blue border border-transparent transition-all cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
