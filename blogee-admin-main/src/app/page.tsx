import { AuthProvider, useAuth} from "@/context/AuthContext";

import Image from "next/image";

export default function Home(){


    return (
    <AuthProvider>

      <main className={`flex max-h-full flex-col p-24   `}>
        <div className="p-8 ">
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome to the Admin Panel
          </h1>
          {/* Add more content here */}
        </div>
        <p className="text-black text-base hover:text-blue-500">
          - Fist login with login page then go to create post screen. -
          currently
        </p>
        <p className="text-black text-base hover:text-blue-500">
          - you can post only text based post using this.
        </p>
      </main>
    </AuthProvider>
  );
  }
