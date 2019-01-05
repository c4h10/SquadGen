

export function shipActionToClassName(actionType: string): string {

  switch (actionType) {
    case 'Focus':
      return `xwing-miniatures-font xwing-miniatures-font-focus`;
    case 'Evade':
      return `xwing-miniatures-font xwing-miniatures-font-evade`;
    case 'Lock':
      return `xwing-miniatures-font xwing-miniatures-font-lock`;
    case 'Barrel Roll':
      return `xwing-miniatures-font xwing-miniatures-font-barrelroll`;
    case 'Boost':
      return `xwing-miniatures-font xwing-miniatures-font-boost`;
    case 'Cloak':
      return `xwing-miniatures-font xwing-miniatures-font-cloak`;
    case 'Reinforce':
      return `xwing-miniatures-font xwing-miniatures-font-reinforce`;
    case 'Coordinate':
      return `xwing-miniatures-font xwing-miniatures-font-coordinate`;
    case 'Jam':
      return `xwing-miniatures-font xwing-miniatures-font-jam`;
    case 'Rotate Arc':
      return `xwing-miniatures-font xwing-miniatures-font-rotatearc`;
    case 'Slam':
      return `xwing-miniatures-font xwing-miniatures-font-slam`;
    case 'Reload':
      return `xwing-miniatures-font xwing-miniatures-font-reload`;
    case 'Calculate':
      return `xwing-miniatures-font xwing-miniatures-font-calculate`;

  }

  return``;
}
