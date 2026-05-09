import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/join2bharath', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/bharathkumar-d-3b4a17361/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:join2bharath2003@gmail.com', label: 'Email' },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-[#0a0a0f] border-t border-gray-800">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold gradient-text mb-4"
            >
              &lt;BK /&gt;
            </motion.div>
            <p className="text-gray-400 mb-4">
              I'm Bharathkumar D, an aspiring IT professional with a strong foundation in web development and programming. 
              Currently pursuing B.Tech in Information Technology at VSB Engineering College, Karur.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full glass border border-neon-blue/30 text-neon-blue hover:bg-neon-blue hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-neon-blue transition-colors inline-block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📧 join2bharath2003@gmail.com</li>
              <li>📱 +91 7845011886</li>
              <li>📍 Erode, Tamil Nadu, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Bharathkumar D. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Made with <FaHeart className="text-red-500 animate-pulse" /> using React & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink" />
    </footer>
  )
}

export default Footer
