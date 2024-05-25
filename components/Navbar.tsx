import React from 'react'
import AuthButton from './AuthButton'
import Image from 'next/image'
import Link from 'next/link'

export const Navbar = async () => {
  return (
    <nav className=" w-full flex justify-center border-b border-b-[#252525] h-15 bg-background">
    <div className="w-[80%] flex justify-between items-center p-3 text-sm">
      <Link href={"/home"}>
        <Image src="/logobig.png" width={80} height={80} alt="logo" />
      </Link>
        <AuthButton />
    </div>
  </nav>
  )
}
