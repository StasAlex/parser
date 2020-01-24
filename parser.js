const { switchMap } = require('rxjs/operators');
const {
  from
} = require('rxjs');

const { Request } = require ('./libs/request');
const {
  sheetId,
  region,
  resultFileName
} = require('./schemes/test.json');
const fs = require ('fs').promises;

const request = new Request();
request.getData(sheetId, region).pipe(
  switchMap((data) => from(fs.writeFile(`./results/${resultFileName}`, JSON.stringify(data))))
)
.subscribe();

