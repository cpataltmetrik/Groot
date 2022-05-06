export const repoConf = {
    reportPortalClientConfig: { // report portal settings
      //token: '39dba234-6d5e-4582-bc65-0b4eb5eeeb32',
      endpoint: 'http://54.219.33.119:4000/api/v1',
      launch: 'Groot_test_execution',
      project: 'hello',
      mode: 'DEFAULT',
      debug: false,
      description: "Groot with Analytics",
      attributes: [{key:"tag", value: "foo"}],
    //  headers: {"foo": "bar"}, // optional headers for internal http client
    //   restClientConfig: { // axios like http client config - https://github.com/axios/axios#request-config
    //     proxy: {
    //       protocol: 'https',
    //       host: '127.0.0.1',
    //       port: 9000,
    //       auth: {
    //         username: 'mikeymike',
    //         password: 'rapunz3l'
    //       }
    //     },
    //     timeout: 60000
    //   }
    }
}