import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>root page</h1>
      Nothing to see here
      <Link href="/photos">Go to photos</Link>
    </>
  );
}
