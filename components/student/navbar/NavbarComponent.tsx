import React from "react";
import Image from "next/image";
import logo from "@/components/image/logo.png";
import admin from "@/components/image/admin.png";

export default function NavbarComponent() {
  return (
    <div className="flex w-full items-center px-4 justify-between h-full bg-white">
      {/* loge */}
      <section>
        <Image src={logo} alt="logo" width={135} height={48} />
      </section>

      {/* profile */}
      <section className="flex gap-4">
        <Image src={admin} alt="admin" width={30} height={30}/>
        <p className="text-black font-semibold text-xl">Student</p>
      </section>
    </div>
  );
}
