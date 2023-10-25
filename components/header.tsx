import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
  return (
    <div>
      <Link href="/">
      <a>
        <Image src="/logohalloween.svg" height={700} width={1000} alt="logo" />
        </a>
        </Link>
    </div>
    
  )
}

export default Header
