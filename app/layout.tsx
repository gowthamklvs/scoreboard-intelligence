import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScoreBoard Intelligence™ | The Intelligence Layer for AI Infrastructure",
  description:
    "ScoreBoard Intelligence™ turns fragmented AI infrastructure data into operational intelligence.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
