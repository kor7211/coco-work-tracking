await fetch("http://localhost:8000/api/history", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Alice"
    })
});