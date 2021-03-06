const delay = ms => {
    // Change this function
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    })
  };
  
  const logger = time => console.log(`Fulfilled after ${time}ms`);
  
  // Tests
  delay(2000).then(logger); // Fulfilled after 2000ms
  delay(1000).then(logger); // Fulfilled after 1000ms
  delay(1500).then(logger); // Fulfilled after 1500ms



// ======================= Subtask 2 =======================

  const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: false },
  ];
  
  const toggleUserState = (allUsers, username) => {
        const updatedUsers = allUsers.map(user =>
            user.name === username ? { ...user, active: !user.active } : user
          );
          return new Promise((resolve, reject) => {

          if (username) {
            resolve(updatedUsers)  
          } else {
            reject('error')
          }
        })
    }; 
  

  
  // The function should work like this
  toggleUserState(users, 'Mango').then(console.table);
  toggleUserState(users, 'Ajax').then(console.table);




// ======================= Subtask 3 =======================


const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  const makeTransaction = (transaction) => {
    
    return new Promise((onSuccess, onError)  => {

        const delay = randomIntegerFromInterval(200, 500);

        setTimeout(() => {
            const canProcess = Math.random() > 0.3;
    
      if (canProcess) {
        onSuccess({ id: transaction.id, time: delay });
      } else {
        onError(transaction.id);
      }
    }, delay);
})
  };

    
  
  const logSuccess = ({ id, time }) => {
    console.log(`Transaction ${id} processed in ${time}ms`);
  };
  
  const logError = id => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
  };
  
  // Currently the function works like this
  makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
  makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
  
  // The function should work like this
  makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
  makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

















// const promise = new Promise((resolve, reject) => {
//     const canFulfill = Math.random() > 0.5

//     setTimeout(() => {
//         if (canFulfill) {
//             resolve('???????????? ?????????????????? ??????????????, ?? ??????????????????????(????????????????, fulfilled)');
//         }

//         reject('???????????? ???????????????????? ?? ??????????????(????????????????, rejected)');
//     }, 2000);
// });

// promise.then(
//     result => {
//     console.log(result);
// },
//     error => {
//     console.log(error); 
// }
// );

// console.log(promise);

// function onFulfilled(result) {
//     console.log('onFulfilled -> onFulfilled');
//     console.log(`${result}`);
// }

// // ?????????????? ???????????????? (chaining)

// promise
// .then(onFulfilled)
// .then(x => {
//     console.log(x);

//     return 10;
// })
// .then(y => {
//     console.log(y);
// })
// .catch(error => console.log(error))
// .finally(() => console.log('?? ???????? ???????????????? ?? ?????????? ????????????'));

