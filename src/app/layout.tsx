import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '../../public/assets/fonts/inter/inter.css';
import "../../public/assets/icons/phosphor/styles.min.css";
import "@/app/assets/css/ltr/all.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <script src="assets/js/vendor/visualization/d3/d3.min.js" defer />
      <script src="assets/js/vendor/visualization/d3/d3_tooltip.js" defer />

      <script src="assets/js/app.js" defer />
      <script src="assets/demo/pages/dashboard.js" defer />
      <script src="assets/demo/charts/pages/dashboard/streamgraph.js" defer />
      <script src="assets/demo/charts/pages/dashboard/sparklines.js" defer />
      <script src="assets/demo/charts/pages/dashboard/lines.js" defer />
      <script src="assets/demo/charts/pages/dashboard/areas.js" defer />
      <script src="assets/demo/charts/pages/dashboard/donuts.js" defer />
      <script src="assets/demo/charts/pages/dashboard/bars.js" defer />
      <script src="assets/demo/charts/pages/dashboard/progress.js" defer />
      <script src="assets/demo/charts/pages/dashboard/heatmaps.js" defer />
      <script src="assets/demo/charts/pages/dashboard/pies.js" defer />
      <script src="assets/demo/charts/pages/dashboard/bullets.js" defer />
    </html>
  );
}
