
import "./globals.scss";

export const metadata = {
  title: "Vampire",
  description: "An in-browser JavaScript playground",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
