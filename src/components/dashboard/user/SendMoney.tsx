import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { transactionApi } from "@/redux";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { getErrorMessage } from "@/utils";

const zSendMoneySchema = z.object({
  receiverPhone: z
    .string()
    .regex(
      /^01[0-9]{9}$/,
      "Invalid phone number (must start with 01 and be 11 digits)"
    ),

  amount: z
    .number({ message: "Amount is required" })
    .int()
    .positive("Amount must be positive")
    .min(1, "Amount must be at least 1"),
});

type SendMoneyFormValues = z.infer<typeof zSendMoneySchema>;

const SendMoney = () => {
  const [sendMoney, { isLoading }] = transactionApi.useSendMoneyMutation();

  const form = useForm<SendMoneyFormValues>({
    resolver: zodResolver(zSendMoneySchema),
    defaultValues: {
      receiverPhone: "",
      amount: 0,
    },
  });

  const onSubmit = async (values: SendMoneyFormValues) => {
    try {
      const res = await sendMoney(values).unwrap();
      toast.success(res.message || "Money sent successfully!");
      form.reset();
    } catch (err: unknown) {
      toast.error(getErrorMessage(err) || "Failed to send money");
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Send Money</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="receiverPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Receiver Phone</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Enter receiver phone number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      value={field.value || ""}
                      onChange={(e) =>
                        field.onChange(
                          e.target.value ? Number(e.target.value) : ""
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Processing..." : "Send"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SendMoney;
