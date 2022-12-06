/* function whoLikes(names) {
  let singularEndMessage = 'ha dado like';
  let pluralEndMessage = 'han dado like';

  const [first, second, third, rest] = names;

  if (!first) return `Nadie ${singularEndMessage}`;
  if (!second) return `${first} ${singularEndMessage}`;
  if (!third) return `${first} y ${second} ${pluralEndMessage}`;
  if (!rest) return `${first}, ${second} y ${third} ${pluralEndMessage}`;
  if (rest)
    return `${first}, ${second} y ${
      names.length - 2
    } personas más ${pluralEndMessage}`;
}

console.log(whoLikes([]));
console.log(whoLikes(['Juan']));
console.log(whoLikes(['Juan', 'María']));
console.log(whoLikes(['Juan', 'María', 'Pedro']));
console.log(whoLikes(['Juan', 'María', 'Pedro', 'Pablo', 'Laura'])); */

// Usando if else
/* function whoLikes2(names) {
  if (names.length === 0) {
    return 'Nadie ha dado like';
  } else if (names.length === 1) {
    return `${names[0]} ha dado like`;
  } else if (names.length === 2) {
    return `${names[0]} y ${names[1]} han dado like`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} y ${names[2]} han dado like`;
  } else {
    return `${names[0]}, ${names[1]} y ${
      names.length - 2
    } personas más han dado like`;
  }
}

console.log(whoLikes2([]));
console.log(whoLikes2(['Juan']));
console.log(whoLikes2(['Juan', 'María']));
console.log(whoLikes2(['Juan', 'María', 'Pedro']));
console.log(whoLikes2(['Juan', 'María', 'Pedro', 'Pablo', 'Laura'])); */

/* function whoLikes4(names) {
  switch (names.length) {
    case 0:
      return 'Nadie ha dado like';
    case 1:
      return `${names[0]} ha dado like`;
    case 2:
      return `${names[0]} y ${names[1]} han dado like`;
    case 3:
      return `${names[0]}, ${names[1]} y ${names[2]} han dado like`;
    default:
      return `${names[0]}, ${names[1]} y ${
        names.length - 2
      } personas más han dado like`;
  }
}

console.log(whoLikes4([]));
console.log(whoLikes4(['Juan']));
console.log(whoLikes4(['Juan', 'María']));
console.log(whoLikes4(['Juan', 'María', 'Pedro']));
console.log(whoLikes4(['Juan', 'María', 'Pedro', 'Pablo', 'Laura'])); */