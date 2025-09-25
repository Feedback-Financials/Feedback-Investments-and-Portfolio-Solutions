import BubbleSlideshow from "@/components/site/BubbleSlideshow";
import LogoCarousel from "@/components/site/LogoCarousel";

import { openWhatsApp } from "@/lib/whatsapp";

export default function Index() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section id="home" className="relative">
        <div className="absolute inset-0">
          <svg className="h-full w-full" viewBox="0 0 1440 720" preserveAspectRatio="none" aria-hidden>
            <defs>
              <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--background))" />
                <stop offset="100%" stopColor="hsl(var(--background))" />
              </linearGradient>
              <radialGradient id="burst" cx="30%" cy="20%" r="60%">
                <stop offset="0%" stopColor="hsla(19,88%,54%,0.22)" />
                <stop offset="60%" stopColor="hsla(19,88%,48%,0.08)" />
                <stop offset="90%" stopColor="hsla(19,88%,40%,0)" />
              </radialGradient>
              <radialGradient id="burst2" cx="80%" cy="70%" r="60%">
                <stop offset="0%" stopColor="hsla(19,88%,54%,0.18)" />
                <stop offset="70%" stopColor="hsla(19,88%,44%,0.06)" />
                <stop offset="95%" stopColor="hsla(19,88%,40%,0)" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#g)" />
            <circle cx="220" cy="160" r="280" fill="url(#burst)" />
            <circle cx="1180" cy="520" r="320" fill="url(#burst2)" />
            <g stroke="hsla(0,0%,100%,0.06)">
              <path d="M0,640 C320,560 480,720 800,640 1120,560 1280,680 1440,600" fill="none" />
              <path d="M0,520 C320,460 480,600 800,520 1120,440 1280,560 1440,480" fill="none" />
            </g>
          </svg>
        </div>
        <div className="relative container mx-auto container-px flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-primary">Securing Your Future,</span> Empowering Your Dreams.
          </h1>
          <p className="mt-6 max-w-3xl text-balance text-foreground/80">
            FEEDBACK INVESTMENTS & PORTFOLIO SOLUTIONS is your trusted partner for Life, Health & General Insurance and Loans. With over 25 years of experience, we deliver tailored financial solutions to secure your future.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#services" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow hover:bg-primary/90">Explore Services</a>
            <a href="https://wa.me/917023655404?text=Hello%20Deepak%2C%20I%20want%20to%20schedule%20an%20appointment%20with%20you." onClick={(e) => { e.preventDefault(); openWhatsApp("Hello Deepak, I want to schedule an appointment with you."); }} target="_blank" rel="noopener noreferrer" className="rounded-full border border-border px-6 py-3 font-semibold hover:border-primary hover:text-primary">Book an Appointment</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border/60 bg-card py-20">
        <div className="container mx-auto container-px grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-primary">About Us</h2>
            <p className="mt-4 text-foreground/80">
              We are a Udaipur-based financial consultancy guided by transparency, integrity, and client-first solutions. Our philosophy is to simplify finance and deliver outcomes that align with your goals across protection, healthcare, investments, and assets.
            </p>
            <p className="mt-4 text-foreground/80">
              Mission: <span className="italic">Providing transparent, customized, and timely financial solutions for every stage of life.</span>
            </p>
          </div>
          <div className="grid gap-6">
            <div className="rounded-xl border border-border bg-background/60 p-6">
              <h3 className="font-semibold text-primary">Deepak Purohit</h3>
              <p className="mt-2 text-sm text-foreground/80">
                Over 25 years of experience in marketing and financial products.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-background/60 p-6">
              <h3 className="font-semibold text-primary">Heena Purohit</h3>
              <p className="mt-2 text-sm text-foreground/80">
                12+ years of expertise in education, placements, and health insurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto container-px">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold"><span className="text-primary">Services</span> We Offer</h2>
            <p className="mt-3 text-foreground/80">Explore our interactive overview of solutions tailored to your needs.</p>
          </div>
          <div className="mt-10">
            <BubbleSlideshow />
          </div>
        </div>
      </section>

      {/* Companies */}
      <section id="companies" className="py-20">
        <div className="container mx-auto container-px">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">Our Insurance Partners</h2>
            <p className="mt-3 text-foreground/80">
              Our Insurance Partners We work with some of India’s leading insurance providers to bring you the best options in life, health, and general insurance. Our trusted partners include SBI Life, ICICI, HDFC, Bajaj Allianz, Max Life, Tata AIG, Reliance General, Aditya Birla Health, Kotak Life, and Star Health — along with many more leading insurers.
            </p>
          </div>
          <div className="mt-10">
            <LogoCarousel />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border/60 bg-card py-20">
        <div className="container mx-auto container-px grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-primary">Contact Us</h2>
            <ul className="mt-4 space-y-2 text-foreground/80">
              <li>Phone: +91-7023655404, +91-9414166675</li>
              <li>Email: feedback6675@gmail.com | service@feedbackfinancialsolutions.com</li>
              <li>Address: <a className="underline hover:text-primary" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=228%2C%20Ashwini%20Bazaar%20Rd%2C%20near%20ICICI%20Bank%20Ltd%2C%20Udaipur%20Ashwini%20Marg%2C%20Hathipole%2C%20Basti%20Ram%20Jiki%20Badi%2C%20Udaipur%2C%20Rajasthan%20313004">228, Ashwini Bazaar Rd, near ICICI Bank Ltd, Udaipur Ashwini Marg, Hathipole, Basti Ram Jiki Badi, Udaipur, Rajasthan 313004</a></li>
<li>Shop number: 214, 2nd floor</li>
            </ul>
            <div className="mt-8">
              <a
                href="https://wa.me/917023655404?text=Hello%20Deepak%2C%20I%20want%20to%20schedule%20an%20appointment%20with%20you."
                onClick={(e) => { e.preventDefault(); openWhatsApp("Hello Deepak, I want to schedule an appointment with you."); }}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground shadow hover:bg-primary/90"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2a10 10 0 0 0-8.94 14.56L2 22l5.62-1.48A10 10 0 1 0 12 2Zm0 2a8 8 0 0 1 6.83 12.27l-.3.45A8 8 0 0 1 6.1 17.6l-.46-.29A8 8 0 0 1 12 4Zm3.6 9.78c-.2-.1-1.18-.58-1.36-.64s-.32-.1-.45.1-.52.64-.64.78-.24.15-.44.05a6.53 6.53 0 0 1-1.92-1.18 7 7 0 0 1-1.3-1.62c-.13-.22 0-.33.09-.43s.2-.24.29-.37.12-.2.18-.34a.39.39 0 0 0 0-.37c0-.1-.45-1.08-.61-1.48s-.33-.34-.46-.35h-.4a.77.77 0 0 0-.55.26 2.3 2.3 0 0 0-.72 1.7 4 4 0 0 0 .85 2.07 9.08 9.08 0 0 0 3.5 3.22 12.06 12.06 0 0 0 1.2.44 2.88 2.88 0 0 0 1.33.08 2 2 0 0 0 1.32-.92 1.58 1.58 0 0 0 .11-.92c-.05-.12-.19-.18-.39-.27Z"/>
                </svg>
                Book an Appointment on WhatsApp
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-border bg-background">
            <iframe
              title="Office Location"
              width="100%"
              height="100%"
              className="min-h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=228%2C%20Ashwini%20Bazaar%20Rd%2C%20near%20ICICI%20Bank%20Ltd%2C%20Udaipur%20Ashwini%20Marg%2C%20Hathipole%2C%20Basti%20Ram%20Jiki%20Badi%2C%20Udaipur%2C%20Rajasthan%20313004&output=embed"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
