export enum StatusCodes {
    OK = 200,
    CREATED = 201,
    INTERNAL_SERVER_ERROR1 = 500,
    ACCEPTED = 202,
    BAD_GATEWAY = 502,
    BAD_REQUEST = 400,
    CONFLICT = 409,
    CONTINUE = 100,
    EXPECTATION_FAILED = 417,
    FAILED_DEPENDENCY = 424,
    FORBIDDEN = 403,
    GATEWAY_TIMEOUT = 504,
    GONE = 410,
    HTTP_VERSION_NOT_SUPPORTED = 505,
    IM_A_TEAPOT = 418,
    INSUFFICIENT_SPACE_ON_RESOURCE = 419,
    INSUFFICIENT_STORAGE = 507,
    INTERNAL_SERVER_ERROR = 500,
    LENGTH_REQUIRED = 411,
    LOCKED = 423,
    METHOD_FAILURE = 420,
    METHOD_NOT_ALLOWED = 405,
    MOVED_PERMANENTLY = 301,
    MOVED_TEMPORARILY = 302,
    MULTI_STATUS = 207,
    MULTIPLE_CHOICES = 300,
    // /**
    //  * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-6
    //  *
    //  * The 511 status code indicates that the client needs to authenticate to gain network access.
    //  */
    // NETWORK_AUTHENTICATION_REQUIRED = 511,
    // /**
    //  * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.5
    //  *
    //  * There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.
    //  */
    // NO_CONTENT = 204,
    // /**
    //  * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.4
    //  *
    //  * This response code means returned meta-information set is not exact set as available from the origin server, but collected from a local or a third party copy. Except this condition, 200 OK response should be preferred instead of this response.
    //  */
    // NON_AUTHORITATIVE_INFORMATION = 203,
    // /**
    //  * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.6
    //  *
    //  * This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content following the criteria given by the user agent.
    //  */
    // NOT_ACCEPTABLE = 406,
    // /**
    //  * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.4
    //  *
    //  * The server can not find requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurence on the web.
    //  */
    // NOT_FOUND = 404,
    // /**
    //  * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.2
    //  *
    //  * The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.
    //  */
    // NOT_IMPLEMENTED = 501,
    // NOT_MODIFIED = 304,
    // /**
    //  * Official Documentation @ https://tools.ietf.org/html/rfc7233#section-4.1
    //  *
    //  * This response code is used because of range header sent by the client to separate download into multiple streams.
    //  */
    // PARTIAL_CONTENT = 206,
    // /**
    //  * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.2
    //  *
    //  * This response code is reserved for future use. Initial aim for creating this code was using it for digital payment systems however this is not used currently.
    //  */
    // PAYMENT_REQUIRED = 402,
    // /**
    //  * Official Documentation @ https://tools.ietf.org/html/rfc7538#section-3
    //  *
    //  * This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
    //  */
    // PERMANENT_REDIRECT = 308,
    // /**
    //  * Official Documentation @ https://tools.ietf.org/html/rfc7232#section-4.2
    //  *
    //  * The client has indicated preconditions in its headers which the server does not meet.
    //  */
    // PRECONDITION_FAILED = 412,
    // /**
    //  * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-3
    //  *
    //  * The origin server requires the request to be conditional. Intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.
    //  */
    // PRECONDITION_REQUIRED = 428,
    // /**
    //  * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.1
    //  *
    //  * This code indicates that the server has received and is processing the request, but no response is available yet.
    //  */
    // PROCESSING = 102,
    // /**
    //  * Official Documentation @ https://tools.ietf.org/html/rfc7235#section-3.2
    //  *
    //  * This is similar to 401 but authentication is needed to be done by a proxy.
    //  */
    // PROXY_AUTHENTICATION_REQUIRED = 407,
    // /**
    //  * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-5
    //  *
    //  * The server is unwilling to process the request because its header fields are too large. The request MAY be resubmitted after reducing the size of the request header fields.
    //  */
    // REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
    // /**
    //  * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.7
    //  *
    //  * This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.
    //  */
    // REQUEST_TIMEOUT = 408,
    // /**
    //  * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.11
    //  *
    //  * Request entity is larger than limits defined by server; the server might close the connection or return an Retry-After header field.
    //  */
    // REQUEST_TOO_LONG = 413,
    // /**
    //  * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.12
    //  *
    //  * The URI requested by the client is longer than the server is willing to interpret.
    //  */
    // REQUEST_URI_TOO_LONG = 414,
    // /**
    //  * Official Documentation @ https://tools.ietf.org/html/rfc7233#section-4.4
    //  *
    //  * The range specified by the Range header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data.
    //  */
    // REQUESTED_RANGE_NOT_SATISFIABLE = 416,
    // /**
    //  * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.6
    //  *
    //  * This response code is sent after accomplishing request to tell user agent reset document view which sent this request.
    //  */
    // RESET_CONTENT = 205,
    // /**
    //  * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.4
    //  *
    //  * Server sent this response to directing client to get requested resource to another URI with an GET request.
    //  */
    // SEE_OTHER = 303,
    // /**
    //  * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.4
    //  *
    //  * The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This responses should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.
    //  */
    // SERVICE_UNAVAILABLE = 503,
    // /**
    //  * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.2.2
    //  *
    //  * This code is sent in response to an Upgrade request header by the client, and indicates the protocol the server is switching too.
    //  */
    // SWITCHING_PROTOCOLS = 101,
    // /**
    //  * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.7
    //  *
    //  * Server sent this response to directing client to get requested resource to another URI with same method that used prior request. This has the same semantic than the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
    //  */
    // TEMPORARY_REDIRECT = 307,
    // /**
    //  * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-4
    //  *
    //  * The user has sent too many requests in a given amount of time ("rate limiting").
    //  */
    // TOO_MANY_REQUESTS = 429,
    // /**
    //  * Official Documentation @ https://tools.ietf.org/html/rfc7235#section-3.1
    //  *
    //  * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
    //  */
    // UNAUTHORIZED = 401,
    // /**
    //  * Official Documentation @ https://tools.ietf.org/html/rfc7725
    //  *
    //  * The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.
    //  */
    // UNAVAILABLE_FOR_LEGAL_REASONS = 451,
    // /**
    //  * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.3
    //  *
    //  * The request was well-formed but was unable to be followed due to semantic errors.
    //  *
    // UNPROCESSABLE_ENTITY = 422,
    // UNSUPPORTED_MEDIA_TYPE = 415,
    // USE_PROXY = 305
}
  
export const baseURL = "https://reqres.in/api";