import request from 'request';
import cheerio from 'cheerio';

request('https://en.wikipedia.org/wiki/List_of_Intel_codenames', (err, response, body) => {
  let $ = cheerio.load(body);
  let arrayOfProcessors = [];
  $($('table')[1]).children().each(function(e, is) {
    let processor = {}
    let text = $(this).text().trim()
    let str = text.split('|n')
    str.map(proc => {
      let intel = proc.split('\n');
      processor.codename = intel[0]
      processor.namedAfter = intel[3]
      arrayOfProcessors.push(processor)
    })
  })
  const MAX = arrayOfProcessors.length;
  let selectedCodename = arrayOfProcessors[Math.floor(Math.random() * (MAX + 1)) + 1];
  console.log('The codename of your next awesome project might be:', selectedCodename.codename);
});
