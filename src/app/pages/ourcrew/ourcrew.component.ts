import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo/seo.service';

@Component({
  selector: 'app-ourcrew',
  templateUrl: './ourcrew.component.html',
  styleUrls: ['./ourcrew.component.css']
})
export class OurcrewComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateTitle('Hackathon Türkiye Ekibi');
    this.seoService.addMeta('description', 'Hackathon Türkiye topluluğunda aktif olarak görev alan herkesin profiline erişebilirsiniz.');
  }

}
