"use client";

import { motion } from "framer-motion";
import { CheckCircle, Download, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="mb-8"
        >
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold mb-4"
        >
          Payment Successful!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 mb-8"
        >
          Thank you for your purchase! Your Memecoin Master Guide is ready for download.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <a
            href="/memecoin-guide.pdf"
            download="Memecoin-Master-Guide.pdf"
            className="flex items-center justify-center gap-2 w-full py-4 px-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            <Download className="w-5 h-5" />
            Download Your Guide
          </a>

          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full py-4 px-8 border border-white/20 rounded-xl font-semibold hover:bg-white/5 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-sm text-gray-500"
        >
          A copy has also been sent to your email. If you have any issues, contact us.
        </motion.p>
      </div>
    </div>
  );
}
