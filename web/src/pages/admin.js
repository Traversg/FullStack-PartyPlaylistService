import BindingClass from '../util/bindingClass';
import DataStore from '../util/DataStore';
import Header from '../components/header';
import PartyPlaylistClient from '../api/partyPlaylist';

class CreatePlaylist extends BindingClass {
    constructor(){
        super();
        this.bindClassMethods(['mount', 'submit', 'redirectToAdmin']);
        this.dataStore = new DataStore();
        this.dataStore.addChangeListener(this.redirectToAdmin);
        this.header = new Header(this.dataStore);
    }

    mount() {
        document.getElementById('create').addEventListener('click', this.submit());
        this.header.addHeaderToPage();
        this.header.loadData();
        this.client = new PartyPlaylistClient();
    }

    async submit() {
        document.getElementById('create').innerText = 'Doing stuff..';
        const playlistName = document.getElementById('aname').value;
        const user = this.dataStore.get('aname');
        const playlist = await this.client.createPlaylist(playlistName, user);
        this.dataStore.set('playlist', playlist);
        document.getElementById('create').innerText = 'Create';
    }

    redirectToAdmin() {
        const playlist = this.dataStore.get('playlist');
        if (playlist != null) {
            window.location.href = `/admin.html`;
        }
    }
}

    const main = async () => {
        const createPlaylist = new CreatePlaylist();
        createPlaylist.mount();
    }
    window.addEventListener('DOMContentLoaded', main);