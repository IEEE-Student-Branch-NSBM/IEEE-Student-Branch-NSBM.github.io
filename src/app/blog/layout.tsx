"use client";

export default function BlogPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <article>{children}</article>;
}
