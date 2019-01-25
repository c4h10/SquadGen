import { Injectable } from '@angular/core';

@Injectable()
export class XwingTranslationService {
  private dictionary: { type: string, value: string }[] = [
    {type: '%LINEBREAK%', value: `<br />`},
    {type: '%CHARGE%', value: `<i class="xwing-miniatures-font xwing-miniatures-font-charge"></i>`},
    {type: '%EVADE%', value: `<i class="xwing-miniatures-font xwing-miniatures-font-evade"></i>`},
    {type: '%FOCUS%', value: `<i class="xwing-miniatures-font xwing-miniatures-font-focus"></i>`},
    {type: '%HIT%', value: `<i class="xwing-miniatures-font xwing-miniatures-font-hit"></i>`},
    {type: '%BARRELROLL%', value: `<i class="xwing-miniatures-font xwing-miniatures-font-barrelroll"></i>`},
    {type: '%RELOAD%', value: `<i class="xwing-miniatures-font xwing-miniatures-font-reload"></i>`},
    {type: '%COORDINATE%', value: `<i class="xwing-miniatures-font xwing-miniatures-font-coordinate"></i>`},
    {type: '%BOOST%', value: `<i class="xwing-miniatures-font xwing-miniatures-font-boost"></i>`},
    {type: '%BULLSEYEARC%', value: `<i class="xwing-miniatures-font xwing-miniatures-font-bullseyearc"></i>`},
    {type: '%FRONTARC%', value: `<i class="xwing-miniatures-font xwing-miniatures-font-frontarc"></i>`},
    {type: '%CANNON%', value: `<i class="xwing-miniatures-font xwing-miniatures-font-cannon"></i>`},
    {type: '%SINGLETURRETARC%', value: `<i class="xwing-miniatures-font xwing-miniatures-font-singleturretarc"></i>`},
    {type: '%TURNLEFT%', value: `<i class="xwing-miniatures-font xwing-miniatures-font-turnleft"></i>`},
    {type: '%TURNRIGHT%', value: `<i class="xwing-miniatures-font xwing-miniatures-font-turnright"></i>`},
    {type: '%REARARC%', value: `<i class="xwing-miniatures-font xwing-miniatures-font-reararc"></i>`},
    {type: '%MISSILE%', value: `<i class="xwing-miniatures-font xwing-miniatures-font-missile"></i>`},
    {type: '%FORCE%', value: `<i class="xwing-miniatures-font xwing-miniatures-font-forcecharge"></i>`},
    {type: '%CRIT%', value: `<i class="xwing-miniatures-font xwing-miniatures-font-crit"></i>`}
  ];

  constructor() {
  }

  translate(value: string): string {
    let result = value;
    this.dictionary.forEach((item) => {
      result = result.replace(new RegExp(item.type, 'g'), item.value);
    });
    return result;
  }
}
