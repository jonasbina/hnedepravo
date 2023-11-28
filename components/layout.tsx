import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import {useState} from "react";
type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
    return (
    <>
        <Meta />
      <div className="min-h-screen">
          <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
