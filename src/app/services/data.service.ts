import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from './../constants/constants';

@Injectable()
export class DataService {

  constructor(private http : HttpClient) { }

  //  Returns the data
  GetSearchData() {
    const dataToSend = {"playerIds":null,"indexValues":[{"ControlGuid":"c170e08b-5045-4ba2-834f-5db32c472fcf","FieldKey":"Verdict","DisplayText":"Verdict","Type":3,"Value1":3,"Value2":1,"TemplateId":4889,"GroupId":1,"ReportIds":""}],"templateGroups":[{"andSearch":false,"templates":[4889,4720]}],"beforeDate":"2017-11-14T23:59:59.999Z","afterDate":"2016-11-14T00:00:00.000Z","andSearch":false};

    this.http.post(Constants.SearchServiceUrl, dataToSend)
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );

  }

}
