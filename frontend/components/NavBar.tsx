import Link from 'next/link';

export default function NavBar() {
  return (
    <nav>
      <Link href="/" className='active'>
        Home
      </Link>
      <Link href="/">
        About
      </Link>
   </nav>
  );
}
