package edu.hawaii.its.groupings.controller;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
<<<<<<< HEAD
import edu.hawaii.its.api.controller.GroupingsRestController;
import edu.hawaii.its.api.service.HttpRequestService;
import edu.hawaii.its.groupings.util.JsonUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

=======
import edu.hawaii.its.groupings.type.Feedback;
import edu.hawaii.its.groupings.util.JsonUtil;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.Map;

@RestController
>>>>>>> 444483fd (Create OutageRestController)
public class OutageRestController {

    private static final Log logger = LogFactory.getLog(OutageRestController.class);

<<<<<<< HEAD
    @Value("${app.api.handshake.enabled:true}")
    private Boolean API_HANDSHAKE_ENABLED = true;

    @Value("${url.api.2.1.base}")
    private String API_2_1_BASE;

    @Autowired
    private GroupingsRestController groupingsRestController;

    @Autowired
    private HttpRequestService httpRequestService;

    @GetMapping(value = "/openapi/tester")
    public ResponseEntity<String> tester() {
        if (!API_HANDSHAKE_ENABLED) {
            logger.info("API Handshake is not enabled.");
            return new ResponseEntity<>(JsonUtil.asJson(""), HttpStatus.OK);
        }
        String uri = String.format(API_2_1_BASE + "/tester");
        return httpRequestService.makeApiRequest(uri, HttpMethod.GET);
    }
}

=======

    @GetMapping(value = "/tester")
    public ResponseEntity<String> tester() {
        return new ResponseEntity<>(JsonUtil.asJson("My Testy test message!"), HttpStatus.OK);
    }
}
>>>>>>> 444483fd (Create OutageRestController)
