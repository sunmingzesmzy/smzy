import Layout from "../components/layout"
import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <Layout>
      <div className="text-white">
        <motion.h1
          className="text-5xl font-bold mb-8 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          关于我
        </motion.h1>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="个人照片"
              width={200}
              height={200}
              className="rounded-full border-4 border-white"
            />
          </motion.div>
          <motion.div
            className="max-w-md"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="mb-4 text-xl">你好！我是[你的名字]，一个热爱[你的兴趣/专业]的人。</p>
            <p className="mb-4">我创建这个网站是为了分享我的经验和项目。我相信通过分享，我们可以互相学习和成长。</p>
            <p>如果你想了解更多或者合作，请随时联系我！我总是乐于结识新朋友和探索新机会。</p>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

