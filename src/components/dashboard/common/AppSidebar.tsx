import { authApi, useAppDispatch, userApi } from '@/redux';
import { getSidebarItemsWithRole } from '@/utils';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Logo } from '@/components';
import { cn } from '@/lib';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = userApi.useUserInfoQuery(undefined);
  const logout = authApi.useLogoutMutation()[0];
  const navigate = useNavigate();

  if (isLoading) return null;

  const items = getSidebarItemsWithRole(data!.data!.role);

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
    <Sidebar {...props}>
      <SidebarHeader>
        <Link to="/">
          <Logo />
        </Link>
      </SidebarHeader>

      <SidebarContent>
        {items.map(group => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map(item => (
                  <SidebarMenuItem key={item.title}>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        cn(
                          'block px-4 py-2 rounded font-semibold',
                          isActive
                            ? 'text-primary bg-primary/10'
                            : 'text-foreground hover:text-primary hover:bg-primary/5'
                        )
                      }
                    >
                      {item.title}
                    </NavLink>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="px-4 pb-4">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="w-full bg-primary">Logout</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to logout?
              </AlertDialogTitle>
              <AlertDialogDescription>
                You will need to log back in to access your account.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleLogout}>
                Logout
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
