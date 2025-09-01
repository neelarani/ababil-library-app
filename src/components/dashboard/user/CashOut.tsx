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

const zCashOutSchema = z.object({
  receiverPhone: z
    .string()
    .regex(
      /^01[0-9]{9}$/,
      "Invalid phone number (must start with 01 and be 11 digits)"
    ),
  amount: z
    .number()
    .refine((val) => val !== 0, {
      message: "Amount must be a positive integer",
    })
    .min(1, "Amount must be at least 1"),
});

type CashOutFormValues = z.infer<typeof zCashOutSchema>;

const CashOut = () => {
  const [cashOut, { isLoading }] = transactionApi.useCashOutMutation();

  const form = useForm<CashOutFormValues>({
    resolver: zodResolver(zCashOutSchema),
    defaultValues: {
      receiverPhone: "",
      amount: 0,
    },
  });

  const onSubmit = async (values: CashOutFormValues) => {
    try {
      const res = await cashOut(values).unwrap();
      toast.success(res.message || "Cash out successful");
      form.reset();
    } catch (err: unknown) {
      toast.error(getErrorMessage(err) || "Failed to cash out");
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Cash Out</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Receiver Phone */}
            <FormField
              control={form.control}
              name="receiverPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Receiver Phone</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter receiver phone (e.g. 01XXXXXXXXX)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Amount */}
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
              {isLoading ? "Processing..." : "Cash Out"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CashOut;
