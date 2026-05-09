import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaBrain, FaRocket, FaAward } from 'react-icons/fa'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: FaCode,
      title: 'Full Stack Development',
      description: 'Building scalable web applications with modern technologies'
    },
    {
      icon: FaBrain,
      title: 'AI & Machine Learning',
      description: 'Creating intelligent systems with ML, DL, and NLP'
    },
    {
      icon: FaRocket,
      title: 'Performance Optimization',
      description: 'Delivering fast, efficient, and optimized solutions'
    },
    {
      icon: FaAward,
      title: 'Best Practices',
      description: 'Following industry standards and clean code principles'
    },
  ]

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-responsive-lg font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate developer with expertise in AI and Full Stack Development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Animated Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-3xl blur-2xl opacity-30 animate-pulse" />
              
              {/* Profile Image Container */}
              <div className="relative glass rounded-3xl p-8 border-2 border-neon-blue/30 overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-2xl overflow-hidden relative group">
                  {/* Profile Image */}
                  <img
                    src="/images/profile.jpg"
                    alt="Bharathkumar D - Java Developer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to PNG if JPG not found
                      if (e.target.src.includes('.jpg')) {
                        e.target.src = '/images/profile.png'
                      } else if (e.target.src.includes('profile.png')) {
                        // Fallback to avatar
                        e.target.src = '/images/avatar.jpg'
                      } else if (e.target.src.includes('avatar.jpg')) {
                        e.target.src = '/images/avatar.png'
                      } else {
                        // Final fallback to emoji
                        e.target.style.display = 'none'
                        e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-8xl">👨‍💻</div>'
                      }
                    }}
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              Java & Web Developer
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I'm Bharathkumar D, an aspiring IT professional from Erode, Tamil Nadu, India. 
              Completing B.Tech in Information Technology at VSB Engineering College, Karur 
              with a CGPA of 7.5 (Expected graduation: 2025). I have a strong foundation in web development and programming.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My expertise includes Java, HTML, CSS, JavaScript, React.js, and MySQL. 
              I'm passionate about creating responsive, user-friendly web applications and 
              continuously learning new technologies to solve real-world problems.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: 'Education', value: 'B.Tech IT' },
                { label: 'Projects', value: '5+' },
                { label: 'CGPA', value: '7.5' },
                { label: 'Graduation', value: '2025' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="glass p-4 rounded-xl text-center"
                >
                  <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass p-6 rounded-2xl text-center card-hover group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-neon-blue to-neon-purple rounded-2xl flex items-center justify-center group-hover:animate-bounce">
                <feature.icon className="text-3xl text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
