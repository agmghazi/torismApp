import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2'
import {HeaderDataService} from "../../../services/header-data.service";
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  constructor(private headerDataService: HeaderDataService) {
  }
  ngOnInit(): void {

    Swal.fire({
      title: ' تواصل معنا',
      html:
        `
        <div class="row m-0 justify-content-center">

        <div class="col-4 text-center " style="padding-bottom: 7px !important;">
          <a href="tel:0554515333">
            <div class="card border-secondary">
              <div class="card-body" style="padding: 0.5rem !important;">
                <span class="material-icons-outlined big-mat-icon">phone</span>
                <p class="card-text">اتصال</p>
              </div>
            </div>
          </a>
        </div>

          <div class="col-4 text-center " style="padding-bottom: 7px !important;">
           <a href="whatsapp://send?text=The text to share!" data-action="share/whatsapp/share">
            <div class="card border-secondary">
              <div class="card-body" style="padding: 0.5rem !important;">
              <span class="material-icons-outlined big-mat-icon">whatsapp</span>
                <p class="card-text">واتس</p>
              </div>
            </div>
          </a>
        </div>

        </div>
        `,
      icon: 'info',
      confirmButtonText: 'حسنا'
    }).then(() => {
      this.headerDataService.isContactMeOpen.next(false)
    })

  }
}
