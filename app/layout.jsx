import '@styles/globals.css';

import Nav from '@components/Nav';

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI prompt"
}

const RootLayout = ({children}) => {

  return (
    <html lang="en">
      <body>
        <Nav />
        <main className = "app">
          {children}
        </main>
      </body>

    </html>
  )
}

export default RootLayout;