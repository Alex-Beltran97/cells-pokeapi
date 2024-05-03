'use strict';

module.exports = (CONFIG) => {
  const page = {
    template: {
      familyPath: '@cells-components/cells-template-paper-drawer-panel',
      tag: 'cells-template-paper-drawer-panel',
      render: 'litElement',
      properties: {
        disableEdgeSwipe: true,
        headerFixed: true,
        mode: 'seamed',
        zones: ['app__header', 'app__main'],
      }
    },
    components: []
  };

  page.components.push([    
    {
      zone: 'app__main',    
      type: 'UI',    
      familyPath: '../pages/pokedex-page',
      tag: 'pokedex-page',
      render: 'litElement',
      properties: {
        pokemons: [],
      }
    }
  ]);

  return page;
};