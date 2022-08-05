import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Ninja } from '../shared/ninja.model';
import { Village } from '../shared/village.model';

@Component({
  selector: 'app-village-list',
  templateUrl: './village-list.component.html',
  styleUrls: ['./village-list.component.scss'],
})
export class VillageListComponent implements OnInit {

  villages: Village[] = [];
  ninjas: Ninja[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    console.log('VillageListComponent ngOnInit');
    this.getVillages();
  }

  getVillages() {
    this.api.getVillages().subscribe((data: Village[]) => {
      this.villages = data;
    });
  }

  getNinjas(village: Village) {
    this.api.getVillageNinjas(village).subscribe((data: any) => {
      this.ninjas = { ...data };
      console.log(this.ninjas);
    })
  }

  addNinja() {

  }

}
