export default async function musicInfo(req, res) {
    function CurrentListening(body, startSearch, endSearch) {
        let startPos = body.search(startSearch);
        let endPos = body.search(endSearch);
        let result = body.substring((startPos + startSearch.length), endPos);
        result = result.trim()
        return result.substring(2, result.length - 1)
    }

    function CurrentListeningArtist(body, startSearch, endSearch) {
        let newBody = body.replace(startSearch, "");
        let startPos = newBody.search(startSearch);
        newBody = newBody.substring(startPos, newBody.length)
        startPos = newBody.search(startSearch);
        let endPos = newBody.search(endSearch);
        let result = newBody.substring((startPos + startSearch.length + 2), endPos);
        let endLocal = result.search('"');
        result = result.substring(0,endLocal);
        result = result.trim()
        return result
    }

    async function fetchMusic() {
        let Music = {}
        const response = await fetch('https://www.last.fm/user/Betamxnster');
        var data = await response.text();
        var chartListpos = data.search("chartlist-row--now-scrobbling")
        data = data.substring(chartListpos, data.length);
        var chartListpos = data.search("chartlist-name")
        data = data.substring(chartListpos, data.length);
        let track = CurrentListening(data, "title", "class")
        let artist = CurrentListeningArtist(data, "title", "</a>")
        track = track.replace("&#39;", "'").replace("&amp;", "&").replace("&#34;", `"`).replace("&#34;", `"`)
        artist = artist.replace("&#39;", "'").replace("&amp;", "&").replace("&#34;", `"`).replace("&#34;", `"`)
        Music.track = decodeURI(track);
        Music.artist = decodeURI(artist);
        return Music
    }
    const musicInfo = await fetchMusic()
    res.json(musicInfo)
}
