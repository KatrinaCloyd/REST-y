export const makeGetCall = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
};

export const makeDeleteCall = async (url) => {
    const res = await fetch(url, { method: 'DELETE' });
    const jsonResponse = await res.json();
    return jsonResponse;
};

export const makePutOrPostCall = async (url, json, type) => {
    const res = await fetch(url, {
        method: type,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(json)
    });
    const jsonResponse = await res.json();
    return jsonResponse;
};

