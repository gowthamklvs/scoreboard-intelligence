import type { Metadata } from "next";
import "./globals.css";
import { PlausibleAnalytics } from "../components/PlausibleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://scoreboardintelligence.ai"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "ScoreBoard Intelligence™ | The Intelligence Layer for AI Infrastructure",
    description:
      "ScoreBoard Intelligence™ turns fragmented AI infrastructure data into operational intelligence.",
    url: "https://scoreboardintelligence.ai/",
    siteName: "ScoreBoard Intelligence™",
    type: "website",
  },
  title: "ScoreBoard Intelligence™ | The Intelligence Layer for AI Infrastructure",
  description:
    "ScoreBoard Intelligence™ turns fragmented AI infrastructure data into operational intelligence.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}<PlausibleAnalytics /></body>
    </html>
  );
}
