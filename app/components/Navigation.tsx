const links = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Users",
    route: "/users",
  },
];

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center p-8">
      <ul className="flex">
        {links.map((link) => (
          <li key={link.name} className="mr-6">
            <a href={link.route} className="text-blue-500 hover:text-blue-800">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
