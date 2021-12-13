function fn() {

    var config = {
        myVarName: 'busra',
        baseUrl: 'https://www.kloia.com/',
        someUrl: 'https://regres.in/api'
    }
    var env = karate.env
    karate.log('Environment variable is :', env)

    if (env=='qa'){
        config.someUrl = 'https://reqres.in/api/users/2';
    }else if(env=='dev'){
        config.someUrl = 'https://dev.in/api/users/2';
    }else{

    }
    var result = karate.callSingle('classpath:features/authentication/generateAccessToken.feature')
    config.authInfo = result;
    config.auth = {accessToken:result.response.access_token}

    return config;
}