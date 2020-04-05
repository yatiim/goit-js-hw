'use strict';

import users from "./users.js";

// Task-01 =====================================

const getUserNames = users => {
  const names = users.map(user => user.name);
  return names;
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


// Task-02 =======================================

const getUsersWithEyeColor = (users, color) => {
  const usersEyeColor = users.filter(user => user.eyeColor === color);
  return usersEyeColor
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]


//  Task-03 =======================================

const getUsersWithGender = (users, gender) => {
  const usersGender = users.filter(user => user.gender === gender).map(user => user.name);
  return usersGender
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//  Task-04 =======================================

const getInactiveUsers = users => {
  const usersInactive = users.filter(user => !user.isActive);
  return usersInactive;
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//  Task-05 =======================================

const getUserWithEmail = (users, email) => {
  const userOfEmail = users.find(user => user.email === email);
  return userOfEmail
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

//  Task-06 =======================================

const getUsersWithAge = (users, min, max) => {
  const usersOfAge = users.filter(user => user.age >= min && user.age <= max);
  return usersOfAge;
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//  Task-07 =======================================

const calculateTotalBalance = users => {
  const balanceTotal = users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
  return balanceTotal;
};

console.log(calculateTotalBalance(users)); // 20916

//  Task-08 =======================================

const getUsersWithFriend = (users, friendName) => {
  const usersWithFriend = users.filter(user => user.friends.includes(friendName)).map(item => item.name);

  return usersWithFriend;
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//  Task-09 =======================================

const getNamesSortedByFriendsCount = users => {
  const namesByFriendsCount = users.sort((user1, user2) => user1.friends.length - user2.friends.length).map(item => item.name);

  return namesByFriendsCount;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//  Task-10 =======================================
const getSortedUniqueSkills = users => {
  const uniqueSkillsSorted = users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      return allSkills;
    }, [])
    .reduce((uniqueSkills, skill) => {
      if (!uniqueSkills.includes(skill)) {
        uniqueSkills.push(skill);
      }
      return uniqueSkills;
    }, [])
    .sort();

  return uniqueSkillsSorted;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]