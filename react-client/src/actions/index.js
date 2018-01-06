import store from '../store';
import $ from 'jquery';

export const CHANGE_TAB = 'CHANGE_TAB';

export const populateMonsterUrls = () => {
  $.get('http://www.dnd5eapi.co/api/monsters', (res) => {
    store.dispatch({
      type: 'POPULATE_MONSTER_URLS',
      payload: res.results
    });
  });
};

export const addMonster = (url, checked) => {
  $.get(url)
  .then((data) => {
    var monster = data;
    //get request for image here
    if (checked) {
      monster.init = Math.floor((monster.dexterity - 10) / 2) + (Math.floor(Math.random() * Math.floor(20)));
      store.dispatch({type: 'ADD_MONSTER', payload: monster});
    } else {
      store.dispatch({type: 'ADD_MONSTER', payload: monster});
    }
  })


};

export const selectTab = (tab) => {
  return {
    type: CHANGE_TAB,
    payload: tab
  }
}
