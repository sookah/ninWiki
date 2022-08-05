# CORS with Angular

Nest.js as backend, heavily inspired from Angular, it is built on top of popular Node.js frameworks like Express.js and supports for fastify.

Ideas: 
- CORS
- Ninja village (List of name)
- Top secret file (has an image and has to be retrieved)
- For the safety of the village (spy mission)

Server II -> Kamehamehaaa!
- Has to have foreign resources Intel (strapi server)
- Image / video element

Nest with static serve

Two Docker containers with proxy settings or host settings if needed.

# Demostrate -
- Fake CDN
- Image (src="xss vulnerability")


# About
Today we are going to talk about CORS(Cross Origin Resource Sharing) and how to use it with Angular.

CORS is a protocol that allows one web server to make requests to another web server.

# Background
Ninjas were professional spies, infiltrators and assassins who were valued more for their stealthiness than fighting ability. Their services were used mainly in times of war. There were two main ninja schools: one in Iga Ueno, near Nara, and another in Koga, Shiga Prefecture.

Strategic activities are skills that reduce the enemy’s military power. Ninja did not fight strong enemies by themselves. Ninja fought enemies after they had reduced the enemies’ military power. In times of peace, Ninjutsu was called an art of “entering from afar”, while in times of war, Ninjutsu was called an art of “entering from “nearby”, wherein ninja would constantly gather intelligence concerning the enemy, thinking of ways to beat the enemy, but not fighting the enemy directly. Ninja who thought rationally thought of war by intellect as great, and war by military strength (weapons) as foolish. Therefore, ninja who swing their ninja swords about can be called the lowest of the ninja.”


Reason: CORS request did not succeed

What went wrong?

The HTTP request which makes use of CORS failed because the HTTP connection failed at either the network or protocol level. The error is not directly related to CORS, but is a fundamental network error of some kind.

In many cases, it is caused by a browser plugin (e.g. an ad blocker or privacy protector) blocking the request.

Other possible causes include:

    Trying to access an https resource that has an invalid certificate will cause this error.
    Trying to access an http resource from a page with an https origin will also cause this error.
    As of Firefox 68, https pages are not permitted to access http://localhost, although this may be changed by Bug 1488740.
    The server did not respond to the actual request (even if it responded to the Preflight request). One scenario might be an HTTP service being developed that panicked without returning any data.


https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors


CORS reasons:

Reason: CORS disabled
Reason: CORS request did not succeed
Reason: CORS header 'Origin' cannot be added
Reason: CORS request external redirect not allowed
Reason: CORS request not http
Reason: CORS header 'Access-Control-Allow-Origin' missing
Reason: CORS header 'Access-Control-Allow-Origin' does not match 'xyz'
Reason: Credential is not supported if the CORS header 'Access-Control-Allow-Origin' is '*'
Reason: Did not find method in CORS header 'Access-Control-Allow-Methods'
Reason: expected 'true' in CORS header 'Access-Control-Allow-Credentials'
Reason: CORS preflight channel did not succeed
Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'
Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Headers'
Reason: missing token 'xyz' in CORS header 'Access-Control-Allow-Headers' from CORS preflight channel
Reason: Multiple CORS header 'Access-Control-Allow-Origin' not allowed
