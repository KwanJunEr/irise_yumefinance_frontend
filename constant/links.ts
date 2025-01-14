import { Home, DollarSign, CreditCard, Wallet, Building, History, Gift } from 'lucide-react'

export const sidebarLinks = [
  {
    icon: Home,
    route: "/dashboard",
    label: "Dashboard",
  },
  {
    icon: DollarSign,
    route: "/fin-service",
    label: "Finance Service",
  },
  {
    icon: CreditCard,
    route: "/smart-spend",
    label: "Smart Spend",
  },
  {
    icon: Wallet,
    route: "/smartloan",
    label: "Smart Loan",
  },
  {
    icon: Building,
    route: "/my-banks",
    label: "My Banks",
  },
  {
    icon: History,
    route: "/transactionhistory",
    label: "Transaction History",
  },
  {
    icon: Gift,
    route: "/reward",
    label: "Reward"
  }
]