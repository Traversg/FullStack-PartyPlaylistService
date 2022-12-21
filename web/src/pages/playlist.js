import PartyPlaylistClient from '../api/partyPlaylistClient';
import Header from '../components/header';
import BindingClass from "../util/bindingClass";
import DataStore from "../util/DataStore";

/**
 * Logic needed for the playlist page of the website.
 */
class Playlist extends BindingClass {
    constructor() {
        super();
        this.bindClassMethods(['clientLoaded', 'mount', 'addSong', 'addPlaylistToPage', 'displayGuestList'], this);
        this.dataStore = new DataStore();
        this.dataStore.addChangeListener(this.addPlaylistToPage);
        this.header = new Header(this.dataStore);
    }

    async clientLoaded() {
        const urlParams = new URLSearchParams(window.location.search);
        const playlistId = urlParams.get('playlistId');
        this.dataStore.set('playlistId', playlistId);
        const playlist = await this.client.getPlaylistById(playlistId);
        this.dataStore.set('playlist', playlist);
        const guestList = await this.client.getGuestList(playlistId);
        this.dataStore.set('guestList', guestList);
        this.displayGuestList(guestList);
    }

    mount() {
        document.getElementById('add-song').addEventListener('click', this.addSong);
        this.header.addHeaderToPage();
        this.header.loadData();
        this.client = new PartyPlaylistClient();
        this.clientLoaded();
    }

    addPlaylistToPage() {
            const playlist = this.dataStore.get('playlist');
            if (playlist == null) {
                return;
            }

            document.getElementById('playlist-display').innerText = playlist.playlistName;
            let songHtml = '';
            let song;
            for (song of playlist.songs) {
                songHtml +=
                '<div class="playlist-item">'
                    + '<div class="song-wrapper">'
                        + '<span class="song-name">' + 'Title: ' + song.songTitle + '</span>' + ' '
                        + '<span class="song-artist">' + 'Artist: ' + song.songArtist + '</span>'
                    +  '</div>'

                    + '<div class="vote-wrapper">'
                        + '<div class="vote" id="' + song.songId + '"></div>'
                        + '<div class="vote-count">' + 'Upvotes: ' + song.upvotes + '</div>'
                    + '</div>'
                +  '</div>';
            }
            document.getElementById('songs').innerHTML = songHtml;
            for (const btn of document.querySelectorAll('.vote')) {
                btn.addEventListener('click', event => {
                    for (song of playlist.songs) {
                        this.clientLoaded();
                        if (song.songId == event.target.id) {
                            this.client.addUpvoteToSong(event.target.id, '01', song.songTitle, song.songArtist);
                            console.log(event.target.id);
                            event.currentTarget.classList.toggle('on');
                            this.clientLoaded();
                        }
                    }
                    });
                }
        }

    /**
     * Method to run when the add song playlist submit button is pressed. Call the PartyPlaylist to add a song to the
     * playlist.
     */
    async addSong() {
        document.getElementById('add-song').innerText = 'Adding...';
        const artistName = document.getElementById('song-artist').value;
        const artistTitle = document.getElementById('song-title').value;
        const urlParams = new URLSearchParams(window.location.search);
        const playlistId = urlParams.get('playlistId');

        const playlist = await this.client.addSongToPlaylist(artistName, artistTitle, playlistId, (error)=> {
            document.getElementById("add-song").innerHTML = "Add Song"
            document.getElementById("addSongError").innerHTML = error.response.data.error_message
        });
        this.dataStore.set('songs', playlist);

        document.getElementById('add-song').innerText = 'Add Song';
        document.getElementById("add-song-form").reset();
        this.clientLoaded();
    }

    /**
     * Method to run to display guest list. Call the PartyPlaylist to display guest list.
     */
    async displayGuestList(guestList) {
        var guestListDisplay = document.getElementById('guestListDiv');
        guestListDisplay.innerHTML = "";
        if (guestList != null) {
            for (var i=0; i < guestList.length; i++) {
                var guestToDisplay = guestList[i];
                guestListDisplay.innerHTML += "<li>" + guestToDisplay + "</li>";
            }
        }
    }
}



/**
 * Main method to run when the page contents have loaded.
 */
const main = async () => {
    const playlist = new Playlist();
    playlist.mount();
};

window.addEventListener('DOMContentLoaded', main);

