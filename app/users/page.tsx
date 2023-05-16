import Image from "next/image";

function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
}

export default async function Users() {
  const users = await getUsers();
  return (
    <main className="flex flex-col items-center justify-between">
      <h1 className="text-4xl font-bold text-center mb-10">Users</h1>
      <ul className="flex flex-wrap gap-7">
        {users.map((user) => (
          <li
            key={user.id}
            className="basis-60 flex border rounded-md p-4 grow bg-slate-100/20"
          >
            <Image
              width={50}
              height={50}
              src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${user.name}`}
              alt="avatar"
            />
            <section>
              <a href={`/users/${user.id}`}>{user.name}</a>
              <p className="truncate w-40"> {user.email}</p>
            </section>
          </li>
        ))}
      </ul>
    </main>
  );
}
