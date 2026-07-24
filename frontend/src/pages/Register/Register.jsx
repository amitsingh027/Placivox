export default function Register() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="bg-slate-900 p-8 rounded-2xl w-[400px]">
        <h2 className="text-white text-3xl font-bold mb-6">
          Register
        </h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded bg-slate-800 text-white mb-4"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-slate-800 text-white mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded bg-slate-800 text-white mb-4"
        />

        <button className="w-full bg-green-600 py-3 rounded text-white">
          Register
        </button>
      </div>
    </div>
  );
}