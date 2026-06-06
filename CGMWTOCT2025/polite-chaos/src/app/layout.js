import "./globals.css";
import ClientLayout from "@/client-layout";
import { ViewTransitions } from "next-view-transitions";

export const metadata = {
  title: "Jitendar Mahara | Backend & Distributed Systems Engineer",
  description:
    "Backend Engineer specializing in real-time, event-driven architectures — Kafka, WebSockets, Redis, Node.js.",
  icons: {
    icon: "/site-logo.png",
    shortcut: "/site-logo.png",
    apple: "/site-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ViewTransitions>
          <ClientLayout>{children}</ClientLayout>
        </ViewTransitions>
      </body>
    </html>
  );
}
