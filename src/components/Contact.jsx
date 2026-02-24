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

import { Mail, MapPin } from "lucide-react";
import { contact } from "../data/data";

/**
 * Main Contact section component
 * - Displays contact intro text
 * - Shows contact information (email, location)
 * - Provides contact form for sending messages
 */
export default function Contact() {
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

        {/* Main contact card container */}
        <div className="
          bg-white
          border border-slate-200
          rounded-3xl
          p-8 md:p-12
          hover:shadow-lg
          hover:-translate-y-1
          transition-all
          duration-300
        ">

          {/* Two-column layout: Info on left, Form on right */}
          {/* Two-column layout: Info on left, Form on right */}
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left column - Contact information and availability */}
            <div>
              <p className="text-slate-500 leading-relaxed max-w-md font-medium">
                I'm currently looking for new opportunities. Whether you have a question,
                a project idea, or just want to say hi—my inbox is open.
              </p>

              {/* Contact info rows */}
              <div className="mt-10 space-y-6">
                <InfoRow
                  icon={<Mail size={18} />}
                  label="Email"
                  value={contact.email}
                />

                <InfoRow
                  icon={<MapPin size={18} />}
                  label="Location"
                  value={contact.location}
                />
              </div>
            </div>

            {/* Right column - Contact form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();

                // Extract form data
                const form = new FormData(e.currentTarget);
                const name = form.get("name") || "";
                const email = form.get("email") || "";
                const message = form.get("message") || "";

                // Encode subject line with name
                const subject = encodeURIComponent(
                  `Portfolio message from ${name}`
                );

                // Format message body with form fields
                const body = encodeURIComponent(
                  `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
                );

                // Open user's default email client with pre-filled content
                window.location.href =
                  `mailto:${contact.email}?subject=${subject}&body=${body}`;
              }}
            >
              {/* Name and Email fields in grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Field name="name" label="Name" placeholder="Your name" />

                <Field
                  name="email"
                  label="Email"
                  placeholder="you@example.com"
                  type="email"
                />
              </div>

              {/* Message textarea field */}
              <div className="mt-5">
                <label className="text-sm font-bold text-slate-700">
                  Message
                </label>

                <textarea
                  name="message"
                  className="
                    mt-2
                    w-full
                    h-36
                    rounded-2xl
                    bg-slate-50
                    border border-slate-200
                    px-4 py-3
                    text-slate-900
                    outline-none
                    focus:border-[#7c3aed]
                    focus:ring-4
                    focus:ring-[#7c3aed]/10
                  "
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="
                  mt-8
                  px-8 py-3
                  rounded-full
                  bg-[#7c3aed]
                  text-white
                  font-bold
                  hover:bg-[#6d28d9]
                  transition-all
                  shadow-lg
                  shadow-[#7c3aed]/20
                "
              >
                Send Message
              </button>

              {/* Helper text explaining functionality */}
              <p className="mt-4 text-xs text-slate-400 font-medium">
                Opens your email app with pre-filled message.
              </p>

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
 * Used for email and location display
 */
function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4">

      {/* Icon container with background */}
      <div className="
        w-11 h-11
        rounded-full
        bg-[#7c3aed]/10
        border border-[#7c3aed]/20
        flex items-center justify-center
        text-[#7c3aed]
      ">
        {icon}
      </div>

      {/* Label and value text */}
      <div>
        <div className="text-slate-900 font-bold">
          {label}
        </div>

        <div className="text-slate-500 font-medium">
          {value}
        </div>
      </div>

    </div>
  );
}


/**
 * Field Component
 * Reusable form input field with label
 * Supports all HTML input types and spreads additional props
 */
function Field({ label, name, ...props }) {
  return (
    <div>
      <label className="text-sm font-bold text-slate-700">
        {label}
      </label>

      <input
        name={name}
        {...props}  // Allows passing type, placeholder, required, etc.
        className="
          mt-2
          w-full
          rounded-2xl
          bg-slate-50
          border border-slate-200
          px-4 py-3
          text-slate-900
          outline-none
          focus:border-[#7c3aed]
          focus:ring-4
          focus:ring-[#7c3aed]/10
        "
      />
    </div>
  );
}
