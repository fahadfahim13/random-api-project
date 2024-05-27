"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
require('dotenv').config();
const express = require('express');
const mjml2html = require('mjml');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const jsonParser = bodyParser.json();
const APIKEY = process.env.APIKEY;
const SECRETKEY = process.env.SECRETKEY;
const APIURL = process.env.APIURL;
app.get("/", (req, res) => res.send("Express on Vercel"));
// app.get("/mjml-to-html", async (req: Request, res: Response) => {
//     try {
//         const resp = await axios.post(APIURL, {
//             "mjml": `
//             <mjml><mj-body ><mj-section  padding="0" background-color="#ff3f3f"><mj-column ><mj-text ><h2>Hi <span class="mention" data-index="0" data-denotation-char="$" data-value="SENDWITH_MULTI" data-id="SENDWITH_MULTI">﻿<span contenteditable="false">$SENDWITH_MULTI</span>﻿</span>  Simplify Your Marketing Campaigns</h2><h3>Efficient Campaign Management</h3><p>D2C simplifies the management of your marketing campaigns. From creating personalized email campaigns to segmenting your audience and tracking campaign performance, our solution provides a user-friendly interface that allows you to effortlessly execute and monitor your marketing initiatives.</p><h3><br></h3><h3>Engage Your Audience</h3><p>With D2C, you can captivate your audience and foster meaningful connections. Create compelling email campaigns with dynamic content, personalized messages, and eye-catching templates. Engage your subscribers with targeted content that resonates, driving higher open rates, click-through rates, and conversions.</p><h3><br></h3><h3>Automation and Personalization</h3><p>D2C leverages the power of automation to optimize your marketing efforts. Utilize automated workflows to send personalized messages based on subscriber behavior, demographics, or specific triggers. Tailor your campaigns to deliver the right message at the right time, nurturing customer relationships and maximizing engagement.</p><h3><br></h3><h3>Comprehensive Analytics</h3><p>Gain valuable insights into your campaign performance with D2C's comprehensive analytics. Track key metrics such as open rates, click-through rates, conversions, and more. Measure the success of your campaigns, identify areas for improvement, and make data-driven decisions to optimize your marketing strategies.</p><h3><br></h3><h3>Seamless Integration</h3><p>D2C seamlessly integrates with your existing systems and tools. Whether you're using CRM software, customer data platforms, or other marketing tools, our solution ensures a smooth integration process. Enhance your marketing stack with D2C and unlock new possibilities for reaching and engaging your audience.</p><h3><br></h3><h3>Experience the Power of Day2Communications</h3><p>Join the growing community of marketers who have embraced Day2Communications for their campaign management needs. Simplify your marketing strategies, engage your audience, and drive impactful results with our innovative solution.</p></mj-text><mj-image  src="https://sensenrespond.com/wp-content/uploads/2024/04/SNR-logo.png" width="300px"></mj-image></mj-column><mj-column ></mj-column><mj-column ></mj-column></mj-section></mj-body></mjml>
//           `
//           }, {
//             auth: {
//               username: APIKEY,
//               password: SECRETKEY
//             }
//           });
//       res.json(resp.data);
//     } catch (error) {
//         res.json(error);
//     }
// });
app.post("/mjml-to-html", jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { mjml } = req.body;
        // console.log(req);
        console.log(req['body']);
        //   const mjml = `
        //   <mjml><mj-body ><mj-section  padding="0" background-color="#ff3f3f"><mj-column ><mj-text ><h2>Hi <span class="mention" data-index="0" data-denotation-char="$" data-value="SENDWITH_MULTI" data-id="SENDWITH_MULTI">﻿<span contenteditable="false">$SENDWITH_MULTI</span>﻿</span>  Simplify Your Marketing Campaigns</h2><h3>Efficient Campaign Management</h3><p>D2C simplifies the management of your marketing campaigns. From creating personalized email campaigns to segmenting your audience and tracking campaign performance, our solution provides a user-friendly interface that allows you to effortlessly execute and monitor your marketing initiatives.</p><h3><br></h3><h3>Engage Your Audience</h3><p>With D2C, you can captivate your audience and foster meaningful connections. Create compelling email campaigns with dynamic content, personalized messages, and eye-catching templates. Engage your subscribers with targeted content that resonates, driving higher open rates, click-through rates, and conversions.</p><h3><br></h3><h3>Automation and Personalization</h3><p>D2C leverages the power of automation to optimize your marketing efforts. Utilize automated workflows to send personalized messages based on subscriber behavior, demographics, or specific triggers. Tailor your campaigns to deliver the right message at the right time, nurturing customer relationships and maximizing engagement.</p><h3><br></h3><h3>Comprehensive Analytics</h3><p>Gain valuable insights into your campaign performance with D2C's comprehensive analytics. Track key metrics such as open rates, click-through rates, conversions, and more. Measure the success of your campaigns, identify areas for improvement, and make data-driven decisions to optimize your marketing strategies.</p><h3><br></h3><h3>Seamless Integration</h3><p>D2C seamlessly integrates with your existing systems and tools. Whether you're using CRM software, customer data platforms, or other marketing tools, our solution ensures a smooth integration process. Enhance your marketing stack with D2C and unlock new possibilities for reaching and engaging your audience.</p><h3><br></h3><h3>Experience the Power of Day2Communications</h3><p>Join the growing community of marketers who have embraced Day2Communications for their campaign management needs. Simplify your marketing strategies, engage your audience, and drive impactful results with our innovative solution.</p></mj-text><mj-image  src="https://sensenrespond.com/wp-content/uploads/2024/04/SNR-logo.png" width="300px"></mj-image></mj-column><mj-column ></mj-column><mj-column ></mj-column></mj-section></mj-body></mjml>
        // `;
        const htmlOutput = mjml2html(mjml, {
            validationLevel: 'skip'
        });
        console.log(htmlOutput);
        res.json(htmlOutput);
    }
    catch (error) {
        res.json(error);
    }
    return res;
}));
app.listen(3000, () => console.log("Server ready on port 3000."));
module.exports = app;
