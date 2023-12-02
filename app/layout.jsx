import '@styles/globals.css';

import Nav from '@components/Nav';

export const metadata = {
  title: "Elena Luo",
  description: "Discover & Share AI prompt"
}

const RootLayout = ({children}) => {

  return (
    <html lang="en">
      <head>
        {/* <title>Elena Luo</title> */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      </head>
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