export default function Page() {
  return (
    <>
      <a
        className="download"
        href="/api/download"
        download
        aria-label="Download file"
        title="Download"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 4v11" />
          <path d="m7 11 5 5 5-5" />
          <path d="M5 20h14" />
        </svg>
      </a>
    </>
  );
}
