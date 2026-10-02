import FolderDownload from "@/components/FolderDownload";
import { listFolders } from "@/lib/folders";

export const dynamic = "force-dynamic";

export default async function Page() {
  const folders = await listFolders();

  return (
    <main className="page">
      <h1>IoT practicals</h1>
      {folders.length === 0 && <p>No folders available.</p>}
      <ul className="folders">
        {folders.map((name) => (
          <li key={name}>
            <strong>{name}</strong>
            <FolderDownload name={name} />
          </li>
        ))}
      </ul>
    </main>
  );
}
