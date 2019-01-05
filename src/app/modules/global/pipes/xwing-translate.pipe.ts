import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { XwingTranslationService } from '../../../services/xwing-translation.service';

@Pipe({
  name: 'xwingTranslate'
})
export class XwingTranslatePipe implements PipeTransform {
  constructor( private translationService: XwingTranslationService, private _sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    value = `${value}`;
    return this._sanitizer.bypassSecurityTrustHtml(this.translationService.translate(value));
  }

}
