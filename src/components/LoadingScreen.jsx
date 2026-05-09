import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0a0a0f] via-[#1a0a2e] to-[#0a0a0f]"
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-20 h-20 mx-auto mb-8 border-4 border-t-neon-blue border-r-neon-purple border-b-neon-pink border-l-transparent rounded-full"
        />
        
        <motion.h2
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-3xl font-bold gradient-text"
        >
          Loading Portfolio...
        </motion.h2>
        
        <motion.div
          className="mt-4 flex justify-center space-x-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="w-3 h-3 bg-neon-blue rounded-full"
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
