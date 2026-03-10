// User profile loader (contains RUNTIME EXCEPTION)
function formatUser(user) {
  // expected: user = { name: string, address: { city: string }, tags: [] }
  const upperName = user.name.toUpperCase();
  const city = user.address.city;          // <-- will crash if address is missing
  const tagCount = user.tags.length;
  return `${upperName} from ${city} (${tagCount} tags)`;
}


function getUserFromApiMock(id) {
  // Simulating inconsistent API response:
  if (id === 1) return { name: "Ana", address: { city: "Tirana" }, tags: ["data", "sql"] };
  if (id === 2) return { name: "Ben", tags: ["js"] }; // address missing -> causes crash
  return null;
}

function main() {
  const ids = [1, 2, 3];
  for (const id of ids) {
    const user = getUserFromApiMock(id);
    // No validation here (on purpose)
    console.log("Loaded:", formatUser(user)); // Runtime error occurs for id=2 or id=3
  }
}

main();