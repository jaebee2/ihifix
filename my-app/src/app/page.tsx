import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to MyApp</h1>
        <p className="text-lg mb-8">
          This is a simple landing page built with Next.js, Tailwind CSS, and
          TypeScript.
        </p>
        <div className="space-x-4">
          <Link href="/login">
            <span className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
              Login
            </span>
          </Link>
          <Link href="/signup">
            <span className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer">
              Sign Up
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
