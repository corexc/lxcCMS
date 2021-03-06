import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {PageDataHandler} from "../../utils/PageDataHandler";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable()
export class FileService {

    private fileUrl: string = environment.fileUrl;

    constructor(private http: HttpClient) {
    }

    getFiles(path: string): Observable<any> {
        let params = new HttpParams().set('path', path);
        return this.http.get(this.fileUrl, {params: params})
            .filter(PageDataHandler.successResponseFilter);
    }

    deleteFile(fileName: string): Observable<any> {
        let params = new HttpParams().set('fileName', fileName);
        return this.http.delete(this.fileUrl, {params: params});
    }
}
