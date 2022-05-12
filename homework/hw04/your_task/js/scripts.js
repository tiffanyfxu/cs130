const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getTracks = (term) => {
    fetch(baseURL + "?type=track&q=" + term + "&limit=5")
        .then(response => response.json())
        .then((data) => {
            document.querySelector('#tracks').innerHTML = '';
            if (data.length > 0) {
                for (const track of data) {
                    document.querySelector('#tracks').innerHTML += getTracksHTML(track);
                for (const elem of document.querySelectorAll('.track-item.preview')){
                     elem.onclick = playTrack;
                    }     
                } 
            }   else {
                document.querySelector('#tracks').innerHTML = 'No tracks found. Please try again.';
            }  
        })
        };

const getTracksHTML = (track) =>
    `<button class="track-item preview" data-preview-track="${track.preview_url}" onclick="handleTrackClick(event);">
    <img src="${track.album.image_url}">
    <i class="fas play-track fa-play" aria-hidden="true"></i>
    <div class="label">
        <h2>${track.name}</h2>
        <p>
            ${track.artist.name}
        </p>
    </div>
</button>`

const playTrack = (ev) => {
    console.log(ev.currentTarget);
    const elem = ev.currentTarget;
    const previewURL = elem.getAttribute('data-preview-track');
    if (previewURL) {
        audioPlayer.setAudioFile(previewURL);
        audioPlayer.play();

    } else {
        console.log('there is no preview available for this track.')
    }
}


const getAlbums = (term) => {
    document.querySelector ("#albums").innerHTML = "";
    fetch(baseURL + "?type=album&q=" + term)
        .then(response => response.json())
        .then((data) => {
            document.querySelector('#albums').innerHTML = '';
            if (data.length > 0){
                for (const album of data) {
                document.querySelector('#albums').innerHTML += getAlbumsHTML (album); 
                }
            } else { document.querySelector('#albums').innerHTML = 'No albums found. Please try again';
            }
         })
};

const getAlbumsHTML = (album) => 
    `<section class="album-card" id="${album.id}">
    <div>
        <img src="${album.image_url}">
        <h2>${album.name}</h2>
        <div class="footer">
            <a href="${album.spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>`



const getArtist = (term) => {
    document.querySelector("#artist").innerHTML = "";
    fetch (baseURL + '?type=artist&q=' + term)
    .then (response => response.json())
    .then ((data) => {
        console.log (data);
        if (data.length > 0) {
            const firstArtist = data[0]
            console.log(firstArtist)
            document.querySelector("#artist").innerHTML = getArtistHTML(firstArtist)
        }
        else {
            document.querySelector("#artist").innerHTML = 'No artists found. Please try again.'
        }
    })


};

const getArtistHTML = (artist) => {
    if (!artist.image_url) {
        artist.image_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png'


    }
    return `<section class="artist-card" id="${artist.id}">
    <div>
        <img src="${artist.image_url}">
        <h2>${artist.name}</h2>
        <div class="footer">
            <a href="${artist.spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>`
}

const handleTrackClick = (ev) => {
    const previewUrl = ev.currentTarget.getAttribute('data-preview-track');
    console.log(previewUrl);
}

document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};