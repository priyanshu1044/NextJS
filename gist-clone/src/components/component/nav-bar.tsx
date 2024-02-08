import Link from "next/link"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"

export function Navbar() {

    return (
<header className="px-4 lg:px-6 h-14 flex items-center">
<Link className="flex items-center justify-center" href="#">
  <CodeIcon className="h-6 w-6" />
  <span className="sr-only">Gist Clone</span>
</Link>
<nav className="ml-auto flex gap-4 sm:gap-6">
  <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
    Home
  </Link>
  <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
    Explore
  </Link>
  <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
    Create Gist
  </Link>
</nav>
</header>
    )

}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 6" />
      <polyline points="8 6 2 12 18" />
    </svg>
  )
}
