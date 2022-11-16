package com.nashss.se.partyplaylist.activity.requests;

import com.nashss.se.partyplaylist.dynamodb.models.Song;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;

import java.util.ArrayList;
import java.util.List;

@JsonDeserialize(builder = AddGuestToPartyRequest.Builder.class)
public class AddGuestToPartyRequest {
    private final String firstName;

    private final String lastName;

    private Boolean isAdmin;

    private List<Song> songsAdded;

    private List<Song> songsUpvoted;


    private AddGuestToPartyRequest(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.isAdmin = false;
        this.songsAdded = new ArrayList<>();
        this.songsUpvoted  = new ArrayList<>();
    }

    public String getFirstName() {

        return firstName;
    }

    public String getLastName() {

        return lastName;
    }

    public Boolean isAdmin() {

        return isAdmin;
    }

    public List<Song> getSongsAdded() {

        return songsAdded;
    }

    public List<Song> getSongsUpvoted() {

        return songsUpvoted;
    }

    @Override
    public String toString() {
        return "AddGuestToPartyRequest{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", isAdmin=" + isAdmin +
                ", songsAdded=" + songsAdded +
                ", songsUpvoted=" + songsUpvoted +
                '}';
    }

    /**
     * Creates a new builder for AddGuestToPartyRequest.
     *
     * @return Builder
     */

    //CHECKSTYLE:OFF:Builder
    public static Builder builder() {
        return new Builder();
    }

    /**
     * Builder for AddGuestToPartyRequest.
     */
    @JsonPOJOBuilder
    public static class Builder {

        private String firstName;

        private String lastName;

        /**
         * With firstName parameter for AddGuestToPartyRequest builder.
         * @param firstName the users first name
         * @return this
         */
        public Builder withFirstName(String firstName) {
            this.firstName = firstName;
            return this;
        }

        /**
         * With lastName parameter for AddGuestToPartyRequest builder.
         * @param lastName the users last name
         * @return this
         */
        public Builder withLastName(String lastName) {
            this.lastName = lastName;
            return this;
        }

        /**
         * Build AddGuestToPartyRequest.
         * @return AddGuestToPartyRequest
         */
        public AddGuestToPartyRequest build() {
            return new AddGuestToPartyRequest(firstName, lastName);
        }


    }
}




