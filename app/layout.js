
export const metadata = {
  title: "Vampire",
  description: "An in-browser JavaScript playground",
};

import "./globals.scss";

import Container from 'react-bootstrap/Container';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}
