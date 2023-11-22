import { getPrice } from './src/scrapper.js';
import { intro, outro, text, spinner } from '@clack/prompts';

const s = spinner();

intro('Welcome to Amazon price bot!');

const url = await text({
  message: 'Type or paste your Amazon URL:',
  placeholder: 'https://www.amazon.com.mx/dp/B09CGB6VRR',
  validate: (value) => {
    if (!value.includes('www.amazon.com.mx')) return 'Invalid Amazon URL';
  },
});
s.start('Getting price...');
const price = await getPrice(url);
s.stop(price);
// getPrice(
//   'https://www.amazon.com.mx/dp/B0C58B4KLD/ref=sspa_dk_detail_5?psc=1&pd_rd_i=B0C58B4KLD&pd_rd_w=e5QoQ&content-id=amzn1.sym.f9db214f-45b5-4f3b-8f3e-c2b60dfd9e46&pf_rd_p=f9db214f-45b5-4f3b-8f3e-c2b60dfd9e46&pf_rd_r=PPMHRXFW60DS9HQWQ9KW&pd_rd_wg=sPzrr&pd_rd_r=d5214505-1b65-4ff2-9cb9-6cd6d1bc004e&s=electronics&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw'
// );
outro('Thanks for using my app!');
