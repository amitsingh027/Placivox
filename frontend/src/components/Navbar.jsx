export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5">
      <h1 className="text-2xl font-bold">Placivox</h1>

      <div className="space-x-6">
        <button>Home</button>
        <button>Features</button>
        <button>Login</button>
      </div>
    </nav>
  );
}