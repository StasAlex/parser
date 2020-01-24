const { from } = require ('rxjs');
const {
  switchMap
} = require('rxjs/operators');

const fetch = require('node-fetch');

class Request {

  getUrl(sheetId, region) {

    return `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${region}?key=AIzaSyDfUExACynw9_vpKfID_YpsGAt_wHv7lNA`;
  }

  getData(sheetId, region) {
    const settings = {
      method: "Get"
    };
    const url = this.getUrl(sheetId, region);
    return from(fetch(url, settings))
      .pipe(
        switchMap(res => from(res.json()))
      );
  }
}

exports.Request = Request;