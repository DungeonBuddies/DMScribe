import store from '../store';
import $ from 'jquery';

export const CHANGE_TAB = 'CHANGE_TAB';
export const ADD_MONSTER = 'ADD_MONSTER';
export const DELETE_MONSTER = 'DELETE_MONSTER';

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
    monster.image = 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/13/1000/1000/636238871029832086.jpeg'
    if (checked) {
      monster.init = Math.floor((monster.dexterity - 10) / 2) + (Math.floor(Math.random() * Math.floor(20)));
      store.dispatch({type: ADD_MONSTER, payload: monster});
    } else {
      store.dispatch({type: ADD_MONSTER, payload: monster});
    }
  })
};

export const removeMonster = (monster) => {
  return {
    type: DELETE_MONSTER,
    payload: monster
  }
}

export const generateTurnOrder = () => {
  return {
    type: 'ORDER'
  }
}

export const selectTab = (tab) => {
  return {
    type: CHANGE_TAB,
    payload: tab
  }
}
