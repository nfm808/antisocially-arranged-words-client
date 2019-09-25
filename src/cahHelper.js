export function pickRandomCards (arr, n) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, n);
  let value = (n === 1) ? selected[0] : selected;
  return value;
}

// export function handleLoginSubmit() {
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({username, password})
//     }
//     fetch(`${process.env.REACT_APP_API_BASE_URL}/user`, options)
//       .then(res => {
//         if (!res.ok) {
//           throw new Error(res.message)
//         }
//       })
//       .then(res => console.log(res))
//       .catch(err => console.error(err))
// }
