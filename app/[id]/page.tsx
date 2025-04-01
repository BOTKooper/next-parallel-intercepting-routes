export const dynamicParams = false;

export function generateStaticParams() {
  let slugs = ["1", "2", "3", "4", "5", "6"];
  return slugs.map((slug) => ({ id: slug }));
}

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <div>
      <h1>/photos/[id] page</h1>
      <div className="card">{id}</div>
    </div>
  );
}
