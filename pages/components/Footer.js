
export default function Footer({ locationCount }) {
  return (
    <footer className="bg-green-500">
      <p className="text-left text-white p-5">
        {locationCount} Locations World Wide
      </p>
    </footer>
  );
}
