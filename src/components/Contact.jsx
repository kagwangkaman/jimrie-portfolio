import { useState } from 'react';
import { profile } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

// Contact: links and a validated message form.
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      e.name = 'Enter your name (2 characters minimum).';
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(form.email.trim())) {
      e.email = 'Enter a valid email address.';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      e.message = 'Message needs at least 10 characters.';
    }
    return e;
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    }, 900);
  };

  const handleReset = () => {
    setForm({ name: '', email: '', message: '' });
    setErrors({});
    setStatus('idle');
  };

  return (
    <section id="contact" className="mt-16 scroll-mt-20">
      <SectionHeading index="04" title="get in touch" />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 p-6 dark:border-neutral-800">
          <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">
            Questions about my work or a role you want to discuss. Send a message.
          </p>
          <div className="mt-4 space-y-2 font-mono text-[13px]">
            <a href={`mailto:${profile.email}`} className="block text-black underline-offset-4 hover:underline dark:text-white">
              {profile.email}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="block text-gray-500 hover:text-black dark:hover:text-white">
              github
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="block text-gray-500 hover:text-black dark:hover:text-white">
              linkedin
            </a>
            <a href={profile.facebook} target="_blank" rel="noreferrer" className="block text-gray-500 hover:text-black dark:hover:text-white">
              facebook
            </a>
          </div>
          <div className="mt-4 rounded-md bg-gray-50 p-3 font-mono text-[11px] text-gray-500 dark:bg-neutral-900 dark:text-gray-400">
            {profile.location} · replies in 1-2 days
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 p-6 dark:border-neutral-800">
          {status === 'sent' ? (
            <div className="flip-in rounded-md border border-green-200 bg-green-50 p-4 dark:border-green-900 dark:bg-green-950">
              <div className="font-medium text-green-800 dark:text-green-200">Message sent.</div>
              <p className="mt-1 text-[13px] text-green-700 dark:text-green-300">
                Thanks. I will reply soon.
              </p>
              <button
                onClick={handleReset}
                className="mt-3 rounded-md border border-green-300 px-3 py-1.5 font-mono text-[11px] lowercase text-green-800 transition-all hover:bg-green-100 active:scale-95 dark:text-green-200"
              >
                send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label htmlFor="name" className="label-micro mb-1 block">
                  name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`w-full rounded-md border bg-transparent px-3 py-2 text-[14px] outline-none transition-colors placeholder:text-gray-400 focus:border-black dark:focus:border-white ${
                    errors.name ? 'border-red-400' : 'border-gray-200 dark:border-neutral-700'
                  } dark:text-white`}
                />
                {errors.name && <p className="mt-1 font-mono text-[11px] text-red-500">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="label-micro mb-1 block">
                  email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full rounded-md border bg-transparent px-3 py-2 text-[14px] outline-none transition-colors placeholder:text-gray-400 focus:border-black dark:focus:border-white ${
                    errors.email ? 'border-red-400' : 'border-gray-200 dark:border-neutral-700'
                  } dark:text-white`}
                />
                {errors.email && <p className="mt-1 font-mono text-[11px] text-red-500">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="label-micro mb-1 block">
                  message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hello Jim,"
                  rows={4}
                  className={`w-full resize-y rounded-md border bg-transparent px-3 py-2 text-[14px] outline-none transition-colors placeholder:text-gray-400 focus:border-black dark:focus:border-white ${
                    errors.message ? 'border-red-400' : 'border-gray-200 dark:border-neutral-700'
                  } dark:text-white`}
                />
                {errors.message && <p className="mt-1 font-mono text-[11px] text-red-500">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full rounded-md bg-black py-2.5 font-mono text-[12px] lowercase text-white transition-all hover:opacity-90 active:scale-[0.99] disabled:opacity-50 dark:bg-white dark:text-black"
              >
                {status === 'sending' ? 'sending' : 'send message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
