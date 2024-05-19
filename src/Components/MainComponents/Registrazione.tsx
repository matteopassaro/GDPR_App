import React from "react";

interface RegistrazioneProps {
  switchToLogin?: () => void;
}

const Registrazione: React.FC<RegistrazioneProps> = ({ switchToLogin }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">
          Registrazione
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm text-gray-600">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-green-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm text-gray-600">
              Cognome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-green-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-green-600"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-green-600"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-3 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none"
          >
            Registrati
          </button>
        </form>
        <button
          onClick={switchToLogin}
          className="mt-4 text-blue-500 hover:underline focus:outline-none"
        >
          Hai già un account? Accedi
        </button>
      </div>
    </div>
  );
};

export default Registrazione;
