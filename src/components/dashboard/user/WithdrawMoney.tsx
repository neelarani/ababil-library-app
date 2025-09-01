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

const zWithdrawSchema = z.object({
  amount: z
    .number({ message: "Amount is required" })
    .int()
    .positive("Amount must be a positive integer")
    .refine((val) => val !== 0, {
      message: "Amount must be greater than 0",
    }),
});

type WithdrawFormValues = z.infer<typeof zWithdrawSchema>;

const WithdrawMoney = () => {
  const [withdraw, { isLoading }] = transactionApi.useWithdrawMoneyMutation();

  const form = useForm<WithdrawFormValues>({
    resolver: zodResolver(zWithdrawSchema),
    defaultValues: {
      amount: 0,
    },
  });

  const onSubmit = async (values: WithdrawFormValues) => {
    try {
      const res = await withdraw(values).unwrap();
      toast.success(res.message || "Withdrawal successful");
      form.reset();
    } catch (err: unknown) {
      toast.error(getErrorMessage(err) || "Withdrawal failed");
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Withdraw Money</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
            noValidate
          >
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
                      {...field}
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
              {isLoading ? "Processing..." : "Withdraw"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default WithdrawMoney;
