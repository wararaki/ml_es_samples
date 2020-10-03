const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultCounfig }) => {
    let client_host;
    let client_port;
    let server_host;
    let server_port
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        client_host = 'localhost';
        client_port = '3000';
        server_host = 'localhost';
        server_port = '6000';
    } else {
        client_host = 'localhost';
        client_port = '5000';
        server_host = 'server';
        server_port = '6000';
    }

    return {
        env: {
            CLIENT_HOST: client_host,
            CLIENT_PORT: client_port,
            SERVER_HOST: server_host,
            SERVER_PORT: server_port
        }
    };
}
