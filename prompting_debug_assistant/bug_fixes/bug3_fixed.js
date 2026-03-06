// User profile loader (FIXED)

function formatUser(user) {
  const name = user?.name ?? "Unknown";
  const upperName = name.toUpperCase();

  const city = user?.address?.city ?? "Unknown City";
  const tagCount = Array.isArray(user?.tags) ? user.tags.length : 0;

  return `${upperName} from ${city} (${tagCount} tags)`;
}

function getUserFromApiMock(id) {
  // Simulating inconsistent API response:
  if (id === 1) return { name: "Ana", address: { city: "Tirana" }, tags: ["data", "sql"] };
  if (id === 2) return { name: "Ben", tags: ["js"] }; // address missing
  return null;
}

function main() {
  const ids = [1, 2, 3];
  for (const id of ids) {
    const user = getUserFromApiMock(id);
    console.log("Loaded:", formatUser(user)); // now safe for missing data
  }
}

main();