package edu.hawaii.its.groupings.controller;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
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

public class OutageRestController {

    private static final Log logger = LogFactory.getLog(OutageRestController.class);

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
