"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


export const NavRoute = () => {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return path === pathname 
  }

  const routes = [
    {
      name: "Home",
      path: "/home"
    },
    {
      name: "Dashboard",
      path: "/dashboard"
    }
  
  ]
  return (
    <div className="flex items-center gap-3">
        {
            routes.map((route, index) => (
                <Link
                    key={index}
                    href={route.path}
                    className={`text-sm ${isActive(route.path) ? "text-white" : "text-gray-400"}`}
                >
                    {route.name}
                </Link>
            ))
        }
    </div>
  )
}
