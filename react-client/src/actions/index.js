import store from '../store';
import $ from 'jquery';

const populateMonsterUrls = () => {
  $.get('http://www.dnd5eapi.co/api/monsters', (res) => {
    store.dispatch({
      type: 'POPULATE_MONSTER_URLS',
      payload: res.results
    });
    console.log(searchMonsterUrls('bl'));
  });
};

const searchMonsterUrls = (query) => {
  const monsterUrls = store.getState().monsterUrls;
  const results = [];
  // MVP linear search
  for (let m in monsterUrls) {
    const name = m.toLowerCase().split(' ');
    for (let w of name) {
      if (w.slice(0, query.length) === query) {
        results.push({name: m, url: monsterUrls[m]});
        break;
      }
    }
  }
  return results;
};

// get req a specific monster with only name input
// eg. input: '(monster name/key)'
//     output (on callback): store.dispatch({type: ADD_MONSTER, payload: (res)})
// const addMonster = ()

export default { populateMonsterUrls, searchMonsterUrls };
