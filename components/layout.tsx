import Footer from './footer'
import Meta from './meta'
import { SpeedInsights } from "@vercel/speed-insights/next"
type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
    return (
    <>
        <SpeedInsights/>
        <Meta />
        <div className="h-full">
          <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
