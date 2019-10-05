import { BehaviorSubject } from 'rxjs';


import { handleResponse } from './handleResponse';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
  login,
  logout,
  createGame,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue () { return currentUserSubject.value }
};

function createGame(players) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer fake-jwt-token'
    },
    body: JSON.stringify(players)
  };
  return fetch('/create-game', requestOptions)
    
}

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({ username, password })
  };
  return fetch(`/users/authenticate`, requestOptions)
    .then(handleResponse)
    .then(user => {
      localStorage.setItem('currentUser', JSON.stringify(user))
      currentUserSubject.next(user);

      return user;
    });
}

function logout() {
  localStorage.removeItem('currentUser');
  currentUserSubject.next(null);
}