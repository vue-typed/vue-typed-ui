// Type definitions for semantic-ui 2.2.6
// Project: http://www.semantic-ui.com
// Definitions by: Budi Adiono <https://github.com/budiadiono/>
// Definitions: https://github.com/budiadiono/semantic-ui-typescript

declare namespace SemanticUI {

  type AnimationNames = 'scale' | 'fade' | 'fade up' | 'fade down' | 'fade left' | 'fade right' | 'horizontal flip' | 'vertical flip' | 'drop' | 'fly left' | 'fly right' | 'fly up' | 'fly down' | 'swing left' | 'swing right' | 'swing up' | 'swing down' | 'browse' | 'browse right' | 'slide down' | 'slide up' | 'slide left' | 'slide right' | 'jiggle' | 'flash' | 'shake' | 'pulse' | 'tada' | 'bounce'
  type Positions = 'top left' | 'top center' | 'top right' | 'right center' | 'bottom right' | 'bottom center' | 'bottom left' | 'left center'

  namespace Api {
    interface Settings {


      /**
       * When API event should occur
       * 
       * Category: Behavior
       * 
       * @default auto
       * @type {any}
       * @memberOf SemanticUI.Api.Settings
       */
      on ? : any

      /**
       * Can be set to 'local' to cache successful returned AJAX responses when using a JSON API. This helps avoid server roundtrips when API endpoints will return the same results when accessed repeatedly. Setting to false, will add cache busting parameters to the URL.
       * 
       * Category: Behavior
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Api.Settings
       */
      cache ? : any

      /**
       * UI state will be applied to this element, defaults to triggering element.
       * 
       * Category: Behavior
       * 
       * @type {any}
       * @memberOf SemanticUI.Api.Settings
       */
      stateContext ? : any

      /**
       * Whether to encode parameters with encodeURIComponent before adding into url string
       * 
       * Category: Behavior
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Api.Settings
       */
      encodeParameters ? : any

      /**
       * Whether to automatically include default data like {value} and {text}
       * 
       * Category: Behavior
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Api.Settings
       */
      defaultData ? : any

      /**
       * Whether to serialize closest form and include in request
       * 
       * Category: Behavior
       * 
       * @type {any}
       * @memberOf SemanticUI.Api.Settings
       */
      serializeForm ? : any

      /**
       * How long to wait when a request is made before triggering request, useful for rate limiting oninput
       * 
       * Category: Behavior
       * 
       * @type {number}
       * @memberOf SemanticUI.Api.Settings
       */
      throttle ? : number

      /**
       * When set to false will not delay the first request made, when no others are queued
       * 
       * Category: Behavior
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Api.Settings
       */
      throttleFirstRequest ? : any

      /**
       * Whether an API request can occur while another request is still pending
       * 
       * Category: Behavior
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Api.Settings
       */
      interruptRequests ? : any

      /**
       * Minimum duration to show loading indication
       * 
       * Category: Behavior
       * 
       * @type {any}
       * @memberOf SemanticUI.Api.Settings
       */
      loadingDuration ? : any

      /**
       * The default auto will automatically remove error state after error duration, unless the element is a form
       * 
       * Category: Behavior
       * 
       * @default auto
       * @type {any}
       * @memberOf SemanticUI.Api.Settings
       */
      hideError ? : any

      /**
       * Setting to true, will not remove error. Setting to a duration in milliseconds to show error state after request error.
       * 
       * Category: Behavior
       * 
       * @default 2000
       * @type {any}
       * @memberOf SemanticUI.Api.Settings
       */
      errorDuration ? : any

      /**
       * Named API action for query, originally specified in $.fn.settings.api
       * 
       * Category: Request Settings
       * 
       * @type {string | false}
       * @memberOf SemanticUI.Api.Settings
       */
      action ? : string | false

      /**
       * Templated URL for query, will override specified action
       * 
       * Category: Request Settings
       * 
       * @type {string | false}
       * @memberOf SemanticUI.Api.Settings
       */
      url ? : string | false

      /**
       * Variables to use for replacement
       * 
       * Category: Request Settings
       * 
       * @default {}
       * @type {any}
       * @memberOf SemanticUI.Api.Settings
       */
      urlData ? : any

      /**
       * Can be set to a Javascript object which will be returned automatically instead of requesting JSON from server
       * 
       * Category: Request Settings
       * 
       * @type {{} | false}
       * @memberOf SemanticUI.Api.Settings
       */
      response ? : {} | false

      /**
       * When specified, this function can be used to retrieve content from a server and return it asynchronously instead of a standard AJAX call. The callback function should return the server response.
       * 
       * Category: Request Settings
       * 
       * @param {any} settings
       * @param {any} callback
       * @returns {Function | false}
       * @memberOf SemanticUI.Api.Settings
       */
      responseAsync ? (settings: any, callback: any)

      /**
       * Alias of response
       * 
       * Category: Request Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Api.Settings
       */
      mockResponse ? : any

      /**
       * Alias of responseAsync
       * 
       * Category: Request Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Api.Settings
       */
      mockResponseAsync ? : any

      /**
       * Method for transmitting request to server
       * 
       * Category: Request Settings
       * 
       * @default get
       * @type {'post' | 'get'}
       * @memberOf SemanticUI.Api.Settings
       */
      method ? : 'post' | 'get'

      /**
       * Expected data type of response
       * 
       * Category: Request Settings
       * 
       * @default json
       * @type {'xml' | 'json' | 'jsonp' | 'script' | 'html' | 'text'}
       * @memberOf SemanticUI.Api.Settings
       */
      dataType ? : 'xml' | 'json' | 'jsonp' | 'script' | 'html' | 'text'

      /**
       * POST/GET Data to Send with Request
       * 
       * Category: Request Settings
       * 
       * @default {}
       * @type {any}
       * @memberOf SemanticUI.Api.Settings
       */
      data ? : any

      /**
       * Name used in log statements
       * 
       * @default Visit
       * @type {any}
       * @memberOf SemanticUI..Settings
       */
      name ? : any

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * 
       * @default visit
       * @type {any}
       * @memberOf SemanticUI..Settings
       */
      namespace ? : any

      /**
       * Regular expressions used for template matching
       * 
       * @default {"youtube":{},"vimeo":{}}
       * @type {any}
       * @memberOf SemanticUI..Settings
       */
      regExp ? : any

      /**
       * Selectors used to find parts of a module
       * 
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       * @memberOf SemanticUI..Settings
       */
      selector ? : any

      /**
       * Class names used to determine element state
       * 
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       * @memberOf SemanticUI..Settings
       */
      className ? : any

      /**
       * Metadata used to store XHR and response promise
       * 
       * @default {"src":"src"}
       * @type {any}
       * @memberOf SemanticUI..Settings
       */
      metadata ? : any

      /**
       * Debug output to console
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI..Settings
       */
      debug ? : any

      /**
       * Show console.table output with performance metrics
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI..Settings
       */
      performance ? : any

      /**
       * Debug output includes all internal behaviors
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI..Settings
       */
      verbose ? : any

      /**
       * 
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       * @memberOf SemanticUI..Settings
       */
      error ? : any

      /**
       * Allows modifying settings before request, or cancelling request
       * 
       * Category: Callback
       * 
       * @param {any} settings
       * @returns {any}
       * @memberOf SemanticUI.Api.Settings
       */
      beforeSend ? (settings: any)

      /**
       * Allows modifying XHR object for request
       * 
       * Category: Callback
       * 
       * @param {any} xhrObject
       * @returns {any}
       * @memberOf SemanticUI.Api.Settings
       */
      beforeXHR ? (xhrObject: any)

      /**
       * Callback that occurs when request is made. Receives both the API success promise and the XHR request promise.
       * 
       * Category: Callback
       * 
       * @param {any} promise
       * @param {any} xhr
       * @returns {any}
       * @memberOf SemanticUI.Api.Settings
       */
      onRequest ? (promise: any, xhr: any)

      /**
       * Allows modifying the server's response before parsed by other callbacks to determine API event success
       * 
       * Category: Callback
       * 
       * @param {any} response
       * @returns {any}
       * @memberOf SemanticUI.Api.Settings
       */
      onResponse ? (response: any)

      /**
       * Determines whether completed JSON response should be treated as successful
       * 
       * Category: Callback
       * 
       * @param {any} response
       * @returns {any}
       * @memberOf SemanticUI.Api.Settings
       */
      successTest ? (response: any)

      /**
       * Callback after successful response, JSON response must pass successTest
       * 
       * Category: Callback
       * 
       * @param {any} response
       * @param {any} element
       * @param {any} xhr
       * @returns {any}
       * @memberOf SemanticUI.Api.Settings
       */
      onSuccess ? (response: any, element: any, xhr: any)

      /**
       * Callback on request complete regardless of conditions
       * 
       * Category: Callback
       * 
       * @param {any} response
       * @param {any} element
       * @param {any} xhr
       * @returns {any}
       * @memberOf SemanticUI.Api.Settings
       */
      onComplete ? (response: any, element: any, xhr: any)

      /**
       * Callback on failed response, or JSON response that fails successTest
       * 
       * Category: Callback
       * 
       * @param {any} response
       * @param {any} element
       * @returns {any}
       * @memberOf SemanticUI.Api.Settings
       */
      onFailure ? (response: any, element: any)

      /**
       * Callback on server error from returned status code, or XHR failure.
       * 
       * Category: Callback
       * 
       * @param {any} errorMessage
       * @param {any} element
       * @param {any} xhr
       * @returns {any}
       * @memberOf SemanticUI.Api.Settings
       */
      onError ? (errorMessage: any, element: any, xhr: any)

      /**
       * Callback on abort caused by user clicking a link or manually cancelling request.
       * 
       * Category: Callback
       * 
       * @param {any} errorMessage
       * @param {any} element
       * @param {any} xhr
       * @returns {any}
       * @memberOf SemanticUI.Api.Settings
       */
      onAbort ? (errorMessage: any, element: any, xhr: any)

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default {}
       * @type {any}
       * @memberOf SemanticUI.Api.Settings
       */
      api ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Api.Settings
       */
      base ? : any

    }

    type SettingNames =

      /**
       * When API event should occur
       * 
       * Category: Behavior
       * @default auto
       * @type {any}
       */
      'on' |

      /**
       * Can be set to 'local' to cache successful returned AJAX responses when using a JSON API. This helps avoid server roundtrips when API endpoints will return the same results when accessed repeatedly. Setting to false, will add cache busting parameters to the URL.
       * 
       * Category: Behavior
       * @default true
       * @type {any}
       */
      'cache' |

      /**
       * UI state will be applied to this element, defaults to triggering element.
       * 
       * Category: Behavior
       * @type {any}
       */
      'stateContext' |

      /**
       * Whether to encode parameters with encodeURIComponent before adding into url string
       * 
       * Category: Behavior
       * @default true
       * @type {any}
       */
      'encodeParameters' |

      /**
       * Whether to automatically include default data like {value} and {text}
       * 
       * Category: Behavior
       * @default true
       * @type {any}
       */
      'defaultData' |

      /**
       * Whether to serialize closest form and include in request
       * 
       * Category: Behavior
       * @type {any}
       */
      'serializeForm' |

      /**
       * How long to wait when a request is made before triggering request, useful for rate limiting oninput
       * 
       * Category: Behavior
       * @type {number}
       */
      'throttle' |

      /**
       * When set to false will not delay the first request made, when no others are queued
       * 
       * Category: Behavior
       * @default true
       * @type {any}
       */
      'throttleFirstRequest' |

      /**
       * Whether an API request can occur while another request is still pending
       * 
       * Category: Behavior
       * @default true
       * @type {any}
       */
      'interruptRequests' |

      /**
       * Minimum duration to show loading indication
       * 
       * Category: Behavior
       * @type {any}
       */
      'loadingDuration' |

      /**
       * The default auto will automatically remove error state after error duration, unless the element is a form
       * 
       * Category: Behavior
       * @default auto
       * @type {any}
       */
      'hideError' |

      /**
       * Setting to true, will not remove error. Setting to a duration in milliseconds to show error state after request error.
       * 
       * Category: Behavior
       * @default 2000
       * @type {any}
       */
      'errorDuration' |

      /**
       * Named API action for query, originally specified in $.fn.settings.api
       * 
       * Category: Request Settings
       * @type {string | false}
       */
      'action' |

      /**
       * Templated URL for query, will override specified action
       * 
       * Category: Request Settings
       * @type {string | false}
       */
      'url' |

      /**
       * Variables to use for replacement
       * 
       * Category: Request Settings
       * @default {}
       * @type {any}
       */
      'urlData' |

      /**
       * Can be set to a Javascript object which will be returned automatically instead of requesting JSON from server
       * 
       * Category: Request Settings
       * @type {{} | false}
       */
      'response' |

      /**
       * When specified, this function can be used to retrieve content from a server and return it asynchronously instead of a standard AJAX call. The callback function should return the server response.
       * 
       * Category: Request Settings
       * @param {any} settings
       * @param {any} callback
       * @returns {Function | false}
       */
      'responseAsync' |

      /**
       * Alias of response
       * 
       * Category: Request Settings
       * @type {any}
       */
      'mockResponse' |

      /**
       * Alias of responseAsync
       * 
       * Category: Request Settings
       * @type {any}
       */
      'mockResponseAsync' |

      /**
       * Method for transmitting request to server
       * 
       * Category: Request Settings
       * @default get
       * @type {'post' | 'get'}
       */
      'method' |

      /**
       * Expected data type of response
       * 
       * Category: Request Settings
       * @default json
       * @type {'xml' | 'json' | 'jsonp' | 'script' | 'html' | 'text'}
       */
      'dataType' |

      /**
       * POST/GET Data to Send with Request
       * 
       * Category: Request Settings
       * @default {}
       * @type {any}
       */
      'data' |

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      'name' |

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      'namespace' |

      /**
       * Regular expressions used for template matching
       * @default {"youtube":{},"vimeo":{}}
       * @type {any}
       */
      'regExp' |

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      'selector' |

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      'className' |

      /**
       * Metadata used to store XHR and response promise
       * @default {"src":"src"}
       * @type {any}
       */
      'metadata' |

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      'debug' |

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      'performance' |

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      'verbose' |

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      'error' |

      /**
       * Allows modifying settings before request, or cancelling request
       * 
       * Category: Callback
       * @param {any} settings
       * @returns {any}
       */
      'beforeSend' |

      /**
       * Allows modifying XHR object for request
       * 
       * Category: Callback
       * @param {any} xhrObject
       * @returns {any}
       */
      'beforeXHR' |

      /**
       * Callback that occurs when request is made. Receives both the API success promise and the XHR request promise.
       * 
       * Category: Callback
       * @param {any} promise
       * @param {any} xhr
       * @returns {any}
       */
      'onRequest' |

      /**
       * Allows modifying the server's response before parsed by other callbacks to determine API event success
       * 
       * Category: Callback
       * @param {any} response
       * @returns {any}
       */
      'onResponse' |

      /**
       * Determines whether completed JSON response should be treated as successful
       * 
       * Category: Callback
       * @param {any} response
       * @returns {any}
       */
      'successTest' |

      /**
       * Callback after successful response, JSON response must pass successTest
       * 
       * Category: Callback
       * @param {any} response
       * @param {any} element
       * @param {any} xhr
       * @returns {any}
       */
      'onSuccess' |

      /**
       * Callback on request complete regardless of conditions
       * 
       * Category: Callback
       * @param {any} response
       * @param {any} element
       * @param {any} xhr
       * @returns {any}
       */
      'onComplete' |

      /**
       * Callback on failed response, or JSON response that fails successTest
       * 
       * Category: Callback
       * @param {any} response
       * @param {any} element
       * @returns {any}
       */
      'onFailure' |

      /**
       * Callback on server error from returned status code, or XHR failure.
       * 
       * Category: Callback
       * @param {any} errorMessage
       * @param {any} element
       * @param {any} xhr
       * @returns {any}
       */
      'onError' |

      /**
       * Callback on abort caused by user clicking a link or manually cancelling request.
       * 
       * Category: Callback
       * @param {any} errorMessage
       * @param {any} element
       * @param {any} xhr
       * @returns {any}
       */
      'onAbort' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default {}
       * @type {any}
       */
      'api' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'base'

    type BehaviorNames =

      /**
       * Execute query using existing API settings
       */
      'query' |

      /**
       * Adds data to existing templated url and returns full url string
       * @param {string} url
       * @param {any} data
       */
      'add url data' |

      /**
       * Gets promise for current API request
       */
      'get request' |

      /**
       * Aborts current API request
       */
      'abort' |

      /**
       * Removes loading and error state from element
       */
      'reset' |

      /**
       * Returns whether last request was cancelled
       */
      'was cancelled' |

      /**
       * Returns whether last request was failure
       */
      'was failure' |

      /**
       * Returns whether last request was successful
       */
      'was successful' |

      /**
       * Returns whether last request was completed
       */
      'was complete' |

      /**
       * Returns whether element is disabled
       */
      'is disabled' |

      /**
       * Returns whether element response is mocked
       */
      'is mocked' |

      /**
       * Returns whether element is loading
       */
      'is loading' |

      /**
       * Sets loading state to element
       */
      'set loading' |

      /**
       * Sets error state to element
       */
      'set error' |

      /**
       * Removes loading state to element
       */
      'remove loading' |

      /**
       * Removes error state to element
       */
      'remove error' |

      /**
       * Gets event that API request will occur on
       */
      'get event' |

      /**
       * Returns encodeURIComponent value only if value passsed is not already encoded
       * @param {any} value
       */
      'get url encoded value' |

      /**
       * Reads a locally cached response for a URL
       * @param {string} url
       */
      'read cached response' |

      /**
       * Writes a cached response for a URL
       * @param {string} url
       * @param {any} response
       */
      'write cached response' |

      /**
       * Creates new cache, removing all locally cached URLs
       */
      'create cache' |

      /**
       * Removes API settings from the page and all events
       */
      'destroy'

  }


  namespace Accordion {
    interface Settings {


      /**
       * Only allow one section open at a time
       * 
       * Category: Behavior
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Accordion.Settings
       */
      exclusive ? : any

      /**
       * Event on title that will cause accordion to open
       * 
       * Category: Behavior
       * 
       * @default click
       * @type {any}
       * @memberOf SemanticUI.Accordion.Settings
       */
      on ? : any

      /**
       * Whether child content opacity should be animated (may cause performance issues with many child elements)
       * 
       * Category: Behavior
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Accordion.Settings
       */
      animateChildren ? : any

      /**
       * Close open nested accordion content when an element closes
       * 
       * Category: Behavior
       * 
       * @type {any}
       * @memberOf SemanticUI.Accordion.Settings
       */
      closeNested ? : any

      /**
       * Allow active sections to collapse
       * 
       * Category: Behavior
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Accordion.Settings
       */
      collapsible ? : any

      /**
       * Duration in ms of opening animation
       * 
       * Category: Behavior
       * 
       * @default 350
       * @type {number}
       * @memberOf SemanticUI.Accordion.Settings
       */
      duration ? : number

      /**
       * Easing of opening animation. EaseInOutQuint is included with accordion, for additional options you must include easing equations.
       * 
       * Category: Behavior
       * 
       * @default easeOutQuad
       * @type {any}
       * @memberOf SemanticUI.Accordion.Settings
       */
      easing ? : any

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      name ? : any

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      namespace ? : any

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      selector ? : any

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      className ? : any

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * 
       * @type {any}
       * @memberOf SemanticUI..Settings
       */
      silent ? : any

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      debug ? : any

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      performance ? : any

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      verbose ? : any

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      error ? : any

      /**
       * Callback before element opens
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Accordion.Settings
       */
      onOpening ? ()

      /**
       * Callback after element is open
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Accordion.Settings
       */
      onOpen ? ()

      /**
       * Callback before element closes
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Accordion.Settings
       */
      onClosing ? ()

      /**
       * Callback after element is closed
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Accordion.Settings
       */
      onClose ? ()

      /**
       * Callback on element open or close
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Accordion.Settings
       */
      onChange ? ()

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Accordion.Settings
       */
      observeChanges ? : any

    }

    type SettingNames =

      /**
       * Only allow one section open at a time
       * 
       * Category: Behavior
       * @default true
       * @type {any}
       */
      'exclusive' |

      /**
       * Event on title that will cause accordion to open
       * 
       * Category: Behavior
       * @default click
       * @type {any}
       */
      'on' |

      /**
       * Whether child content opacity should be animated (may cause performance issues with many child elements)
       * 
       * Category: Behavior
       * @default true
       * @type {any}
       */
      'animateChildren' |

      /**
       * Close open nested accordion content when an element closes
       * 
       * Category: Behavior
       * @type {any}
       */
      'closeNested' |

      /**
       * Allow active sections to collapse
       * 
       * Category: Behavior
       * @default true
       * @type {any}
       */
      'collapsible' |

      /**
       * Duration in ms of opening animation
       * 
       * Category: Behavior
       * @default 350
       * @type {number}
       */
      'duration' |

      /**
       * Easing of opening animation. EaseInOutQuint is included with accordion, for additional options you must include easing equations.
       * 
       * Category: Behavior
       * @default easeOutQuad
       * @type {any}
       */
      'easing' |

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      'name' |

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      'namespace' |

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      'selector' |

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      'className' |

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      'silent' |

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      'debug' |

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      'performance' |

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      'verbose' |

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      'error' |

      /**
       * Callback before element opens
       * 
       * Category: Callback
       */
      'onOpening' |

      /**
       * Callback after element is open
       * 
       * Category: Callback
       */
      'onOpen' |

      /**
       * Callback before element closes
       * 
       * Category: Callback
       */
      'onClosing' |

      /**
       * Callback after element is closed
       * 
       * Category: Callback
       */
      'onClose' |

      /**
       * Callback on element open or close
       * 
       * Category: Callback
       */
      'onChange' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default true
       * @type {any}
       */
      'observeChanges'

    type BehaviorNames =

      /**
       * Refreshes all cached selectors and data
       */
      'refresh' |

      /**
       * Opens accordion content at index
       * @param {number} index
       */
      'open ' |

      /**
       * Closes accordion content that are not active
       */
      'close others' |

      /**
       * Closes accordion content at index
       * @param {number} index
       */
      'close ' |

      /**
       * Toggles accordion content at index
       * @param {number} index
       */
      'toggle ' |

      /**
       * Removes all changes to the page made by initialization
       */
      'destroy'

  }


  namespace Checkbox {
    interface Settings {


      /**
       * Setting to true/false will determine whether an input will allow no selection. Auto will set disallow this behavior only for radio boxes
       * 
       * @default auto
       * @type {any}
       * @memberOf SemanticUI.Checkbox.Settings
       */
      uncheckable ? : any

      /**
       * Whether callbacks for checked status should be fired on init as well as change
       * 
       * @type {any}
       * @memberOf SemanticUI.Checkbox.Settings
       */
      fireOnInit ? : any

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      name ? : any

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      namespace ? : any

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      selector ? : any

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      className ? : any

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      silent ? : any

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      debug ? : any

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      performance ? : any

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      verbose ? : any

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      error ? : any

      /**
       * Callback after a checkbox is either checked or unchecked.
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Checkbox.Settings
       */
      onChange ? ()

      /**
       * Callback after a checkbox is checked.
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Checkbox.Settings
       */
      onChecked ? ()

      /**
       * Callback after a checkbox is set to undeterminate.
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Checkbox.Settings
       */
      onIndeterminate ? ()

      /**
       * Callback after a checkbox is set to determinate.
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Checkbox.Settings
       */
      onDeterminate ? ()

      /**
       * Callback after a checkbox is unchecked.
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Checkbox.Settings
       */
      onUnchecked ? ()

      /**
       * Callback before a checkbox is checked. Can cancel change by returning false
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Checkbox.Settings
       */
      beforeChecked ? ()

      /**
       * Callback before a checkbox is set to undeterminate. Can cancel change by returning false
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Checkbox.Settings
       */
      beforeIndeterminate ? ()

      /**
       * Callback before a checkbox is set to determinate. Can cancel change by returning false
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Checkbox.Settings
       */
      beforeDeterminate ? ()

      /**
       * Callback before a checkbox is unchecked. Can cancel change by returning false
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Checkbox.Settings
       */
      beforeUnchecked ? ()

      /**
       * Callback after a checkbox is enabled.
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Checkbox.Settings
       */
      onEnable ? ()

      /**
       * Callback after a checkbox is disabled.
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Checkbox.Settings
       */
      onDisable ? ()

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Checkbox.Settings
       */
      onEnabled ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Checkbox.Settings
       */
      onDisabled ? : any

    }

    type SettingNames =

      /**
       * Setting to true/false will determine whether an input will allow no selection. Auto will set disallow this behavior only for radio boxes
       * @default auto
       * @type {any}
       */
      'uncheckable' |

      /**
       * Whether callbacks for checked status should be fired on init as well as change
       * @type {any}
       */
      'fireOnInit' |

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      'name' |

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      'namespace' |

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      'selector' |

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      'className' |

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      'silent' |

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      'debug' |

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      'performance' |

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      'verbose' |

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      'error' |

      /**
       * Callback after a checkbox is either checked or unchecked.
       * 
       * Category: Callback
       */
      'onChange' |

      /**
       * Callback after a checkbox is checked.
       * 
       * Category: Callback
       */
      'onChecked' |

      /**
       * Callback after a checkbox is set to undeterminate.
       * 
       * Category: Callback
       */
      'onIndeterminate' |

      /**
       * Callback after a checkbox is set to determinate.
       * 
       * Category: Callback
       */
      'onDeterminate' |

      /**
       * Callback after a checkbox is unchecked.
       * 
       * Category: Callback
       */
      'onUnchecked' |

      /**
       * Callback before a checkbox is checked. Can cancel change by returning false
       * 
       * Category: Callback
       */
      'beforeChecked' |

      /**
       * Callback before a checkbox is set to undeterminate. Can cancel change by returning false
       * 
       * Category: Callback
       */
      'beforeIndeterminate' |

      /**
       * Callback before a checkbox is set to determinate. Can cancel change by returning false
       * 
       * Category: Callback
       */
      'beforeDeterminate' |

      /**
       * Callback before a checkbox is unchecked. Can cancel change by returning false
       * 
       * Category: Callback
       */
      'beforeUnchecked' |

      /**
       * Callback after a checkbox is enabled.
       * 
       * Category: Callback
       */
      'onEnable' |

      /**
       * Callback after a checkbox is disabled.
       * 
       * Category: Callback
       */
      'onDisable' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'onEnabled' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'onDisabled'

    type BehaviorNames =

      /**
       * Switches a checkbox from current state
       */
      'toggle' |

      /**
       * Set a checkbox state to checked
       */
      'check' |

      /**
       * Set a checkbox state to unchecked
       */
      'uncheck' |

      /**
       * Set as indeterminate checkbox
       */
      'indeterminate' |

      /**
       * Set as determinate checkbox
       */
      'determinate' |

      /**
       * Enable interaction with a checkbox
       */
      'enable' |

      /**
       * Set a checkbox state to checked without callbacks
       */
      'set checked' |

      /**
       * Set a checkbox state to unchecked without callbacks
       */
      'set unchecked' |

      /**
       * Set as indeterminate checkbox without callbacks
       */
      'set indeterminate' |

      /**
       * Set as determinate checkbox without callbacks
       */
      'set determinate' |

      /**
       * Enable interaction with a checkbox without callbacks
       */
      'set enabled' |

      /**
       * Disable interaction with a checkbox without callbacks
       */
      'set disabled' |

      /**
       * Attach checkbox events to another element
       * @param {HTMLElement | JQuery | string} selector
       * @param {Checkbox.BehaviorNames} behavior
       */
      'attach events' |

      /**
       * Returns whether element is radio selection
       */
      'is radio' |

      /**
       * Returns whether element is currently checked
       */
      'is checked' |

      /**
       * Returns whether element is not checked
       */
      'is unchecked' |

      /**
       * Returns whether element is able to be changed
       */
      'can change' |

      /**
       * Returns whether element can be checked (checking if already checked or `beforeChecked` would cancel)
       */
      'should allow check' |

      /**
       * Returns whether element can be unchecked (checking if already unchecked or `beforeUnchecked` would cancel)
       */
      'should allow uncheck' |

      /**
       * Returns whether element can be determinate (checking if already determinate or `beforeDeterminate` would cancel)
       */
      'should allow determinate' |

      /**
       * Returns whether element can be indeterminate (checking if already indeterminate or `beforeIndeterminate` would cancel)
       */
      'should allow indeterminate' |

      /**
       * Returns whether element is able to be unchecked
       */
      'can uncheck' |

      /**
       * Removes all changes to the page made by initialization
       */
      'destroy'

  }


  namespace Colorize {
    interface Settings {


      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      name ? : any

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      namespace ? : any

      /**
       * Metadata used to store XHR and response promise
       * @default {"src":"src"}
       * @type {any}
       */
      metadata ? : any

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      debug ? : any

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      error ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Colorize.Settings
       */
      onDraw ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Colorize.Settings
       */
      async ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default {}
       * @type {any}
       * @memberOf SemanticUI.Colorize.Settings
       */
      colors ? : any

    }

    type SettingNames =

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      'name' |

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      'namespace' |

      /**
       * Metadata used to store XHR and response promise
       * @default {"src":"src"}
       * @type {any}
       */
      'metadata' |

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      'debug' |

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      'error' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'onDraw' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default true
       * @type {any}
       */
      'async' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default {}
       * @type {any}
       */
      'colors'

    type BehaviorNames =

      /**
       * Removes all changes to the page made by initialization
       */
      'destroy'

  }


  namespace Dimmer {
    interface Settings {


      /**
       * Dimmers opacity from 0-1. Defaults to auto which uses the CSS specified opacity.
       * 
       * Category: Behavior
       * 
       * @default auto
       * @type {any}
       * @memberOf SemanticUI.Dimmer.Settings
       */
      opacity ? : any

      /**
       * Specify a variation to add when generating dimmer, like inverted
       * 
       * Category: Behavior
       * 
       * @type {any}
       * @memberOf SemanticUI.Dimmer.Settings
       */
      variation ? : any

      /**
       * If initializing a dimmer on a dimmable context, you can use dimmerName to distinguish between multiple dimmers in that context.
       * 
       * Category: Behavior
       * 
       * @type {any}
       * @memberOf SemanticUI.Dimmer.Settings
       */
      dimmerName ? : any

      /**
       * Whether clicking on the dimmer should hide the dimmer (Defaults to auto, closable only when settings.on is not hover
       * 
       * Category: Behavior
       * 
       * @default auto
       * @type {any}
       * @memberOf SemanticUI.Dimmer.Settings
       */
      closable ? : any

      /**
       * Can be set to hover or click to show/hide dimmer on dimmable event
       * 
       * Category: Behavior
       * 
       * @type {any}
       * @memberOf SemanticUI.Dimmer.Settings
       */
      on ? : any

      /**
       * Whether to dim dimmers using CSS transitions.
       * 
       * Category: Behavior
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Dimmer.Settings
       */
      useCSS ? : any

      /**
       * Animation duration of dimming. If an integer is used, that value will apply to both show and hide animations.
       * 
       * Category: Behavior
       * 
       * @default {"show":500,"hide":500}
       * @type {number}
       * @memberOf SemanticUI.Dimmer.Settings
       */
      duration ? : number

      /**
       * Named transition to use when animating menu in and out. Fade and slide down are available without including ui transitions
       * 
       * Category: Behavior
       * 
       * @default fade
       * @type {SemanticUI.AnimationNames}
       * @memberOf SemanticUI.Dimmer.Settings
       */
      transition ? : AnimationNames

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      name ? : any

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      namespace ? : any

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      selector ? : any

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      className ? : any

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      silent ? : any

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      debug ? : any

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      performance ? : any

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      verbose ? : any

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      error ? : any

      /**
       * Callback on element show
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Dimmer.Settings
       */
      onShow ? ()

      /**
       * Callback on element hide
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Dimmer.Settings
       */
      onHide ? ()

      /**
       * Callback on element show or hide
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Dimmer.Settings
       */
      onChange ? ()

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default {}
       * @type {any}
       * @memberOf SemanticUI.Dimmer.Settings
       */
      template ? : any

    }

    type SettingNames =

      /**
       * Dimmers opacity from 0-1. Defaults to auto which uses the CSS specified opacity.
       * 
       * Category: Behavior
       * @default auto
       * @type {any}
       */
      'opacity' |

      /**
       * Specify a variation to add when generating dimmer, like inverted
       * 
       * Category: Behavior
       * @type {any}
       */
      'variation' |

      /**
       * If initializing a dimmer on a dimmable context, you can use dimmerName to distinguish between multiple dimmers in that context.
       * 
       * Category: Behavior
       * @type {any}
       */
      'dimmerName' |

      /**
       * Whether clicking on the dimmer should hide the dimmer (Defaults to auto, closable only when settings.on is not hover
       * 
       * Category: Behavior
       * @default auto
       * @type {any}
       */
      'closable' |

      /**
       * Can be set to hover or click to show/hide dimmer on dimmable event
       * 
       * Category: Behavior
       * @type {any}
       */
      'on' |

      /**
       * Whether to dim dimmers using CSS transitions.
       * 
       * Category: Behavior
       * @default true
       * @type {any}
       */
      'useCSS' |

      /**
       * Animation duration of dimming. If an integer is used, that value will apply to both show and hide animations.
       * 
       * Category: Behavior
       * @default {"show":500,"hide":500}
       * @type {number}
       */
      'duration' |

      /**
       * Named transition to use when animating menu in and out. Fade and slide down are available without including ui transitions
       * 
       * Category: Behavior
       * @default fade
       * @type {SemanticUI.AnimationNames}
       */
      'transition' |

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      'name' |

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      'namespace' |

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      'selector' |

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      'className' |

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      'silent' |

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      'debug' |

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      'performance' |

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      'verbose' |

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      'error' |

      /**
       * Callback on element show
       * 
       * Category: Callback
       */
      'onShow' |

      /**
       * Callback on element hide
       * 
       * Category: Callback
       */
      'onHide' |

      /**
       * Callback on element show or hide
       * 
       * Category: Callback
       */
      'onChange' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default {}
       * @type {any}
       */
      'template'

    type BehaviorNames =

      /**
       * Detaches a given element from DOM and reattaches element inside dimmer
       * @param {HTMLElement | JQuery | string} element
       */
      'add content ' |

      /**
       * Shows dimmer
       */
      'show' |

      /**
       * Hides dimmer
       */
      'hide' |

      /**
       * Toggles current dimmer visibility
       */
      'toggle' |

      /**
       * Changes dimmer opacity
       * @param {number} opacity
       */
      'set opacity' |

      /**
       * Creates a new dimmer in dimmable context
       */
      'create' |

      /**
       * Returns current duration for show or hide event depending on current visibility
       */
      'get duration' |

      /**
       * Returns DOM element for dimmer
       */
      'get dimmer' |

      /**
       * Returns whether current dimmable has a dimmer
       */
      'has dimmer' |

      /**
       * Whether section's dimmer is active
       */
      'is active' |

      /**
       * Whether dimmer is animating
       */
      'is animating' |

      /**
       * Whether current element is a dimmer
       */
      'is dimmer' |

      /**
       * Whether current element is a dimmable section
       */
      'is dimmable' |

      /**
       * Whether dimmer is disabled
       */
      'is disabled' |

      /**
       * Whether dimmer is not disabled
       */
      'is enabled' |

      /**
       * Whether dimmable section is body
       */
      'is page' |

      /**
       * Whether dimmer is a page dimmer
       */
      'is page dimmer' |

      /**
       * Sets page dimmer to active
       */
      'set active' |

      /**
       * Sets an element as a dimmable section
       */
      'set dimmable' |

      /**
       * Sets a dimmable section as dimmed
       */
      'set dimmed' |

      /**
       * Sets current dimmer as a page dimmer
       */
      'set page dimmer' |

      /**
       * Sets a dimmer as disabled
       */
      'set disabled' |

      /**
       * Removes all changes to the page made by initialization
       */
      'destroy'

  }


  namespace Dropdown {
    interface Settings {


      /**
       * Event used to trigger dropdown (Hover, Click, Custom Event)
       * 
       * Category: Frequently Used Settings
       * 
       * @default click
       * @type {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      on ? : any

      /**
       * When set to true will fire onChange even when the value a user select matches the currently selected value.
       * 
       * Category: Frequently Used Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      allowReselection ? : any

      /**
       * Whether search selection should allow users to add their own selections, works for single or multiselect.
       * 
       * Category: Frequently Used Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      allowAdditions ? : any

      /**
       * When disabled user additions will appear in the results menu using a specially formatted selection item formatted by templates.addition.
       * 
       * Category: Frequently Used Settings
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      hideAdditions ? : any

      /**
       * Sets a default action to occur. (See usage guide)
       * 
       * Category: Frequently Used Settings
       * 
       * @default activate
       * @type {'activate' | 'select' | 'combo' | 'nothing' | 'hide' | Function}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      action ? : 'activate' | 'select' | 'combo' | 'nothing' | 'hide' | Function

      /**
       * The minimum characters for a search to begin showing results
       * 
       * Category: Frequently Used Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      minCharacters ? : any

      /**
       * When using search selection specifies how to match values.
       * 
       * Category: Frequently Used Settings
       * 
       * @default both
       * @type {'both' | 'value' | 'text'}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      match ? : 'both' | 'value' | 'text'

      /**
       * Whether dropdown should select new option when using keyboard shortcuts. Setting to false will require enter or left click to confirm a choice.
       * 
       * Category: Frequently Used Settings
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      selectOnKeydown ? : any

      /**
       * Whether search selection will force currently selected choice when element is blurred.
       * 
       * Category: Frequently Used Settings
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      forceSelection ? : any

      /**
       * Whether menu items with sub-menus (categories) should be selectable
       * 
       * Category: Frequently Used Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      allowCategorySelection ? : any

      /**
       * auto: Convert option with "" (blank string) value to placeholder text, value: Sets string value to placeholder text, leaves "" value, false: Leaves "" value as a selectable option
       * 
       * Category: Frequently Used Settings
       * 
       * @default auto
       * @type {'auto' | 'value' | false}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      placeholder ? : 'auto' | 'value' | false

      /**
       * Can be set to an object to specify API settings for retrieving remote selection menu content from an API endpoint
       * 
       * Category: Remote Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      apiSettings ? : any

      /**
       * List mapping dropdown content to JSON Property when using API
       * 
       * Category: Remote Settings
       * 
       * @default {"remoteValues":"results","values":"values","disabled":"disabled","name":"name","value":"value","text":"text"}
       * @type {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      fields ? : any

      /**
       * When enabled will automatically store selected name/value pairs in sessionStorage to preserve user selection on page refresh. Disabling will clear remote dropdown values on refresh.
       * 
       * Category: Remote Settings
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      saveRemoteData ? : any

      /**
       * Whether multiselect should use labels. Must be set to true when allowAdditions is true
       * 
       * Category: Multiple Select Settings
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      useLabels ? : any

      /**
       * When set to a number, sets the maximum number of selections
       * 
       * Category: Multiple Select Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      maxSelections ? : any

      /**
       * Maximum glyph width, used to calculate search size. This is usually size of a "W" in your font in em
       * 
       * Category: Multiple Select Settings
       * 
       * @default 1.037
       * @type {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      glyphWidth ? : any

      /**
       * Allows customization of multi-select labels
       * 
       * Category: Multiple Select Settings
       * 
       * @default {"transition":"scale","duration":200,"variation":false}
       * @type {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      label ? : any

      /**
       * When set to auto determines direction based on whether dropdown can fit on screen. Set to upward or downward to always force a direction.
       * 
       * Category: Additional Settings
       * 
       * @default auto
       * @type {'auto' | 'upward' | 'downward'}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      direction ? : 'auto' | 'upward' | 'downward'

      /**
       * Whether dropdown should try to keep itself on screen by checking whether menus display position in its context (Default context is page).
       * 
       * Category: Additional Settings
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      keepOnScreen ? : any

      /**
       * Element context to use when checking whether can show when keepOnScreen: true
       * 
       * Category: Additional Settings
       * 
       * @default HTMLElement
       * @type {HTMLElement | JQuery | string}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      context ? : HTMLElement | JQuery | string

      /**
       * Specifying to "true" will use a fuzzy full text search, setting to "exact" will force the exact search to be matched somewhere in the string
       * 
       * Category: Additional Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      fullTextSearch ? : any

      /**
       * Whether HTML included in dropdown values should be preserved. (Allows icons to show up in selected value)
       * 
       * Category: Additional Settings
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      preserveHTML ? : any

      /**
       * Whether to sort values when creating a dropdown automatically from a select element.
       * 
       * Category: Additional Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      sortSelect ? : any

      /**
       * Whether to show dropdown menu automatically on element focus.
       * 
       * Category: Additional Settings
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      showOnFocus ? : any

      /**
       * Whether to allow the element to be navigable by keyboard, by automatically creating a tabindex
       * 
       * Category: Additional Settings
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      allowTab ? : any

      /**
       * Named transition to use when animating menu in and out. Defaults to slide down or slide up depending on dropdown direction. Fade and slide down are available without including ui transitions
       * 
       * Category: Additional Settings
       * 
       * @default auto
       * @type {SemanticUI.AnimationNames}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      transition ? : AnimationNames

      /**
       * Duration of animation events
       * 
       * Category: Additional Settings
       * 
       * @default 200
       * @type {number}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      duration ? : number

      /**
       * The keycode used to represent keyboard shortcuts. To avoid issues with some foreign languages, you can pass false for comma delimiter's value
       * 
       * Category: Additional Settings
       * 
       * @default {"backspace":8,"delimiter":188,"deleteKey":46,"enter":13,"escape":27,"pageUp":33,"pageDown":34,"leftArrow":37,"upArrow":38,"rightArrow":39,"downArrow":40}
       * @type {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      keys ? : any

      /**
       * Time in milliseconds to debounce show or hide behavior when on: hover is used, or when touch is used.
       * 
       * Category: Additional Settings
       * 
       * @default {"hide":300,"show":200,"search":20,"touch":50}
       * @type {number}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      delay ? : number

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      name ? : any

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      namespace ? : any

      /**
       * Regular expressions used for template matching
       * @default {"youtube":{},"vimeo":{}}
       * @type {any}
       */
      regExp ? : any

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      selector ? : any

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      className ? : any

      /**
       * Metadata used to store XHR and response promise
       * @default {"src":"src"}
       * @type {any}
       */
      metadata ? : any

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      silent ? : any

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      debug ? : any

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      performance ? : any

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      verbose ? : any

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      error ? : any

      /**
       * Is called after a dropdown value changes. Receives the name and value of selection and the active menu element
       * 
       * Category: Callback
       * 
       * @param {any} value
       * @param {any} text
       * @param {any} $choice
       * @returns {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      onChange ? (value: any, text: any, $choice: any)

      /**
       * Is called after a dropdown selection is added using a multiple select dropdown, only receives the added value
       * 
       * Category: Callback
       * 
       * @param {any} addedValue
       * @param {any} addedText
       * @param {any} $addedChoice
       * @returns {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      onAdd ? (addedValue: any, addedText: any, $addedChoice: any)

      /**
       * Is called after a dropdown selection is removed using a multiple select dropdown, only receives the removed value
       * 
       * Category: Callback
       * 
       * @param {any} removedValue
       * @param {any} removedText
       * @param {any} $removedChoice
       * @returns {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      onRemove ? (removedValue: any, removedText: any, $removedChoice: any)

      /**
       * Allows you to modify a label before it is added. Expects the jQ DOM element for a label to be returned.
       * 
       * Category: Callback
       * 
       * @param {any} value
       * @param {any} text
       * @returns {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      onLabelCreate ? (value: any, text: any)

      /**
       * Called when a label is remove, return false; will prevent the label from being removed.
       * 
       * Category: Callback
       * 
       * @param {any} value
       * @returns {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      onLabelRemove ? (value: any)

      /**
       * Is called after a label is selected by a user
       * 
       * Category: Callback
       * 
       * @param {any} $selectedLabels
       * @returns {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      onLabelSelect ? ($selectedLabels: any)

      /**
       * Is called after a dropdown is searched with no matching values
       * 
       * Category: Callback
       * 
       * @param {any} searchValue
       * @returns {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      onNoResults ? (searchValue: any)

      /**
       * Is called before a dropdown is shown. If false is returned, dropdown will not be shown.
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Dropdown.Settings
       */
      onShow ? ()

      /**
       * Is called before a dropdown is hidden. If false is returned, dropdown will not be hidden.
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Dropdown.Settings
       */
      onHide ? ()

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default 200
       * @type {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      throttle ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default ,
       * @type {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      delimiter ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      fireOnInit ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default {"addResult":"Add <b>{term}</b>","count":"{count} selected","maxSelections":"Max {maxCount} selections","noResults":"No results found.","serverError":"There was an error contacting the server"}
       * @type {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      message ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default {}
       * @type {any}
       * @memberOf SemanticUI.Dropdown.Settings
       */
      templates ? : any

    }

    type SettingNames =

      /**
       * Event used to trigger dropdown (Hover, Click, Custom Event)
       * 
       * Category: Frequently Used Settings
       * @default click
       * @type {any}
       */
      'on' |

      /**
       * When set to true will fire onChange even when the value a user select matches the currently selected value.
       * 
       * Category: Frequently Used Settings
       * @type {any}
       */
      'allowReselection' |

      /**
       * Whether search selection should allow users to add their own selections, works for single or multiselect.
       * 
       * Category: Frequently Used Settings
       * @type {any}
       */
      'allowAdditions' |

      /**
       * When disabled user additions will appear in the results menu using a specially formatted selection item formatted by templates.addition.
       * 
       * Category: Frequently Used Settings
       * @default true
       * @type {any}
       */
      'hideAdditions' |

      /**
       * Sets a default action to occur. (See usage guide)
       * 
       * Category: Frequently Used Settings
       * @default activate
       * @type {'activate' | 'select' | 'combo' | 'nothing' | 'hide' | Function}
       */
      'action' |

      /**
       * The minimum characters for a search to begin showing results
       * 
       * Category: Frequently Used Settings
       * @type {any}
       */
      'minCharacters' |

      /**
       * When using search selection specifies how to match values.
       * 
       * Category: Frequently Used Settings
       * @default both
       * @type {'both' | 'value' | 'text'}
       */
      'match' |

      /**
       * Whether dropdown should select new option when using keyboard shortcuts. Setting to false will require enter or left click to confirm a choice.
       * 
       * Category: Frequently Used Settings
       * @default true
       * @type {any}
       */
      'selectOnKeydown' |

      /**
       * Whether search selection will force currently selected choice when element is blurred.
       * 
       * Category: Frequently Used Settings
       * @default true
       * @type {any}
       */
      'forceSelection' |

      /**
       * Whether menu items with sub-menus (categories) should be selectable
       * 
       * Category: Frequently Used Settings
       * @type {any}
       */
      'allowCategorySelection' |

      /**
       * auto: Convert option with "" (blank string) value to placeholder text, value: Sets string value to placeholder text, leaves "" value, false: Leaves "" value as a selectable option
       * 
       * Category: Frequently Used Settings
       * @default auto
       * @type {'auto' | 'value' | false}
       */
      'placeholder' |

      /**
       * Can be set to an object to specify API settings for retrieving remote selection menu content from an API endpoint
       * 
       * Category: Remote Settings
       * @type {any}
       */
      'apiSettings' |

      /**
       * List mapping dropdown content to JSON Property when using API
       * 
       * Category: Remote Settings
       * @default {"remoteValues":"results","values":"values","disabled":"disabled","name":"name","value":"value","text":"text"}
       * @type {any}
       */
      'fields' |

      /**
       * When enabled will automatically store selected name/value pairs in sessionStorage to preserve user selection on page refresh. Disabling will clear remote dropdown values on refresh.
       * 
       * Category: Remote Settings
       * @default true
       * @type {any}
       */
      'saveRemoteData' |

      /**
       * Whether multiselect should use labels. Must be set to true when allowAdditions is true
       * 
       * Category: Multiple Select Settings
       * @default true
       * @type {any}
       */
      'useLabels' |

      /**
       * When set to a number, sets the maximum number of selections
       * 
       * Category: Multiple Select Settings
       * @type {any}
       */
      'maxSelections' |

      /**
       * Maximum glyph width, used to calculate search size. This is usually size of a "W" in your font in em
       * 
       * Category: Multiple Select Settings
       * @default 1.037
       * @type {any}
       */
      'glyphWidth' |

      /**
       * Allows customization of multi-select labels
       * 
       * Category: Multiple Select Settings
       * @default {"transition":"scale","duration":200,"variation":false}
       * @type {any}
       */
      'label' |

      /**
       * When set to auto determines direction based on whether dropdown can fit on screen. Set to upward or downward to always force a direction.
       * 
       * Category: Additional Settings
       * @default auto
       * @type {'auto' | 'upward' | 'downward'}
       */
      'direction' |

      /**
       * Whether dropdown should try to keep itself on screen by checking whether menus display position in its context (Default context is page).
       * 
       * Category: Additional Settings
       * @default true
       * @type {any}
       */
      'keepOnScreen' |

      /**
       * Element context to use when checking whether can show when keepOnScreen: true
       * 
       * Category: Additional Settings
       * @default HTMLElement
       * @type {HTMLElement | JQuery | string}
       */
      'context' |

      /**
       * Specifying to "true" will use a fuzzy full text search, setting to "exact" will force the exact search to be matched somewhere in the string
       * 
       * Category: Additional Settings
       * @type {any}
       */
      'fullTextSearch' |

      /**
       * Whether HTML included in dropdown values should be preserved. (Allows icons to show up in selected value)
       * 
       * Category: Additional Settings
       * @default true
       * @type {any}
       */
      'preserveHTML' |

      /**
       * Whether to sort values when creating a dropdown automatically from a select element.
       * 
       * Category: Additional Settings
       * @type {any}
       */
      'sortSelect' |

      /**
       * Whether to show dropdown menu automatically on element focus.
       * 
       * Category: Additional Settings
       * @default true
       * @type {any}
       */
      'showOnFocus' |

      /**
       * Whether to allow the element to be navigable by keyboard, by automatically creating a tabindex
       * 
       * Category: Additional Settings
       * @default true
       * @type {any}
       */
      'allowTab' |

      /**
       * Named transition to use when animating menu in and out. Defaults to slide down or slide up depending on dropdown direction. Fade and slide down are available without including ui transitions
       * 
       * Category: Additional Settings
       * @default auto
       * @type {SemanticUI.AnimationNames}
       */
      'transition' |

      /**
       * Duration of animation events
       * 
       * Category: Additional Settings
       * @default 200
       * @type {number}
       */
      'duration' |

      /**
       * The keycode used to represent keyboard shortcuts. To avoid issues with some foreign languages, you can pass false for comma delimiter's value
       * 
       * Category: Additional Settings
       * @default {"backspace":8,"delimiter":188,"deleteKey":46,"enter":13,"escape":27,"pageUp":33,"pageDown":34,"leftArrow":37,"upArrow":38,"rightArrow":39,"downArrow":40}
       * @type {any}
       */
      'keys' |

      /**
       * Time in milliseconds to debounce show or hide behavior when on: hover is used, or when touch is used.
       * 
       * Category: Additional Settings
       * @default {"hide":300,"show":200,"search":20,"touch":50}
       * @type {number}
       */
      'delay' |

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      'name' |

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      'namespace' |

      /**
       * Regular expressions used for template matching
       * @default {"youtube":{},"vimeo":{}}
       * @type {any}
       */
      'regExp' |

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      'selector' |

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      'className' |

      /**
       * Metadata used to store XHR and response promise
       * @default {"src":"src"}
       * @type {any}
       */
      'metadata' |

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      'silent' |

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      'debug' |

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      'performance' |

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      'verbose' |

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      'error' |

      /**
       * Is called after a dropdown value changes. Receives the name and value of selection and the active menu element
       * 
       * Category: Callback
       * @param {any} value
       * @param {any} text
       * @param {any} $choice
       * @returns {any}
       */
      'onChange' |

      /**
       * Is called after a dropdown selection is added using a multiple select dropdown, only receives the added value
       * 
       * Category: Callback
       * @param {any} addedValue
       * @param {any} addedText
       * @param {any} $addedChoice
       * @returns {any}
       */
      'onAdd' |

      /**
       * Is called after a dropdown selection is removed using a multiple select dropdown, only receives the removed value
       * 
       * Category: Callback
       * @param {any} removedValue
       * @param {any} removedText
       * @param {any} $removedChoice
       * @returns {any}
       */
      'onRemove' |

      /**
       * Allows you to modify a label before it is added. Expects the jQ DOM element for a label to be returned.
       * 
       * Category: Callback
       * @param {any} value
       * @param {any} text
       * @returns {any}
       */
      'onLabelCreate' |

      /**
       * Called when a label is remove, return false; will prevent the label from being removed.
       * 
       * Category: Callback
       * @param {any} value
       * @returns {any}
       */
      'onLabelRemove' |

      /**
       * Is called after a label is selected by a user
       * 
       * Category: Callback
       * @param {any} $selectedLabels
       * @returns {any}
       */
      'onLabelSelect' |

      /**
       * Is called after a dropdown is searched with no matching values
       * 
       * Category: Callback
       * @param {any} searchValue
       * @returns {any}
       */
      'onNoResults' |

      /**
       * Is called before a dropdown is shown. If false is returned, dropdown will not be shown.
       * 
       * Category: Callback
       */
      'onShow' |

      /**
       * Is called before a dropdown is hidden. If false is returned, dropdown will not be hidden.
       * 
       * Category: Callback
       */
      'onHide' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default 200
       * @type {any}
       */
      'throttle' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default ,
       * @type {any}
       */
      'delimiter' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'fireOnInit' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default {"addResult":"Add <b>{term}</b>","count":"{count} selected","maxSelections":"Max {maxCount} selections","noResults":"No results found.","serverError":"There was an error contacting the server"}
       * @type {any}
       */
      'message' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default {}
       * @type {any}
       */
      'templates'

    type BehaviorNames =

      /**
       * Recreates dropdown menu from select option values.
       */
      'setup menu' |

      /**
       * Refreshes all cached selectors and data
       */
      'refresh' |

      /**
       * Toggles current visibility of dropdown
       */
      'toggle' |

      /**
       * Shows dropdown
       */
      'show' |

      /**
       * Hides dropdown
       */
      'hide' |

      /**
       * Clears dropdown of selection
       */
      'clear' |

      /**
       * Hides all other dropdowns that is not current dropdown
       */
      'hide others' |

      /**
       * Restores dropdown text and value to its value on page load
       */
      'restore defaults' |

      /**
       * Restores dropdown text to its value on page load
       */
      'restore default text' |

      /**
       * Restores dropdown text to its prompt, placeholder text
       */
      'restore placeholder text' |

      /**
       * Restores dropdown value to its value on page load
       */
      'restore default value' |

      /**
       * Saves current text and value as new defaults (for use with restore)
       */
      'save defaults' |

      /**
       * Sets value as selected
       * @param {any} value
       */
      'set selected' |

      /**
       * Remove value from selected
       * @param {any} value
       */
      'remove selected' |

      /**
       * Adds a group of values as selected
       * @param {any[]} ...values
       */
      'set selected' |

      /**
       * Sets selected values to exactly specified values, removing current selection
       * @param {any[]} ...values
       */
      'set exactly' |

      /**
       * Sets dropdown text to a value
       * @param {string} text
       */
      'set text' |

      /**
       * Sets dropdown input to value (does not update display state)
       * @param {any} value
       */
      'set value' |

      /**
       * Returns current dropdown text
       */
      'get text' |

      /**
       * Returns current dropdown input value
       */
      'get value' |

      /**
       * Returns DOM element that matches a given input value
       * @param {any} value
       */
      'get item' |

      /**
       * Adds touch events to element
       */
      'bind touch events' |

      /**
       * Adds mouse events to element
       */
      'bind mouse events' |

      /**
       * Binds a click to document to determine if you click away from a dropdown
       */
      'bind intent' |

      /**
       * Unbinds document intent click
       */
      'unbind intent' |

      /**
       * Returns whether event occurred inside dropdown
       */
      'determine intent' |

      /**
       * Triggers preset item selection action based on settings passing text/value
       * @param {string} text
       * @param {any} value
       */
      'determine select action' |

      /**
       * Sets dropdown to active state
       */
      'set active' |

      /**
       * Sets dropdown to visible state
       */
      'set visible' |

      /**
       * Removes dropdown active state
       */
      'remove active' |

      /**
       * Removes dropdown visible state
       */
      'remove visible' |

      /**
       * Returns whether dropdown is a selection dropdown
       */
      'is selection' |

      /**
       * Returns whether dropdown is animated
       */
      'is animated' |

      /**
       * Returns whether dropdown is visible
       */
      'is visible' |

      /**
       * Returns whether dropdown is hidden
       */
      'is hidden' |

      /**
       * Returns dropdown value as set on page load
       */
      'get default text' |

      /**
       * Returns placeholder text
       */
      'get placeholder text' |

      /**
       * Removes all changes to the page made by initialization
       */
      'destroy'

  }


  namespace Embed {
    interface Settings {


      /**
       * Specifies an icon to use with placeholder content
       * 
       * Category: Embed Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Embed.Settings
       */
      icon ? : any

      /**
       * Specifies a source to use, if no source is provided it will be determined from the domain of a specified url.
       * 
       * Category: Embed Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Embed.Settings
       */
      source ? : any

      /**
       * Specifies a url to use for embed
       * 
       * Category: Embed Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Embed.Settings
       */
      url ? : any

      /**
       * Specifies an id value to replace with the {id} value found in templated urls
       * 
       * Category: Embed Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Embed.Settings
       */
      id ? : any

      /**
       * Specify an object containing key/value pairs to add to the iframes GET parameters
       * 
       * Category: Embed Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Embed.Settings
       */
      parameters ? : any

      /**
       * Default setting auto will only autoplay content when a placeholder is specified. Setting to true or false will force autoplay.
       * 
       * Category: Video Settings
       * 
       * @default auto
       * @type {any}
       * @memberOf SemanticUI.Embed.Settings
       */
      autoplay ? : any

      /**
       * Specifies a default chrome color with Vimeo or YouTube.
       * 
       * Category: Video Settings
       * 
       * @default #444444
       * @type {any}
       * @memberOf SemanticUI.Embed.Settings
       */
      color ? : any

      /**
       * Whether to prefer HD content
       * 
       * Category: Video Settings
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Embed.Settings
       */
      hd ? : any

      /**
       * Whether to show networks branded UI like title cards, or after video calls to action.
       * 
       * Category: Video Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Embed.Settings
       */
      brandedUI ? : any

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      name ? : any

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      namespace ? : any

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      selector ? : any

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      className ? : any

      /**
       * Metadata used to store XHR and response promise
       * @default {"src":"src"}
       * @type {any}
       */
      metadata ? : any

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      silent ? : any

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      debug ? : any

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      performance ? : any

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      verbose ? : any

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      error ? : any

      /**
       * Callback when iframe is generated
       * 
       * Category: Callback
       * 
       * @param {any} url
       * @returns {any}
       * @memberOf SemanticUI.Embed.Settings
       */
      onCreate ? (url: any)

      /**
       * Whenever an iframe contents is shown
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Embed.Settings
       */
      onDisplay ? ()

      /**
       * Callback immediately before Embed is removed from DOM
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Embed.Settings
       */
      onPlaceholderDisplay ? ()

      /**
       * Callback when module parameters are determined. Allows you to adjust parameters at run time by returning a new parameters object.
       * 
       * Category: Callback
       * 
       * @param {any} parameters
       * @returns {any}
       * @memberOf SemanticUI.Embed.Settings
       */
      onEmbed ? (parameters: any)

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Embed.Settings
       */
      onReset ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default {"youtube":{"name":"youtube","type":"video","icon":"video play","domain":"youtube.com","url":"//www.youtube.com/embed/{id}"},"vimeo":{"name":"vimeo","type":"video","icon":"video play","domain":"vimeo.com","url":"//player.vimeo.com/video/{id}"}}
       * @type {any}
       * @memberOf SemanticUI.Embed.Settings
       */
      sources ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default {}
       * @type {any}
       * @memberOf SemanticUI.Embed.Settings
       */
      templates ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Embed.Settings
       */
      api ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Embed.Settings
       */
      onPause ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Embed.Settings
       */
      onPlay ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Embed.Settings
       */
      onStop ? : any

    }

    type SettingNames =

      /**
       * Specifies an icon to use with placeholder content
       * 
       * Category: Embed Settings
       * @type {any}
       */
      'icon' |

      /**
       * Specifies a source to use, if no source is provided it will be determined from the domain of a specified url.
       * 
       * Category: Embed Settings
       * @type {any}
       */
      'source' |

      /**
       * Specifies a url to use for embed
       * 
       * Category: Embed Settings
       * @type {any}
       */
      'url' |

      /**
       * Specifies an id value to replace with the {id} value found in templated urls
       * 
       * Category: Embed Settings
       * @type {any}
       */
      'id' |

      /**
       * Specify an object containing key/value pairs to add to the iframes GET parameters
       * 
       * Category: Embed Settings
       * @type {any}
       */
      'parameters' |

      /**
       * Default setting auto will only autoplay content when a placeholder is specified. Setting to true or false will force autoplay.
       * 
       * Category: Video Settings
       * @default auto
       * @type {any}
       */
      'autoplay' |

      /**
       * Specifies a default chrome color with Vimeo or YouTube.
       * 
       * Category: Video Settings
       * @default #444444
       * @type {any}
       */
      'color' |

      /**
       * Whether to prefer HD content
       * 
       * Category: Video Settings
       * @default true
       * @type {any}
       */
      'hd' |

      /**
       * Whether to show networks branded UI like title cards, or after video calls to action.
       * 
       * Category: Video Settings
       * @type {any}
       */
      'brandedUI' |

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      'name' |

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      'namespace' |

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      'selector' |

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      'className' |

      /**
       * Metadata used to store XHR and response promise
       * @default {"src":"src"}
       * @type {any}
       */
      'metadata' |

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      'silent' |

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      'debug' |

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      'performance' |

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      'verbose' |

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      'error' |

      /**
       * Callback when iframe is generated
       * 
       * Category: Callback
       * @param {any} url
       * @returns {any}
       */
      'onCreate' |

      /**
       * Whenever an iframe contents is shown
       * 
       * Category: Callback
       */
      'onDisplay' |

      /**
       * Callback immediately before Embed is removed from DOM
       * 
       * Category: Callback
       */
      'onPlaceholderDisplay' |

      /**
       * Callback when module parameters are determined. Allows you to adjust parameters at run time by returning a new parameters object.
       * 
       * Category: Callback
       * @param {any} parameters
       * @returns {any}
       */
      'onEmbed' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'onReset' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default {"youtube":{"name":"youtube","type":"video","icon":"video play","domain":"youtube.com","url":"//www.youtube.com/embed/{id}"},"vimeo":{"name":"vimeo","type":"video","icon":"video play","domain":"vimeo.com","url":"//player.vimeo.com/video/{id}"}}
       * @type {any}
       */
      'sources' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default {}
       * @type {any}
       */
      'templates' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'api' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'onPause' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'onPlay' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'onStop'

    type BehaviorNames =

      /**
       * Changes iframe to a new content source
       * @param {string} source
       * @param {string} id
       * @param {string} url
       */
      'change' |

      /**
       * Removes embed and shows placeholder content if available
       */
      'reset' |

      /**
       * Shows embed content
       */
      'show' |

      /**
       * Hides embed content and shows placeholder content
       */
      'hide' |

      /**
       * Returns current content id
       */
      'get id' |

      /**
       * Returns placeholder image url
       */
      'get placeholder' |

      /**
       * Returns source name
       */
      'get sources' |

      /**
       * Returns source type
       */
      'get type' |

      /**
       * Returns URL with all parameters added
       */
      'get url' |

      /**
       * Returns whether embed content has placeholder
       */
      'has placeholder' |

      /**
       * Destroys instance and removes all events
       */
      'destroy'

  }


  namespace Form {
    interface Settings {


      /**
       * Adds keyboard shortcuts for enter and escape keys to submit form and blur fields respectively
       * 
       * Category: Form Settings
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Form.Settings
       */
      keyboardShortcuts ? : any

      /**
       * Event used to trigger validation. Can be either submit, blur or change.
       * 
       * Category: Form Settings
       * 
       * @default submit
       * @type {'submit' | 'blur' | 'change'}
       * @memberOf SemanticUI.Form.Settings
       */
      on ? : 'submit' | 'blur' | 'change'

      /**
       * If set to true will revalidate fields with errors on input change
       * 
       * Category: Form Settings
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Form.Settings
       */
      revalidate ? : any

      /**
       * Delay from last typed letter to validate a field when using on: changeor when revalidating a field.
       * 
       * Category: Form Settings
       * 
       * @default 200
       * @type {number}
       * @memberOf SemanticUI.Form.Settings
       */
      delay ? : number

      /**
       * Adds inline error on field validation error
       * 
       * Category: Form Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Form.Settings
       */
      inline ? : any

      /**
       * Named transition to use when animating validation errors. Fade and slide down are available without including ui transitions
       * 
       * Category: Form Settings
       * 
       * @default scale
       * @type {SemanticUI.AnimationNames}
       * @memberOf SemanticUI.Form.Settings
       */
      transition ? : AnimationNames

      /**
       * Animation speed for inline prompt
       * 
       * Category: Form Settings
       * 
       * @default 200
       * @type {number}
       * @memberOf SemanticUI.Form.Settings
       */
      duration ? : number

      /**
       * 
       * 
       * Category: Form Prompts
       * 
       * @default {"unspecifiedRule":"Please enter a valid value","unspecifiedField":"This field"}
       * @type {any}
       * @memberOf SemanticUI.Form.Settings
       */
      text ? : any

      /**
       * 
       * 
       * Category: Form Prompts
       * 
       * @default {"empty":"{name} must have a value","checked":"{name} must be checked","email":"{name} must be a valid e-mail","url":"{name} must be a valid url","regExp":"{name} is not formatted correctly","integer":"{name} must be an integer","decimal":"{name} must be a decimal number","number":"{name} must be set to a number","is":"{name} must be \"{ruleValue}\"","isExactly":"{name} must be exactly \"{ruleValue}\"","not":"{name} cannot be set to \"{ruleValue}\"","notExactly":"{name} cannot be set to exactly \"{ruleValue}\"","contain":"{name} cannot contain \"{ruleValue}\"","containExactly":"{name} cannot contain exactly \"{ruleValue}\"","doesntContain":"{name} must contain  \"{ruleValue}\"","doesntContainExactly":"{name} must contain exactly \"{ruleValue}\"","minLength":"{name} must be at least {ruleValue} characters","length":"{name} must be at least {ruleValue} characters","exactLength":"{name} must be exactly {ruleValue} characters","maxLength":"{name} cannot be longer than {ruleValue} characters","match":"{name} must match {ruleValue} field","different":"{name} must have a different value than {ruleValue} field","creditCard":"{name} must be a valid credit card number","minCount":"{name} must have at least {ruleValue} choices","exactCount":"{name} must have exactly {ruleValue} choices","maxCount":"{name} must have {ruleValue} or less choices"}
       * @type {any}
       * @memberOf SemanticUI.Form.Settings
       */
      prompt ? : any

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      name ? : any

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      namespace ? : any

      /**
       * Regular expressions used for template matching
       * @default {"youtube":{},"vimeo":{}}
       * @type {any}
       */
      regExp ? : any

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      selector ? : any

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      className ? : any

      /**
       * Metadata used to store XHR and response promise
       * @default {"src":"src"}
       * @type {any}
       */
      metadata ? : any

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      debug ? : any

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      performance ? : any

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      verbose ? : any

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      error ? : any

      /**
       * Callback on each valid field
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Form.Settings
       */
      onValid ? ()

      /**
       * Callback on each invalid field
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Form.Settings
       */
      onInvalid ? ()

      /**
       * Callback if a form is all valid
       * 
       * Category: Callback
       * 
       * @param {any} event
       * @param {any} fields
       * @returns {any}
       * @memberOf SemanticUI.Form.Settings
       */
      onSuccess ? (event: any, fields: any)

      /**
       * Callback if any form field is invalid
       * 
       * Category: Callback
       * 
       * @param {any} formErrors
       * @param {any} fields
       * @returns {any}
       * @memberOf SemanticUI.Form.Settings
       */
      onFailure ? (formErrors: any, fields: any)

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Form.Settings
       */
      fields ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default {}
       * @type {any}
       * @memberOf SemanticUI.Form.Settings
       */
      templates ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default {}
       * @type {any}
       * @memberOf SemanticUI.Form.Settings
       */
      rules ? : any

    }

    type SettingNames =

      /**
       * Adds keyboard shortcuts for enter and escape keys to submit form and blur fields respectively
       * 
       * Category: Form Settings
       * @default true
       * @type {any}
       */
      'keyboardShortcuts' |

      /**
       * Event used to trigger validation. Can be either submit, blur or change.
       * 
       * Category: Form Settings
       * @default submit
       * @type {'submit' | 'blur' | 'change'}
       */
      'on' |

      /**
       * If set to true will revalidate fields with errors on input change
       * 
       * Category: Form Settings
       * @default true
       * @type {any}
       */
      'revalidate' |

      /**
       * Delay from last typed letter to validate a field when using on: changeor when revalidating a field.
       * 
       * Category: Form Settings
       * @default 200
       * @type {number}
       */
      'delay' |

      /**
       * Adds inline error on field validation error
       * 
       * Category: Form Settings
       * @type {any}
       */
      'inline' |

      /**
       * Named transition to use when animating validation errors. Fade and slide down are available without including ui transitions
       * 
       * Category: Form Settings
       * @default scale
       * @type {SemanticUI.AnimationNames}
       */
      'transition' |

      /**
       * Animation speed for inline prompt
       * 
       * Category: Form Settings
       * @default 200
       * @type {number}
       */
      'duration' |

      /**
       * 
       * 
       * Category: Form Prompts
       * @default {"unspecifiedRule":"Please enter a valid value","unspecifiedField":"This field"}
       * @type {any}
       */
      'text' |

      /**
       * 
       * 
       * Category: Form Prompts
       * @default {"empty":"{name} must have a value","checked":"{name} must be checked","email":"{name} must be a valid e-mail","url":"{name} must be a valid url","regExp":"{name} is not formatted correctly","integer":"{name} must be an integer","decimal":"{name} must be a decimal number","number":"{name} must be set to a number","is":"{name} must be \"{ruleValue}\"","isExactly":"{name} must be exactly \"{ruleValue}\"","not":"{name} cannot be set to \"{ruleValue}\"","notExactly":"{name} cannot be set to exactly \"{ruleValue}\"","contain":"{name} cannot contain \"{ruleValue}\"","containExactly":"{name} cannot contain exactly \"{ruleValue}\"","doesntContain":"{name} must contain  \"{ruleValue}\"","doesntContainExactly":"{name} must contain exactly \"{ruleValue}\"","minLength":"{name} must be at least {ruleValue} characters","length":"{name} must be at least {ruleValue} characters","exactLength":"{name} must be exactly {ruleValue} characters","maxLength":"{name} cannot be longer than {ruleValue} characters","match":"{name} must match {ruleValue} field","different":"{name} must have a different value than {ruleValue} field","creditCard":"{name} must be a valid credit card number","minCount":"{name} must have at least {ruleValue} choices","exactCount":"{name} must have exactly {ruleValue} choices","maxCount":"{name} must have {ruleValue} or less choices"}
       * @type {any}
       */
      'prompt' |

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      'name' |

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      'namespace' |

      /**
       * Regular expressions used for template matching
       * @default {"youtube":{},"vimeo":{}}
       * @type {any}
       */
      'regExp' |

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      'selector' |

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      'className' |

      /**
       * Metadata used to store XHR and response promise
       * @default {"src":"src"}
       * @type {any}
       */
      'metadata' |

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      'debug' |

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      'performance' |

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      'verbose' |

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      'error' |

      /**
       * Callback on each valid field
       * 
       * Category: Callback
       */
      'onValid' |

      /**
       * Callback on each invalid field
       * 
       * Category: Callback
       */
      'onInvalid' |

      /**
       * Callback if a form is all valid
       * 
       * Category: Callback
       * @param {any} event
       * @param {any} fields
       * @returns {any}
       */
      'onSuccess' |

      /**
       * Callback if any form field is invalid
       * 
       * Category: Callback
       * @param {any} formErrors
       * @param {any} fields
       * @returns {any}
       */
      'onFailure' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'fields' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default {}
       * @type {any}
       */
      'templates' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default {}
       * @type {any}
       */
      'rules'

    type BehaviorNames =

      /**
       * Removes all changes to the page made by initialization
       */
      'destroy'

  }


  namespace Modal {
    interface Settings {


      /**
       * If set to false will prevent the modal from being moved to inside the dimmer
       * 
       * Category: Modal Settings
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Modal.Settings
       */
      detachable ? : any

      /**
       * When true, the first form input inside the modal will receive focus when shown. Set this to false to prevent this behavior.
       * 
       * Category: Modal Settings
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Modal.Settings
       */
      autofocus ? : any

      /**
       * Whether any change in modal DOM should automatically refresh cached positions
       * 
       * Category: Modal Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Modal.Settings
       */
      observeChanges ? : any

      /**
       * If set to true will not close other visible modals when opening a new one
       * 
       * Category: Modal Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Modal.Settings
       */
      allowMultiple ? : any

      /**
       * Whether to automatically bind keyboard shortcuts
       * 
       * Category: Modal Settings
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Modal.Settings
       */
      keyboardShortcuts ? : any

      /**
       * A vertical offset to allow for content outside of modal, for example a close button, to be centered.
       * 
       * Category: Modal Settings
       * 
       * @type {number}
       * @memberOf SemanticUI.Modal.Settings
       */
      offset ? : number

      /**
       * Selector or jquery object specifying the area to dim
       * 
       * Category: Modal Settings
       * 
       * @default body
       * @type {HTMLElement | JQuery | string}
       * @memberOf SemanticUI.Modal.Settings
       */
      context ? : HTMLElement | JQuery | string

      /**
       * Setting to false will not allow you to close the modal by clicking on the dimmer
       * 
       * Category: Modal Settings
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Modal.Settings
       */
      closable ? : any

      /**
       * You can specify custom settings to extend UI dimmer
       * 
       * Category: Modal Settings
       * 
       * @default {"closable":false,"useCSS":true}
       * @type {any}
       * @memberOf SemanticUI.Modal.Settings
       */
      dimmerSettings ? : any

      /**
       * Named transition to use when animating menu in and out, full list can be found in ui transitions docs.
       * 
       * Category: Modal Settings
       * 
       * @default scale
       * @type {SemanticUI.AnimationNames}
       * @memberOf SemanticUI.Modal.Settings
       */
      transition ? : AnimationNames

      /**
       * Duration of animation
       * 
       * Category: Modal Settings
       * 
       * @default 500
       * @type {number}
       * @memberOf SemanticUI.Modal.Settings
       */
      duration ? : number

      /**
       * Whether additional animations should queue
       * 
       * Category: Modal Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Modal.Settings
       */
      queue ? : any

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      name ? : any

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      namespace ? : any

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      selector ? : any

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      className ? : any

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      silent ? : any

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      debug ? : any

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      performance ? : any

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      verbose ? : any

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      error ? : any

      /**
       * Is called when a modal starts to show.
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Modal.Settings
       */
      onShow ? ()

      /**
       * Is called after a modal has finished showing animating.
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Modal.Settings
       */
      onVisible ? ()

      /**
       * Is called after a modal starts to hide. If the function returns false, the modal will not hide.
       * 
       * Category: Callback
       * 
       * @param {HTMLElement | JQuery | string} $element
       * @returns {any}
       * @memberOf SemanticUI.Modal.Settings
       */
      onHide ? ($element: HTMLElement | JQuery | string)

      /**
       * Is called after a modal has finished hiding animation.
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Modal.Settings
       */
      onHidden ? ()

      /**
       * Is called after a positive, approve or ok button is pressed. If the function returns false, the modal will not hide.
       * 
       * Category: Callback
       * 
       * @param {HTMLElement | JQuery | string} $element
       * @returns {any}
       * @memberOf SemanticUI.Modal.Settings
       */
      onApprove ? ($element: HTMLElement | JQuery | string)

      /**
       * Is called after a negative, deny or cancel button is pressed. If the function returns false the modal will not hide.
       * 
       * Category: Callback
       * 
       * @param {HTMLElement | JQuery | string} $element
       * @returns {any}
       * @memberOf SemanticUI.Modal.Settings
       */
      onDeny ? ($element: HTMLElement | JQuery | string)

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Modal.Settings
       */
      inverted ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Modal.Settings
       */
      blurring ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default 50
       * @type {any}
       * @memberOf SemanticUI.Modal.Settings
       */
      padding ? : any

    }

    type SettingNames =

      /**
       * If set to false will prevent the modal from being moved to inside the dimmer
       * 
       * Category: Modal Settings
       * @default true
       * @type {any}
       */
      'detachable' |

      /**
       * When true, the first form input inside the modal will receive focus when shown. Set this to false to prevent this behavior.
       * 
       * Category: Modal Settings
       * @default true
       * @type {any}
       */
      'autofocus' |

      /**
       * Whether any change in modal DOM should automatically refresh cached positions
       * 
       * Category: Modal Settings
       * @type {any}
       */
      'observeChanges' |

      /**
       * If set to true will not close other visible modals when opening a new one
       * 
       * Category: Modal Settings
       * @type {any}
       */
      'allowMultiple' |

      /**
       * Whether to automatically bind keyboard shortcuts
       * 
       * Category: Modal Settings
       * @default true
       * @type {any}
       */
      'keyboardShortcuts' |

      /**
       * A vertical offset to allow for content outside of modal, for example a close button, to be centered.
       * 
       * Category: Modal Settings
       * @type {number}
       */
      'offset' |

      /**
       * Selector or jquery object specifying the area to dim
       * 
       * Category: Modal Settings
       * @default body
       * @type {HTMLElement | JQuery | string}
       */
      'context' |

      /**
       * Setting to false will not allow you to close the modal by clicking on the dimmer
       * 
       * Category: Modal Settings
       * @default true
       * @type {any}
       */
      'closable' |

      /**
       * You can specify custom settings to extend UI dimmer
       * 
       * Category: Modal Settings
       * @default {"closable":false,"useCSS":true}
       * @type {any}
       */
      'dimmerSettings' |

      /**
       * Named transition to use when animating menu in and out, full list can be found in ui transitions docs.
       * 
       * Category: Modal Settings
       * @default scale
       * @type {SemanticUI.AnimationNames}
       */
      'transition' |

      /**
       * Duration of animation
       * 
       * Category: Modal Settings
       * @default 500
       * @type {number}
       */
      'duration' |

      /**
       * Whether additional animations should queue
       * 
       * Category: Modal Settings
       * @type {any}
       */
      'queue' |

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      'name' |

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      'namespace' |

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      'selector' |

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      'className' |

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      'silent' |

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      'debug' |

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      'performance' |

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      'verbose' |

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      'error' |

      /**
       * Is called when a modal starts to show.
       * 
       * Category: Callback
       */
      'onShow' |

      /**
       * Is called after a modal has finished showing animating.
       * 
       * Category: Callback
       */
      'onVisible' |

      /**
       * Is called after a modal starts to hide. If the function returns false, the modal will not hide.
       * 
       * Category: Callback
       * @param {HTMLElement | JQuery | string} $element
       * @returns {any}
       */
      'onHide' |

      /**
       * Is called after a modal has finished hiding animation.
       * 
       * Category: Callback
       */
      'onHidden' |

      /**
       * Is called after a positive, approve or ok button is pressed. If the function returns false, the modal will not hide.
       * 
       * Category: Callback
       * @param {HTMLElement | JQuery | string} $element
       * @returns {any}
       */
      'onApprove' |

      /**
       * Is called after a negative, deny or cancel button is pressed. If the function returns false the modal will not hide.
       * 
       * Category: Callback
       * @param {HTMLElement | JQuery | string} $element
       * @returns {any}
       */
      'onDeny' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'inverted' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'blurring' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default 50
       * @type {any}
       */
      'padding'

    type BehaviorNames =

      /**
       * Shows the modal
       */
      'show' |

      /**
       * Hides the modal
       */
      'hide' |

      /**
       * Toggles the modal
       */
      'toggle' |

      /**
       * Refreshes centering of modal on page
       */
      'refresh' |

      /**
       * Shows associated page dimmer
       */
      'show dimmer' |

      /**
       * Hides associated page dimmer
       */
      'hide dimmer' |

      /**
       * Hides all modals not selected modal in a dimmer
       */
      'hide others' |

      /**
       * Hides all visible modals in the same dimmer
       */
      'hide all' |

      /**
       * Caches current modal size
       */
      'cache sizes' |

      /**
       * Returns whether the modal can fit on the page
       */
      'can fit' |

      /**
       * Returns whether the modal is active
       */
      'is active' |

      /**
       * Sets modal to active
       */
      'set active' |

      /**
       * Attach modal events to another element
       * @param {HTMLElement | JQuery | string} selector
       * @param {Modal.BehaviorNames} behavior?
       */
      'attach events' |

      /**
       * Removes all changes to the page made by initialization
       */
      'destroy'

  }


  namespace Nag {
    interface Settings {


      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      name ? : any

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      namespace ? : any

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      selector ? : any

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      className ? : any

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      silent ? : any

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      debug ? : any

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      performance ? : any

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      verbose ? : any

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      error ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Nag.Settings
       */
      persist ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Nag.Settings
       */
      displayTime ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default {"show":"slide","hide":"slide"}
       * @type {any}
       * @memberOf SemanticUI.Nag.Settings
       */
      animation ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Nag.Settings
       */
      context ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Nag.Settings
       */
      detachable ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default 30
       * @type {any}
       * @memberOf SemanticUI.Nag.Settings
       */
      expires ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Nag.Settings
       */
      domain ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default /
       * @type {any}
       * @memberOf SemanticUI.Nag.Settings
       */
      path ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default cookie
       * @type {any}
       * @memberOf SemanticUI.Nag.Settings
       */
      storageMethod ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default nag
       * @type {any}
       * @memberOf SemanticUI.Nag.Settings
       */
      key ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default dismiss
       * @type {any}
       * @memberOf SemanticUI.Nag.Settings
       */
      value ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default 500
       * @type {any}
       * @memberOf SemanticUI.Nag.Settings
       */
      speed ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default easeOutQuad
       * @type {any}
       * @memberOf SemanticUI.Nag.Settings
       */
      easing ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Nag.Settings
       */
      onHide ? : any

    }

    type SettingNames =

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      'name' |

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      'namespace' |

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      'selector' |

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      'className' |

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      'silent' |

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      'debug' |

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      'performance' |

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      'verbose' |

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      'error' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'persist' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'displayTime' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default {"show":"slide","hide":"slide"}
       * @type {any}
       */
      'animation' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'context' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'detachable' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default 30
       * @type {any}
       */
      'expires' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'domain' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default /
       * @type {any}
       */
      'path' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default cookie
       * @type {any}
       */
      'storageMethod' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default nag
       * @type {any}
       */
      'key' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default dismiss
       * @type {any}
       */
      'value' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default 500
       * @type {any}
       */
      'speed' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default easeOutQuad
       * @type {any}
       */
      'easing' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'onHide'

    type BehaviorNames =

      /**
       * Removes all changes to the page made by initialization
       */
      'destroy'

  }


  namespace Popup {
    interface Settings {


      /**
       * Can specify a DOM element that should be used as the popup. This is useful for including a pre-formatted popup.
       * 
       * Category: Popup Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      popup ? : any

      /**
       * Whether all other popups should be hidden when this popup is opened
       * 
       * Category: Popup Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      exclusive ? : any

      /**
       * Whether to move popup to same offset container as target element when popup already exists on the page. Using a popup inside of an element without overflow:visible, like a sidebar, may require you to set this to false
       * 
       * Category: Popup Settings
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      movePopup ? : any

      /**
       * Whether popup should attach mutationObservers to automatically run destroy when the element is removed from the page's DOM.
       * 
       * Category: Popup Settings
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      observeChanges ? : any

      /**
       * When the popup surpasses the boundary of this element, it will attempt to find another display position.
       * 
       * Category: Popup Settings
       * 
       * @default HTMLElement
       * @type {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      boundary ? : any

      /**
       * Selector or jquery object specifying where the popup should be created.
       * 
       * Category: Popup Settings
       * 
       * @default body
       * @type {HTMLElement | JQuery | string}
       * @memberOf SemanticUI.Popup.Settings
       */
      context ? : HTMLElement | JQuery | string

      /**
       * Will automatically hide a popup on scroll event in this context
       * 
       * Category: Popup Settings
       * 
       * @default HTMLElement
       * @type {HTMLElement | JQuery | string}
       * @memberOf SemanticUI.Popup.Settings
       */
      scrollContext ? : HTMLElement | JQuery | string

      /**
       * Number of pixels that a popup is allowed to appear outside the boundaries of its context. This allows for permissible rounding errors when an element is against the edge of its context.
       * 
       * Category: Popup Settings
       * 
       * @default 2
       * @type {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      jitter ? : any

      /**
       * Position that the popup should appear
       * 
       * Category: Popup Settings
       * 
       * @default top left
       * @type {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      position ? : any

      /**
       * If a popup is inline it will be created next to current element, allowing for local css rules to apply. It will not be removed from the DOM after being hidden. Otherwise popups will appended to body and removed after being hidden.
       * 
       * Category: Popup Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      inline ? : any

      /**
       * Whether popup contents should be preserved in the page after being hidden, allowing it to re-appear slightly faster on subsequent loads.
       * 
       * Category: Popup Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      preserve ? : any

      /**
       * Can be set to adjacent or opposite to prefer adjacent or opposite position if popup cannot fit on screen
       * 
       * Category: Popup Settings
       * 
       * @default opposite
       * @type {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      prefer ? : any

      /**
       * When set to false, a popup will not appear and produce an error message if it cannot entirely fit on page. Setting this to a position like, right center forces the popup to use this position as a last resort even if it is partially offstage. Setting this to true will use the last attempted position.
       * 
       * Category: Popup Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      lastResort ? : any

      /**
       * Event used to trigger popup. Can be either focus, click, hover, or manual. Manual popups must be triggered with $('.element').popup('show');
       * 
       * Category: Popup Settings
       * 
       * @default hover
       * @type {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      on ? : any

      /**
       * Delay in milliseconds before showing or hiding a popup on hover or focus
       * 
       * Category: Popup Settings
       * 
       * @default {"show":50,"hide":70}
       * @type {number}
       * @memberOf SemanticUI.Popup.Settings
       */
      delay ? : number

      /**
       * Named transition to use when animating menu in and out. Fade and slide down are available without including ui transitions
       * 
       * Category: Popup Settings
       * 
       * @default scale
       * @type {SemanticUI.AnimationNames}
       * @memberOf SemanticUI.Popup.Settings
       */
      transition ? : AnimationNames

      /**
       * Duration of animation events
       * 
       * Category: Popup Settings
       * 
       * @default 200
       * @type {number}
       * @memberOf SemanticUI.Popup.Settings
       */
      duration ? : number

      /**
       * Whether popup should set fluid popup variation width on load to avoid width: 100%including padding
       * 
       * Category: Popup Settings
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      setFluidWidth ? : any

      /**
       * Whether popup should not close on hover (useful for popup navigation menus)
       * 
       * Category: Popup Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      hoverable ? : any

      /**
       * When using on: 'click' specifies whether clicking the page should close the popup
       * 
       * Category: Popup Settings
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      closable ? : any

      /**
       * When using on: 'hover' whether touchstart events should be added to allow the popup to be triggered
       * 
       * Category: Popup Settings
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      addTouchEvents ? : any

      /**
       * Whether popup should hide on scroll or touchmove, auto only hides for popups without on: 'click'.
       * 
       * Category: Popup Settings
       * 
       * @default auto
       * @type {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      hideOnScroll ? : any

      /**
       * If a selector or jQuery object is specified this allows the popup to be positioned relative to that element.
       * 
       * Category: Popup Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      target ? : any

      /**
       * Offset for distance of popup from element
       * 
       * Category: Popup Settings
       * 
       * @type {number}
       * @memberOf SemanticUI.Popup.Settings
       */
      distanceAway ? : number

      /**
       * Offset in pixels from calculated position
       * 
       * Category: Popup Settings
       * 
       * @type {number}
       * @memberOf SemanticUI.Popup.Settings
       */
      offset ? : number

      /**
       * Number of iterations before giving up search for popup position when a popup cannot fit on screen
       * 
       * Category: Popup Settings
       * 
       * @default 15
       * @type {number}
       * @memberOf SemanticUI.Popup.Settings
       */
      maxSearchDepth ? : number

      /**
       * Popup variation to use, can use multiple variations with a space delimiter
       * 
       * Category: Content Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      variation ? : any

      /**
       * Content to display
       * 
       * Category: Content Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      content ? : any

      /**
       * Title to display alongside content
       * 
       * Category: Content Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      title ? : any

      /**
       * HTML content to display instead of preformatted title and content
       * 
       * Category: Content Settings
       * 
       * @type {HTMLElement | JQuery | string}
       * @memberOf SemanticUI.Popup.Settings
       */
      html ? : HTMLElement | JQuery | string

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      name ? : any

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      namespace ? : any

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      selector ? : any

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      className ? : any

      /**
       * Metadata used to store XHR and response promise
       * @default {"src":"src"}
       * @type {any}
       */
      metadata ? : any

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      silent ? : any

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      debug ? : any

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      performance ? : any

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      verbose ? : any

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      error ? : any

      /**
       * Callback on popup element creation, with created popup
       * 
       * Category: Callback
       * 
       * @param {any} $module
       * @returns {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      onCreate ? ($module: any)

      /**
       * Callback immediately before Popup is removed from DOM
       * 
       * Category: Callback
       * 
       * @param {any} $module
       * @returns {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      onRemove ? ($module: any)

      /**
       * Callback before popup is shown. Returning false from this callback will cancel the popup from showing.
       * 
       * Category: Callback
       * 
       * @param {any} $module
       * @returns {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      onShow ? ($module: any)

      /**
       * Callback after popup is shown
       * 
       * Category: Callback
       * 
       * @param {any} $module
       * @returns {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      onVisible ? ($module: any)

      /**
       * Callback before popup is hidden. Returning false from this callback will cancel the popup from hiding.
       * 
       * Category: Callback
       * 
       * @param {any} $module
       * @returns {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      onHide ? ($module: any)

      /**
       * Callback after popup is hidden
       * 
       * Category: Callback
       * 
       * @param {any} $module
       * @returns {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      onHidden ? ($module: any)

      /**
       * Callback after popup cannot be plaed on screen
       * 
       * Category: Callback
       * 
       * @param {any} $module
       * @returns {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      onUnplaceable ? ($module: any)

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default {}
       * @type {any}
       * @memberOf SemanticUI.Popup.Settings
       */
      templates ? : any

    }

    type SettingNames =

      /**
       * Can specify a DOM element that should be used as the popup. This is useful for including a pre-formatted popup.
       * 
       * Category: Popup Settings
       * @type {any}
       */
      'popup' |

      /**
       * Whether all other popups should be hidden when this popup is opened
       * 
       * Category: Popup Settings
       * @type {any}
       */
      'exclusive' |

      /**
       * Whether to move popup to same offset container as target element when popup already exists on the page. Using a popup inside of an element without overflow:visible, like a sidebar, may require you to set this to false
       * 
       * Category: Popup Settings
       * @default true
       * @type {any}
       */
      'movePopup' |

      /**
       * Whether popup should attach mutationObservers to automatically run destroy when the element is removed from the page's DOM.
       * 
       * Category: Popup Settings
       * @default true
       * @type {any}
       */
      'observeChanges' |

      /**
       * When the popup surpasses the boundary of this element, it will attempt to find another display position.
       * 
       * Category: Popup Settings
       * @default HTMLElement
       * @type {any}
       */
      'boundary' |

      /**
       * Selector or jquery object specifying where the popup should be created.
       * 
       * Category: Popup Settings
       * @default body
       * @type {HTMLElement | JQuery | string}
       */
      'context' |

      /**
       * Will automatically hide a popup on scroll event in this context
       * 
       * Category: Popup Settings
       * @default HTMLElement
       * @type {HTMLElement | JQuery | string}
       */
      'scrollContext' |

      /**
       * Number of pixels that a popup is allowed to appear outside the boundaries of its context. This allows for permissible rounding errors when an element is against the edge of its context.
       * 
       * Category: Popup Settings
       * @default 2
       * @type {any}
       */
      'jitter' |

      /**
       * Position that the popup should appear
       * 
       * Category: Popup Settings
       * @default top left
       * @type {any}
       */
      'position' |

      /**
       * If a popup is inline it will be created next to current element, allowing for local css rules to apply. It will not be removed from the DOM after being hidden. Otherwise popups will appended to body and removed after being hidden.
       * 
       * Category: Popup Settings
       * @type {any}
       */
      'inline' |

      /**
       * Whether popup contents should be preserved in the page after being hidden, allowing it to re-appear slightly faster on subsequent loads.
       * 
       * Category: Popup Settings
       * @type {any}
       */
      'preserve' |

      /**
       * Can be set to adjacent or opposite to prefer adjacent or opposite position if popup cannot fit on screen
       * 
       * Category: Popup Settings
       * @default opposite
       * @type {any}
       */
      'prefer' |

      /**
       * When set to false, a popup will not appear and produce an error message if it cannot entirely fit on page. Setting this to a position like, right center forces the popup to use this position as a last resort even if it is partially offstage. Setting this to true will use the last attempted position.
       * 
       * Category: Popup Settings
       * @type {any}
       */
      'lastResort' |

      /**
       * Event used to trigger popup. Can be either focus, click, hover, or manual. Manual popups must be triggered with $('.element').popup('show');
       * 
       * Category: Popup Settings
       * @default hover
       * @type {any}
       */
      'on' |

      /**
       * Delay in milliseconds before showing or hiding a popup on hover or focus
       * 
       * Category: Popup Settings
       * @default {"show":50,"hide":70}
       * @type {number}
       */
      'delay' |

      /**
       * Named transition to use when animating menu in and out. Fade and slide down are available without including ui transitions
       * 
       * Category: Popup Settings
       * @default scale
       * @type {SemanticUI.AnimationNames}
       */
      'transition' |

      /**
       * Duration of animation events
       * 
       * Category: Popup Settings
       * @default 200
       * @type {number}
       */
      'duration' |

      /**
       * Whether popup should set fluid popup variation width on load to avoid width: 100%including padding
       * 
       * Category: Popup Settings
       * @default true
       * @type {any}
       */
      'setFluidWidth' |

      /**
       * Whether popup should not close on hover (useful for popup navigation menus)
       * 
       * Category: Popup Settings
       * @type {any}
       */
      'hoverable' |

      /**
       * When using on: 'click' specifies whether clicking the page should close the popup
       * 
       * Category: Popup Settings
       * @default true
       * @type {any}
       */
      'closable' |

      /**
       * When using on: 'hover' whether touchstart events should be added to allow the popup to be triggered
       * 
       * Category: Popup Settings
       * @default true
       * @type {any}
       */
      'addTouchEvents' |

      /**
       * Whether popup should hide on scroll or touchmove, auto only hides for popups without on: 'click'.
       * 
       * Category: Popup Settings
       * @default auto
       * @type {any}
       */
      'hideOnScroll' |

      /**
       * If a selector or jQuery object is specified this allows the popup to be positioned relative to that element.
       * 
       * Category: Popup Settings
       * @type {any}
       */
      'target' |

      /**
       * Offset for distance of popup from element
       * 
       * Category: Popup Settings
       * @type {number}
       */
      'distanceAway' |

      /**
       * Offset in pixels from calculated position
       * 
       * Category: Popup Settings
       * @type {number}
       */
      'offset' |

      /**
       * Number of iterations before giving up search for popup position when a popup cannot fit on screen
       * 
       * Category: Popup Settings
       * @default 15
       * @type {number}
       */
      'maxSearchDepth' |

      /**
       * Popup variation to use, can use multiple variations with a space delimiter
       * 
       * Category: Content Settings
       * @type {any}
       */
      'variation' |

      /**
       * Content to display
       * 
       * Category: Content Settings
       * @type {any}
       */
      'content' |

      /**
       * Title to display alongside content
       * 
       * Category: Content Settings
       * @type {any}
       */
      'title' |

      /**
       * HTML content to display instead of preformatted title and content
       * 
       * Category: Content Settings
       * @type {HTMLElement | JQuery | string}
       */
      'html' |

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      'name' |

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      'namespace' |

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      'selector' |

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      'className' |

      /**
       * Metadata used to store XHR and response promise
       * @default {"src":"src"}
       * @type {any}
       */
      'metadata' |

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      'silent' |

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      'debug' |

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      'performance' |

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      'verbose' |

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      'error' |

      /**
       * Callback on popup element creation, with created popup
       * 
       * Category: Callback
       * @param {any} $module
       * @returns {any}
       */
      'onCreate' |

      /**
       * Callback immediately before Popup is removed from DOM
       * 
       * Category: Callback
       * @param {any} $module
       * @returns {any}
       */
      'onRemove' |

      /**
       * Callback before popup is shown. Returning false from this callback will cancel the popup from showing.
       * 
       * Category: Callback
       * @param {any} $module
       * @returns {any}
       */
      'onShow' |

      /**
       * Callback after popup is shown
       * 
       * Category: Callback
       * @param {any} $module
       * @returns {any}
       */
      'onVisible' |

      /**
       * Callback before popup is hidden. Returning false from this callback will cancel the popup from hiding.
       * 
       * Category: Callback
       * @param {any} $module
       * @returns {any}
       */
      'onHide' |

      /**
       * Callback after popup is hidden
       * 
       * Category: Callback
       * @param {any} $module
       * @returns {any}
       */
      'onHidden' |

      /**
       * Callback after popup cannot be plaed on screen
       * 
       * Category: Callback
       * @param {any} $module
       * @returns {any}
       */
      'onUnplaceable' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default {}
       * @type {any}
       */
      'templates'

    type BehaviorNames =

      /**
       * Shows popup
       */
      'show' |

      /**
       * Hides popup
       */
      'hide' |

      /**
       * Hides all visible pop ups on the page
       */
      'hide all' |

      /**
       * Returns current popup dom element
       */
      'get popup' |

      /**
       * Changes current popup content
       * @param {any} html
       */
      'change content' |

      /**
       * Toggles visibility of popup
       */
      'toggle' |

      /**
       * Returns whether popup is visible
       */
      'is visible' |

      /**
       * Returns whether popup is hidden
       */
      'is hidden' |

      /**
       * Returns whether popup is created and inserted into the page
       */
      'exists' |

      /**
       * Adjusts popup when content size changes (only necessary for centered popups)
       */
      'reposition' |

      /**
       * Repositions a popup
       * @param {Positions} position
       */
      'set position' |

      /**
       * Removes popup from the page and removes all events
       */
      'destroy' |

      /**
       * Removes popup from the page
       */
      'remove popup'

  }


  namespace Progress {
    interface Settings {


      /**
       * Whether success state should automatically trigger when progress completes
       * 
       * Category: Progress Settings
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Progress.Settings
       */
      autoSuccess ? : any

      /**
       * Whether progress should automatically show activity when incremented
       * 
       * Category: Progress Settings
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Progress.Settings
       */
      showActivity ? : any

      /**
       * When set to true, values that calculate to above 100% or below 0% will be adjusted. When set to false, inappropriate values will produce an error.
       * 
       * Category: Progress Settings
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Progress.Settings
       */
      limitValues ? : any

      /**
       * Can be set to either to display progress as percent or ratio. Matches up to corresponding text template with the same name.
       * 
       * Category: Progress Settings
       * 
       * @default percent
       * @type {'percent' | 'ratio' | string}
       * @memberOf SemanticUI.Progress.Settings
       */
      label ? : 'percent' | 'ratio' | string

      /**
       * When incrementing without value, sets range for random increment value
       * 
       * Category: Progress Settings
       * 
       * @default {"min":2,"max":5}
       * @type {any}
       * @memberOf SemanticUI.Progress.Settings
       */
      random ? : any

      /**
       * Decimal point precision for calculated progress
       * 
       * Category: Progress Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Progress.Settings
       */
      precision ? : any

      /**
       * Setting a total value will make each call to increment get closer to this total (i.e. 1/20, 2/20 etc)
       * 
       * Category: Progress Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Progress.Settings
       */
      total ? : any

      /**
       * Sets current value, when total is specified, this is used to calculate a ratio of the total, with percent this should be the overall percent
       * 
       * Category: Progress Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Progress.Settings
       */
      value ? : any

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      name ? : any

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      namespace ? : any

      /**
       * Regular expressions used for template matching
       * @default {"youtube":{},"vimeo":{}}
       * @type {any}
       */
      regExp ? : any

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      selector ? : any

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      className ? : any

      /**
       * Metadata used to store XHR and response promise
       * @default {"src":"src"}
       * @type {any}
       */
      metadata ? : any

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      silent ? : any

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      debug ? : any

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      performance ? : any

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      verbose ? : any

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      error ? : any

      /**
       * Callback on percentage change
       * 
       * Category: Callback
       * 
       * @param {any} percent
       * @param {any} value
       * @param {any} total
       * @returns {any}
       * @memberOf SemanticUI.Progress.Settings
       */
      onChange ? (percent: any, value: any, total: any)

      /**
       * Callback on success state
       * 
       * Category: Callback
       * 
       * @param {any} total
       * @returns {any}
       * @memberOf SemanticUI.Progress.Settings
       */
      onSuccess ? (total: any)

      /**
       * Callback on active state
       * 
       * Category: Callback
       * 
       * @param {any} value
       * @param {any} total
       * @returns {any}
       * @memberOf SemanticUI.Progress.Settings
       */
      onActive ? (value: any, total: any)

      /**
       * Callback on error state
       * 
       * Category: Callback
       * 
       * @param {any} value
       * @param {any} total
       * @returns {any}
       * @memberOf SemanticUI.Progress.Settings
       */
      onError ? (value: any, total: any)

      /**
       * Callback on warning state
       * 
       * Category: Callback
       * 
       * @param {any} value
       * @param {any} total
       * @returns {any}
       * @memberOf SemanticUI.Progress.Settings
       */
      onWarning ? (value: any, total: any)

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default 300
       * @type {any}
       * @memberOf SemanticUI.Progress.Settings
       */
      duration ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default auto
       * @type {any}
       * @memberOf SemanticUI.Progress.Settings
       */
      updateInterval ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default 33.333333333333336
       * @type {any}
       * @memberOf SemanticUI.Progress.Settings
       */
      framerate ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Progress.Settings
       */
      percent ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default 100
       * @type {any}
       * @memberOf SemanticUI.Progress.Settings
       */
      failSafeDelay ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Progress.Settings
       */
      onLabelUpdate ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default {"active":false,"error":false,"success":false,"warning":false,"percent":"{percent}%","ratio":"{value} of {total}"}
       * @type {any}
       * @memberOf SemanticUI.Progress.Settings
       */
      text ? : any

    }

    type SettingNames =

      /**
       * Whether success state should automatically trigger when progress completes
       * 
       * Category: Progress Settings
       * @default true
       * @type {any}
       */
      'autoSuccess' |

      /**
       * Whether progress should automatically show activity when incremented
       * 
       * Category: Progress Settings
       * @default true
       * @type {any}
       */
      'showActivity' |

      /**
       * When set to true, values that calculate to above 100% or below 0% will be adjusted. When set to false, inappropriate values will produce an error.
       * 
       * Category: Progress Settings
       * @default true
       * @type {any}
       */
      'limitValues' |

      /**
       * Can be set to either to display progress as percent or ratio. Matches up to corresponding text template with the same name.
       * 
       * Category: Progress Settings
       * @default percent
       * @type {'percent' | 'ratio' | string}
       */
      'label' |

      /**
       * When incrementing without value, sets range for random increment value
       * 
       * Category: Progress Settings
       * @default {"min":2,"max":5}
       * @type {any}
       */
      'random' |

      /**
       * Decimal point precision for calculated progress
       * 
       * Category: Progress Settings
       * @type {any}
       */
      'precision' |

      /**
       * Setting a total value will make each call to increment get closer to this total (i.e. 1/20, 2/20 etc)
       * 
       * Category: Progress Settings
       * @type {any}
       */
      'total' |

      /**
       * Sets current value, when total is specified, this is used to calculate a ratio of the total, with percent this should be the overall percent
       * 
       * Category: Progress Settings
       * @type {any}
       */
      'value' |

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      'name' |

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      'namespace' |

      /**
       * Regular expressions used for template matching
       * @default {"youtube":{},"vimeo":{}}
       * @type {any}
       */
      'regExp' |

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      'selector' |

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      'className' |

      /**
       * Metadata used to store XHR and response promise
       * @default {"src":"src"}
       * @type {any}
       */
      'metadata' |

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      'silent' |

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      'debug' |

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      'performance' |

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      'verbose' |

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      'error' |

      /**
       * Callback on percentage change
       * 
       * Category: Callback
       * @param {any} percent
       * @param {any} value
       * @param {any} total
       * @returns {any}
       */
      'onChange' |

      /**
       * Callback on success state
       * 
       * Category: Callback
       * @param {any} total
       * @returns {any}
       */
      'onSuccess' |

      /**
       * Callback on active state
       * 
       * Category: Callback
       * @param {any} value
       * @param {any} total
       * @returns {any}
       */
      'onActive' |

      /**
       * Callback on error state
       * 
       * Category: Callback
       * @param {any} value
       * @param {any} total
       * @returns {any}
       */
      'onError' |

      /**
       * Callback on warning state
       * 
       * Category: Callback
       * @param {any} value
       * @param {any} total
       * @returns {any}
       */
      'onWarning' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default 300
       * @type {any}
       */
      'duration' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default auto
       * @type {any}
       */
      'updateInterval' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default 33.333333333333336
       * @type {any}
       */
      'framerate' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'percent' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default 100
       * @type {any}
       */
      'failSafeDelay' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'onLabelUpdate' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default {"active":false,"error":false,"success":false,"warning":false,"percent":"{percent}%","ratio":"{value} of {total}"}
       * @type {any}
       */
      'text'

    type BehaviorNames =

      /**
       * Sets current percent of progress to value. If using a total will convert from percent to estimated value.
       * @param {number} percent
       */
      'set percent' |

      /**
       * Sets progress to specified value. Will automatically calculate percent from total.
       * @param {number} value
       */
      'set progress' |

      /**
       * Increments progress by increment value, if not passed a value will use random amount specified in settings
       * @param {number} incrementValue
       */
      'increment' |

      /**
       * Decrements progress by decrement value, if not passed a value will use random amount specified in settings
       * @param {number} decrementValue
       */
      'decrement' |

      /**
       * Immediately updates progress to value, ignoring progress animation interval delays
       * @param {number} value
       */
      'update progress' |

      /**
       * Finishes progress and sets loaded to 100%
       */
      'complete' |

      /**
       * Resets progress to zero
       */
      'reset' |

      /**
       * Set total to a new value
       * @param {number} total
       */
      'set total' |

      /**
       * Replaces templated string with value, total, percent left and percent.
       * @param {string} text
       */
      'get text' |

      /**
       * Returns normalized value inside acceptable range specified by total.
       * @param {number} value
       */
      'get normalized value' |

      /**
       * Returns percent as last specified
       */
      'get percent' |

      /**
       * Returns current progress value
       */
      'get value' |

      /**
       * Returns total
       */
      'get total' |

      /**
       * Returns whether progress is completed
       */
      'is complete' |

      /**
       * Returns whether progress was a success
       */
      'is success' |

      /**
       * Returns whether progress is in warning state
       */
      'is warning' |

      /**
       * Returns whether progress is in error state
       */
      'is error' |

      /**
       * Returns whether progress is in active state
       */
      'is active' |

      /**
       * Sets progress to active state
       */
      'set active' |

      /**
       * Sets progress to warning state
       */
      'set warning' |

      /**
       * Sets progress to success state
       */
      'set success' |

      /**
       * Sets progress to error state
       */
      'set error' |

      /**
       * Changes progress animation speed
       * @param {number} value
       */
      'set duration' |

      /**
       * Sets progress exterior label to text
       * @param {string} text
       */
      'set label' |

      /**
       * Sets progress bar label to text
       * @param {string} text
       */
      'set bar label' |

      /**
       * Removes progress to active state
       */
      'remove active' |

      /**
       * Removes progress to warning state
       */
      'remove warning' |

      /**
       * Removes progress to success state
       */
      'remove success' |

      /**
       * Removes progress to error state
       */
      'remove error' |

      /**
       * Removes all changes to the page made by initialization
       */
      'destroy'

  }


  namespace Rating {
    interface Settings {


      /**
       * A number representing the default rating to apply
       * 
       * Category: Rating Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Rating.Settings
       */
      initialRating ? : any

      /**
       * Whether callbacks like onRate should fire immediately after initializing with the current value.
       * 
       * Category: Rating Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Rating.Settings
       */
      fireOnInit ? : any

      /**
       * By default a rating will be only clearable if there is 1 icon. Setting to true/false will allow or disallow a user to clear their rating
       * 
       * Category: Rating Settings
       * 
       * @default auto
       * @type {any}
       * @memberOf SemanticUI.Rating.Settings
       */
      clearable ? : any

      /**
       * Whether to enable user's ability to rate
       * 
       * Category: Rating Settings
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Rating.Settings
       */
      interactive ? : any

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      name ? : any

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      namespace ? : any

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      selector ? : any

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      className ? : any

      /**
       * Metadata used to store XHR and response promise
       * @default {"src":"src"}
       * @type {any}
       */
      metadata ? : any

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      debug ? : any

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      performance ? : any

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      verbose ? : any

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      error ? : any

      /**
       * Is called after user selects a new rating
       * 
       * Category: Callback
       * 
       * @param {any} value
       * @returns {any}
       * @memberOf SemanticUI.Rating.Settings
       */
      onRate ? (value: any)

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Rating.Settings
       */
      slent ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default 4
       * @type {any}
       * @memberOf SemanticUI.Rating.Settings
       */
      maxRating ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default {}
       * @type {any}
       * @memberOf SemanticUI.Rating.Settings
       */
      templates ? : any

    }

    type SettingNames =

      /**
       * A number representing the default rating to apply
       * 
       * Category: Rating Settings
       * @type {any}
       */
      'initialRating' |

      /**
       * Whether callbacks like onRate should fire immediately after initializing with the current value.
       * 
       * Category: Rating Settings
       * @type {any}
       */
      'fireOnInit' |

      /**
       * By default a rating will be only clearable if there is 1 icon. Setting to true/false will allow or disallow a user to clear their rating
       * 
       * Category: Rating Settings
       * @default auto
       * @type {any}
       */
      'clearable' |

      /**
       * Whether to enable user's ability to rate
       * 
       * Category: Rating Settings
       * @default true
       * @type {any}
       */
      'interactive' |

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      'name' |

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      'namespace' |

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      'selector' |

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      'className' |

      /**
       * Metadata used to store XHR and response promise
       * @default {"src":"src"}
       * @type {any}
       */
      'metadata' |

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      'debug' |

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      'performance' |

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      'verbose' |

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      'error' |

      /**
       * Is called after user selects a new rating
       * 
       * Category: Callback
       * @param {any} value
       * @returns {any}
       */
      'onRate' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'slent' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default 4
       * @type {any}
       */
      'maxRating' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default {}
       * @type {any}
       */
      'templates'

    type BehaviorNames =

      /**
       * Sets rating programmatically
       * @param {number} rating
       */
      'set rating' |

      /**
       * Gets current rating
       */
      'get rating' |

      /**
       * Disables interactive rating mode
       */
      'disable' |

      /**
       * Enables interactive rating mode
       */
      'enable' |

      /**
       * Clears current rating
       */
      'clear rating' |

      /**
       * Removes all changes to the page made by initialization
       */
      'destroy'

  }


  namespace Search {
    interface Settings {


      /**
       * Settings for API call.
       * 
       * Category: Behavior
       * 
       * @type {any}
       * @memberOf SemanticUI.Search.Settings
       */
      apiSettings ? : any

      /**
       * Minimum characters to query for results
       * 
       * Category: Behavior
       * 
       * @default 1
       * @type {any}
       * @memberOf SemanticUI.Search.Settings
       */
      minCharacters ? : any

      /**
       * Named transition to use when animating menu in and out. Fade and slide down are available without including ui transitions
       * 
       * Category: Behavior
       * 
       * @default scale
       * @type {SemanticUI.AnimationNames}
       * @memberOf SemanticUI.Search.Settings
       */
      transition ? : AnimationNames

      /**
       * Duration of animation events
       * 
       * Category: Behavior
       * 
       * @default 200
       * @type {number}
       * @memberOf SemanticUI.Search.Settings
       */
      duration ? : number

      /**
       * Maximum results to display when using local and simple search, maximum category count for category search
       * 
       * Category: Behavior
       * 
       * @default 7
       * @type {any}
       * @memberOf SemanticUI.Search.Settings
       */
      maxResults ? : any

      /**
       * Caches results locally to avoid requerying server
       * 
       * Category: Behavior
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Search.Settings
       */
      cache ? : any

      /**
       * Specify a Javascript object which will be searched locally
       * 
       * Category: Behavior
       * 
       * @type {any}
       * @memberOf SemanticUI.Search.Settings
       */
      source ? : any

      /**
       * Whether the search should automatically select the first search result after searching
       * 
       * Category: Behavior
       * 
       * @type {any}
       * @memberOf SemanticUI.Search.Settings
       */
      selectFirstResult ? : any

      /**
       * Whether a "no results" message should be shown if no results are found. (These messages can be modified using the template object specified below)
       * 
       * Category: Behavior
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Search.Settings
       */
      showNoResults ? : any

      /**
       * Return local results that match anywhere inside your content
       * 
       * Category: Behavior
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Search.Settings
       */
      searchFullText ? : any

      /**
       * List mapping display content to JSON property, either with API or source.
       * 
       * Category: Behavior
       * 
       * @default {"categories":"results","categoryName":"name","categoryResults":"results","description":"description","image":"image","price":"price","results":"results","title":"title","url":"url","action":"action","actionText":"text","actionURL":"url"}
       * @type {any}
       * @memberOf SemanticUI.Search.Settings
       */
      fields ? : any

      /**
       * Specify object properties inside local source object which will be searched
       * 
       * Category: Behavior
       * 
       * @default ["title","description"]
       * @type {any}
       * @memberOf SemanticUI.Search.Settings
       */
      searchFields ? : any

      /**
       * Delay before hiding results after search blur
       * 
       * Category: Behavior
       * 
       * @type {any}
       * @memberOf SemanticUI.Search.Settings
       */
      hideDelay ? : any

      /**
       * Delay before querying results on inputchange
       * 
       * Category: Behavior
       * 
       * @default 200
       * @type {any}
       * @memberOf SemanticUI.Search.Settings
       */
      searchDelay ? : any

      /**
       * Easing equation when using fallback Javascript animation
       * 
       * Category: Behavior
       * 
       * @default easeOutExpo
       * @type {any}
       * @memberOf SemanticUI.Search.Settings
       */
      easing ? : any

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      name ? : any

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      namespace ? : any

      /**
       * Regular expressions used for template matching
       * @default {"youtube":{},"vimeo":{}}
       * @type {any}
       */
      regExp ? : any

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      selector ? : any

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      className ? : any

      /**
       * Metadata used to store XHR and response promise
       * @default {"src":"src"}
       * @type {any}
       */
      metadata ? : any

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      silent ? : any

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      debug ? : any

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      performance ? : any

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      verbose ? : any

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      error ? : any

      /**
       * Callback on element selection by user. The first parameter includes the filtered response results for that element. The function should return false to prevent default action (closing search results and selecting value).
       * 
       * Category: Callback
       * 
       * @param {any} result
       * @param {any} response
       * @returns {any}
       * @memberOf SemanticUI.Search.Settings
       */
      onSelect ? (result: any, response: any)

      /**
       * Callback after processing element template to add HTML to results. Function should return false to prevent default actions.
       * 
       * Category: Callback
       * 
       * @param {any} html
       * @returns {any}
       * @memberOf SemanticUI.Search.Settings
       */
      onResultsAdd ? (html: any)

      /**
       * Callback on search query
       * 
       * Category: Callback
       * 
       * @param {any} query
       * @returns {any}
       * @memberOf SemanticUI.Search.Settings
       */
      onSearchQuery ? (query: any)

      /**
       * Callback on server response
       * 
       * Category: Callback
       * 
       * @param {any} response
       * @returns {any}
       * @memberOf SemanticUI.Search.Settings
       */
      onResults ? (response: any)

      /**
       * Callback when results are opened
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Search.Settings
       */
      onResultsOpen ? ()

      /**
       * Callback when results are closed
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Search.Settings
       */
      onResultsClose ? ()

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default standard
       * @type {any}
       * @memberOf SemanticUI.Search.Settings
       */
      type ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Search.Settings
       */
      displayField ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Search.Settings
       */
      automatic ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default {}
       * @type {any}
       * @memberOf SemanticUI.Search.Settings
       */
      templates ? : any

    }

    type SettingNames =

      /**
       * Settings for API call.
       * 
       * Category: Behavior
       * @type {any}
       */
      'apiSettings' |

      /**
       * Minimum characters to query for results
       * 
       * Category: Behavior
       * @default 1
       * @type {any}
       */
      'minCharacters' |

      /**
       * Named transition to use when animating menu in and out. Fade and slide down are available without including ui transitions
       * 
       * Category: Behavior
       * @default scale
       * @type {SemanticUI.AnimationNames}
       */
      'transition' |

      /**
       * Duration of animation events
       * 
       * Category: Behavior
       * @default 200
       * @type {number}
       */
      'duration' |

      /**
       * Maximum results to display when using local and simple search, maximum category count for category search
       * 
       * Category: Behavior
       * @default 7
       * @type {any}
       */
      'maxResults' |

      /**
       * Caches results locally to avoid requerying server
       * 
       * Category: Behavior
       * @default true
       * @type {any}
       */
      'cache' |

      /**
       * Specify a Javascript object which will be searched locally
       * 
       * Category: Behavior
       * @type {any}
       */
      'source' |

      /**
       * Whether the search should automatically select the first search result after searching
       * 
       * Category: Behavior
       * @type {any}
       */
      'selectFirstResult' |

      /**
       * Whether a "no results" message should be shown if no results are found. (These messages can be modified using the template object specified below)
       * 
       * Category: Behavior
       * @default true
       * @type {any}
       */
      'showNoResults' |

      /**
       * Return local results that match anywhere inside your content
       * 
       * Category: Behavior
       * @default true
       * @type {any}
       */
      'searchFullText' |

      /**
       * List mapping display content to JSON property, either with API or source.
       * 
       * Category: Behavior
       * @default {"categories":"results","categoryName":"name","categoryResults":"results","description":"description","image":"image","price":"price","results":"results","title":"title","url":"url","action":"action","actionText":"text","actionURL":"url"}
       * @type {any}
       */
      'fields' |

      /**
       * Specify object properties inside local source object which will be searched
       * 
       * Category: Behavior
       * @default ["title","description"]
       * @type {any}
       */
      'searchFields' |

      /**
       * Delay before hiding results after search blur
       * 
       * Category: Behavior
       * @type {any}
       */
      'hideDelay' |

      /**
       * Delay before querying results on inputchange
       * 
       * Category: Behavior
       * @default 200
       * @type {any}
       */
      'searchDelay' |

      /**
       * Easing equation when using fallback Javascript animation
       * 
       * Category: Behavior
       * @default easeOutExpo
       * @type {any}
       */
      'easing' |

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      'name' |

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      'namespace' |

      /**
       * Regular expressions used for template matching
       * @default {"youtube":{},"vimeo":{}}
       * @type {any}
       */
      'regExp' |

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      'selector' |

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      'className' |

      /**
       * Metadata used to store XHR and response promise
       * @default {"src":"src"}
       * @type {any}
       */
      'metadata' |

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      'silent' |

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      'debug' |

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      'performance' |

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      'verbose' |

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      'error' |

      /**
       * Callback on element selection by user. The first parameter includes the filtered response results for that element. The function should return false to prevent default action (closing search results and selecting value).
       * 
       * Category: Callback
       * @param {any} result
       * @param {any} response
       * @returns {any}
       */
      'onSelect' |

      /**
       * Callback after processing element template to add HTML to results. Function should return false to prevent default actions.
       * 
       * Category: Callback
       * @param {any} html
       * @returns {any}
       */
      'onResultsAdd' |

      /**
       * Callback on search query
       * 
       * Category: Callback
       * @param {any} query
       * @returns {any}
       */
      'onSearchQuery' |

      /**
       * Callback on server response
       * 
       * Category: Callback
       * @param {any} response
       * @returns {any}
       */
      'onResults' |

      /**
       * Callback when results are opened
       * 
       * Category: Callback
       */
      'onResultsOpen' |

      /**
       * Callback when results are closed
       * 
       * Category: Callback
       */
      'onResultsClose' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default standard
       * @type {any}
       */
      'type' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'displayField' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default true
       * @type {any}
       */
      'automatic' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default {}
       * @type {any}
       */
      'templates'

    type BehaviorNames =

      /**
       * Search for value currently set in search input
       */
      'query' |

      /**
       * Displays message in search results with text, using template matching type
       * @param {string} text
       * @param {any} type
       */
      'display message' |

      /**
       * Cancels current remote search query
       */
      'cancel query' |

      /**
       * Search local object for specified query and display results
       * @param {any} query
       */
      'search local' |

      /**
       * Whether has minimum characters
       */
      'has minimum characters' |

      /**
       * Search remote endpoint for specified query and display results
       * @param {any} query
       */
      'search remote' |

      /**
       * Search object for specified query and return results
       * @param {any} query
       * @param {any} object
       * @param {any} searchFields
       */
      'search object' |

      /**
       * Cancels current remote search request
       */
      'cancel query' |

      /**
       * Whether search is currently focused
       */
      'is focused' |

      /**
       * Whether search results are visible
       */
      'is visible' |

      /**
       * Whether search results are empty
       */
      'is empty' |

      /**
       * Returns current search value
       */
      'get value' |

      /**
       * Returns JSON object matching searched title or id (see above)
       * @param {any} value
       */
      'get result' |

      /**
       * Sets search input to value
       * @param {any} value
       */
      'set value' |

      /**
       * Reads cached results for query
       * @param {any} query
       */
      'read cache' |

      /**
       * Clears value from cache, if no parameter passed clears all cache
       * @param {any} query
       */
      'clear cache' |

      /**
       * Writes cached results for query
       * @param {any} query
       */
      'write cache' |

      /**
       * Adds HTML to results and displays
       * @param {any} html
       */
      'add results' |

      /**
       * Shows results container
       */
      'show results' |

      /**
       * Hides results container
       */
      'hide results' |

      /**
       * Generates results using parser specified by settings.template
       * @param {any} response
       */
      'generate results' |

      /**
       * Removes all events
       */
      'destroy'

  }


  namespace Shape {
    interface Settings {


      /**
       * Duration of side change animation
       * 
       * Category: Shape Settings
       * 
       * @type {number}
       * @memberOf SemanticUI.Shape.Settings
       */
      duration ? : number

      /**
       * When set to next will use the width of the next side during the shape's animation. When set to initial it will use the width of the shape at initialization. When set to a specifix pixel height, will force the width to that height.
       * 
       * Category: Shape Settings
       * 
       * @default initial
       * @type {any}
       * @memberOf SemanticUI.Shape.Settings
       */
      width ? : any

      /**
       * When set to next will use the height of the next side during the shape's animation. When set to initial it will use the height of the shape at initialization. When set to a specifix pixel height, will force the height to that height.
       * 
       * Category: Shape Settings
       * 
       * @default initial
       * @type {any}
       * @memberOf SemanticUI.Shape.Settings
       */
      height ? : any

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      name ? : any

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      namespace ? : any

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      selector ? : any

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      className ? : any

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      silent ? : any

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      debug ? : any

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      performance ? : any

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      verbose ? : any

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      error ? : any

      /**
       * Is called before side change
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Shape.Settings
       */
      beforeChange ? ()

      /**
       * Is called after visible side change
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Shape.Settings
       */
      onChange ? ()

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Shape.Settings
       */
      jitter ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Shape.Settings
       */
      allowRepeats ? : any

    }

    type SettingNames =

      /**
       * Duration of side change animation
       * 
       * Category: Shape Settings
       * @type {number}
       */
      'duration' |

      /**
       * When set to next will use the width of the next side during the shape's animation. When set to initial it will use the width of the shape at initialization. When set to a specifix pixel height, will force the width to that height.
       * 
       * Category: Shape Settings
       * @default initial
       * @type {any}
       */
      'width' |

      /**
       * When set to next will use the height of the next side during the shape's animation. When set to initial it will use the height of the shape at initialization. When set to a specifix pixel height, will force the height to that height.
       * 
       * Category: Shape Settings
       * @default initial
       * @type {any}
       */
      'height' |

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      'name' |

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      'namespace' |

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      'selector' |

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      'className' |

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      'silent' |

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      'debug' |

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      'performance' |

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      'verbose' |

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      'error' |

      /**
       * Is called before side change
       * 
       * Category: Callback
       */
      'beforeChange' |

      /**
       * Is called after visible side change
       * 
       * Category: Callback
       */
      'onChange' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'jitter' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'allowRepeats'

    type BehaviorNames =

      /**
       * Flips the shape upward
       */
      'flip up' |

      /**
       * Flips the shape downward
       */
      'flip down' |

      /**
       * Flips the shape right
       */
      'flip right' |

      /**
       * Flips the shape left
       */
      'flip left' |

      /**
       * Flips the shape over clock-wise
       */
      'flip over' |

      /**
       * Flips the shape over counter-clockwise
       */
      'flip back' |

      /**
       * Set the next side to a specific selector
       * @param {HTMLElement | JQuery | string} selector
       */
      'set next side' |

      /**
       * Returns whether shape is currently animating
       */
      'is animating' |

      /**
       * Removes all inline styles
       */
      'reset' |

      /**
       * Queues an animationtill after current animation
       * @param {AnimationNames} animation
       */
      'queue' |

      /**
       * Forces a reflow on element
       */
      'repaint' |

      /**
       * Set the next side to next sibling to active element
       */
      'set default side' |

      /**
       * Sets shape to the content size of the next side
       */
      'set stage size' |

      /**
       * Refreshes the selector cache for element sides
       */
      'refresh' |

      /**
       * Returns translation for next side staged below
       */
      'get transform down' |

      /**
       * Returns translation for next side staged left
       */
      'get transform left' |

      /**
       * Returns translation for next side staged right
       */
      'get transform right' |

      /**
       * Returns translation for next side staged up
       */
      'get transform up' |

      /**
       * Returns translation for next side staged down
       */
      'get transform down' |

      /**
       * Removes all changes to the page made by initialization
       */
      'destroy'

  }


  namespace Sidebar {
    interface Settings {


      /**
       * Context which sidebar will appear inside
       * 
       * Category: Behavior
       * 
       * @default body
       * @type {HTMLElement | JQuery | string}
       * @memberOf SemanticUI.Sidebar.Settings
       */
      context ? : HTMLElement | JQuery | string

      /**
       * Whether multiple sidebars can be open at once
       * 
       * Category: Behavior
       * 
       * @type {any}
       * @memberOf SemanticUI.Sidebar.Settings
       */
      exclusive ? : any

      /**
       * Whether sidebar can be closed by clicking on page
       * 
       * Category: Behavior
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Sidebar.Settings
       */
      closable ? : any

      /**
       * Whether to dim page contents when sidebar is visible
       * 
       * Category: Behavior
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Sidebar.Settings
       */
      dimPage ? : any

      /**
       * Whether to lock page scroll when sidebar is visible
       * 
       * Category: Behavior
       * 
       * @type {any}
       * @memberOf SemanticUI.Sidebar.Settings
       */
      scrollLock ? : any

      /**
       * Whether to return to original scroll position when sidebar is hidden, automatically occurs with transition: scale
       * 
       * Category: Behavior
       * 
       * @type {any}
       * @memberOf SemanticUI.Sidebar.Settings
       */
      returnScroll ? : any

      /**
       * When sidebar is initialized without the proper HTML, using this option will defer creation of DOM to use requestAnimationFrame.
       * 
       * Category: Behavior
       * 
       * @type {any}
       * @memberOf SemanticUI.Sidebar.Settings
       */
      delaySetup ? : any

      /**
       * Named transition to use when animating sidebar. Defaults to 'auto' which selects transition from defaultTransition based on direction.
       * 
       * Category: Animation
       * 
       * @default auto
       * @type {SemanticUI.AnimationNames}
       * @memberOf SemanticUI.Sidebar.Settings
       */
      transition ? : AnimationNames

      /**
       * Named transition to use when animating when detecting mobile device. Defaults to 'auto' which selects transition from defaultTransitionbased on direction.
       * 
       * Category: Animation
       * 
       * @default auto
       * @type {any}
       * @memberOf SemanticUI.Sidebar.Settings
       */
      mobileTransition ? : any

      /**
       * Default transitions for each direction and screen size, used with transition: auto
       * 
       * Category: Animation
       * 
       * @default {"computer":{"left":"uncover","right":"uncover","top":"overlay","bottom":"overlay"},"mobile":{"left":"uncover","right":"uncover","top":"overlay","bottom":"overlay"}}
       * @type {any}
       * @memberOf SemanticUI.Sidebar.Settings
       */
      defaultTransition ? : any

      /**
       * Duration of sidebar animation when using legacy Javascript animation
       * 
       * Category: Animation
       * 
       * @default 500
       * @type {number}
       * @memberOf SemanticUI.Sidebar.Settings
       */
      duration ? : number

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      name ? : any

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      namespace ? : any

      /**
       * Regular expressions used for template matching
       * @default {"youtube":{},"vimeo":{}}
       * @type {any}
       */
      regExp ? : any

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      selector ? : any

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      className ? : any

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      silent ? : any

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      debug ? : any

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      performance ? : any

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      verbose ? : any

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      error ? : any

      /**
       * Is called when a sidebar begins animating in.
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Sidebar.Settings
       */
      onVisible ? ()

      /**
       * Is called when a sidebar has finished animating in.
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Sidebar.Settings
       */
      onShow ? ()

      /**
       * Is called when a sidebar begins to hide or show
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Sidebar.Settings
       */
      onChange ? ()

      /**
       * Is called before a sidebar begins to animate out.
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Sidebar.Settings
       */
      onHide ? ()

      /**
       * Is called after a sidebar has finished animating out.
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Sidebar.Settings
       */
      onHidden ? ()

    }

    type SettingNames =

      /**
       * Context which sidebar will appear inside
       * 
       * Category: Behavior
       * @default body
       * @type {HTMLElement | JQuery | string}
       */
      'context' |

      /**
       * Whether multiple sidebars can be open at once
       * 
       * Category: Behavior
       * @type {any}
       */
      'exclusive' |

      /**
       * Whether sidebar can be closed by clicking on page
       * 
       * Category: Behavior
       * @default true
       * @type {any}
       */
      'closable' |

      /**
       * Whether to dim page contents when sidebar is visible
       * 
       * Category: Behavior
       * @default true
       * @type {any}
       */
      'dimPage' |

      /**
       * Whether to lock page scroll when sidebar is visible
       * 
       * Category: Behavior
       * @type {any}
       */
      'scrollLock' |

      /**
       * Whether to return to original scroll position when sidebar is hidden, automatically occurs with transition: scale
       * 
       * Category: Behavior
       * @type {any}
       */
      'returnScroll' |

      /**
       * When sidebar is initialized without the proper HTML, using this option will defer creation of DOM to use requestAnimationFrame.
       * 
       * Category: Behavior
       * @type {any}
       */
      'delaySetup' |

      /**
       * Named transition to use when animating sidebar. Defaults to 'auto' which selects transition from defaultTransition based on direction.
       * 
       * Category: Animation
       * @default auto
       * @type {SemanticUI.AnimationNames}
       */
      'transition' |

      /**
       * Named transition to use when animating when detecting mobile device. Defaults to 'auto' which selects transition from defaultTransitionbased on direction.
       * 
       * Category: Animation
       * @default auto
       * @type {any}
       */
      'mobileTransition' |

      /**
       * Default transitions for each direction and screen size, used with transition: auto
       * 
       * Category: Animation
       * @default {"computer":{"left":"uncover","right":"uncover","top":"overlay","bottom":"overlay"},"mobile":{"left":"uncover","right":"uncover","top":"overlay","bottom":"overlay"}}
       * @type {any}
       */
      'defaultTransition' |

      /**
       * Duration of sidebar animation when using legacy Javascript animation
       * 
       * Category: Animation
       * @default 500
       * @type {number}
       */
      'duration' |

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      'name' |

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      'namespace' |

      /**
       * Regular expressions used for template matching
       * @default {"youtube":{},"vimeo":{}}
       * @type {any}
       */
      'regExp' |

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      'selector' |

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      'className' |

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      'silent' |

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      'debug' |

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      'performance' |

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      'verbose' |

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      'error' |

      /**
       * Is called when a sidebar begins animating in.
       * 
       * Category: Callback
       */
      'onVisible' |

      /**
       * Is called when a sidebar has finished animating in.
       * 
       * Category: Callback
       */
      'onShow' |

      /**
       * Is called when a sidebar begins to hide or show
       * 
       * Category: Callback
       */
      'onChange' |

      /**
       * Is called before a sidebar begins to animate out.
       * 
       * Category: Callback
       */
      'onHide' |

      /**
       * Is called after a sidebar has finished animating out.
       * 
       * Category: Callback
       */
      'onHidden'

    type BehaviorNames =

      /**
       * Attaches sidebar action to given selector. Default event if none specified is toggle
       * @param {HTMLElement | JQuery | string} selector
       * @param {Sidebar.BehaviorNames} event
       */
      'attach events' |

      /**
       * Shows sidebar
       */
      'show' |

      /**
       * Hides sidebar
       */
      'hide' |

      /**
       * Toggles visibility of sidebar
       */
      'toggle' |

      /**
       * Returns whether sidebar is visible
       */
      'is visible' |

      /**
       * Returns whether sidebar is hidden
       */
      'is hidden' |

      /**
       * Pushes page content to be visible alongside sidebar
       */
      'push page' |

      /**
       * Returns direction of current sidebar
       */
      'get direction' |

      /**
       * Returns page content to original position
       */
      'pull page' |

      /**
       * Adds stylesheet to page head to trigger sidebar animations
       */
      'add body CSS' |

      /**
       * Removes any inline stylesheets for sidebar animation
       */
      'remove body CSS' |

      /**
       * Returns vendor prefixed transition end event
       */
      'get transition event' |

      /**
       * Removes all changes to the page made by initialization
       */
      'destroy'

  }


  namespace Site {
    interface Settings {


      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      name ? : any

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      namespace ? : any

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      debug ? : any

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      performance ? : any

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      verbose ? : any

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      error ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default ["accordion","api","checkbox","dimmer","dropdown","embed","form","modal","nag","popup","rating","shape","sidebar","state","sticky","tab","transition","visit","visibility"]
       * @type {any}
       * @memberOf SemanticUI.Site.Settings
       */
      modules ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default site
       * @type {any}
       * @memberOf SemanticUI.Site.Settings
       */
      siteNamespace ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default {"cache":{},"config":{},"sections":{},"section":{},"utilities":{}}
       * @type {any}
       * @memberOf SemanticUI.Site.Settings
       */
      namespaceStub ? : any

    }

    type SettingNames =

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      'name' |

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      'namespace' |

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      'debug' |

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      'performance' |

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      'verbose' |

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      'error' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default ["accordion","api","checkbox","dimmer","dropdown","embed","form","modal","nag","popup","rating","shape","sidebar","state","sticky","tab","transition","visit","visibility"]
       * @type {any}
       */
      'modules' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default site
       * @type {any}
       */
      'siteNamespace' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default {"cache":{},"config":{},"sections":{},"section":{},"utilities":{}}
       * @type {any}
       */
      'namespaceStub'

    type BehaviorNames =

      /**
       * Removes all changes to the page made by initialization
       */
      'destroy'

  }


  namespace State {
    interface Settings {


      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      name ? : any

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      namespace ? : any

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      selector ? : any

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      className ? : any

      /**
       * Metadata used to store XHR and response promise
       * @default {"src":"src"}
       * @type {any}
       */
      metadata ? : any

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      debug ? : any

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      performance ? : any

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      verbose ? : any

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      error ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.State.Settings
       */
      onActivate ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.State.Settings
       */
      onDeactivate ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.State.Settings
       */
      onChange ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.State.Settings
       */
      activateTest ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.State.Settings
       */
      deactivateTest ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.State.Settings
       */
      automatic ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.State.Settings
       */
      sync ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default 1000
       * @type {any}
       * @memberOf SemanticUI.State.Settings
       */
      flashDuration ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default {"text":".loading, .disabled","active":".disabled"}
       * @type {any}
       * @memberOf SemanticUI.State.Settings
       */
      filter ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.State.Settings
       */
      context ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default {"input":{"disabled":true,"loading":true,"active":true},"button":{"disabled":true,"loading":true,"active":true},"progress":{"active":true,"success":true,"warning":true,"error":true}}
       * @type {any}
       * @memberOf SemanticUI.State.Settings
       */
      defaults ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default {"active":true,"disabled":true,"error":true,"loading":true,"success":true,"warning":true}
       * @type {any}
       * @memberOf SemanticUI.State.Settings
       */
      states ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default {"disabled":false,"flash":false,"hover":false,"active":false,"inactive":false,"activate":false,"deactivate":false}
       * @type {any}
       * @memberOf SemanticUI.State.Settings
       */
      text ? : any

    }

    type SettingNames =

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      'name' |

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      'namespace' |

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      'selector' |

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      'className' |

      /**
       * Metadata used to store XHR and response promise
       * @default {"src":"src"}
       * @type {any}
       */
      'metadata' |

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      'debug' |

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      'performance' |

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      'verbose' |

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      'error' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'onActivate' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'onDeactivate' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'onChange' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'activateTest' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'deactivateTest' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default true
       * @type {any}
       */
      'automatic' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'sync' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default 1000
       * @type {any}
       */
      'flashDuration' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default {"text":".loading, .disabled","active":".disabled"}
       * @type {any}
       */
      'filter' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'context' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default {"input":{"disabled":true,"loading":true,"active":true},"button":{"disabled":true,"loading":true,"active":true},"progress":{"active":true,"success":true,"warning":true,"error":true}}
       * @type {any}
       */
      'defaults' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default {"active":true,"disabled":true,"error":true,"loading":true,"success":true,"warning":true}
       * @type {any}
       */
      'states' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default {"disabled":false,"flash":false,"hover":false,"active":false,"inactive":false,"activate":false,"deactivate":false}
       * @type {any}
       */
      'text'

    type BehaviorNames =

      /**
       * Removes all changes to the page made by initialization
       */
      'destroy'

  }


  namespace Sticky {
    interface Settings {


      /**
       * Whether element should be "pushed" by the viewport, attaching to the bottom of the screen when scrolling up
       * 
       * Category: Sticky Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Sticky.Settings
       */
      pushing ? : any

      /**
       * Sticky container height will only be set if the difference between heights of container and context is larger than this jitter value.
       * 
       * Category: Sticky Settings
       * 
       * @default 5
       * @type {any}
       * @memberOf SemanticUI.Sticky.Settings
       */
      jitter ? : any

      /**
       * Whether any change in context DOM should automatically refresh cached sticky positions
       * 
       * Category: Sticky Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Sticky.Settings
       */
      observeChanges ? : any

      /**
       * Context which sticky element should stick to
       * 
       * Category: Sticky Settings
       * 
       * @type {HTMLElement | JQuery | string}
       * @memberOf SemanticUI.Sticky.Settings
       */
      context ? : HTMLElement | JQuery | string

      /**
       * Context which sticky should attach onscroll events.
       * 
       * Category: Sticky Settings
       * 
       * @default HTMLElement
       * @type {HTMLElement | JQuery | string}
       * @memberOf SemanticUI.Sticky.Settings
       */
      scrollContext ? : HTMLElement | JQuery | string

      /**
       * Offset in pixels from the top of the screen when fixing element to viewport
       * 
       * Category: Sticky Settings
       * 
       * @type {number}
       * @memberOf SemanticUI.Sticky.Settings
       */
      offset ? : number

      /**
       * Offset in pixels from the bottom of the screen when fixing element to viewport
       * 
       * Category: Sticky Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Sticky.Settings
       */
      bottomOffset ? : any

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      name ? : any

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      namespace ? : any

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      className ? : any

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      silent ? : any

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      debug ? : any

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      performance ? : any

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      verbose ? : any

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      error ? : any

      /**
       * Callback when element is repositioned from layout change
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Sticky.Settings
       */
      onReposition ? ()

      /**
       * Callback when requestAnimationFrame fires from scroll handler.
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Sticky.Settings
       */
      onScroll ? ()

      /**
       * Callback when element is fixed to page
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Sticky.Settings
       */
      onStick ? ()

      /**
       * Callback when element is unfixed from page
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Sticky.Settings
       */
      onUnstick ? ()

      /**
       * Callback when element is bound to top of parent container
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Sticky.Settings
       */
      onTop ? ()

      /**
       * Callback when element is bound to bottom of parent container
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Sticky.Settings
       */
      onBottom ? ()

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Sticky.Settings
       */
      container ? : any

    }

    type SettingNames =

      /**
       * Whether element should be "pushed" by the viewport, attaching to the bottom of the screen when scrolling up
       * 
       * Category: Sticky Settings
       * @type {any}
       */
      'pushing' |

      /**
       * Sticky container height will only be set if the difference between heights of container and context is larger than this jitter value.
       * 
       * Category: Sticky Settings
       * @default 5
       * @type {any}
       */
      'jitter' |

      /**
       * Whether any change in context DOM should automatically refresh cached sticky positions
       * 
       * Category: Sticky Settings
       * @type {any}
       */
      'observeChanges' |

      /**
       * Context which sticky element should stick to
       * 
       * Category: Sticky Settings
       * @type {HTMLElement | JQuery | string}
       */
      'context' |

      /**
       * Context which sticky should attach onscroll events.
       * 
       * Category: Sticky Settings
       * @default HTMLElement
       * @type {HTMLElement | JQuery | string}
       */
      'scrollContext' |

      /**
       * Offset in pixels from the top of the screen when fixing element to viewport
       * 
       * Category: Sticky Settings
       * @type {number}
       */
      'offset' |

      /**
       * Offset in pixels from the bottom of the screen when fixing element to viewport
       * 
       * Category: Sticky Settings
       * @type {any}
       */
      'bottomOffset' |

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      'name' |

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      'namespace' |

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      'className' |

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      'silent' |

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      'debug' |

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      'performance' |

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      'verbose' |

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      'error' |

      /**
       * Callback when element is repositioned from layout change
       * 
       * Category: Callback
       */
      'onReposition' |

      /**
       * Callback when requestAnimationFrame fires from scroll handler.
       * 
       * Category: Callback
       */
      'onScroll' |

      /**
       * Callback when element is fixed to page
       * 
       * Category: Callback
       */
      'onStick' |

      /**
       * Callback when element is unfixed from page
       * 
       * Category: Callback
       */
      'onUnstick' |

      /**
       * Callback when element is bound to top of parent container
       * 
       * Category: Callback
       */
      'onTop' |

      /**
       * Callback when element is bound to bottom of parent container
       * 
       * Category: Callback
       */
      'onBottom' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'container'

    type BehaviorNames =

      /**
       * Removes all changes to the page made by initialization
       */
      'destroy'

  }


  namespace Tab {
    interface Settings {


      /**
       * Whether tab should load remote content as same url as history
       * 
       * Category: Tab Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Tab.Settings
       */
      auto ? : any

      /**
       * Whether to record history events for tab changes
       * 
       * Category: Tab Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Tab.Settings
       */
      history ? : any

      /**
       * Do not load content remotely on first tab load. Useful when open tab is rendered on server.
       * 
       * Category: Tab Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Tab.Settings
       */
      ignoreFirstLoad ? : any

      /**
       * Whether inline scripts in tab HTML should be parsed on tab load. Defaults to once, parsing only on first load. Can also be set to true or false to always parse or never parse inline scripts.
       * 
       * Category: Tab Settings
       * 
       * @default once
       * @type {any}
       * @memberOf SemanticUI.Tab.Settings
       */
      evaluateScripts ? : any

      /**
       * Tab should reload content every time it is opened
       * 
       * Category: Tab Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Tab.Settings
       */
      alwaysRefresh ? : any

      /**
       * Can be set to either siblings or all. Siblings will only de-activate tab activators that are siblings of the clicked element when a tab is selected. All will deactivate all other tab activators initialized at the same time.
       * 
       * Category: Tab Settings
       * 
       * @default siblings
       * @type {any}
       * @memberOf SemanticUI.Tab.Settings
       */
      deactivate ? : any

      /**
       * Can be set to either response or html. Response will cache the original response on load, this way callbacks always receive the same content. Using `html` will cache the resulting html after all callbacks, making sure any changes to content are preserved.
       * 
       * Category: Tab Settings
       * 
       * @default response
       * @type {any}
       * @memberOf SemanticUI.Tab.Settings
       */
      cacheType ? : any

      /**
       * Tab should cache content after loading locally to avoid server trip on second load
       * 
       * Category: Tab Settings
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Tab.Settings
       */
      cache ? : any

      /**
       * Settings object for $.api call
       * 
       * Category: Tab Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Tab.Settings
       */
      apiSettings ? : any

      /**
       * Can be set to hash or state. Hash will use an in-page link to create history events. State will use DOM History and load pages from server on refresh.
       * 
       * Category: Tab Settings
       * 
       * @default hash
       * @type {any}
       * @memberOf SemanticUI.Tab.Settings
       */
      historyType ? : any

      /**
       * When using historyType state you must specify the base URL for all internal links.
       * 
       * Category: Tab Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Tab.Settings
       */
      path ? : any

      /**
       * Tabs are limited to those found inside this context
       * 
       * Category: Tab Settings
       * 
       * @type {HTMLElement | JQuery | string}
       * @memberOf SemanticUI.Tab.Settings
       */
      context ? : HTMLElement | JQuery | string

      /**
       * If enabled limits tabs to children of passed context
       * 
       * Category: Tab Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Tab.Settings
       */
      childrenOnly ? : any

      /**
       * Maximum amount of nested tabs allowed (avoids recursion)
       * 
       * Category: Tab Settings
       * 
       * @default 25
       * @type {any}
       * @memberOf SemanticUI.Tab.Settings
       */
      maxDepth ? : any

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      name ? : any

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      namespace ? : any

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      selector ? : any

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      className ? : any

      /**
       * Metadata used to store XHR and response promise
       * @default {"src":"src"}
       * @type {any}
       */
      metadata ? : any

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      silent ? : any

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      debug ? : any

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      performance ? : any

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      verbose ? : any

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      error ? : any

      /**
       * Callback only the first time a tab is loaded
       * 
       * Category: Callback
       * 
       * @param {string} tabPath
       * @param {any[]} parameterArray
       * @param {any} historyEvent
       * @returns {any}
       * @memberOf SemanticUI.Tab.Settings
       */
      onFirstLoad ? (tabPath: string, parameterArray: any[], historyEvent: any)

      /**
       * Callback every time a tab is loaded
       * 
       * Category: Callback
       * 
       * @param {string} tabPath
       * @param {any[]} parameterArray
       * @param {any} historyEvent
       * @returns {any}
       * @memberOf SemanticUI.Tab.Settings
       */
      onLoad ? (tabPath: string, parameterArray: any[], historyEvent: any)

      /**
       * Called when a tab begins loading remote content
       * 
       * Category: Callback
       * 
       * @param {string} tabPath
       * @returns {any}
       * @memberOf SemanticUI.Tab.Settings
       */
      onRequest ? (tabPath: string)

      /**
       * Called after a tab becomes visible
       * 
       * Category: Callback
       * 
       * @param {string} tabPath
       * @returns {any}
       * @memberOf SemanticUI.Tab.Settings
       */
      onVisible ? (tabPath: string)

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default {}
       * @type {any}
       * @memberOf SemanticUI.Tab.Settings
       */
      templates ? : any

    }

    type SettingNames =

      /**
       * Whether tab should load remote content as same url as history
       * 
       * Category: Tab Settings
       * @type {any}
       */
      'auto' |

      /**
       * Whether to record history events for tab changes
       * 
       * Category: Tab Settings
       * @type {any}
       */
      'history' |

      /**
       * Do not load content remotely on first tab load. Useful when open tab is rendered on server.
       * 
       * Category: Tab Settings
       * @type {any}
       */
      'ignoreFirstLoad' |

      /**
       * Whether inline scripts in tab HTML should be parsed on tab load. Defaults to once, parsing only on first load. Can also be set to true or false to always parse or never parse inline scripts.
       * 
       * Category: Tab Settings
       * @default once
       * @type {any}
       */
      'evaluateScripts' |

      /**
       * Tab should reload content every time it is opened
       * 
       * Category: Tab Settings
       * @type {any}
       */
      'alwaysRefresh' |

      /**
       * Can be set to either siblings or all. Siblings will only de-activate tab activators that are siblings of the clicked element when a tab is selected. All will deactivate all other tab activators initialized at the same time.
       * 
       * Category: Tab Settings
       * @default siblings
       * @type {any}
       */
      'deactivate' |

      /**
       * Can be set to either response or html. Response will cache the original response on load, this way callbacks always receive the same content. Using `html` will cache the resulting html after all callbacks, making sure any changes to content are preserved.
       * 
       * Category: Tab Settings
       * @default response
       * @type {any}
       */
      'cacheType' |

      /**
       * Tab should cache content after loading locally to avoid server trip on second load
       * 
       * Category: Tab Settings
       * @default true
       * @type {any}
       */
      'cache' |

      /**
       * Settings object for $.api call
       * 
       * Category: Tab Settings
       * @type {any}
       */
      'apiSettings' |

      /**
       * Can be set to hash or state. Hash will use an in-page link to create history events. State will use DOM History and load pages from server on refresh.
       * 
       * Category: Tab Settings
       * @default hash
       * @type {any}
       */
      'historyType' |

      /**
       * When using historyType state you must specify the base URL for all internal links.
       * 
       * Category: Tab Settings
       * @type {any}
       */
      'path' |

      /**
       * Tabs are limited to those found inside this context
       * 
       * Category: Tab Settings
       * @type {HTMLElement | JQuery | string}
       */
      'context' |

      /**
       * If enabled limits tabs to children of passed context
       * 
       * Category: Tab Settings
       * @type {any}
       */
      'childrenOnly' |

      /**
       * Maximum amount of nested tabs allowed (avoids recursion)
       * 
       * Category: Tab Settings
       * @default 25
       * @type {any}
       */
      'maxDepth' |

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      'name' |

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      'namespace' |

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      'selector' |

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      'className' |

      /**
       * Metadata used to store XHR and response promise
       * @default {"src":"src"}
       * @type {any}
       */
      'metadata' |

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      'silent' |

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      'debug' |

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      'performance' |

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      'verbose' |

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      'error' |

      /**
       * Callback only the first time a tab is loaded
       * 
       * Category: Callback
       * @param {string} tabPath
       * @param {any[]} parameterArray
       * @param {any} historyEvent
       * @returns {any}
       */
      'onFirstLoad' |

      /**
       * Callback every time a tab is loaded
       * 
       * Category: Callback
       * @param {string} tabPath
       * @param {any[]} parameterArray
       * @param {any} historyEvent
       * @returns {any}
       */
      'onLoad' |

      /**
       * Called when a tab begins loading remote content
       * 
       * Category: Callback
       * @param {string} tabPath
       * @returns {any}
       */
      'onRequest' |

      /**
       * Called after a tab becomes visible
       * 
       * Category: Callback
       * @param {string} tabPath
       * @returns {any}
       */
      'onVisible' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default {}
       * @type {any}
       */
      'templates'

    type BehaviorNames =

      /**
       * Attaches tab action to given selector. Default event if none specified is toggle
       * @param {HTMLElement | JQuery | string} selector
       * @param {Tab.BehaviorNames} event
       */
      'attach events' |

      /**
       * Changes tab to path
       * @param {any} path
       */
      'change tab' |

      /**
       * Sets current path to state
       * @param {any} path
       */
      'set state' |

      /**
       * Returns current path
       */
      'get path' |

      /**
       * Returns whether tab exists
       */
      'is tab' |

      /**
       * Returns cached HTML for path
       * @param {any} path
       */
      'cache read' |

      /**
       * Sets cached HTML for path
       * @param {any} path
       * @param {any} html
       */
      'cache add' |

      /**
       * Removes cached HTML for path
       * @param {any} path
       */
      'cache remove' |

      /**
       * Removes all changes to the page made by initialization
       */
      'destroy'

  }


  namespace Transition {
    interface Settings {


      /**
       * Named animation event to used. Must be defined in CSS.
       * 
       * Category: Transition Settings
       * 
       * @default fade
       * @type {SemanticUI.AnimationNames}
       * @memberOf SemanticUI.Transition.Settings
       */
      animation ? : AnimationNames

      /**
       * Interval in MS between each elements transition
       * 
       * Category: Transition Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Transition.Settings
       */
      interval ? : any

      /**
       * When an interval is specified, sets order of animations. auto reverses only animations that are hiding.
       * 
       * Category: Transition Settings
       * 
       * @default auto
       * @type {any}
       * @memberOf SemanticUI.Transition.Settings
       */
      reverse ? : any

      /**
       * Specify the final display type (block, inline-block etc) so that it doesn't have to be calculated.
       * 
       * Category: Transition Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Transition.Settings
       */
      displayType ? : any

      /**
       * Duration of the CSS transition animation
       * 
       * Category: Transition Settings
       * 
       * @type {number}
       * @memberOf SemanticUI.Transition.Settings
       */
      duration ? : number

      /**
       * If enabled a timeout will be added to ensure animationend callback occurs even if element is hidden
       * 
       * Category: Transition Settings
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Transition.Settings
       */
      useFailSafe ? : any

      /**
       * If enabled will allow same animation to be queued while it is already occurring
       * 
       * Category: Transition Settings
       * 
       * @type {any}
       * @memberOf SemanticUI.Transition.Settings
       */
      allowRepeats ? : any

      /**
       * Whether to automatically queue animation if another is occurring
       * 
       * Category: Transition Settings
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Transition.Settings
       */
      queue ? : any

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      name ? : any

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      namespace ? : any

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      className ? : any

      /**
       * Metadata used to store XHR and response promise
       * @default {"src":"src"}
       * @type {any}
       */
      metadata ? : any

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      silent ? : any

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      debug ? : any

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      performance ? : any

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      verbose ? : any

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      error ? : any

      /**
       * Callback on each transition that changes visibility to shown
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Transition.Settings
       */
      onShow ? ()

      /**
       * Callback on each transition that changes visibility to hidden
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Transition.Settings
       */
      onHide ? ()

      /**
       * Callback on animation start, useful for queued animations
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Transition.Settings
       */
      onStart ? ()

      /**
       * Callback on each transition complete
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Transition.Settings
       */
      onComplete ? ()

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default 100
       * @type {any}
       * @memberOf SemanticUI.Transition.Settings
       */
      failSafeDelay ? : any

    }

    type SettingNames =

      /**
       * Named animation event to used. Must be defined in CSS.
       * 
       * Category: Transition Settings
       * @default fade
       * @type {SemanticUI.AnimationNames}
       */
      'animation' |

      /**
       * Interval in MS between each elements transition
       * 
       * Category: Transition Settings
       * @type {any}
       */
      'interval' |

      /**
       * When an interval is specified, sets order of animations. auto reverses only animations that are hiding.
       * 
       * Category: Transition Settings
       * @default auto
       * @type {any}
       */
      'reverse' |

      /**
       * Specify the final display type (block, inline-block etc) so that it doesn't have to be calculated.
       * 
       * Category: Transition Settings
       * @type {any}
       */
      'displayType' |

      /**
       * Duration of the CSS transition animation
       * 
       * Category: Transition Settings
       * @type {number}
       */
      'duration' |

      /**
       * If enabled a timeout will be added to ensure animationend callback occurs even if element is hidden
       * 
       * Category: Transition Settings
       * @default true
       * @type {any}
       */
      'useFailSafe' |

      /**
       * If enabled will allow same animation to be queued while it is already occurring
       * 
       * Category: Transition Settings
       * @type {any}
       */
      'allowRepeats' |

      /**
       * Whether to automatically queue animation if another is occurring
       * 
       * Category: Transition Settings
       * @default true
       * @type {any}
       */
      'queue' |

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      'name' |

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      'namespace' |

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      'className' |

      /**
       * Metadata used to store XHR and response promise
       * @default {"src":"src"}
       * @type {any}
       */
      'metadata' |

      /**
       * Silences all console output including error messages, regardless of other debug settings.
       * @type {any}
       */
      'silent' |

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      'debug' |

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      'performance' |

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      'verbose' |

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      'error' |

      /**
       * Callback on each transition that changes visibility to shown
       * 
       * Category: Callback
       */
      'onShow' |

      /**
       * Callback on each transition that changes visibility to hidden
       * 
       * Category: Callback
       */
      'onHide' |

      /**
       * Callback on animation start, useful for queued animations
       * 
       * Category: Callback
       */
      'onStart' |

      /**
       * Callback on each transition complete
       * 
       * Category: Callback
       */
      'onComplete' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default 100
       * @type {any}
       */
      'failSafeDelay'

    type BehaviorNames =

      /**
       * Stop current animation and preserve queue
       */
      'stop' |

      /**
       * Stop current animation and queued animations
       */
      'stop all' |

      /**
       * Clears all queued animations
       */
      'clear queue' |

      /**
       * Stop current animation and show element
       */
      'show' |

      /**
       * Stop current animation and hide element
       */
      'hide' |

      /**
       * Toggles between hide and show
       */
      'toggle' |

      /**
       * Forces reflow using a more expensive but stable method
       */
      'force repaint' |

      /**
       * Triggers reflow on element
       */
      'repaint' |

      /**
       * Resets all conditions changes during transition
       */
      'reset' |

      /**
       * Enables animation looping
       */
      'looping' |

      /**
       * Removes looping state from element
       */
      'remove looping' |

      /**
       * Adds disabled state (stops ability to animate)
       */
      'disable' |

      /**
       * Removes disabled state
       */
      'enable' |

      /**
       * Modifies element animation duration
       * @param {number} duration
       */
      'set duration' |

      /**
       * Saves all class names and styles to cache to be retrieved after animation
       */
      'save conditions' |

      /**
       * Adds back cached names and styles to element
       */
      'restore conditions' |

      /**
       * Returns vendor prefixed animation property for animationname
       */
      'get animation name' |

      /**
       * Returns vendor prefixed animation property for animationend
       */
      'get animation event' |

      /**
       * Returns whether element is currently visible
       */
      'is visible' |

      /**
       * Returns whether transition is currently occurring
       */
      'is animating' |

      /**
       * Returns whether animation looping is set
       */
      'is looping' |

      /**
       * Returns whether animations are supported
       */
      'is supported' |

      /**
       * Removes all changes to the page made by initialization
       */
      'destroy'

  }


  namespace Video {
    interface Settings {


      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      name ? : any

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      namespace ? : any

      /**
       * Regular expressions used for template matching
       * @default {"youtube":{},"vimeo":{}}
       * @type {any}
       */
      regExp ? : any

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      selector ? : any

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      className ? : any

      /**
       * Metadata used to store XHR and response promise
       * @default {"src":"src"}
       * @type {any}
       */
      metadata ? : any

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      debug ? : any

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      performance ? : any

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      verbose ? : any

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      error ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Video.Settings
       */
      source ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Video.Settings
       */
      url ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Video.Settings
       */
      id ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default 1.7777777777777777
       * @type {any}
       * @memberOf SemanticUI.Video.Settings
       */
      aspectRatio ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Video.Settings
       */
      onPlay ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Video.Settings
       */
      onReset ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Video.Settings
       */
      onChange ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Video.Settings
       */
      onPause ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Video.Settings
       */
      onStop ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default auto
       * @type {any}
       * @memberOf SemanticUI.Video.Settings
       */
      width ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default auto
       * @type {any}
       * @memberOf SemanticUI.Video.Settings
       */
      height ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default auto
       * @type {any}
       * @memberOf SemanticUI.Video.Settings
       */
      autoplay ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default #442359
       * @type {any}
       * @memberOf SemanticUI.Video.Settings
       */
      color ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Video.Settings
       */
      hd ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Video.Settings
       */
      showUI ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Video.Settings
       */
      api ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default {}
       * @type {any}
       * @memberOf SemanticUI.Video.Settings
       */
      templates ? : any

    }

    type SettingNames =

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      'name' |

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      'namespace' |

      /**
       * Regular expressions used for template matching
       * @default {"youtube":{},"vimeo":{}}
       * @type {any}
       */
      'regExp' |

      /**
       * Selectors used to find parts of a module
       * @default {"embed":".embed","placeholder":".placeholder","playButton":".play"}
       * @type {any}
       */
      'selector' |

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      'className' |

      /**
       * Metadata used to store XHR and response promise
       * @default {"src":"src"}
       * @type {any}
       */
      'metadata' |

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      'debug' |

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      'performance' |

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      'verbose' |

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      'error' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'source' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'url' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'id' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default 1.7777777777777777
       * @type {any}
       */
      'aspectRatio' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'onPlay' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'onReset' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'onChange' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'onPause' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'onStop' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default auto
       * @type {any}
       */
      'width' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default auto
       * @type {any}
       */
      'height' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default auto
       * @type {any}
       */
      'autoplay' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default #442359
       * @type {any}
       */
      'color' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default true
       * @type {any}
       */
      'hd' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'showUI' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default true
       * @type {any}
       */
      'api' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default {}
       * @type {any}
       */
      'templates'

    type BehaviorNames =

      /**
       * Removes all changes to the page made by initialization
       */
      'destroy'

  }


  namespace Visibility {
    interface Settings {


      /**
       * When set to false a callback will occur each time an element passes the threshold for a condition.
       * 
       * Category: Functionality
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Visibility.Settings
       */
      once ? : any

      /**
       * When set to true a callback will occur anytime an element passes a condition not just immediately after the threshold is met.
       * 
       * Category: Functionality
       * 
       * @type {any}
       * @memberOf SemanticUI.Visibility.Settings
       */
      continuous ? : any

      /**
       * Set to image to load images when on screen. Set to fixed to add class name fixed when passed.
       * 
       * Category: Functionality
       * 
       * @type {any}
       * @memberOf SemanticUI.Visibility.Settings
       */
      type ? : any

      /**
       * Whether visibility conditions should be checked immediately on init
       * 
       * Category: Functionality
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Visibility.Settings
       */
      initialCheck ? : any

      /**
       * The scroll context visibility should use.
       * 
       * Category: Functionality
       * 
       * @default HTMLElement
       * @type {HTMLElement | JQuery | string}
       * @memberOf SemanticUI.Visibility.Settings
       */
      context ? : HTMLElement | JQuery | string

      /**
       * Whether visibility conditions should be checked on window load. This ensures that after images load content positions will be updated correctly.
       * 
       * Category: Functionality
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Visibility.Settings
       */
      refreshOnLoad ? : any

      /**
       * Whether visibility conditions should be checked on window resize. Useful when content resizes causes continuous changes in position
       * 
       * Category: Functionality
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Visibility.Settings
       */
      refreshOnResize ? : any

      /**
       * Whether visibility conditions should be checked on calls to refresh. These calls can be triggered from either resize, load or manually calling $('.foo').visibility('refresh')
       * 
       * Category: Functionality
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Visibility.Settings
       */
      checkOnRefresh ? : any

      /**
       * Specify a z-index when using type: 'fixed'.
       * 
       * Category: Functionality
       * 
       * @default 10
       * @type {any}
       * @memberOf SemanticUI.Visibility.Settings
       */
      zIndex ? : any

      /**
       * Value that context scrollTop should be adjusted in pixels. Useful for making content appear below content fixed to the page.
       * 
       * Category: Functionality
       * 
       * @type {number}
       * @memberOf SemanticUI.Visibility.Settings
       */
      offset ? : number

      /**
       * Whether element calculations should include its margin
       * 
       * Category: Functionality
       * 
       * @type {any}
       * @memberOf SemanticUI.Visibility.Settings
       */
      includeMargin ? : any

      /**
       * When set to an integer, scroll position will be debounced using this ms value. false will debounce with requestAnimationFrame.
       * 
       * Category: Functionality
       * 
       * @type {number}
       * @memberOf SemanticUI.Visibility.Settings
       */
      throttle ? : number

      /**
       * Whether to automatically refresh content when changes are made to the element's DOM subtree
       * 
       * Category: Functionality
       * 
       * @default true
       * @type {any}
       * @memberOf SemanticUI.Visibility.Settings
       */
      observeChanges ? : any

      /**
       * When using type: image allows you to specify transition when showing a loaded image
       * 
       * Category: Functionality
       * 
       * @default fade in
       * @type {SemanticUI.AnimationNames}
       * @memberOf SemanticUI.Visibility.Settings
       */
      transition ? : AnimationNames

      /**
       * When using type: image allows you to specify transition duration
       * 
       * Category: Functionality
       * 
       * @default 1000
       * @type {number}
       * @memberOf SemanticUI.Visibility.Settings
       */
      duration ? : number

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      name ? : any

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      namespace ? : any

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      className ? : any

      /**
       * Metadata used to store XHR and response promise
       * @default {"src":"src"}
       * @type {any}
       */
      metadata ? : any

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      debug ? : any

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      performance ? : any

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      verbose ? : any

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      error ? : any

      /**
       * Element's top edge has passed bottom of screen
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Visibility.Settings
       */
      onTopVisible ? ()

      /**
       * Element's top edge has passed top of the screen
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Visibility.Settings
       */
      onTopPassed ? ()

      /**
       * Element's bottom edge has passed bottom of screen
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Visibility.Settings
       */
      onBottomVisible ? ()

      /**
       * Any part of an element is visible on screen
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Visibility.Settings
       */
      onPassing ? ()

      /**
       * Element's bottom edge has passed top of screen
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Visibility.Settings
       */
      onBottomPassed ? ()

      /**
       * Element's top edge has not passed bottom of screen
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Visibility.Settings
       */
      onTopVisibleReverse ? ()

      /**
       * Element's top edge has not passed top of the screen
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Visibility.Settings
       */
      onTopPassedReverse ? ()

      /**
       * Element's bottom edge has not passed bottom of screen
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Visibility.Settings
       */
      onBottomVisibleReverse ? ()

      /**
       * Element's top has not passed top of screen but bottom has
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Visibility.Settings
       */
      onPassingReverse ? ()

      /**
       * Element's bottom edge has not passed top of screen
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Visibility.Settings
       */
      onBottomPassedReverse ? ()

      /**
       * Occurs after an image has completed loading
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Visibility.Settings
       */
      onLoad ? ()

      /**
       * Occurs after all img initialized at the same time have loaded.
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Visibility.Settings
       */
      onAllLoaded ? ()

      /**
       * Occurs after element has been assigned position fixed
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Visibility.Settings
       */
      onFixed ? ()

      /**
       * Occurs after element has been removed from fixed position
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Visibility.Settings
       */
      onUnfixed ? ()

      /**
       * Occurs each time an elements calculations are updated
       * 
       * Category: Callback
       * 
       * @param {any} calculations
       * @returns {any}
       * @memberOf SemanticUI.Visibility.Settings
       */
      onUpdate ? (calculations: any)

      /**
       * Occurs whenever element's visibility is refreshed
       * 
       * Category: Callback
       * 
       * @memberOf SemanticUI.Visibility.Settings
       */
      onRefresh ? ()

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default {}
       * @type {any}
       * @memberOf SemanticUI.Visibility.Settings
       */
      onPassed ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Visibility.Settings
       */
      onOnScreen ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Visibility.Settings
       */
      onOffScreen ? : any

    }

    type SettingNames =

      /**
       * When set to false a callback will occur each time an element passes the threshold for a condition.
       * 
       * Category: Functionality
       * @default true
       * @type {any}
       */
      'once' |

      /**
       * When set to true a callback will occur anytime an element passes a condition not just immediately after the threshold is met.
       * 
       * Category: Functionality
       * @type {any}
       */
      'continuous' |

      /**
       * Set to image to load images when on screen. Set to fixed to add class name fixed when passed.
       * 
       * Category: Functionality
       * @type {any}
       */
      'type' |

      /**
       * Whether visibility conditions should be checked immediately on init
       * 
       * Category: Functionality
       * @default true
       * @type {any}
       */
      'initialCheck' |

      /**
       * The scroll context visibility should use.
       * 
       * Category: Functionality
       * @default HTMLElement
       * @type {HTMLElement | JQuery | string}
       */
      'context' |

      /**
       * Whether visibility conditions should be checked on window load. This ensures that after images load content positions will be updated correctly.
       * 
       * Category: Functionality
       * @default true
       * @type {any}
       */
      'refreshOnLoad' |

      /**
       * Whether visibility conditions should be checked on window resize. Useful when content resizes causes continuous changes in position
       * 
       * Category: Functionality
       * @default true
       * @type {any}
       */
      'refreshOnResize' |

      /**
       * Whether visibility conditions should be checked on calls to refresh. These calls can be triggered from either resize, load or manually calling $('.foo').visibility('refresh')
       * 
       * Category: Functionality
       * @default true
       * @type {any}
       */
      'checkOnRefresh' |

      /**
       * Specify a z-index when using type: 'fixed'.
       * 
       * Category: Functionality
       * @default 10
       * @type {any}
       */
      'zIndex' |

      /**
       * Value that context scrollTop should be adjusted in pixels. Useful for making content appear below content fixed to the page.
       * 
       * Category: Functionality
       * @type {number}
       */
      'offset' |

      /**
       * Whether element calculations should include its margin
       * 
       * Category: Functionality
       * @type {any}
       */
      'includeMargin' |

      /**
       * When set to an integer, scroll position will be debounced using this ms value. false will debounce with requestAnimationFrame.
       * 
       * Category: Functionality
       * @type {number}
       */
      'throttle' |

      /**
       * Whether to automatically refresh content when changes are made to the element's DOM subtree
       * 
       * Category: Functionality
       * @default true
       * @type {any}
       */
      'observeChanges' |

      /**
       * When using type: image allows you to specify transition when showing a loaded image
       * 
       * Category: Functionality
       * @default fade in
       * @type {SemanticUI.AnimationNames}
       */
      'transition' |

      /**
       * When using type: image allows you to specify transition duration
       * 
       * Category: Functionality
       * @default 1000
       * @type {number}
       */
      'duration' |

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      'name' |

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      'namespace' |

      /**
       * Class names used to determine element state
       * @default {"fixed":"fixed","placeholder":"placeholder"}
       * @type {any}
       */
      'className' |

      /**
       * Metadata used to store XHR and response promise
       * @default {"src":"src"}
       * @type {any}
       */
      'metadata' |

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      'debug' |

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      'performance' |

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      'verbose' |

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      'error' |

      /**
       * Element's top edge has passed bottom of screen
       * 
       * Category: Callback
       */
      'onTopVisible' |

      /**
       * Element's top edge has passed top of the screen
       * 
       * Category: Callback
       */
      'onTopPassed' |

      /**
       * Element's bottom edge has passed bottom of screen
       * 
       * Category: Callback
       */
      'onBottomVisible' |

      /**
       * Any part of an element is visible on screen
       * 
       * Category: Callback
       */
      'onPassing' |

      /**
       * Element's bottom edge has passed top of screen
       * 
       * Category: Callback
       */
      'onBottomPassed' |

      /**
       * Element's top edge has not passed bottom of screen
       * 
       * Category: Callback
       */
      'onTopVisibleReverse' |

      /**
       * Element's top edge has not passed top of the screen
       * 
       * Category: Callback
       */
      'onTopPassedReverse' |

      /**
       * Element's bottom edge has not passed bottom of screen
       * 
       * Category: Callback
       */
      'onBottomVisibleReverse' |

      /**
       * Element's top has not passed top of screen but bottom has
       * 
       * Category: Callback
       */
      'onPassingReverse' |

      /**
       * Element's bottom edge has not passed top of screen
       * 
       * Category: Callback
       */
      'onBottomPassedReverse' |

      /**
       * Occurs after an image has completed loading
       * 
       * Category: Callback
       */
      'onLoad' |

      /**
       * Occurs after all img initialized at the same time have loaded.
       * 
       * Category: Callback
       */
      'onAllLoaded' |

      /**
       * Occurs after element has been assigned position fixed
       * 
       * Category: Callback
       */
      'onFixed' |

      /**
       * Occurs after element has been removed from fixed position
       * 
       * Category: Callback
       */
      'onUnfixed' |

      /**
       * Occurs each time an elements calculations are updated
       * 
       * Category: Callback
       * @param {any} calculations
       * @returns {any}
       */
      'onUpdate' |

      /**
       * Occurs whenever element's visibility is refreshed
       * 
       * Category: Callback
       */
      'onRefresh' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default {}
       * @type {any}
       */
      'onPassed' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'onOnScreen' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'onOffScreen'

    type BehaviorNames =

      /**
       * Disable callbacks temporarily. This is useful if you need to adjust scroll position and do not want to trigger callbacks during the position change.
       */
      'disable callbacks' |

      /**
       * Re-enable callbacks
       */
      'enable callbacks' |

      /**
       * Returns whether element is on screen
       */
      'is on screen' |

      /**
       * Returns whether element is off screen
       */
      'is off screen' |

      /**
       * Returns number of pixels passed in current element from top of element
       */
      'get pixels passed' |

      /**
       * Returns element calculations as object
       */
      'get element calculations' |

      /**
       * Returns screen calculations as object
       */
      'get screen calculations' |

      /**
       * Returns screen size as object
       */
      'get screen size' |

      /**
       * Removes all changes to the page made by initialization
       */
      'destroy'

  }


  namespace Visit {
    interface Settings {


      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      name ? : any

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      namespace ? : any

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      debug ? : any

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      performance ? : any

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      verbose ? : any

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      error ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Visit.Settings
       */
      increment ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Visit.Settings
       */
      surpass ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Visit.Settings
       */
      count ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Visit.Settings
       */
      limit ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default &
       * @type {any}
       * @memberOf SemanticUI.Visit.Settings
       */
      delimiter ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default localstorage
       * @type {any}
       * @memberOf SemanticUI.Visit.Settings
       */
      storageMethod ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default {"count":"visit-count","ids":"visit-ids"}
       * @type {any}
       * @memberOf SemanticUI.Visit.Settings
       */
      key ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default 30
       * @type {any}
       * @memberOf SemanticUI.Visit.Settings
       */
      expires ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Visit.Settings
       */
      domain ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @default /
       * @type {any}
       * @memberOf SemanticUI.Visit.Settings
       */
      path ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Visit.Settings
       */
      onLimit ? : any

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * 
       * @type {any}
       * @memberOf SemanticUI.Visit.Settings
       */
      onChange ? : any

    }

    type SettingNames =

      /**
       * Name used in log statements
       * @default Visit
       * @type {any}
       */
      'name' |

      /**
       * Event namespace. Makes sure module teardown does not effect other events attached to an element.
       * @default visit
       * @type {any}
       */
      'namespace' |

      /**
       * Debug output to console
       * @default true
       * @type {any}
       */
      'debug' |

      /**
       * Show console.table output with performance metrics
       * @default true
       * @type {any}
       */
      'performance' |

      /**
       * Debug output includes all internal behaviors
       * @default true
       * @type {any}
       */
      'verbose' |

      /**
       * 
       * @default {"method":"The method you called is not defined","missingPersist":"Using the persist setting requires the inclusion of PersistJS","noCookieStorage":"The default storage cookie requires $.cookie to be included."}
       * @type {any}
       */
      'error' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'increment' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'surpass' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'count' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'limit' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default &
       * @type {any}
       */
      'delimiter' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default localstorage
       * @type {any}
       */
      'storageMethod' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default {"count":"visit-count","ids":"visit-ids"}
       * @type {any}
       */
      'key' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default 30
       * @type {any}
       */
      'expires' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'domain' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @default /
       * @type {any}
       */
      'path' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'onLimit' |

      /**
       * No documentation
       * 
       * Category: !!UN-DOCUMENTED!!
       * @type {any}
       */
      'onChange'

    type BehaviorNames =

      /**
       * Removes all changes to the page made by initialization
       */
      'destroy'

  }


}
interface JQuery {

  //api

  /**
   * Initialize SemanticUI.Api
   */
  api(param ? : SemanticUI.Api.Settings): JQuery

  /**
   * Change SemanticUI.Api settings
   */
  api(param: 'setting', settingName: SemanticUI.Api.SettingNames, value ? : any): JQuery



  /**
   * Execute query using existing API settings
   */
  api(param: 'query'): any

  /**
   * Adds data to existing templated url and returns full url string
   * @param {string} url
   * @param {any} data
   */
  api(param: 'add url data', url: string, data: any): any

  /**
   * Gets promise for current API request
   */
  api(param: 'get request'): any

  /**
   * Aborts current API request
   */
  api(param: 'abort'): any

  /**
   * Removes loading and error state from element
   */
  api(param: 'reset'): any

  /**
   * Returns whether last request was cancelled
   */
  api(param: 'was cancelled'): any

  /**
   * Returns whether last request was failure
   */
  api(param: 'was failure'): any

  /**
   * Returns whether last request was successful
   */
  api(param: 'was successful'): any

  /**
   * Returns whether last request was completed
   */
  api(param: 'was complete'): any

  /**
   * Returns whether element is disabled
   */
  api(param: 'is disabled'): any

  /**
   * Returns whether element response is mocked
   */
  api(param: 'is mocked'): any

  /**
   * Returns whether element is loading
   */
  api(param: 'is loading'): any

  /**
   * Sets loading state to element
   */
  api(param: 'set loading'): any

  /**
   * Sets error state to element
   */
  api(param: 'set error'): any

  /**
   * Removes loading state to element
   */
  api(param: 'remove loading'): any

  /**
   * Removes error state to element
   */
  api(param: 'remove error'): any

  /**
   * Gets event that API request will occur on
   */
  api(param: 'get event'): any

  /**
   * Returns encodeURIComponent value only if value passsed is not already encoded
   * @param {any} value
   */
  api(param: 'get url encoded value', value: any): any

  /**
   * Reads a locally cached response for a URL
   * @param {string} url
   */
  api(param: 'read cached response', url: string): any

  /**
   * Writes a cached response for a URL
   * @param {string} url
   * @param {any} response
   */
  api(param: 'write cached response', url: string, response: any): any

  /**
   * Creates new cache, removing all locally cached URLs
   */
  api(param: 'create cache'): any

  /**
   * Removes API settings from the page and all events
   */
  api(param: 'destroy'): any


  //accordion

  /**
   * Initialize SemanticUI.Accordion
   */
  accordion(param ? : SemanticUI.Accordion.Settings): JQuery

  /**
   * Change SemanticUI.Accordion settings
   */
  accordion(param: 'setting', settingName: SemanticUI.Accordion.SettingNames, value ? : any): JQuery



  /**
   * Refreshes all cached selectors and data
   */
  accordion(param: 'refresh'): any

  /**
   * Opens accordion content at index
   * @param {number} index
   */
  accordion(param: 'open ', index: number): any

  /**
   * Closes accordion content that are not active
   */
  accordion(param: 'close others'): any

  /**
   * Closes accordion content at index
   * @param {number} index
   */
  accordion(param: 'close ', index: number): any

  /**
   * Toggles accordion content at index
   * @param {number} index
   */
  accordion(param: 'toggle ', index: number): any

  /**
   * Removes all changes to the page made by initialization
   */
  accordion(param: 'destroy'): any


  //checkbox

  /**
   * Initialize SemanticUI.Checkbox
   */
  checkbox(param ? : SemanticUI.Checkbox.Settings): JQuery

  /**
   * Change SemanticUI.Checkbox settings
   */
  checkbox(param: 'setting', settingName: SemanticUI.Checkbox.SettingNames, value ? : any): JQuery



  /**
   * Switches a checkbox from current state
   */
  checkbox(param: 'toggle'): any

  /**
   * Set a checkbox state to checked
   */
  checkbox(param: 'check'): any

  /**
   * Set a checkbox state to unchecked
   */
  checkbox(param: 'uncheck'): any

  /**
   * Set as indeterminate checkbox
   */
  checkbox(param: 'indeterminate'): any

  /**
   * Set as determinate checkbox
   */
  checkbox(param: 'determinate'): any

  /**
   * Enable interaction with a checkbox
   */
  checkbox(param: 'enable'): any

  /**
   * Set a checkbox state to checked without callbacks
   */
  checkbox(param: 'set checked'): any

  /**
   * Set a checkbox state to unchecked without callbacks
   */
  checkbox(param: 'set unchecked'): any

  /**
   * Set as indeterminate checkbox without callbacks
   */
  checkbox(param: 'set indeterminate'): any

  /**
   * Set as determinate checkbox without callbacks
   */
  checkbox(param: 'set determinate'): any

  /**
   * Enable interaction with a checkbox without callbacks
   */
  checkbox(param: 'set enabled'): any

  /**
   * Disable interaction with a checkbox without callbacks
   */
  checkbox(param: 'set disabled'): any

  /**
   * Attach checkbox events to another element
   * @param {HTMLElement | JQuery | string} selector
   * @param {Checkbox.BehaviorNames} behavior
   */
  checkbox(param: 'attach events', selector: HTMLElement | JQuery | string, behavior: SemanticUI.Checkbox.BehaviorNames): any

  /**
   * Returns whether element is radio selection
   */
  checkbox(param: 'is radio'): any

  /**
   * Returns whether element is currently checked
   */
  checkbox(param: 'is checked'): any

  /**
   * Returns whether element is not checked
   */
  checkbox(param: 'is unchecked'): any

  /**
   * Returns whether element is able to be changed
   */
  checkbox(param: 'can change'): any

  /**
   * Returns whether element can be checked (checking if already checked or `beforeChecked` would cancel)
   */
  checkbox(param: 'should allow check'): any

  /**
   * Returns whether element can be unchecked (checking if already unchecked or `beforeUnchecked` would cancel)
   */
  checkbox(param: 'should allow uncheck'): any

  /**
   * Returns whether element can be determinate (checking if already determinate or `beforeDeterminate` would cancel)
   */
  checkbox(param: 'should allow determinate'): any

  /**
   * Returns whether element can be indeterminate (checking if already indeterminate or `beforeIndeterminate` would cancel)
   */
  checkbox(param: 'should allow indeterminate'): any

  /**
   * Returns whether element is able to be unchecked
   */
  checkbox(param: 'can uncheck'): any

  /**
   * Removes all changes to the page made by initialization
   */
  checkbox(param: 'destroy'): any


  //colorize

  /**
   * Initialize SemanticUI.Colorize
   */
  colorize(param ? : SemanticUI.Colorize.Settings): JQuery

  /**
   * Change SemanticUI.Colorize settings
   */
  colorize(param: 'setting', settingName: SemanticUI.Colorize.SettingNames, value ? : any): JQuery



  /**
   * Removes all changes to the page made by initialization
   */
  colorize(param: 'destroy'): any


  //dimmer

  /**
   * Initialize SemanticUI.Dimmer
   */
  dimmer(param ? : SemanticUI.Dimmer.Settings): JQuery

  /**
   * Change SemanticUI.Dimmer settings
   */
  dimmer(param: 'setting', settingName: SemanticUI.Dimmer.SettingNames, value ? : any): JQuery



  /**
   * Detaches a given element from DOM and reattaches element inside dimmer
   * @param {HTMLElement | JQuery | string} element
   */
  dimmer(param: 'add content ', element: HTMLElement | JQuery | string): any

  /**
   * Shows dimmer
   */
  dimmer(param: 'show'): any

  /**
   * Hides dimmer
   */
  dimmer(param: 'hide'): any

  /**
   * Toggles current dimmer visibility
   */
  dimmer(param: 'toggle'): any

  /**
   * Changes dimmer opacity
   * @param {number} opacity
   */
  dimmer(param: 'set opacity', opacity: number): any

  /**
   * Creates a new dimmer in dimmable context
   */
  dimmer(param: 'create'): any

  /**
   * Returns current duration for show or hide event depending on current visibility
   */
  dimmer(param: 'get duration'): any

  /**
   * Returns DOM element for dimmer
   */
  dimmer(param: 'get dimmer'): any

  /**
   * Returns whether current dimmable has a dimmer
   */
  dimmer(param: 'has dimmer'): any

  /**
   * Whether section's dimmer is active
   */
  dimmer(param: 'is active'): any

  /**
   * Whether dimmer is animating
   */
  dimmer(param: 'is animating'): any

  /**
   * Whether current element is a dimmer
   */
  dimmer(param: 'is dimmer'): any

  /**
   * Whether current element is a dimmable section
   */
  dimmer(param: 'is dimmable'): any

  /**
   * Whether dimmer is disabled
   */
  dimmer(param: 'is disabled'): any

  /**
   * Whether dimmer is not disabled
   */
  dimmer(param: 'is enabled'): any

  /**
   * Whether dimmable section is body
   */
  dimmer(param: 'is page'): any

  /**
   * Whether dimmer is a page dimmer
   */
  dimmer(param: 'is page dimmer'): any

  /**
   * Sets page dimmer to active
   */
  dimmer(param: 'set active'): any

  /**
   * Sets an element as a dimmable section
   */
  dimmer(param: 'set dimmable'): any

  /**
   * Sets a dimmable section as dimmed
   */
  dimmer(param: 'set dimmed'): any

  /**
   * Sets current dimmer as a page dimmer
   */
  dimmer(param: 'set page dimmer'): any

  /**
   * Sets a dimmer as disabled
   */
  dimmer(param: 'set disabled'): any

  /**
   * Removes all changes to the page made by initialization
   */
  dimmer(param: 'destroy'): any


  //dropdown

  /**
   * Initialize SemanticUI.Dropdown
   */
  dropdown(param ? : SemanticUI.Dropdown.Settings): JQuery

  /**
   * Change SemanticUI.Dropdown settings
   */
  dropdown(param: 'setting', settingName: SemanticUI.Dropdown.SettingNames, value ? : any): JQuery



  /**
   * Recreates dropdown menu from select option values.
   */
  dropdown(param: 'setup menu'): any

  /**
   * Refreshes all cached selectors and data
   */
  dropdown(param: 'refresh'): any

  /**
   * Toggles current visibility of dropdown
   */
  dropdown(param: 'toggle'): any

  /**
   * Shows dropdown
   */
  dropdown(param: 'show'): any

  /**
   * Hides dropdown
   */
  dropdown(param: 'hide'): any

  /**
   * Clears dropdown of selection
   */
  dropdown(param: 'clear'): any

  /**
   * Hides all other dropdowns that is not current dropdown
   */
  dropdown(param: 'hide others'): any

  /**
   * Restores dropdown text and value to its value on page load
   */
  dropdown(param: 'restore defaults'): any

  /**
   * Restores dropdown text to its value on page load
   */
  dropdown(param: 'restore default text'): any

  /**
   * Restores dropdown text to its prompt, placeholder text
   */
  dropdown(param: 'restore placeholder text'): any

  /**
   * Restores dropdown value to its value on page load
   */
  dropdown(param: 'restore default value'): any

  /**
   * Saves current text and value as new defaults (for use with restore)
   */
  dropdown(param: 'save defaults'): any

  /**
   * Sets value as selected
   * @param {any} value
   */
  dropdown(param: 'set selected', value: any): any

  /**
   * Remove value from selected
   * @param {any} value
   */
  dropdown(param: 'remove selected', value: any): any

  /**
   * Adds a group of values as selected
   * @param {any[]} ...values
   */
  dropdown(param: 'set selected', ...values: any[]): any

  /**
   * Sets selected values to exactly specified values, removing current selection
   * @param {any[]} ...values
   */
  dropdown(param: 'set exactly', ...values: any[]): any

  /**
   * Sets dropdown text to a value
   * @param {string} text
   */
  dropdown(param: 'set text', text: string): any

  /**
   * Sets dropdown input to value (does not update display state)
   * @param {any} value
   */
  dropdown(param: 'set value', value: any): any

  /**
   * Returns current dropdown text
   */
  dropdown(param: 'get text'): any

  /**
   * Returns current dropdown input value
   */
  dropdown(param: 'get value'): any

  /**
   * Returns DOM element that matches a given input value
   * @param {any} value
   */
  dropdown(param: 'get item', value: any): any

  /**
   * Adds touch events to element
   */
  dropdown(param: 'bind touch events'): any

  /**
   * Adds mouse events to element
   */
  dropdown(param: 'bind mouse events'): any

  /**
   * Binds a click to document to determine if you click away from a dropdown
   */
  dropdown(param: 'bind intent'): any

  /**
   * Unbinds document intent click
   */
  dropdown(param: 'unbind intent'): any

  /**
   * Returns whether event occurred inside dropdown
   */
  dropdown(param: 'determine intent'): any

  /**
   * Triggers preset item selection action based on settings passing text/value
   * @param {string} text
   * @param {any} value
   */
  dropdown(param: 'determine select action', text: string, value: any): any

  /**
   * Sets dropdown to active state
   */
  dropdown(param: 'set active'): any

  /**
   * Sets dropdown to visible state
   */
  dropdown(param: 'set visible'): any

  /**
   * Removes dropdown active state
   */
  dropdown(param: 'remove active'): any

  /**
   * Removes dropdown visible state
   */
  dropdown(param: 'remove visible'): any

  /**
   * Returns whether dropdown is a selection dropdown
   */
  dropdown(param: 'is selection'): any

  /**
   * Returns whether dropdown is animated
   */
  dropdown(param: 'is animated'): any

  /**
   * Returns whether dropdown is visible
   */
  dropdown(param: 'is visible'): any

  /**
   * Returns whether dropdown is hidden
   */
  dropdown(param: 'is hidden'): any

  /**
   * Returns dropdown value as set on page load
   */
  dropdown(param: 'get default text'): any

  /**
   * Returns placeholder text
   */
  dropdown(param: 'get placeholder text'): any

  /**
   * Removes all changes to the page made by initialization
   */
  dropdown(param: 'destroy'): any


  //embed

  /**
   * Initialize SemanticUI.Embed
   */
  embed(param ? : SemanticUI.Embed.Settings): JQuery

  /**
   * Change SemanticUI.Embed settings
   */
  embed(param: 'setting', settingName: SemanticUI.Embed.SettingNames, value ? : any): JQuery



  /**
   * Changes iframe to a new content source
   * @param {string} source
   * @param {string} id
   * @param {string} url
   */
  embed(param: 'change', source: string, id: string, url: string): any

  /**
   * Removes embed and shows placeholder content if available
   */
  embed(param: 'reset'): any

  /**
   * Shows embed content
   */
  embed(param: 'show'): any

  /**
   * Hides embed content and shows placeholder content
   */
  embed(param: 'hide'): any

  /**
   * Returns current content id
   */
  embed(param: 'get id'): any

  /**
   * Returns placeholder image url
   */
  embed(param: 'get placeholder'): any

  /**
   * Returns source name
   */
  embed(param: 'get sources'): any

  /**
   * Returns source type
   */
  embed(param: 'get type'): any

  /**
   * Returns URL with all parameters added
   */
  embed(param: 'get url'): any

  /**
   * Returns whether embed content has placeholder
   */
  embed(param: 'has placeholder'): any

  /**
   * Destroys instance and removes all events
   */
  embed(param: 'destroy'): any


  //form

  /**
   * Initialize SemanticUI.Form
   */
  form(param ? : SemanticUI.Form.Settings): JQuery

  /**
   * Change SemanticUI.Form settings
   */
  form(param: 'setting', settingName: SemanticUI.Form.SettingNames, value ? : any): JQuery



  /**
   * Removes all changes to the page made by initialization
   */
  form(param: 'destroy'): any


  //modal

  /**
   * Initialize SemanticUI.Modal
   */
  modal(param ? : SemanticUI.Modal.Settings): JQuery

  /**
   * Change SemanticUI.Modal settings
   */
  modal(param: 'setting', settingName: SemanticUI.Modal.SettingNames, value ? : any): JQuery



  /**
   * Shows the modal
   */
  modal(param: 'show'): any

  /**
   * Hides the modal
   */
  modal(param: 'hide'): any

  /**
   * Toggles the modal
   */
  modal(param: 'toggle'): any

  /**
   * Refreshes centering of modal on page
   */
  modal(param: 'refresh'): any

  /**
   * Shows associated page dimmer
   */
  modal(param: 'show dimmer'): any

  /**
   * Hides associated page dimmer
   */
  modal(param: 'hide dimmer'): any

  /**
   * Hides all modals not selected modal in a dimmer
   */
  modal(param: 'hide others'): any

  /**
   * Hides all visible modals in the same dimmer
   */
  modal(param: 'hide all'): any

  /**
   * Caches current modal size
   */
  modal(param: 'cache sizes'): any

  /**
   * Returns whether the modal can fit on the page
   */
  modal(param: 'can fit'): any

  /**
   * Returns whether the modal is active
   */
  modal(param: 'is active'): any

  /**
   * Sets modal to active
   */
  modal(param: 'set active'): any

  /**
   * Attach modal events to another element
   * @param {HTMLElement | JQuery | string} selector
   * @param {Modal.BehaviorNames} behavior?
   */
  modal(param: 'attach events', selector: HTMLElement | JQuery | string, behavior ? : SemanticUI.Modal.BehaviorNames): any

  /**
   * Removes all changes to the page made by initialization
   */
  modal(param: 'destroy'): any


  //nag

  /**
   * Initialize SemanticUI.Nag
   */
  nag(param ? : SemanticUI.Nag.Settings): JQuery

  /**
   * Change SemanticUI.Nag settings
   */
  nag(param: 'setting', settingName: SemanticUI.Nag.SettingNames, value ? : any): JQuery



  /**
   * Removes all changes to the page made by initialization
   */
  nag(param: 'destroy'): any


  //popup

  /**
   * Initialize SemanticUI.Popup
   */
  popup(param ? : SemanticUI.Popup.Settings): JQuery

  /**
   * Change SemanticUI.Popup settings
   */
  popup(param: 'setting', settingName: SemanticUI.Popup.SettingNames, value ? : any): JQuery



  /**
   * Shows popup
   */
  popup(param: 'show'): any

  /**
   * Hides popup
   */
  popup(param: 'hide'): any

  /**
   * Hides all visible pop ups on the page
   */
  popup(param: 'hide all'): any

  /**
   * Returns current popup dom element
   */
  popup(param: 'get popup'): any

  /**
   * Changes current popup content
   * @param {any} html
   */
  popup(param: 'change content', html: any): any

  /**
   * Toggles visibility of popup
   */
  popup(param: 'toggle'): any

  /**
   * Returns whether popup is visible
   */
  popup(param: 'is visible'): any

  /**
   * Returns whether popup is hidden
   */
  popup(param: 'is hidden'): any

  /**
   * Returns whether popup is created and inserted into the page
   */
  popup(param: 'exists'): any

  /**
   * Adjusts popup when content size changes (only necessary for centered popups)
   */
  popup(param: 'reposition'): any

  /**
   * Repositions a popup
   * @param {Positions} position
   */
  popup(param: 'set position', position: SemanticUI.Positions): any

  /**
   * Removes popup from the page and removes all events
   */
  popup(param: 'destroy'): any

  /**
   * Removes popup from the page
   */
  popup(param: 'remove popup'): any


  //progress

  /**
   * Initialize SemanticUI.Progress
   */
  progress(param ? : SemanticUI.Progress.Settings): JQuery

  /**
   * Change SemanticUI.Progress settings
   */
  progress(param: 'setting', settingName: SemanticUI.Progress.SettingNames, value ? : any): JQuery



  /**
   * Sets current percent of progress to value. If using a total will convert from percent to estimated value.
   * @param {number} percent
   */
  progress(param: 'set percent', percent: number): any

  /**
   * Sets progress to specified value. Will automatically calculate percent from total.
   * @param {number} value
   */
  progress(param: 'set progress', value: number): any

  /**
   * Increments progress by increment value, if not passed a value will use random amount specified in settings
   * @param {number} incrementValue
   */
  progress(param: 'increment', incrementValue: number): any

  /**
   * Decrements progress by decrement value, if not passed a value will use random amount specified in settings
   * @param {number} decrementValue
   */
  progress(param: 'decrement', decrementValue: number): any

  /**
   * Immediately updates progress to value, ignoring progress animation interval delays
   * @param {number} value
   */
  progress(param: 'update progress', value: number): any

  /**
   * Finishes progress and sets loaded to 100%
   */
  progress(param: 'complete'): any

  /**
   * Resets progress to zero
   */
  progress(param: 'reset'): any

  /**
   * Set total to a new value
   * @param {number} total
   */
  progress(param: 'set total', total: number): any

  /**
   * Replaces templated string with value, total, percent left and percent.
   * @param {string} text
   */
  progress(param: 'get text', text: string): any

  /**
   * Returns normalized value inside acceptable range specified by total.
   * @param {number} value
   */
  progress(param: 'get normalized value', value: number): any

  /**
   * Returns percent as last specified
   */
  progress(param: 'get percent'): any

  /**
   * Returns current progress value
   */
  progress(param: 'get value'): any

  /**
   * Returns total
   */
  progress(param: 'get total'): any

  /**
   * Returns whether progress is completed
   */
  progress(param: 'is complete'): any

  /**
   * Returns whether progress was a success
   */
  progress(param: 'is success'): any

  /**
   * Returns whether progress is in warning state
   */
  progress(param: 'is warning'): any

  /**
   * Returns whether progress is in error state
   */
  progress(param: 'is error'): any

  /**
   * Returns whether progress is in active state
   */
  progress(param: 'is active'): any

  /**
   * Sets progress to active state
   */
  progress(param: 'set active'): any

  /**
   * Sets progress to warning state
   */
  progress(param: 'set warning'): any

  /**
   * Sets progress to success state
   */
  progress(param: 'set success'): any

  /**
   * Sets progress to error state
   */
  progress(param: 'set error'): any

  /**
   * Changes progress animation speed
   * @param {number} value
   */
  progress(param: 'set duration', value: number): any

  /**
   * Sets progress exterior label to text
   * @param {string} text
   */
  progress(param: 'set label', text: string): any

  /**
   * Sets progress bar label to text
   * @param {string} text
   */
  progress(param: 'set bar label', text: string): any

  /**
   * Removes progress to active state
   */
  progress(param: 'remove active'): any

  /**
   * Removes progress to warning state
   */
  progress(param: 'remove warning'): any

  /**
   * Removes progress to success state
   */
  progress(param: 'remove success'): any

  /**
   * Removes progress to error state
   */
  progress(param: 'remove error'): any

  /**
   * Removes all changes to the page made by initialization
   */
  progress(param: 'destroy'): any


  //rating

  /**
   * Initialize SemanticUI.Rating
   */
  rating(param ? : SemanticUI.Rating.Settings): JQuery

  /**
   * Change SemanticUI.Rating settings
   */
  rating(param: 'setting', settingName: SemanticUI.Rating.SettingNames, value ? : any): JQuery



  /**
   * Sets rating programmatically
   * @param {number} rating
   */
  rating(param: 'set rating', rating: number): any

  /**
   * Gets current rating
   */
  rating(param: 'get rating'): any

  /**
   * Disables interactive rating mode
   */
  rating(param: 'disable'): any

  /**
   * Enables interactive rating mode
   */
  rating(param: 'enable'): any

  /**
   * Clears current rating
   */
  rating(param: 'clear rating'): any

  /**
   * Removes all changes to the page made by initialization
   */
  rating(param: 'destroy'): any


  //search

  /**
   * Initialize SemanticUI.Search
   */
  search(param ? : SemanticUI.Search.Settings): JQuery

  /**
   * Change SemanticUI.Search settings
   */
  search(param: 'setting', settingName: SemanticUI.Search.SettingNames, value ? : any): JQuery



  /**
   * Search for value currently set in search input
   */
  search(param: 'query'): any

  /**
   * Displays message in search results with text, using template matching type
   * @param {string} text
   * @param {any} type
   */
  search(param: 'display message', text: string, type: any): any

  /**
   * Cancels current remote search query
   */
  search(param: 'cancel query'): any

  /**
   * Search local object for specified query and display results
   * @param {any} query
   */
  search(param: 'search local', query: any): any

  /**
   * Whether has minimum characters
   */
  search(param: 'has minimum characters'): any

  /**
   * Search remote endpoint for specified query and display results
   * @param {any} query
   */
  search(param: 'search remote', query: any): any

  /**
   * Search object for specified query and return results
   * @param {any} query
   * @param {any} object
   * @param {any} searchFields
   */
  search(param: 'search object', query: any, object: any, searchFields: any): any

  /**
   * Cancels current remote search request
   */
  search(param: 'cancel query'): any

  /**
   * Whether search is currently focused
   */
  search(param: 'is focused'): any

  /**
   * Whether search results are visible
   */
  search(param: 'is visible'): any

  /**
   * Whether search results are empty
   */
  search(param: 'is empty'): any

  /**
   * Returns current search value
   */
  search(param: 'get value'): any

  /**
   * Returns JSON object matching searched title or id (see above)
   * @param {any} value
   */
  search(param: 'get result', value: any): any

  /**
   * Sets search input to value
   * @param {any} value
   */
  search(param: 'set value', value: any): any

  /**
   * Reads cached results for query
   * @param {any} query
   */
  search(param: 'read cache', query: any): any

  /**
   * Clears value from cache, if no parameter passed clears all cache
   * @param {any} query
   */
  search(param: 'clear cache', query: any): any

  /**
   * Writes cached results for query
   * @param {any} query
   */
  search(param: 'write cache', query: any): any

  /**
   * Adds HTML to results and displays
   * @param {any} html
   */
  search(param: 'add results', html: any): any

  /**
   * Shows results container
   */
  search(param: 'show results'): any

  /**
   * Hides results container
   */
  search(param: 'hide results'): any

  /**
   * Generates results using parser specified by settings.template
   * @param {any} response
   */
  search(param: 'generate results', response: any): any

  /**
   * Removes all events
   */
  search(param: 'destroy'): any


  //shape

  /**
   * Initialize SemanticUI.Shape
   */
  shape(param ? : SemanticUI.Shape.Settings): JQuery

  /**
   * Change SemanticUI.Shape settings
   */
  shape(param: 'setting', settingName: SemanticUI.Shape.SettingNames, value ? : any): JQuery



  /**
   * Flips the shape upward
   */
  shape(param: 'flip up'): any

  /**
   * Flips the shape downward
   */
  shape(param: 'flip down'): any

  /**
   * Flips the shape right
   */
  shape(param: 'flip right'): any

  /**
   * Flips the shape left
   */
  shape(param: 'flip left'): any

  /**
   * Flips the shape over clock-wise
   */
  shape(param: 'flip over'): any

  /**
   * Flips the shape over counter-clockwise
   */
  shape(param: 'flip back'): any

  /**
   * Set the next side to a specific selector
   * @param {HTMLElement | JQuery | string} selector
   */
  shape(param: 'set next side', selector: HTMLElement | JQuery | string): any

  /**
   * Returns whether shape is currently animating
   */
  shape(param: 'is animating'): any

  /**
   * Removes all inline styles
   */
  shape(param: 'reset'): any

  /**
   * Queues an animationtill after current animation
   * @param {AnimationNames} animation
   */
  shape(param: 'queue', animation: SemanticUI.AnimationNames): any

  /**
   * Forces a reflow on element
   */
  shape(param: 'repaint'): any

  /**
   * Set the next side to next sibling to active element
   */
  shape(param: 'set default side'): any

  /**
   * Sets shape to the content size of the next side
   */
  shape(param: 'set stage size'): any

  /**
   * Refreshes the selector cache for element sides
   */
  shape(param: 'refresh'): any

  /**
   * Returns translation for next side staged below
   */
  shape(param: 'get transform down'): any

  /**
   * Returns translation for next side staged left
   */
  shape(param: 'get transform left'): any

  /**
   * Returns translation for next side staged right
   */
  shape(param: 'get transform right'): any

  /**
   * Returns translation for next side staged up
   */
  shape(param: 'get transform up'): any

  /**
   * Returns translation for next side staged down
   */
  shape(param: 'get transform down'): any

  /**
   * Removes all changes to the page made by initialization
   */
  shape(param: 'destroy'): any


  //sidebar

  /**
   * Initialize SemanticUI.Sidebar
   */
  sidebar(param ? : SemanticUI.Sidebar.Settings): JQuery

  /**
   * Change SemanticUI.Sidebar settings
   */
  sidebar(param: 'setting', settingName: SemanticUI.Sidebar.SettingNames, value ? : any): JQuery



  /**
   * Attaches sidebar action to given selector. Default event if none specified is toggle
   * @param {HTMLElement | JQuery | string} selector
   * @param {Sidebar.BehaviorNames} event
   */
  sidebar(param: 'attach events', selector: HTMLElement | JQuery | string, event: SemanticUI.Sidebar.BehaviorNames): any

  /**
   * Shows sidebar
   */
  sidebar(param: 'show'): any

  /**
   * Hides sidebar
   */
  sidebar(param: 'hide'): any

  /**
   * Toggles visibility of sidebar
   */
  sidebar(param: 'toggle'): any

  /**
   * Returns whether sidebar is visible
   */
  sidebar(param: 'is visible'): any

  /**
   * Returns whether sidebar is hidden
   */
  sidebar(param: 'is hidden'): any

  /**
   * Pushes page content to be visible alongside sidebar
   */
  sidebar(param: 'push page'): any

  /**
   * Returns direction of current sidebar
   */
  sidebar(param: 'get direction'): any

  /**
   * Returns page content to original position
   */
  sidebar(param: 'pull page'): any

  /**
   * Adds stylesheet to page head to trigger sidebar animations
   */
  sidebar(param: 'add body CSS'): any

  /**
   * Removes any inline stylesheets for sidebar animation
   */
  sidebar(param: 'remove body CSS'): any

  /**
   * Returns vendor prefixed transition end event
   */
  sidebar(param: 'get transition event'): any

  /**
   * Removes all changes to the page made by initialization
   */
  sidebar(param: 'destroy'): any


  //site

  /**
   * Initialize SemanticUI.Site
   */
  site(param ? : SemanticUI.Site.Settings): JQuery

  /**
   * Change SemanticUI.Site settings
   */
  site(param: 'setting', settingName: SemanticUI.Site.SettingNames, value ? : any): JQuery



  /**
   * Removes all changes to the page made by initialization
   */
  site(param: 'destroy'): any


  //state

  /**
   * Initialize SemanticUI.State
   */
  state(param ? : SemanticUI.State.Settings): JQuery

  /**
   * Change SemanticUI.State settings
   */
  state(param: 'setting', settingName: SemanticUI.State.SettingNames, value ? : any): JQuery



  /**
   * Removes all changes to the page made by initialization
   */
  state(param: 'destroy'): any


  //sticky

  /**
   * Initialize SemanticUI.Sticky
   */
  sticky(param ? : SemanticUI.Sticky.Settings): JQuery

  /**
   * Change SemanticUI.Sticky settings
   */
  sticky(param: 'setting', settingName: SemanticUI.Sticky.SettingNames, value ? : any): JQuery



  /**
   * Removes all changes to the page made by initialization
   */
  sticky(param: 'destroy'): any


  //tab

  /**
   * Initialize SemanticUI.Tab
   */
  tab(param ? : SemanticUI.Tab.Settings): JQuery

  /**
   * Change SemanticUI.Tab settings
   */
  tab(param: 'setting', settingName: SemanticUI.Tab.SettingNames, value ? : any): JQuery



  /**
   * Attaches tab action to given selector. Default event if none specified is toggle
   * @param {HTMLElement | JQuery | string} selector
   * @param {Tab.BehaviorNames} event
   */
  tab(param: 'attach events', selector: HTMLElement | JQuery | string, event: SemanticUI.Tab.BehaviorNames): any

  /**
   * Changes tab to path
   * @param {any} path
   */
  tab(param: 'change tab', path: any): any

  /**
   * Sets current path to state
   * @param {any} path
   */
  tab(param: 'set state', path: any): any

  /**
   * Returns current path
   */
  tab(param: 'get path'): any

  /**
   * Returns whether tab exists
   */
  tab(param: 'is tab'): any

  /**
   * Returns cached HTML for path
   * @param {any} path
   */
  tab(param: 'cache read', path: any): any

  /**
   * Sets cached HTML for path
   * @param {any} path
   * @param {any} html
   */
  tab(param: 'cache add', path: any, html: any): any

  /**
   * Removes cached HTML for path
   * @param {any} path
   */
  tab(param: 'cache remove', path: any): any

  /**
   * Removes all changes to the page made by initialization
   */
  tab(param: 'destroy'): any


  //transition

  /**
   * Initialize SemanticUI.Transition
   */
  transition(param ? : SemanticUI.Transition.Settings): JQuery

  /**
   * Change SemanticUI.Transition settings
   */
  transition(param: 'setting', settingName: SemanticUI.Transition.SettingNames, value ? : any): JQuery



  /**
   * Stop current animation and preserve queue
   */
  transition(param: 'stop'): any

  /**
   * Stop current animation and queued animations
   */
  transition(param: 'stop all'): any

  /**
   * Clears all queued animations
   */
  transition(param: 'clear queue'): any

  /**
   * Stop current animation and show element
   */
  transition(param: 'show'): any

  /**
   * Stop current animation and hide element
   */
  transition(param: 'hide'): any

  /**
   * Toggles between hide and show
   */
  transition(param: 'toggle'): any

  /**
   * Forces reflow using a more expensive but stable method
   */
  transition(param: 'force repaint'): any

  /**
   * Triggers reflow on element
   */
  transition(param: 'repaint'): any

  /**
   * Resets all conditions changes during transition
   */
  transition(param: 'reset'): any

  /**
   * Enables animation looping
   */
  transition(param: 'looping'): any

  /**
   * Removes looping state from element
   */
  transition(param: 'remove looping'): any

  /**
   * Adds disabled state (stops ability to animate)
   */
  transition(param: 'disable'): any

  /**
   * Removes disabled state
   */
  transition(param: 'enable'): any

  /**
   * Modifies element animation duration
   * @param {number} duration
   */
  transition(param: 'set duration', duration: number): any

  /**
   * Saves all class names and styles to cache to be retrieved after animation
   */
  transition(param: 'save conditions'): any

  /**
   * Adds back cached names and styles to element
   */
  transition(param: 'restore conditions'): any

  /**
   * Returns vendor prefixed animation property for animationname
   */
  transition(param: 'get animation name'): any

  /**
   * Returns vendor prefixed animation property for animationend
   */
  transition(param: 'get animation event'): any

  /**
   * Returns whether element is currently visible
   */
  transition(param: 'is visible'): any

  /**
   * Returns whether transition is currently occurring
   */
  transition(param: 'is animating'): any

  /**
   * Returns whether animation looping is set
   */
  transition(param: 'is looping'): any

  /**
   * Returns whether animations are supported
   */
  transition(param: 'is supported'): any

  /**
   * Removes all changes to the page made by initialization
   */
  transition(param: 'destroy'): any


  //video

  /**
   * Initialize SemanticUI.Video
   */
  video(param ? : SemanticUI.Video.Settings): JQuery

  /**
   * Change SemanticUI.Video settings
   */
  video(param: 'setting', settingName: SemanticUI.Video.SettingNames, value ? : any): JQuery



  /**
   * Removes all changes to the page made by initialization
   */
  video(param: 'destroy'): any


  //visibility

  /**
   * Initialize SemanticUI.Visibility
   */
  visibility(param ? : SemanticUI.Visibility.Settings): JQuery

  /**
   * Change SemanticUI.Visibility settings
   */
  visibility(param: 'setting', settingName: SemanticUI.Visibility.SettingNames, value ? : any): JQuery



  /**
   * Disable callbacks temporarily. This is useful if you need to adjust scroll position and do not want to trigger callbacks during the position change.
   */
  visibility(param: 'disable callbacks'): any

  /**
   * Re-enable callbacks
   */
  visibility(param: 'enable callbacks'): any

  /**
   * Returns whether element is on screen
   */
  visibility(param: 'is on screen'): any

  /**
   * Returns whether element is off screen
   */
  visibility(param: 'is off screen'): any

  /**
   * Returns number of pixels passed in current element from top of element
   */
  visibility(param: 'get pixels passed'): any

  /**
   * Returns element calculations as object
   */
  visibility(param: 'get element calculations'): any

  /**
   * Returns screen calculations as object
   */
  visibility(param: 'get screen calculations'): any

  /**
   * Returns screen size as object
   */
  visibility(param: 'get screen size'): any

  /**
   * Removes all changes to the page made by initialization
   */
  visibility(param: 'destroy'): any


  //visit

  /**
   * Initialize SemanticUI.Visit
   */
  visit(param ? : SemanticUI.Visit.Settings): JQuery

  /**
   * Change SemanticUI.Visit settings
   */
  visit(param: 'setting', settingName: SemanticUI.Visit.SettingNames, value ? : any): JQuery



  /**
   * Removes all changes to the page made by initialization
   */
  visit(param: 'destroy'): any

}