import Head from 'next/head'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <Image src="/logo.svg" height={1000} width={5000} alt="logo" />
    </div>
    
  )
}

export default Header
