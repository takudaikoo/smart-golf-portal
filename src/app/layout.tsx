import type { Metadata } from "next";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import BottomNav from "@/components/BottomNav";
import Box from "@mui/material/Box";

export const metadata: Metadata = {
  title: "Smart Golf Portal",
  description: "Member portal for Smart Golf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <ThemeRegistry>
          <Box sx={{ pb: 7 }}>
            {children}
          </Box>
          <BottomNav />
        </ThemeRegistry>
      </body>
    </html>
  );
}
