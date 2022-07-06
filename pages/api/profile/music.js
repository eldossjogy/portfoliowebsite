export default async function musicInfo(req, res) {
    function CurrentListening(body, startSearch, endSearch) {
        let startPos = body.search(startSearch);
        let endPos = body.search(endSearch);
        let result = body.substring((startPos + startSearch.length), endPos);
        result = result.trim()
        return result.substring(1, result.length - 1)
    }

    async function fetchMusic() {
        let Music = {}
        const response = await fetch('https://www.last.fm/user/Betamxnster');
        const data = await response.text();
        let track = CurrentListening(data, "data-track-name=", "data-track-url")
        let artist = CurrentListening(data, "data-artist-name=", "data-artist-url=")
        track = track.replace("&#39;", "'").replace("&amp;", "&").replace("&#34;", `"`).replace("&#34;", `"`)
        artist = artist.replace("&#39;", "'").replace("&amp;", "&").replace("&#34;", `"`).replace("&#34;", `"`)
        Music.track = decodeURI(track);
        Music.artist = decodeURI(artist);
        return Music
    }
    const musicInfo = await fetchMusic()
    res.json(musicInfo)
}
