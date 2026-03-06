// Simple queue processing (FIXED)

function processQueue(queue) {
  let processed = 0;

  while (queue.length > 0) {
    const item = queue.shift(); // FIX: always remove the front item

    if (item.priority === "high") {
      console.log("Processing HIGH:", item.name);
      processed++;
      continue;
    }

    console.log("Processing normal:", item.name);
    processed++;
  }

  return processed;
}

const q = [
  { name: "Email", priority: "high" },
  { name: "Report", priority: "normal" },
  { name: "Backup", priority: "normal" }
];

console.log("Total processed:", processQueue([...q])); // copy to avoid mutating original