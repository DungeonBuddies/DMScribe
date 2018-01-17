import store from '../store';
import axios from 'axios';
import $ from 'jquery';

//This function queries the API for a list of all available monsters
//which is then sent to reducer to be formatted appropriately to be used by our dropdown
export const populateMonsterUrls = () => {
  axios('/monsterlist')
  .then(res => {
    store.dispatch({
      type: 'POPULATE_MONSTER_URLS',
      payload: res.data.results
    });
  });
};

//This function adds a monster to the field by sending it to the reducer to
//be added to the stores monsters array. Before doing so it checks the checked boolean
//to see if it needs to auto-roll the monsters turn order for the user
export const addMonster = (url, checked) => {
  axios('/monster', {
    params: {
      url: url
    }
  })
  .then(res => {
    const monster = res.data;
    monster.init = Math.floor((monster.dexterity - 10) / 2);
    if (checked) {
      monster.order = monster.init + (Math.floor(Math.random() * Math.floor(20)));
      store.dispatch({type: 'ADD_MONSTER', payload: monster});
    } else {
      store.dispatch({type: 'ADD_MONSTER', payload: monster});
    }

    store.dispatch(generateTurnOrder());

    fetchMonsterImg(monster.name)
    .then(url => {
        addMonsterImg(url, monster.id);
    });
  });
}

//this function fetches the monsters image from a separate API 
const fetchMonsterImg = monsterName => {
  return axios('/monsterimg', {
    params: {
      monsterName: monsterName
    }
  })
  .then(res => res.data);
};

//this function loads image onto the monster card asynchronously so the user doesn't have to wait for the image
const addMonsterImg = (url, id) => {
  store.dispatch({
    type: 'ADD_MONSTER_IMG',
    payload: {
      url: url,
      id: id
    }
  });
};

export const addCustomMonster = (monster) => {
  store.dispatch({
    type: 'ADD_CUSTOM_MONSTER',
    payload: monster
  })
}

export const clearMonstersField = () => {
  store.dispatch({
    type: 'CLEAR_MONSTERS',
    payload: []
  });
}

export const clearOrderField = () => {
  store.dispatch({
    type: 'CLEAR_ORDER',
    payload: []
  })
}

export const removeMonster = (id, number) => {
  console.log('NUMBER OF MONSTERS BEFORE REMOVAL: ', number)
  return {
    type: 'DELETE_MONSTER',
    payload: {
      id: id
    }
  }
}

//similar as above addMonster
export const addPlayer = (player) => {
  store.dispatch({
    type: 'ADD_PLAYER',
    payload: player
  });
  fetchClassImg(player.class)
  .then(url => {
    addClassImg(url, player.id);
  })
}

export const fetchClassImg = className => {
  return axios.get('/classimg', {
    params: {
      className: className
    }
  })
  .then(res => res.data);
}

const addClassImg = (url, id) => {
  store.dispatch({
    type: 'ADD_CLASS_IMG',
    payload: {
      url: url,
      id: id
    }
  })
}

export const removePlayer = name => {
  return {
    type: 'DELETE_PLAYER',
    payload: {
      name: name
    }
  }
}

export const clearPlayersField = () => {
  store.dispatch({
    type: 'CLEAR_PLAYERS',
    payload: []
  });
}

export const generateTurnOrder = () => {
  return {
    type: 'ORDER'
  }
}

export const selectTab = tab => {
  return {
    type: 'CHANGE_TAB',
    payload: tab
  }
}

export const assignTurnValue = (name, value) => {
  store.dispatch({
    type: 'ASSIGN_TURN_VALUE',
    payload: {
      name: name,
      value: value
    }
  });


  store.dispatch(generateTurnOrder());
};

export const assignMonTurnValue = (id, value) => {
  store.dispatch({
    type: 'ASSIGN_MON_TURN_VALUE',
    payload: {
      id: id,
      value: value
    } 
  });
  
  store.dispatch(generateTurnOrder());
};

export const selectMonster = (monster) => {
  return {
    type: 'SELECT_MONSTER',
    payload: monster
  }
}

export const clearSelectedMonster = () => {
  return {
    type: 'REMOVE_SELECTED',
    payload: []
  }
}

export const setUser = (user) => {
  return {
    type: 'CHANGE_USER',
    payload: user
  }
}

export const fetchGroups = (name) => {
  return axios('/getGroups', {
    params: {
      dm: name
    }
  })
  .then(res => {
    var object = {};
    res.data.forEach((player) => {
      if (!object[player.group]) {
        object[player.group] = player.group;
      }
    })
    var groupNames = Object.values(object);
    const newPayload = [];
    groupNames.forEach(group => {
      var groupObj = {};
      groupObj.key = group;
      groupObj.value = group;
      groupObj.text = group;
      newPayload.push(groupObj);
    })
    store.dispatch({
        type: 'SET_USER_GROUP',
        payload: newPayload
      });
  });
}

export const selectGroup = (user, group) => {
  return axios('/specificGroup', {
    params: {
      dm: user,
      group: group
    }
  })
  .then((party) => {
    console.log('GROUP HERE: ', party.data);
    store.dispatch({
      type: 'SET_PLAYER_GROUP',
      payload: party.data
    })
  })
  .then(() => {
    store.dispatch(generateTurnOrder());
  })
}

export const logoutReset = () => {
  return {
    type: 'LOGOUT_RESET'
  }
}

// Action List:
// populateMonsterUrls
// addMonster
// fetchMonsterImg
// addCustomMonster
// clearMonstersField
// clearOrderField
// removeMonster
// addPlayer
// fetchClassImg
// addClassImg
// removePlayer
// clearPlayersField
// generateTurnOrder * relevant to reordering turns - orderedTurnReducer
// selectTab
// assignTurnValue
// assignMonTurnValue
// selectMonster
// clearSelectedMonster
// setUser
// fetchGroups * relevant to group drop down list- groupsReducer
// selectGroup * relevant to group drop down list - groupsReducer
// logoutReset









