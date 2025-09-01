import { adminApi } from "@/redux";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const AdminOverView = () => {
  const { data, isLoading, isError } = adminApi.useAdminOverViewQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg font-medium">Loading overview...</p>
      </div>
    );
  }

  if (isError || !data?.data) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg font-medium text-red-500">
          Failed to load overview.
        </p>
      </div>
    );
  }

  const { usersCount, txrnCount, txrnVolume } = data.data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Total Users</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{usersCount}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{txrnCount}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Transaction Volume</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">৳{txrnVolume}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminOverView;
