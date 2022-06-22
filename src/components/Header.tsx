import { Logo } from "./Logo";

export function Header () {
 return (
  <header className="w-full py-5 flex items-center justify-center bg-colors-gray-700  border-b border-colors-gray-600">
    <Logo />
  </header>
 ) 
}