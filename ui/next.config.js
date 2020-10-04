const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultCounfig }) => {
    let server_host;
    let server_port
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        server_host = 'localhost';
        server_port = '6000';
    } else {
        server_host = 'server';
        server_port = '6000';
    }

    return {
        env: {
            SERVER_HOST: server_host,
            SERVER_PORT: server_port
        }
    };
}
