import { authApi, useAppDispatch } from '@/redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Logout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logout = authApi.useLogoutMutation()[0];

  const handleLogout = async () => {
    const { error } = await logout(undefined);
    if (!error) {
      dispatch(authApi.util.resetApiState());
      navigate('/login');
      toast.success('Logout Successful');
    } else {
      toast.error('Failed to Logout');
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="block rounded-md bg-secondary px-5 py-2.5 text-sm font-medium text-destructive-foreground transition-colors hover:bg-primary cursor-pointer hover:text-primary-foreground"
    >
      Logout
    </button>
  );
};

export default Logout;
