import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Layout } from '@components/ui/root-layout'
import { Toaster } from 'sonner'

export const Route = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
      <Toaster richColors position="top-right" />
    </Layout>
  ),
})
