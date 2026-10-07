import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#641824] text-[#FFFDF9]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.6fr_0.6fr]">

          {/* Brand */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F7F1E8]/30">
                <span className="font-[var(--font-laila)] text-xl">
                  F
                </span>
              </div>

              <span className="font-[var(--font-laila)] text-2xl font-semibold">
                FeedLens
              </span>
            </div>

            <h2 className="max-w-xl font-[var(--font-laila)] text-4xl leading-[1.08] sm:text-5xl">
              Look closer at what
              <br />
              your feed is showing you.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#F7F1E8]/65">
              An interactive research project exploring how social media
              recommendation algorithms influence student content
              consumption.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#F7F1E8]/45">
              Explore
            </p>

            <div className="flex flex-col gap-4 text-sm">
              <Link
                href="/"
                className="w-fit transition hover:text-[#D8C8B8]"
              >
                Home
              </Link>

              <Link
                href="/research"
                className="w-fit transition hover:text-[#D8C8B8]"
              >
                Research
              </Link>

              <Link
                href="/insights"
                className="w-fit transition hover:text-[#D8C8B8]"
              >
                Insights
              </Link>

              <Link
                href="/simulator"
                className="w-fit transition hover:text-[#D8C8B8]"
              >
                Simulator
              </Link>

              <Link
                href="/awareness"
                className="w-fit transition hover:text-[#D8C8B8]"
              >
                Awareness
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#F7F1E8]/45">
              Connect
            </p>

            <div className="flex flex-col gap-4">

              {/* Email */}
              <a
                href="mailto:feedlens.project@gmail.com"
                className="group flex w-fit items-center gap-3 text-sm"
              >
                <Mail size={17} strokeWidth={1.5} />

                <span className="transition group-hover:text-[#D8C8B8]">
                  Email
                </span>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="group flex w-fit items-center gap-3 text-sm"
              >
                <span className="flex h-[17px] w-[17px] items-center justify-center rounded-[5px] border border-current text-[9px] font-bold">
                  IG
                </span>

                <span className="transition group-hover:text-[#D8C8B8]">
                  Instagram
                </span>
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="group flex w-fit items-center gap-3 text-sm"
              >
                <span className="flex h-[17px] w-[17px] items-center justify-center rounded-[4px] border border-current text-[8px] font-bold">
                  ▶
                </span>

                <span className="transition group-hover:text-[#D8C8B8]">
                  YouTube
                </span>
              </a>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-[#F7F1E8]/15 pt-6">
          <div className="flex flex-col gap-4 text-xs text-[#F7F1E8]/45 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © 2026 FeedLens. Student research project.
            </p>

            <div className="flex items-center gap-2">
              <span>Built to question the feed</span>
              <ArrowUpRight size={14} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;