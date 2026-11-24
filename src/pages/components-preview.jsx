import Header from "@/components/layout/Header.jsx";
import Footer from "@/components/layout/Footer.jsx";

export default function ComponentsPreview() {
  return (
    <div className="tw-min-h-screen tw-bg-[#050510] tw-font-sans tw-text-slate-100">
      <Header />
      <main className="tw-mx-auto tw-flex tw-min-h-[55vh] tw-max-w-7xl tw-flex-col tw-justify-center tw-px-5 tw-py-20 sm:tw-px-8">
        <p className="tw-mb-4 tw-text-xs tw-font-bold tw-uppercase tw-tracking-[0.24em] tw-text-orange-400">
          Reusable components · Preview
        </p>
        <h1 className="tw-max-w-3xl tw-text-4xl tw-font-extrabold tw-leading-tight tw-text-white sm:tw-text-6xl">
          A fresh foundation for the Code Of School site.
        </h1>
        <p className="tw-mt-6 tw-max-w-2xl tw-text-base tw-leading-7 tw-text-slate-400 sm:tw-text-lg">
          Review the new responsive header and footer here. They are separate from the existing
          site components, so current pages remain unchanged until you choose to adopt them.
        </p>
        <div className="tw-mt-8 tw-flex tw-flex-wrap tw-gap-3">
          <a
            className="tw-rounded-full tw-bg-gradient-to-r tw-from-violet-600 tw-to-indigo-500 tw-px-6 tw-py-3 tw-text-sm tw-font-bold tw-text-white tw-transition hover:tw-from-orange-500 hover:tw-to-amber-500"
            href="#preview-footer"
          >
            View footer
          </a>
          <span className="tw-self-center tw-text-sm tw-text-slate-500">
            Tailwind utilities · responsive · reusable
          </span>
        </div>
      </main>
      <div id="preview-footer">
        <Footer />
      </div>
    </div>
  );
}
