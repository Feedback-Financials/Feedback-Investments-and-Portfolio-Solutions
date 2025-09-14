export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container mx-auto container-px py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/logo main fips.jpg"
              alt="Feedback Financial Solutions logo"
              className="h-42 w-40 rounded-sm object-contain"
            />
            <div className="leading-tight">
              <span className="block text-sm text-foreground/70">FEEDBACK</span>
              <span className="block font-semibold tracking-wide">INVESTMENTS & PORTFOLIO SOLUTIONS</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-foreground/70 max-w-sm">
            Securing Your Future, Empowering Your Dreams.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-primary mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#companies" className="hover:text-primary">Companies</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-primary mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>+91-7023655404 / +91-9414166675</li>
            <li>feedback6675@gmail.com</li>
            <li>service@feedbackfinancialsolutions.com</li>
            <li>
              <a
                className="underline hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/search/?api=1&query=228%2C%20Ashwini%20Bazaar%20Rd%2C%20near%20ICICI%20Bank%20Ltd%2C%20Udaipur%20Ashwini%20Marg%2C%20Hathipole%2C%20Basti%20Ram%20Jiki%20Badi%2C%20Udaipur%2C%20Rajasthan%20313004"
              >
                228, Ashwini Bazaar Rd, near ICICI Bank Ltd, Udaipur Ashwini Marg, Hathipole, Basti Ram Jiki Badi, Udaipur, Rajasthan 313004
              </a>
            </li>
            <li>Shop number: 214, 2nd floor</li>
          </ul>
          <div className="mt-4 flex items-center gap-4">
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/deepak-purohit-5716a446/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
              <span className="text-sm font-medium">LinkedIn</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2"><path d="M6.94 6.5A1.94 1.94 0 1 1 5 4.56 1.94 1.94 0 0 1 6.94 6.5ZM7 8H5v11h2V8Zm4.5 0H9.5v11h2V13c0-1.12.58-2.25 1.92-2.25S15.5 11.88 15.5 13v6h2v-6.75C17.5 9.69 16 8 14.17 8A3.28 3.28 0 0 0 11.5 9.58V8Z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-foreground/60 flex items-center justify-center gap-3">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F8a30826747c94766b110003aef6b9089%2F19efdcb249ef4fb1a80417db33395f68?format=webp&width=128"
          alt="Feedback Financial Solutions logo"
          className="h-7 w-7 rounded-sm object-contain"
        />
        © {new Date().getFullYear()} FEEDBACK INVESTMENTS & PORTFOLIO SOLUTIONS. All rights reserved.
      </div>
    </footer>
  );
}
