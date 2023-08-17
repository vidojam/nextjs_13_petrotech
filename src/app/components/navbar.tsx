import Link from 'next/link';


export default function Navbar() {
  return (
  <div>
    <Link href="/home"> Home</Link>
    <Link href="/about"> About</Link>
    <Link href="/us"> About Us</Link>
    <Link href="/someone"> About Someone Else</Link>
    <Link href="/listofposts"> Posts</Link>
    </div>
  );
}
