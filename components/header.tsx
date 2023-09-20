import Head from 'next/head'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <Image
        src="/logo.svg"
        alt="logo"
        sizes="80vw"
        fill
        />
    </div>
    
  )
}

export default Header
