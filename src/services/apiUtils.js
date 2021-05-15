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

// URL https://rocky-refuge-35369.herokuapp.com/characters

//POST WORKING BUT PUT NOT.... 
//POST {"name":"HELLLLLOOOOOOOOO","species_id":4,"role":"sidekick","unique_power":"none","movie":"No Movie","movie_year":1951,"hand_drawn":true,"image":"https:blah.jpeg","gif":"https:blah.gif"}

//PUT  takes id at end of string 
//{name: 'OOOOOOOOOOOOOOOOOOO', owner_id: 1, species_id: 4, role: 'villan', unique_power: 'none', movie: 'MOVIE NAME', movie_year: 2020, hand_drawn: false, image: 'none', gif: 'none here either'}

//delete by char id # at end of url
