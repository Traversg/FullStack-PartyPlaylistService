package com.nashss.se.partyplaylist.dynamodb;

import com.nashss.se.partyplaylist.dynamodb.models.Playlist;
import com.nashss.se.partyplaylist.exceptions.PlaylistNotFoundException;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;

import javax.inject.Inject;

/**
 * Accesses data for a playlist using {@link Playlist} to represent the model in DynamoDB.
 */
public class PlaylistDao {

    private final DynamoDBMapper dynamoDBMapper;

    /**
     * Instantiates a PlaylistDao object.
     *
     * @param dynamoDbMapper the {@link DynamoDBMapper} used to interact with the playlists table
     *
     */

    @Inject
    public PlaylistDao(DynamoDBMapper dynamoDbMapper) {
        this.dynamoDBMapper = dynamoDbMapper;
    }

    /**
     * Returns the {@link Playlist} corresponding to the specified id.
     *
     * @param id the Playlist ID
     * @return the stored Playlist, or null if none was found.
     */

    public Playlist getPlaylist(String id) {
        Playlist playlist = this.dynamoDBMapper.load(Playlist.class, id);

        if (playlist == null) {
            throw new PlaylistNotFoundException("Could not find playlist with id " + id);
        }

        return playlist;
    }

    /**
     * Returns a saved/updated {@link Playlist} in Database.
     *
     * @param playlist to be saved/updated
     * @return the up-to-date playlist
     */

    public Playlist savePlaylist(Playlist playlist) {
        this.dynamoDBMapper.save(playlist);
        return playlist;
    }

    /**
     * Returns the host associated with the {@link Playlist} in Database.
     *
     * @param id of the playlist
     * @return the current host
     */
    public String getHost(String id) {
        Playlist playlist = this.dynamoDBMapper.load(Playlist.class, id);

        return playlist.getHost();
    }
}
