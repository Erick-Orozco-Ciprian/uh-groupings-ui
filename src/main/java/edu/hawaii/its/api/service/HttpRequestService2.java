package edu.hawaii.its.api.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

@Service("httpRequestService2")
public class HttpRequestService2 {


    private final WebClient webClient;

    public HttpRequestService2() {
        webClient = WebClient.builder()
                .codecs(codecs -> codecs.defaultCodecs().maxInMemorySize(-1))
                .build();
    }

    /*
     * Make a http request to the API with path variables.
     */
    public ResponseEntity<String> makeApiRequest(String uri, HttpMethod method) {
        return webClient.method(method)
                .uri(uri)
                .retrieve()
                .toEntity(String.class)
                .block();
    }

}
