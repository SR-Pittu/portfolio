/**
 * Contact Component
 * 
 * Displays contact information and a contact form.
 * Features:
 * - Contact info card with email and location
 * - Email-integrated form that opens user's email client
 * - Form validation and pre-filled email body
 * - Two-column layout (responsive)
 * - Helper components for form fields and info rows
 */



/**
 * Main Contact section component
 * - Displays contact intro text
 * - Shows contact information (email, location)
 * - Provides contact form for sending messages
 */

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin } from "lucide-react";
import { contact } from "../data/data";

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "success" | "error"

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900">
            Let&apos;s Connect<span className="text-[#7c3aed]">.</span>
          </h2>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        {/* Main contact card */}
        <div className="
          bg-white border border-slate-200 rounded-3xl
          p-8 md:p-12 hover:shadow-lg hover:-translate-y-1
          transition-all duration-300
        ">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left column */}
            <div>
              <p className="text-slate-500 leading-relaxed max-w-md font-medium">
                I'm currently looking for new opportunities. Whether you have a question,
                a project idea, or just want to say hi—my inbox is open.
              </p>
              <div className="mt-10 space-y-6">
                <InfoRow icon={<Mail size={18} />}   label="Email"    value={contact.email}    />
                <InfoRow icon={<MapPin size={18} />} label="Location" value={contact.location} />
              </div>
            </div>

            {/* Right column - form */}
            <form ref={formRef} onSubmit={handleSubmit}>

              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Field name="from_name"  label="Name"  placeholder="Your name"       />
                <Field name="from_email" label="Email" placeholder="you@example.com" type="email" />
              </div>

              {/* Subject */}
              <div className="mt-4">
                <Field name="subject" label="Subject" placeholder="What's this about?" />
              </div>

              {/* Message */}
              <div className="mt-4">
                <label className="text-sm font-bold text-slate-700">Message</label>
                <textarea
                  name="message"
                  required
                  className="
                    mt-2 w-full h-36 rounded-2xl bg-slate-50 border border-slate-200
                    px-4 py-3 text-slate-900 outline-none
                    focus:border-[#7c3aed] focus:ring-4 focus:ring-[#7c3aed]/10
                  "
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="
                  mt-8 px-8 py-3 rounded-full bg-[#7c3aed] text-white font-bold
                  hover:bg-[#6d28d9] transition-all shadow-lg shadow-[#7c3aed]/20
                  disabled:opacity-60 disabled:cursor-not-allowed
                "
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {/* Status feedback */}
              {status === "success" && (
                <p className="mt-4 text-sm text-green-600 font-medium">
                  ✓ Message sent! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-sm text-red-500 font-medium">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
              {status === "idle" && (
                <p className="mt-4 text-xs text-slate-400 font-medium">
                  Message goes directly to my inbox.
                </p>
              )}

            </form>

          </div>
        </div>

      </div>
    </section>
  );
}


/**
 * InfoRow Component
 * Displays a labeled piece of information with an icon
 */
function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4">
      <div className="
        w-11 h-11 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20
        flex items-center justify-center text-[#7c3aed]
      ">
        {icon}
      </div>
      <div>
        <div className="text-slate-900 font-bold">{label}</div>
        <div className="text-slate-500 font-medium">{value}</div>
      </div>
    </div>
  );
}


/**
 * Field Component
 * Reusable form input with label
 */
function Field({ label, name, ...props }) {
  return (
    <div>
      <label className="text-sm font-bold text-slate-700">{label}</label>
      <input
        name={name}
        required
        {...props}
        className="
          mt-2 w-full rounded-2xl bg-slate-50 border border-slate-200
          px-4 py-3 text-slate-900 outline-none
          focus:border-[#7c3aed] focus:ring-4 focus:ring-[#7c3aed]/10
        "
      />
    </div>
  );
}