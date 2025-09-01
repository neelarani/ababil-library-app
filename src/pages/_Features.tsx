import { ShieldCheck, Wallet, Send, Globe, LineChart } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Secure Transactions",
    description:
      "Bank-level encryption keeps your money and data safe at all times.",
  },
  {
    icon: <Wallet className="w-8 h-8 text-primary" />,
    title: "Smart Wallet",
    description:
      "Manage your balance, add funds, and withdraw instantly with ease.",
  },
  {
    icon: <Send className="w-8 h-8 text-primary" />,
    title: "Instant Transfers",
    description:
      "Send and receive money in seconds — no hidden delays or fees.",
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "Multi-Currency Support",
    description:
      "Hold and exchange currencies globally with competitive rates.",
  },
  {
    icon: <LineChart className="w-8 h-8 text-primary" />,
    title: "Track & Insights",
    description: "Monitor your spending and income with real-time analytics.",
  },
];

const Features = () => {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Why Choose <span className="text-primary">Neela Wallet</span>?
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          A simple, secure, and powerful way to manage your money.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="shadow-md hover:shadow-lg transition rounded-2xl"
            >
              <CardHeader className="flex flex-col items-center text-center space-y-2">
                {feature.icon}
                <CardTitle className="text-lg font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
