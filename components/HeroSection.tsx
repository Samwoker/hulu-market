"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Optional: Setup a blur placeholder for your image for pro look
const heroImage =
  "/images/hero.jpg"; // Replace with your optimized product image

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 max-w-2xl text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-3">
            Discover. Shop. Enjoy New Arrivals.
          </h1>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-md md:max-w-lg mx-auto md:mx-0 font-medium">
            Find the newest trends, exclusive deals, and must-have products — all in one place.
            Fast delivery, easy returns, and unbeatable style.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-8 py-3 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5"
              size="lg"
            >
              <Link href="/shop">Shop Now</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold text-base px-8 py-3 rounded-xl shadow transition-transform hover:-translate-y-0.5"
              size="lg"
            >
              <Link href="/deals">View Deals</Link>
            </Button>
          </div>
        </motion.div>

        {/* Right: Product image with glow and elevation */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center items-center"
        >
          {/* Glow effect using before pseudo-element */}
          <div className="absolute inset-0 flex justify-center items-center">
            <span className="block w-[400px] h-[400px] rounded-full bg-blue-100 opacity-60 blur-2xl dark:bg-blue-900" />
          </div>
          <Image
            src={heroImage}
            alt="Premium Sneakers – Featured Product"
            width={800}
            height={800}
            priority
            className="relative z-10 rounded-2xl shadow-2xl object-cover bg-gray-100 dark:bg-gray-800"
            placeholder="blur" // Optional, for super polished UX
            blurDataURL="/images/hero-blur.jpg"
          />
        </motion.div>
      </div>

      {/* Decorative SVG curve for professional section break */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M0 80V0C480 60 960 20 1440 50V80H0Z" className="text-white dark:text-gray-950"/>
        </svg>
      </div>
    </section>
  );
}
