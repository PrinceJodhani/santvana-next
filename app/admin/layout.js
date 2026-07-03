// app/admin/layout.js
// Admin tools must never be indexed by search engines or AI crawlers.
export const metadata = {
  title: "Admin | Santvana",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function AdminLayout({ children }) {
  return <>{children}</>;
}
