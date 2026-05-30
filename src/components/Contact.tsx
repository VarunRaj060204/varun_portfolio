"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import AnimatedHeading from "./AnimatedHeading";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY_HERE";

    emailjs
      .sendForm(
        "service_zvyk1ep",
        "template_al36rol",
        formRef.current!,
        publicKey
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          formRef.current?.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setError(true);
          setLoading(false);
        }
      );
  };

  return (
    <footer id="contact" className="bg-canvas/60 backdrop-blur-sm border-t border-hairline pt-24 pb-12 w-full text-center">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedHeading title="READY TO BUILD?" className="text-ink mb-6" />
            <p className="text-body text-lg font-light mb-10">
              I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="flex gap-6">
              <a href="https://github.com/VarunRaj060204" target="_blank" rel="noreferrer" className="text-body hover:text-batman-red text-sm font-bold uppercase tracking-[1px] transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/varunraj04" target="_blank" rel="noreferrer" className="text-body hover:text-batman-red text-sm font-bold uppercase tracking-[1px] transition-colors">
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-surface-card p-8 border border-hairline relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-batman-red" />
            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6" suppressHydrationWarning>
              <input 
                type="text" 
                name="user_name" 
                placeholder="YOUR NAME" 
                required 
                suppressHydrationWarning
                className="bg-canvas border border-hairline p-4 text-ink uppercase tracking-[1px] text-sm focus:border-batman-red outline-none transition-colors"
              />
              <input 
                type="email" 
                name="user_email" 
                placeholder="YOUR EMAIL" 
                required 
                suppressHydrationWarning
                className="bg-canvas border border-hairline p-4 text-ink uppercase tracking-[1px] text-sm focus:border-batman-red outline-none transition-colors"
              />
              <textarea 
                name="message" 
                placeholder="YOUR MESSAGE" 
                rows={5} 
                required 
                suppressHydrationWarning
                className="bg-canvas border border-hairline p-4 text-ink text-sm focus:border-batman-red outline-none transition-colors resize-none"
              />
              
              <button 
                type="submit" 
                disabled={loading}
                suppressHydrationWarning
                className="btn-primary w-full disabled:opacity-50"
              >
                {loading ? "SENDING..." : "SEND MESSAGE"}
              </button>

              {success && <p className="text-sm font-bold uppercase tracking-[1px] text-[#0fa336] text-center mt-2">Message sent successfully!</p>}
              {error && <p className="text-sm font-bold uppercase tracking-[1px] text-batman-red text-center mt-2">Failed to send message. Please try again.</p>}
            </form>
          </motion.div>
        </div>

        <div className="h-[1px] w-full bg-hairline mb-12" />

        <div className="flex justify-center items-center">
          <p className="text-muted text-sm font-light uppercase tracking-[0.5px]">
            &copy; {new Date().getFullYear()} Varun Raj. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
