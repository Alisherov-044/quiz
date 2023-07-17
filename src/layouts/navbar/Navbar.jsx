import { Button } from "@/components";
import { openSettings } from "@/redux/slices/layoutSlice";
import { useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <nav className="flex items-center justify-between px-20">
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={140} height={36} priority />
      </Link>
      <Button
        text="Settings"
        type="primary"
        onClick={() => dispatch(openSettings())}
      />
    </nav>
  );
}
