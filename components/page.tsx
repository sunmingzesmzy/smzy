import Layout from "./components/layout"
import { motion } from "framer-motion"
import { FaRocket, FaLightbulb, FaHeart } from "react-icons/fa"

export default function Home() {
  return (
    <Layout>
      <div className="text-white">
        <motion.h1
          className="text-5xl font-bold mb-8 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          欢迎来到我的个人网站
        </motion.h1>
        <motion.p
          className="mb-8 text-xl text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          这是我的个人网站，我会在这里分享我的想法和项目。
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: FaRocket, text: "探索新想法" },
            { icon: FaLightbulb, text: "创新项目" },
            { icon: FaHeart, text: "分享热情" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 text-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <item.icon className="text-4xl mb-4 mx-auto text-yellow-300" />
              <p className="text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

