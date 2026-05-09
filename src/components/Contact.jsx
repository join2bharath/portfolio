import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState({ type: '', message: '' })

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'join2bharath2003@gmail.com',
      link: 'mailto:join2bharath2003@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 7845011886',
      link: 'tel:+917845011886'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Erode, Tamil Nadu, India',
      link: '#'
    },
  ]

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/join2bharath', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/bharathkumar-d-3b4a17361/', label: 'LinkedIn' },
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const mailtoLink = `mailto:join2bharath2003@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    
    // Open user's email client
    window.location.href = mailtoLink
    
    // Show success message
    setStatus({
      type: 'success',
      message: 'Opening your email client... If it doesn\'t open, please email me directly at join2bharath2003@gmail.com'
    })
    
    // Clear form after 2 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setStatus({ type: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-responsive-lg font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Let's Talk About Your Project
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center gap-4 glass p-4 rounded-xl card-hover group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="text-xl text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.title}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 mb-4">Connect with me:</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 flex items-center justify-center rounded-full glass border border-neon-blue/30 text-neon-blue hover:bg-neon-blue hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-gray-700 rounded-lg text-white focus:border-neon-blue focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-gray-700 rounded-lg text-white focus:border-neon-blue focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-gray-700 rounded-lg text-white focus:border-neon-blue focus:outline-none transition-colors"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-gray-700 rounded-lg text-white focus:border-neon-blue focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                      : 'bg-red-500/20 border border-red-500/50 text-red-400'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-neon-blue/50 transition-all flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
