// Simple queue processing (contains LOOP LOGIC bug)
function processQueue(queue) {
  let processed = 0;

  while (queue.length > 0) {
    const item = queue[0];

    if (item.priority === "high") {
      // Process item, but BUG: we never remove it from the queue
      console.log("Processing HIGH:", item.name);
      processed++;
      continue; // infinite loop: same item stays at queue[0] forever
    }

    console.log("Processing normal:", item.name);
    queue.shift(); // removes only normal items
    processed++;
  }

  return processed;
}

const q = [
  { name: "Email", priority: "high" },
  { name: "Report", priority: "normal" },
  { name: "Backup", priority: "normal" }
];

console.log("Total processed:", processQueue(q));