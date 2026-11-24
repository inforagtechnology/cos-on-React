import { Link } from "react-router-dom";

const quickLinks = [
  ["Home", "/"],
  ["About Us", "/about-us"],
  ["Courses", "/course"],
  ["Our Placements", "/placement"],
  ["Blog", "/blogs"],
  ["Contact Us", "/contact-us"],
  ["Privacy Policy", "/privacy-policy"],
];

const certifications = [
  ["CMMI", "/img/course_img/cmmi-removebg-preview-3.png"],
  ["ISO", "/img/course_img/iso-final-removebg-preview-1.png"],
  ["ISO", "/img/course_img/iso-removebg-preview-1.png"],
  ["MSME", "/img/course_img/msme-removebg-preview.png"],
];

function ContactIcon({ children }) {
  return (
    <span className="tw-flex tw-h-9 tw-w-9 tw-shrink-0 tw-items-center tw-justify-center tw-rounded-xl tw-border tw-border-white/10 tw-bg-white/5 tw-text-orange-400">
      <svg aria-hidden="true" className="tw-h-4 tw-w-4" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
        {children}
      </svg>
    </span>
  );
}

function SocialLink({ label, href, children }) {
  return (
    <a
      aria-label={label}
      className="tw-flex tw-h-10 tw-w-10 tw-items-center tw-justify-center tw-rounded-xl tw-border tw-border-white/10 tw-bg-white/5 tw-text-white tw-no-underline tw-transition hover:tw--translate-y-0.5 hover:tw-border-orange-400/50 hover:tw-bg-orange-400/10 hover:tw-text-white"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <svg aria-hidden="true" className="tw-h-[18px] tw-w-[18px]" fill="currentColor" viewBox="0 0 16 16">
        {children}
      </svg>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="tw-relative tw-overflow-hidden tw-border-t-2 tw-border-orange-500/60 tw-bg-[#070711] tw-text-white">
      <div aria-hidden="true" className="tw-pointer-events-none tw-absolute -tw-left-32 -tw-top-32 tw-h-80 tw-w-80 tw-rounded-full tw-bg-violet-600/10 tw-blur-3xl" />
      <div className="tw-relative tw-mx-auto tw-grid tw-max-w-7xl tw-grid-cols-1 tw-gap-10 tw-px-5 tw-py-14 sm:tw-px-8 md:tw-grid-cols-2 lg:tw-grid-cols-[1.4fr_0.8fr_1.2fr_1.2fr]">
        <section>
          <Link aria-label="Code Of School home" className="tw-inline-flex tw-no-underline" to="/">
            <img
              alt="Code Of School"
              className="tw-h-16 tw-w-auto tw-object-contain"
              src="/img/cos-white-logo.webp"
            />
          </Link>
          <p className="tw-mt-5 tw-max-w-sm tw-text-base tw-leading-7 tw-text-white">
            Code of School by Inforag Technology empowers future tech innovators
            through practical training, real-world projects, and career-focused guidance.
          </p>
          <div className="tw-mt-5 tw-flex tw-flex-wrap tw-items-center tw-gap-2">
            {certifications.map(([name, src], index) => (
              <span className="tw-flex tw-h-12 tw-w-14 tw-items-center tw-justify-center tw-rounded-lg tw-bg-white tw-p-1.5" key={`${name}-${index}`}>
                <img alt={name} className="tw-max-h-full tw-max-w-full tw-object-contain" src={src} />
              </span>
            ))}
          </div>
        </section>

        <nav aria-label="Footer quick links">
          <h2 className="tw-mb-5 tw-text-base tw-font-bold tw-uppercase tw-tracking-[0.16em] tw-text-white">
            Quick Links
          </h2>
          <ul className="tw-space-y-3">
            {quickLinks.map(([label, to]) => (
              <li key={label}>
                <Link className="tw-text-base tw-text-white tw-no-underline tw-transition hover:tw-text-white" to={to}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section>
          <h2 className="tw-mb-5 tw-text-base tw-font-bold tw-uppercase tw-tracking-[0.16em] tw-text-white">
            Connect With Us
          </h2>
          <div className="tw-flex tw-items-start tw-gap-3">
            <ContactIcon>
              <path d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" />
              <circle cx="12" cy="9" r="2.5" />
            </ContactIcon>
            <a
              className="tw-pt-1 tw-text-base tw-leading-6 tw-text-white tw-no-underline tw-transition hover:tw-text-white"
              href="https://maps.google.com/?q=Code+Of+School+Indore"
              rel="noreferrer"
              target="_blank"
            >
              <strong className="tw-font-semibold tw-text-slate-200">Head Office (Indore)</strong>
              <br />
              Office No. 421, Shagun Tower, Vijay Nagar, Indore, MP
            </a>
          </div>
          <div className="tw-mt-4 tw-flex tw-items-center tw-gap-3">
            <ContactIcon>
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.4 2.8a2 2 0 0 1-.6 1.7L7.6 9.5a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 1.7-.6l2.8.4a2 2 0 0 1 1.6 1.9Z" />
            </ContactIcon>
            <div className="tw-flex tw-flex-col tw-gap-1 tw-text-base">
              <a className="tw-text-white tw-no-underline hover:tw-text-white" href="tel:+919977723584">+91 9977-723-584</a>
              <a className="tw-text-white tw-no-underline hover:tw-text-white" href="tel:+919165234695">+91 9165-234-695</a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="tw-mb-5 tw-text-base tw-font-bold tw-uppercase tw-tracking-[0.16em] tw-text-white">
            Get in Touch
          </h2>
          <div className="tw-flex tw-items-center tw-gap-3">
            <ContactIcon>
              <rect height="15" rx="2" width="20" x="2" y="4.5" />
              <path d="m3 6 9 7 9-7" />
            </ContactIcon>
            <a className="tw-break-all tw-text-base tw-text-white tw-no-underline hover:tw-text-white" href="mailto:thecodeofschool@gmail.com">
              thecodeofschool@gmail.com
            </a>
          </div>
          <div className="tw-mt-4 tw-flex tw-items-start tw-gap-3">
            <ContactIcon>
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </ContactIcon>
            <p className="tw-pt-1 tw-text-base tw-leading-6 tw-text-white">
              Mon–Sat 10:00 AM – 8:00 PM
              <br />
              Sunday Closed
            </p>
          </div>
          <div className="tw-mt-5 tw-flex tw-gap-3">
            <SocialLink href="https://www.instagram.com/codeofschool/" label="Instagram">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.205-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/company/code-of-school" label="LinkedIn">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </SocialLink>
            <SocialLink href="https://www.facebook.com/codeofschool" label="Facebook">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58-.001-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </SocialLink>
          </div>
        </section>
      </div>

      <div className="tw-relative tw-border-t tw-border-white/10 tw-bg-black/20 tw-px-5 tw-py-5 tw-text-center tw-text-base tw-text-white">
        Copyright © 2025{" "}
        <a className="tw-text-white tw-no-underline hover:tw-text-white" href="https://inforag.com/" rel="noreferrer" target="_blank">
          Inforag Technology
        </a>
        . All rights reserved.
      </div>
    </footer>
  );
}
