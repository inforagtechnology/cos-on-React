import { useState } from "react";
import { Link } from "react-router-dom";

const navigation = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/course", label: "Courses" },
  { to: "/placement", label: "Our Placements" },
  { to: "/contact-us", label: "Contact Us" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="tw-sticky tw-top-0 tw-z-50 tw-border-b tw-border-white/10 tw-bg-[#050510]/95 tw-shadow-lg tw-shadow-black/20 tw-backdrop-blur">
      <div className="tw-mx-auto tw-flex tw-min-h-[84px] tw-max-w-7xl tw-items-center tw-justify-between tw-gap-6 tw-px-5 sm:tw-px-8">
        <Link aria-label="Code Of School home" className="tw-flex tw-shrink-0 tw-items-center tw-no-underline" to="/">
          <img
            alt="Code Of School"
            className="tw-h-14 tw-w-auto tw-object-contain"
            src="/img/cos-white-logo.webp"
          />
        </Link>

        <nav aria-label="Main navigation" className="tw-hidden tw-items-center tw-gap-8 lg:tw-flex">
          {navigation.map(({ to, label }) => (
            <Link
              className="tw-text-base tw-font-medium tw-text-white tw-no-underline tw-transition-colors hover:tw-text-white"
              key={label}
              to={to}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          className="tw-hidden tw-rounded-full tw-bg-gradient-to-r tw-from-violet-600 tw-to-indigo-500 tw-px-5 tw-py-3 tw-text-base tw-font-bold tw-text-white tw-no-underline tw-shadow-lg tw-shadow-violet-950/30 tw-transition hover:tw-from-orange-500 hover:tw-to-amber-500 sm:tw-inline-flex"
          to="/contact-us"
        >
          Enroll Now
        </Link>

        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className="tw-inline-flex tw-h-11 tw-w-11 tw-items-center tw-justify-center tw-rounded-xl tw-border tw-border-white/15 tw-bg-white/5 tw-text-2xl tw-text-white lg:tw-hidden"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="tw-border-t tw-border-white/10 tw-bg-[#080817] tw-px-5 tw-py-4 lg:tw-hidden"
        >
          <div className="tw-mx-auto tw-flex tw-max-w-7xl tw-flex-col tw-gap-1">
            {navigation.map(({ to, label }) => (
              <Link
                className="tw-rounded-lg tw-px-3 tw-py-3 tw-text-base tw-font-medium tw-text-white tw-no-underline hover:tw-bg-white/5 hover:tw-text-white"
                key={label}
                onClick={() => setMenuOpen(false)}
                to={to}
              >
                {label}
              </Link>
            ))}
            <Link
              className="tw-mt-2 tw-rounded-lg tw-bg-gradient-to-r tw-from-violet-600 tw-to-indigo-500 tw-px-3 tw-py-3 tw-text-center tw-text-base tw-font-bold tw-text-white tw-no-underline"
              onClick={() => setMenuOpen(false)}
              to="/contact-us"
            >
              Enroll Now
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
