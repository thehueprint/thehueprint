import Image from 'next/image'
import Logo from '../public/Logo.png'

export default function Navigation() {
  return (
    <nav className="container h-[128px] bg-slate-900 py-[2rem] pl-[4rem]">
      <Image src={Logo} width={64} height={64} alt="The hue print logo" />
    </nav>
  )
}
