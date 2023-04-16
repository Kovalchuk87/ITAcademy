const axios = require('axios');
const querystring = require('querystring');
const validator = require('jsonschema');
const detectSchema = require('../testData/detect.v2.json');
const translateSchema = require('../testData/translate.v2.json');
const languagesSchema = require('../testData/languages.v2.json');

// describe('Google Translate API tests', () => {
//     let headers;
//     beforeAll(() => {
//         headers = {
//             'Accept-Encoding': 'application/gzip',
//             'X-RapidAPI-Key': '8a3a0f9dc2mshb8280558f317052p1a5ee9jsnfa306a386b1f',
//             'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
//         };
//     });
//
//     test('GET languages/[v]. Status code should be 200', async () => {
//         const response = await axios.get('https://google-translate1.p.rapidapi.com/language/translate/v2/languages', {
//             params: {target: 'ru'},
//             headers: headers,
//         })
//         expect(response.status).toBe(200);
//     })
//
//
//     test('GET languages/[v]. JSON schema should be valid', async () => {
//         const response = await axios.get('https://google-translate1.p.rapidapi.com/language/translate/v2/languages', {
//             params: {target: 'ru'},
//             headers: headers,
//         })
//         const result = validator.validate(response.data, languagesSchema);
//         expect(result.valid).toBe(true);
//     })
//
//
//
//         test('POST translate/[v]. Status code should be 200', async () => {
//             const params = {
//                 source: 'en',
//                 target: 'ru',
//                 q: 'Hello, world!'
//             };
//             const encodedParams = querystring.stringify(params);
//
//             const options = {
//                 method: 'POST',
//                 url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
//                 headers: headers,
//                 data: encodedParams
//             };
//             const response = await axios(options);
//             expect(response.status).toBe(200);
//         });
//
//
//         test('POST translate/[v]. JSON schema should be valid', async () => {
//             const params = {
//                 source: 'en',
//                 target: 'ru',
//                 q: 'Hello, world!'
//             };
//             const encodedParams = querystring.stringify(params);
//
//             const options = {
//                 method: 'POST',
//                 url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
//                 headers: headers,
//                 data: encodedParams
//             };
//             const response = await validator.validate(await axios(options).data, detectSchema);
//             expect(response.valid).toBe(true);
//         });
//
//
//
//
//         test('POST language/translate/[v]/detect. Status code should be 200', async () => {
//             const params = {
//                 q: 'Hola, amigo!'
//             };
//             const encodedParams = querystring.stringify(params);
//
//             const options = {
//                 method: 'POST',
//                 url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
//                 headers: headers,
//                 data: encodedParams
//             };
//             const response = await axios(options);
//             expect(response.status).toBe(200);
//         });
//
//
//         test('POST language/translate/[v]/detect. JSON schema should be valid', async () => {
//             const params = {
//                 source: 'en',
//                 target: 'ru',
//                 q: 'Hello, world!'
//             };
//             const encodedParams = querystring.stringify(params);
//
//             const options = {
//                 method: 'POST',
//                 url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
//                 headers: headers,
//                 data: encodedParams
//             };
//             const response = await validator.validate(await axios(options).data, translateSchema);
//             expect(response.valid).toBe(true);
//         });
//     })


describe('OZ.by', () => {


    test(' Status code should be 200', async () => {
        const response = await axios.get('https://oz.by/goods/ajax/html_box.php', {
            params: {
                idGoods: '10751217',
                type: 'html'
            },
        })
        expect(response.status).toBe(200);
    })
})


