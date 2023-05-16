import { GoogleMaps } from "@/app/components/Maps";
import Image from "next/image";

function getUserProfile(id: string) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
    res.json()
  );
}

export default async function Profile({ params }) {
  const { id } = params;
  const user = await getUserProfile(id);
  return (
    <section className="flex flex-col border rounded-md p-4 grow bg-slate-100/20 items-center">
      <Image
        width={200}
        height={200}
        src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${user.name}`}
        alt="avatar"
      />
      <section className="mt-6 border-t pt-2">
        <p>Name: {user.name}</p>
        <p>🦸 : {user.username}</p>
        <p>📧 : {user.email}</p>
        <p>📱: {user.phone}</p>
        <p>🕴: {user.company.name}</p>
        <p>🏢: {user.company.catchPhrase}</p>
        <p>🏠: {user.address.city}</p>
        <GoogleMaps center={user.address.geo} />
      </section>
    </section>
  );
}
