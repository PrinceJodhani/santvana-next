// app/career-guidance-test/result/layout.js
// The result page shows personalised user data — keep it out of search indexes.
export const metadata = {
  title: "Your Career Guidance Result | Santvana",
  robots: { index: false, follow: false },
};

export default function ResultLayout({ children }) {
  return <>{children}</>;
}
