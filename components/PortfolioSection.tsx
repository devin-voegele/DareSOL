"use client";

import { motion } from "framer-motion";

const transactions = [
  { name: "Litecoin", amount: "$4,056.00", icon: "L" },
  { name: "Dogecoin", amount: "$1,230.00", icon: "D" },
  { name: "Omnisol", amount: "$5,000.00", icon: "O" },
  { name: "Strike fee coin", amount: "$7,214.34", icon: "S" },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-light mb-12">
          Effortless global financial
          <br />
          management
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Track Digital Payments */}
          <motion.div 
            className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 border border-blue-500/20 shadow-2xl"
            whileHover={{ 
              scale: 1.02,
              rotateY: 3,
              boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.6)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-4xl font-light mb-2">
              Track
              <br />
              Digital
              <br />
              Payments
            </h3>
            <p className="text-blue-100 text-sm mb-8">
              Master your finances. Seamlessly monitor and manage digital payment transactions.
            </p>

            {/* Transaction List */}
            <div className="space-y-3 mb-8">
              {transactions.map((transaction, index) => (
                <motion.div
                  key={transaction.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xs">{transaction.icon}</span>
                    </div>
                    <span>{transaction.name}</span>
                  </div>
                  <span className="font-medium">{transaction.amount}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10">
              <div className="text-sm font-medium mb-1">Monitor Digital Transactions</div>
              <p className="text-xs text-blue-100">
                Easily track and manage your financial transactions with enhanced security across multiple blockchains.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Secure Digital Transactions */}
          <motion.div 
            className="bg-zinc-900/80 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl"
            whileHover={{ 
              scale: 1.02,
              rotateY: -3,
              boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.6)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-40 h-40">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl opacity-50" />
                <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex items-center justify-center">
                  <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-medium text-center mb-2">Secure Digital Transactions</h3>
            <p className="text-sm text-gray-400 text-center">
              Efficiently track, manage, and protect all your financial transactions across multiple blockchains.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
