import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen dark:bg-gradient-to-r from-cyan-500 to-blue-500">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
