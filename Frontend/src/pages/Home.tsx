import { Link } from "react-router-dom";
import {
  Leaf,
  Phone,
  HeartHandshake,
  ShieldCheck,
  MapPin,
  Truck,
  ChevronDown,
  Menu,
  X,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { useMemo, useState } from "react";

/**
 * ✅ NutriRescue Landing Page — redesigned from scratch
 * Inspired by nofoodwaste.org: top bar, strong nav, helpline CTA, impact counters, and simple flow.
 * Tailwind only. No extra components needed.
 */
export default function Home() {
  const [open, setOpen] = useState(false);

  const stats = useMemo(
    () => [
      { label: "Meals Served", value: "4,300,000+" },
      { label: "Donations Rescued", value: "12,500+" },
      { label: "Cities Covered", value: "25+" },
      { label: "CO₂ Avoided", value: "180+ tons" },
    ],
    []
  );

  const navItems = useMemo(
    () => [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "How It Works", href: "#how" },
      { label: "Impact", href: "#impact" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top Notice Bar (like NoFoodWaste updates bar) */}
      <div className="w-full bg-emerald-700 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-2 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <p className="text-xs sm:text-sm font-medium">
            Latest Update: Safe surplus meals delivered to shelters + community kitchens this week.
          </p>
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <span className="hidden sm:inline text-white/80">Helpline</span>
            <a
              href="tel:+919087790877"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 hover:bg-white/20 transition"
            >
              <Phone size={14} /> +91 90877 90877
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-emerald-700 flex items-center justify-center shadow-sm">
              <Leaf className="text-white" size={20} />
            </div>
            <div className="leading-tight">
              <p className="text-lg font-extrabold">NutriRescue</p>
              <p className="text-xs text-gray-500 -mt-0.5">
                Safe Surplus • Verified Nutrition
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-gray-700 hover:text-emerald-700 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-100 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-xl text-sm font-semibold bg-emerald-700 text-white hover:bg-emerald-800 transition shadow-sm"
            >
              Sign Up
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-xl text-sm font-semibold bg-orange-500 text-white hover:bg-orange-600 transition shadow-sm"
            >
              Donate Food
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-gray-200 hover:bg-gray-50"
            aria-label="Open menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 grid grid-cols-2 gap-2">
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-800 border border-gray-200 hover:bg-gray-50 text-center"
                  onClick={() => setOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 rounded-xl text-sm font-semibold bg-emerald-700 text-white hover:bg-emerald-800 transition shadow-sm text-center"
                  onClick={() => setOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
              <Link
                to="/signup"
                className="px-4 py-2 rounded-xl text-sm font-semibold bg-orange-500 text-white hover:bg-orange-600 transition shadow-sm text-center"
                onClick={() => setOpen(false)}
              >
                Donate Food
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1604909053198-8d7a5e13a61f?q=80&w=1800&auto=format&fit=crop"
            alt="NutriRescue"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/25" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div className="text-white">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-sm font-semibold">
                <HeartHandshake size={16} /> Health • Wellness • Eco-Medical
              </p>

              <h1 className="mt-5 text-4xl md:text-5xl font-extrabold leading-tight">
                Turn surplus food into
                <span className="text-emerald-300"> safe meals</span>
                <br />
                with verified nutrition.
              </h1>

              <p className="mt-4 text-white/85 text-lg max-w-xl">
                NutriRescue connects hotels/restaurants with NGOs using safety scoring,
                expiry timers, and fast pickup — reducing food waste and preventing
                foodborne illness.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/signup"
                  className="px-6 py-3 rounded-2xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition shadow-lg text-center"
                >
                  Donate Now
                </Link>
                <a
                  href="#how"
                  className="px-6 py-3 rounded-2xl bg-white/10 border border-white/15 text-white font-semibold hover:bg-white/15 transition text-center"
                >
                  How it works
                </a>
              </div>

              <div className="mt-8 flex items-center gap-3 text-sm text-white/85">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1">
                  ✅ Quality check enabled
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1">
                  ⏱️ Real-time claiming
                </span>
              </div>
            </div>

            {/* Right quick contact card */}
            <div className="lg:justify-self-end">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden max-w-lg">
                <div className="p-6 bg-emerald-700 text-white">
                  <p className="text-sm font-semibold text-white/90">Get in touch</p>
                  <h3 className="text-2xl font-extrabold mt-1">
                    Have surplus food?
                  </h3>
                  <p className="text-white/85 text-sm mt-2">
                    Call our helpline and we will connect you to the nearest NGO pickup.
                  </p>

                  <a
                    href="tel:+919087790877"
                    className="mt-4 inline-flex items-center justify-center gap-2 w-full rounded-2xl bg-white text-emerald-800 px-4 py-3 font-extrabold hover:bg-white/90 transition"
                  >
                    <Phone size={18} /> +91 90877 90877
                  </a>
                </div>

                <div className="p-6">
                  <p className="text-sm font-bold text-gray-900">Quick Steps</p>
                  <div className="mt-4 grid gap-3">
                    <QuickRow
                      icon={<ShieldCheck size={18} className="text-emerald-700" />}
                      title="Quality Check"
                      desc="Safety score + expiry timer blocks unsafe meals."
                    />
                    <QuickRow
                      icon={<MapPin size={18} className="text-emerald-700" />}
                      title="Locate"
                      desc="Find nearest NGO / hunger spot for pickup."
                    />
                    <QuickRow
                      icon={<Truck size={18} className="text-emerald-700" />}
                      title="Deliver"
                      desc="Pickup + distribution confirmation with proof."
                    />
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <Link
                      to="/signup"
                      className="px-4 py-3 rounded-2xl bg-gray-900 text-white font-bold text-center hover:bg-black transition"
                    >
                      Join as Donor
                    </Link>
                    <Link
                      to="/signup"
                      className="px-4 py-3 rounded-2xl border border-gray-200 font-bold text-center hover:bg-gray-50 transition"
                    >
                      Join as NGO
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Small scroll hint */}
          <div className="mt-10 flex justify-center">
            <a
              href="#impact"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition"
            >
              <ChevronDown size={18} /> Scroll
            </a>
          </div>
        </div>
      </section>

      {/* Impact Counters (like NoFoodWaste 'Plates Served') */}
      <section id="impact" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-14">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
            <p className="text-sm font-semibold text-emerald-700">Impact</p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
              Every donation is tracked.
            </h2>
            <p className="mt-2 text-gray-600 max-w-2xl">
              We measure meals delivered, food saved and eco impact — so donors and NGOs
              can build trust.
            </p>

            <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-white border border-gray-200 p-5"
                >
                  <p className="text-2xl font-extrabold text-gray-900">{s.value}</p>
                  <p className="text-sm text-gray-600 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-14">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-emerald-700">About us</p>
              <h2 className="mt-2 text-3xl font-extrabold">We’re for social causes</h2>
              <p className="mt-4 text-gray-600">
                NutriRescue is built to prevent food waste and reduce foodborne illness by
                verifying safety and enabling fast redistribution through NGOs.
              </p>
              <div className="mt-6 flex gap-3">
                <Link
                  to="/signup"
                  className="px-5 py-3 rounded-2xl bg-emerald-700 text-white font-bold hover:bg-emerald-800 transition"
                >
                  Become a Volunteer
                </Link>
                <a
                  href="#faq"
                  className="px-5 py-3 rounded-2xl border border-gray-200 font-bold hover:bg-gray-50 transition"
                >
                  Read FAQ
                </a>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1543353071-087092ec393a?q=80&w=1600&auto=format&fit=crop"
                alt="About"
                className="h-72 w-full object-cover"
              />
              <div className="p-6 bg-white">
                <p className="font-extrabold">Mission</p>
                <p className="text-gray-600 mt-1 text-sm">
                  Make food rescue safe, fast and measurable for cities and campuses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works (the 4-step strip) */}
      <section id="how" className="bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-14">
          <p className="text-sm font-semibold text-emerald-700">How it works</p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
            Simple end-to-end flow
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl">
            From posting surplus food to delivery confirmation — everything is tracked.
          </p>

          <div className="mt-8 grid md:grid-cols-4 gap-4">
            <Step
              icon={<HeartHandshake className="text-emerald-700" size={20} />}
              title="Get in touch"
              desc="Donors post surplus meals with quantity + time."
            />
            <Step
              icon={<ShieldCheck className="text-emerald-700" size={20} />}
              title="Quality check"
              desc="Safety score + expiry timer ensures safe distribution."
            />
            <Step
              icon={<MapPin className="text-emerald-700" size={20} />}
              title="Locate"
              desc="Nearest NGO claims and pickup gets assigned."
            />
            <Step
              icon={<Truck className="text-emerald-700" size={20} />}
              title="Deliver"
              desc="Pickup proof + delivery confirmation updates impact."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-14">
          <div className="flex items-end justify-between gap-6 flex-col md:flex-row">
            <div>
              <p className="text-sm font-semibold text-emerald-700">FAQ</p>
              <h2 className="mt-2 text-3xl font-extrabold">Frequently asked questions</h2>
              <p className="mt-2 text-gray-600 max-w-2xl">
                Short answers for judges and users.
              </p>
            </div>
            <Link
              to="/signup"
              className="px-5 py-3 rounded-2xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition"
            >
              Start donating
            </Link>
          </div>

          <div className="mt-8 grid lg:grid-cols-2 gap-4">
            <Faq
              q="What kind of food is allowed?"
              a="Only untouched surplus food. Expired or high-risk food is auto-blocked."
            />
            <Faq
              q="How do you ensure safety?"
              a="We use cook-time, storage method, and food type risk to generate a safety score."
            />
            <Faq
              q="Do recipients need the app?"
              a="No. NGOs distribute offline through shelters, kitchens, and community points."
            />
            <Faq
              q="How is eco-impact calculated?"
              a="We estimate food saved (kg) and CO₂ avoided based on standard factors."
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-14">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm font-semibold text-emerald-700">Contact</p>
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
                Let’s rescue food together
              </h2>
              <p className="mt-2 text-gray-600 max-w-xl">
                Donors and NGOs can reach us via helpline or sign up to test the platform.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+919087790877"
                  className="px-5 py-3 rounded-2xl bg-emerald-700 text-white font-bold hover:bg-emerald-800 transition inline-flex items-center justify-center gap-2"
                >
                  <Phone size={18} /> Call Helpline
                </a>
                <Link
                  to="/signup"
                  className="px-5 py-3 rounded-2xl bg-white border border-gray-200 font-bold hover:bg-gray-50 transition text-center"
                >
                  Sign up
                </Link>
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-gray-200 p-6 shadow-sm">
              <p className="font-extrabold text-gray-900">Quick links</p>
              <div className="mt-4 grid gap-2">
                <a className="text-sm text-gray-700 hover:text-emerald-700" href="#how">
                  How it works
                </a>
                <a className="text-sm text-gray-700 hover:text-emerald-700" href="#impact">
                  Impact
                </a>
                <a className="text-sm text-gray-700 hover:text-emerald-700" href="#faq">
                  FAQ
                </a>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href="#"
                  className="h-10 w-10 rounded-2xl border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-2xl border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-2xl border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                  aria-label="YouTube"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-8 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} NutriRescue • EcoHack Project
          </p>
          <p className="text-sm text-gray-600">
            Built with React + Tailwind • Health + Wellness + Eco-medical
          </p>
        </div>
      </footer>
    </div>
  );
}

function QuickRow({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-3 items-start rounded-2xl border border-gray-200 bg-gray-50 p-4">
      <div className="h-10 w-10 rounded-2xl bg-white border border-gray-200 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="font-extrabold text-gray-900 text-sm">{title}</p>
        <p className="text-gray-600 text-sm mt-0.5">{desc}</p>
      </div>
    </div>
  );
}

function Step({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
      <div className="h-12 w-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="mt-4 font-extrabold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6">
      <p className="font-extrabold text-gray-900">{q}</p>
      <p className="mt-2 text-sm text-gray-600">{a}</p>
    </div>
  );
}
