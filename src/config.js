const dbConfig = require('./db/index.js');

global.SALT_KEY = '8b2xy90uintrfi50ibe1dj1x2fythph';
global.EMAIL_TMPL = 'Olá, <strong>{0}</strong>, seja bem vindo ao PedePlanta!';

module.exports = {
    connectionString: dbConfig.connectionString,
    sendgridKey: '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',
    containerConnectionString: 'DefaultEndpointsProtocol=https;AccountName=pedeplant;AccountKey=p2jlNj6bcraSCoutg7WnJq6YDNgGNnQQj6s5+56ef2ODrgZA2ElRWQPuWMRs95VZvqd/kucz4OcD+ASttAfNIg==;EndpointSuffix=core.windows.net',
}