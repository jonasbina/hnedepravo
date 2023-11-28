import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Sidebar from './sidebar'
import {useState} from "react";
type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
    const [showSidebar, setShowSidebar] = useState(false);
    return (

    <>
        <Meta />
      <div className="min-h-screen flex">
          <Sidebar show={showSidebar} setter={setShowSidebar} />
          <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
