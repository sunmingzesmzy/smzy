import Link from "next/link"
import { motion } from "framer-motion"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <header className="bg-white bg-opacity-10 backdrop-blur-md text-white p-4 sticky top-0 z-10">
        <nav className="container mx-auto flex justify-between items-center">
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="text-2xl font-bold">
              我的个人网站
            </Link>
          </motion.div>
          <ul className="flex space-x-4">
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link href="/" className="hover:text-yellow-300 transition-colors">
                首页
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link href="/about" className="hover:text-yellow-300 transition-colors">
                关于我
              </Link>
            </motion.li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-8">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          {children}
        </motion.div>
      </main>
      <footer className="bg-white bg-opacity-10 backdrop-blur-md text-white p-4">
        <div className="container mx-auto text-center">© {new Date().getFullYear()} 我的个人网站</div>
      </footer>
    </div>
  )
}

