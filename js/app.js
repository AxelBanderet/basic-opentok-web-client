// replace these values with those generated in your TokBox Account
var apiKey = "47477941";
var sessionId = "1_MX40NzQ3Nzk0MX5-MTY0OTY5NzU2ODA3M34xVEFBUnFTMU1zNThFc1Q2WWFPU0REenZ-fg";
var token = "T1==cGFydG5lcl9pZD00NzQ3Nzk0MSZzaWc9ODQ5OTQ2MjZhZWNlMDUyZDhhNjQ3NDZjM2YxZjZhZjdmOTA0NmY4ZDpzZXNzaW9uX2lkPTFfTVg0ME56UTNOemswTVg1LU1UWTBPVFk1TnpVMk9EQTNNMzR4VkVGQlVuRlRNVTF6TlRoRmMxUTJXV0ZQVTBSRWVuWi1mZyZjcmVhdGVfdGltZT0xNjQ5Njk3NjY3Jm5vbmNlPTAuODA3NDI5NjkwODAxMzI1OSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjUyMjg5NjY2JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

// (optional) add server code here
initializeSession();

// Handling all of our errors here by alerting them
function handleError(error) {
    if (error) {
      alert(error.message);
    }
  }
  
  function initializeSession() {
    var session = OT.initSession(apiKey, sessionId);
  
    // Subscribe to a newly created stream
    session.on('streamCreated', function(event) {
      session.subscribe(event.stream, 'subscriber', {
        insertMode: 'append',
        width: '100%',
        height: '100%'
      }, handleError);
    });
  
    // Create a publisher
    var publisher = OT.initPublisher('publisher', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  
    // Connect to the session
    session.connect(token, function(error) {
      // If the connection is successful, publish to the session
      if (error) {
        handleError(error);
      } else {
        session.publish(publisher, handleError);
      }
    });
  }