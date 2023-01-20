package edu.hawaii.its.groupings.exceptions;

public class InvalidUhUuidException extends RuntimeException {

    public InvalidUhUuidException(String uhUuid) {
        super(uhUuid);
    }

}
