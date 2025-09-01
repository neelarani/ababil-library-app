import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <AlertTriangle className="h-16 w-16 text-destructive mb-4" />
      <h1 className="text-3xl font-bold mb-2">Unauthorized</h1>
      <p className="text-muted-foreground mb-6">
        You don’t have permission to access this page. Please log in with the
        right account or go back to the homepage.
      </p>
      <div className="flex gap-3">
        <Button asChild variant="outline">
          <Link to="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default Unauthorized;
