// LoginCredential.tsx
import { Button } from '@/components/ui/button';

const LoginCredential = ({
  setCredentials,
}: {
  setCredentials: (data: { email: string; password: string }) => void;
}) => {
  return (
    <div className="flex gap-3 mb-4">
      <Button
        className="bg-foreground/20"
        type="button"
        variant="outline"
        onClick={() =>
          setCredentials({
            email: 'hr.neelarani@gmail.com',
            password: 'Agent@12345',
          })
        }
      >
        Agent Login
      </Button>

      <Button
        type="button"
        variant="outline"
        onClick={() =>
          setCredentials({
            email: 'ababil@gmail.com',
            password: 'Admin@12345',
          })
        }
      >
        Admin Login
      </Button>
    </div>
  );
};

export default LoginCredential;
