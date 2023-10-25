import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='content-center'>
      <Link href="/">
      <a>
        <Image src="/logo.svg" height={700} width={700} alt="logo" />
        </a>
        </Link>
    </div>
    
  )
}

export default Header
