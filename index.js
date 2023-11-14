import axios from 'axios';
import * as cheerio from 'cheerio';

const url =
  'https://www.amazon.com.mx/nuevo-fire-tv-stick-4k-con-control-remoto-por-voz-alexa/dp/B0872Y93TV/ref=p13n_ds_purchase_sim_1p_dp_desktop_sccl_1_3/134-8079882-1364640?pd_rd_w=EhNnp&content-id=amzn1.sym.7067b2fd-07b4-4829-806a-9722a872c3c9&pf_rd_p=7067b2fd-07b4-4829-806a-9722a872c3c9&pf_rd_r=XS3NG5VFQ3Y0EJMXGGJG&pd_rd_wg=l3v4U&pd_rd_r=4aff2433-8967-4d9a-bf37-3c873de8612d&pd_rd_i=B0872Y93TV&psc=1';
try {
  const response = await axios.get(url);
  // console.log(response.data);
  const $ = cheerio.load(response.data);
  const price = $('.a-price-whole').text();
  const priceValue = price.split('.', 1);
  console.log('El precio es: ', priceValue[0]);
} catch (error) {
  console.log(error);
}

// TODO: Cargar nuestra pagina con cheerio -> obtener datos necesarios
