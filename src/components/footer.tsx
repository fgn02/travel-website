import Link from "next/link";
import { Container } from "@/components/container";

export function Footer() {
  return (
    <footer className="pt-20 mt-20 bg-slate-700">
      <Container className="flex flex-col md:flex-row gap-10 justify-between">
        <div>
          <div className="text-xl  text-white">Next-Tour 🛤️</div>
          <p className="text-slate-400 max-w-xs">
            Discover amzaing places at exclusive deals. Eat, Shop, Visit
            interesting places around the world.
          </p>
        </div>
        <div>
          <div className="text-xl  text-white">Contact</div>
          <p className="text-slate-400">Mobile No: 01826103370</p>
          <Link
            className="text-slate-400 underline"
            href="emailto:abc@gmail.com"
          >
            Email: farhanishraq02@mail.com
          </Link>
        </div>
      </Container>
      <p className="text-center text-sm text-slate-500 pt-20 pb-4">
        Copyright © 2024 Farhan Ishraq Fagun. All Rights Reserved.
      </p>
    </footer>
  );
}
