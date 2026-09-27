async function _request(url, options = {}) {
    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(
            `HTTP ${response.status}: ${response.statusText}`
        );
    }

    return await response.json();
}


async function getHistories(limit = 10) {
    return await _request(
        `http://localhost:8000/api/history?limit=${limit}`
    );
}


async function getHistory(id) {
    return await _request(
        `http://localhost:8000/api/history/${id}`
    );
}


async function getTypes(limit = 10) {
    return await _request(
        `http://localhost:8000/api/history/types?limit=${limit}`
    );
}


async function getType(id) {
    return await _request(
        `http://localhost:8000/api/history/types/${id}`
    );
}


async function createHistory(
    title,
    comment,
    type_id,
    city,
    started,
    duration_minutes,
    break_minutes = 0,
) {
    return await _request(
        "http://localhost:8000/api/history",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                comment,
                type_id,
                city,
                started,
                duration_minutes,
                break_minutes
            })
        }
    );
}


async function addImageToHistory(
    history_id,
    path
) {
    return await _request(
        `http://localhost:8000/api/history/${history_id}/images`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                path
            })
        }
    );
}


async function createType(
    name,
    description
) {
    return await _request(
        "http://localhost:8000/api/history/types",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                description
            })
        }
    );
}