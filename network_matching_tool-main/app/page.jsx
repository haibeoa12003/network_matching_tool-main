import Links from "@/components/links";

export default function Home() {
  return (
    <main>
      <header style={{ backgroundColor: "red", padding: "1rem" }}>
        <div style={{ marginLeft: "6rem", color: "white" }}>
          <h1>Welcome to Matching Network Calculate Tool</h1>
        </div>
      </header>
      <div style={{ marginLeft: "6rem" }}>
        <Links />
      </div>
    </main>
  );
}
