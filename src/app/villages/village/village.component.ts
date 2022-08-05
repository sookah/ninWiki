import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';
import { Ninja } from '../shared/ninja.model';
import { Village } from '../shared/village.model';

@Component({
  selector: 'village-detail',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.scss']
})
export class VillageComponent implements OnInit {

  selectedNinja: Ninja | undefined = undefined;
  ninjas: Ninja[] = [];
  village$: Observable<Village> | undefined = undefined;
  ninjas$: Observable<Ninja[]> | undefined = undefined;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.village$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return this.api.getVillage(id);
      })
    );

    this.ninjas$ = this.getninjas();
  }

  getninjas() {
    return this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return this.api.getVillage(id);
      }),
      switchMap(id => this.api.getVillageNinjas(id))
    );
  }

  setCurrentNinja(ninja: Ninja) {
    this.selectedNinja = ninja;
  }

}
