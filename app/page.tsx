import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>Testing for Voucher Management<br />
      <Link href="/components/login">Login</Link><br />
      <Link href="/components/register">Register</Link>
    </main>
  )
}
