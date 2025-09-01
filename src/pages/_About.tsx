import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          About <span className="text-primary">Neela Wallet</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Neela Wallet is your trusted digital wallet app that makes sending,
          receiving, and managing money simple and secure. Built with modern
          design and seamless user experience, it’s the perfect wallet for your
          everyday financial needs.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="p-6 rounded-lg border bg-card shadow-sm">
          <h2 className="text-xl font-semibold mb-2">💸 Easy Transactions</h2>
          <p className="text-muted-foreground">
            Send and receive money instantly with just a few taps. No more long
            processes or waiting times.
          </p>
        </div>
        <div className="p-6 rounded-lg border bg-card shadow-sm">
          <h2 className="text-xl font-semibold mb-2">🔒 Secure & Reliable</h2>
          <p className="text-muted-foreground">
            Your money and data are protected with top-notch encryption and
            security standards.
          </p>
        </div>
        <div className="p-6 rounded-lg border bg-card shadow-sm">
          <h2 className="text-xl font-semibold mb-2">🌍 Global Access</h2>
          <p className="text-muted-foreground">
            Use Neela Wallet anytime, anywhere — perfect for travelers, online
            payments, and cross-border transfers.
          </p>
        </div>
        <div className="p-6 rounded-lg border bg-card shadow-sm">
          <h2 className="text-xl font-semibold mb-2">📊 Smart Insights</h2>
          <p className="text-muted-foreground">
            Track your spending habits and manage your finances better with
            built-in analytics.
          </p>
        </div>
      </section>

      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold mb-4">Join Neela Wallet Today</h2>
        <p className="text-muted-foreground mb-6">
          Experience the freedom of a fast, secure, and modern digital wallet.
        </p>
        <Link
          to="/register"
          className="inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
};

export default About;
