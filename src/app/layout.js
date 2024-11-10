// src/app/layout.js
import GlobalStyles from '../app/styles/GlobalStyles'
import StyledComponentsRegistry from '../app/lib/registry'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}