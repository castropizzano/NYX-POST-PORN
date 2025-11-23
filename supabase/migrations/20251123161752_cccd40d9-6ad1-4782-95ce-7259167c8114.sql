-- Fix critical missing trigger for user role assignment
-- This migration creates the trigger that automatically assigns 'user' role to new signups

-- 1. Create the trigger that was missing
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user_role();

-- 2. Assign 'user' role to all existing users who don't have any role yet
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'user'::public.app_role
FROM auth.users
WHERE NOT EXISTS (
  SELECT 1 FROM public.user_roles 
  WHERE user_roles.user_id = auth.users.id
)
ON CONFLICT (user_id, role) DO NOTHING;

-- 3. Promote the first user (project creator) to admin
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::public.app_role
FROM auth.users
ORDER BY created_at ASC
LIMIT 1
ON CONFLICT (user_id, role) DO NOTHING;