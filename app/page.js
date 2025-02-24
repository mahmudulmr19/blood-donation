"use client";
import { useSession, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-gray-50 border ">
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <main className="space-y-8">
          {session ? (
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                User Profile
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="text-lg font-medium text-foreground">
                      {session.user.full_name || "Not provided"}
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-lg font-medium text-foreground">
                      {session.user.email || "Not provided"}
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">Mobile Number</p>
                    <p className="text-lg font-medium text-foreground">
                      {session.user.mobile_number || "Not provided"}
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">Designation</p>
                    <p className="text-lg font-medium text-foreground">
                      {session.user.designation || "Not provided"}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end mt-6">
                  <button
                    className="px-6 py-2 text-base font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition duration-150 ease-in-out"
                    onClick={() => signOut()}
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-lg text-gray-600">
                Please sign in to view your information
              </p>
              <a
                href="/api/auth/signin"
                className="mt-4 inline-block px-6 py-2 text-base font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition duration-150 ease-in-out"
                rel="noopener noreferrer"
              >
                Sign In
              </a>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
