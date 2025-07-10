"use client"

import * as React from "react"
import { Home, FileText, CreditCard, Info } from "lucide-react"
import { AnimeNavBar } from "@/components/ui/anime-navbar"

const items = [
  {
    name: "Azure Web3",
    url: "/",
    icon: Home,
  },
  {
    name: "Github",
    url: "https://github.com/Ujjwal-soni98/AzureWeb3",
    icon: Info,
  },
]

export function AnimeNavBarDemo() {
  return <AnimeNavBar items={items} defaultActive="Azure Web3" />
}