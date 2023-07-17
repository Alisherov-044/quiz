export default function Footer() {
  const privacy = [
    "Website Terms",
    "Privacy Policy",
    "Accessibility Statement",
  ];

  return (
    <footer className="w-full bg-gradient-to-r from-purple-950 to-blue-900 h-10 px-20">
      <div className="container h-full flex flex-row items-center justify-between text-red-700 text-xs">
        <div className="flex flex-row gap-4">
          <span>{privacy.join(" | ")}</span>
        </div>
        <div className="flex">&copy; 2023 All Rights Reserved</div>
      </div>
    </footer>
  );
}
