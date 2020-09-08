import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlaylistComponent } from './playlist.component';


@NgModule({
    imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
    declarations: [PlaylistComponent],
    exports: [PlaylistComponent]
})
export class PlaylistComponentModule {}
