import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderDataService {
  searchId = new Subject();
  addDeleteFeature = new BehaviorSubject(false);
  isContactMeOpen = new Subject();
  isHorizontalSearch = new BehaviorSubject(false);
  isAdvancedSearch = new BehaviorSubject(false);
  isAddNewAddLand = new BehaviorSubject(false);
  isCreatLandAdd = new BehaviorSubject(false);
  isCreatErrorsReport = new BehaviorSubject(false);
  isMyLandsOpen = new BehaviorSubject(false);
}
