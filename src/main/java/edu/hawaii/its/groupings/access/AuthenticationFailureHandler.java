package edu.hawaii.its.groupings.access;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.security.core.AuthenticationException;

public class AuthenticationFailureHandler
        implements org.springframework.security.web.authentication.AuthenticationFailureHandler {

    private static final Log logger = LogFactory.getLog(AuthenticationFailureHandler.class);

    private final String appUrlBase;

    public AuthenticationFailureHandler(String appUrlBase) {
        this.appUrlBase = appUrlBase;
    }

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception)
            throws IOException {
        System.out.println("peepee: " + exception.getMessage());
        logger.warn("onAuthenticationFailure; exception: ", exception);
        request.getSession().setAttribute("login.error.message", "A login error occurred.");
        request.getSession().setAttribute("login.error.exception.message", exception.getMessage());
        response.sendRedirect(appUrlBase + "/uhuuiderror");
    }
}