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
        body: json
    });
    const jsonResponse = await res.json();
    return jsonResponse;
};

// {"name":"HELLLLLOOOOOOOOO","species_id":4,"role":"sidekick","unique_power":"gone","movie":"No Movie","movie_year":1951,"hand_drawn":true,"image":"https:blah.jpeg","gif":"https:blah.gif"}
