export default function Loading() {
  return (
    <main
      className="loader-screen"
      role="status"
      aria-live="polite"
    >
      <div className="loader-ring" />
      <p>Preparando DevWeb</p>
    </main>
  );
}