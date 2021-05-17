export const makeGetCall = async (url) => {
    try {
        const res = await fetch(url);
        const json = await res.json();
        return json;
    }
    catch (err) {
        return err.message;
    }
};

export const makeDeleteCall = async (url) => {
    try {
        const res = await fetch(url, { method: 'DELETE' });
        const jsonResponse = await res.json();
        return jsonResponse;
    }
    catch (err) {
        return err.message;
    }
};


export const makePutOrPostCall = async (url, json, type) => {
    try {
        const res = await fetch(url, {
            method: type,
            headers: { 'Content-Type': 'application/json' },
            body: json
        });
        const jsonResponse = await res.json();
        return jsonResponse;
    }
    catch (err) {
        return err.message;
    }
};
