import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Neela Wallet?",
    answer:
      "Neela Wallet is a secure digital wallet that lets you store, send, and receive money instantly with advanced encryption and multi-currency support.",
  },
  {
    question: "Is my money safe with Neela Wallet?",
    answer:
      "Yes! We use bank-level encryption, fraud detection systems, and multi-factor authentication to keep your funds and data safe at all times.",
  },
  {
    question: "How do I add money to my wallet?",
    answer:
      "You can add money using your debit/credit card, bank transfer, or linked payment accounts directly within the Neela Wallet app.",
  },
  {
    question: "Can I use Neela Wallet internationally?",
    answer:
      "Absolutely! Neela Wallet supports multiple currencies and allows cross-border payments at competitive rates.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No hidden charges. All fees (if applicable) are shown transparently before you make any transaction.",
  },
];

const FAQ = () => {
  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Everything you need to know about Neela Wallet, in one place.
        </p>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
