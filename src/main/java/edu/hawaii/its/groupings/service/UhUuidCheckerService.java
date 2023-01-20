package edu.hawaii.its.groupings.service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import edu.hawaii.its.groupings.access.Role;

@Service
public class UhUuidCheckerService {

    private static final Log logger = LogFactory.getLog(UhUuidCheckerService.class);

    @Value("${groupings.access.uhuuid_pattern}")
    private String UHUUIDPATTERN;

    private Pattern pattern;

    public boolean isValidUhUuid(String uhUuid, String uid) {
        logger.info("isValidUhUuid; check for valid uhUuid starting...");
        pattern = Pattern.compile(UHUUIDPATTERN, Pattern.CASE_INSENSITIVE);

        final Matcher matcher = pattern.matcher(uhUuid);
        return matcher.matches() || uhUuid.equals(uid);
    }
}
