import { AdminAside } from '@components/layout/admin-aside/admin-aside'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col flex-1 lg:grid lg:grid-cols-[250px,1fr] [--admin-sidebar-width:250px] relative">
      <div className="lg:col-start-1 lg:col-end-1 bg-black">
        <AdminAside />
      </div>
      <div className="flex-1 col-start-2 col-end-2">{children}</div>
    </div>
  )
}
